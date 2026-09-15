// Event helpers. The events table is filled each morning by a scheduled task,
// so the app never has to scrape anything at load time.

export function isoDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function dayStart(dateStr) { return new Date(dateStr + 'T00:00:00') }
export function dayEnd(dateStr) { return new Date(dateStr + 'T23:59:59') }

// Does an event touch this calendar day?
export function onDate(e, dateStr) {
  const s = new Date(e.starts_at), a = dayStart(dateStr), b = dayEnd(dateStr)
  const end = e.ends_at ? new Date(e.ends_at) : s
  return s <= b && end >= a
}

// A long-runner is something like an exhibition: on for more than three days.
export function isLongRun(e) {
  if (!e.ends_at) return false
  return (new Date(e.ends_at) - new Date(e.starts_at)) > 3 * 864e5
}

// Events for one day, most useful first.
export function forDate(events, dateStr, { pepper = false, elle = true } = {}) {
  return events
    .filter(e => onDate(e, dateStr))
    .filter(e => !(pepper && e.dog === 'no'))
    .filter(e => !(elle && e.kid === false))
    .sort((a, b) => {
      const la = isLongRun(a) ? 1 : 0, lb = isLongRun(b) ? 1 : 0
      if (la !== lb) return la - lb
      return new Date(a.starts_at) - new Date(b.starts_at)
    })
}

// For the Today feed: dated things first, then at most two things that are simply
// "on at the moment". A six-month exhibition is not news, so it stays out.
export function feedForDate(events, dateStr, opts = {}) {
  const all = forDate(events, dateStr, opts)
  const dated = all.filter(e => !isLongRun(e))
  const running = all.filter(e => isLongRun(e) && daysLeft(e) <= 45)
  return [...dated, ...running.slice(0, Math.max(0, 3 - dated.length))]
}

export function daysLeft(e) {
  if (!e.ends_at) return 999
  return Math.round((new Date(e.ends_at) - Date.now()) / 864e5)
}

export function countsByDate(events, dates, opts) {
  const out = {}
  for (const d of dates) out[d] = forDate(events, d, opts).filter(e => !isLongRun(e)).length
  return out
}

// A start time for the day it starts; anything already under way reads as
// "on now" today and "all day" on a date you are planning ahead for.
export function timeLabel(e, dateStr) {
  const s = new Date(e.starts_at)
  if (isoDate(s) !== dateStr) return dateStr === isoDate(new Date()) ? 'on now' : 'all day'
  return `${String(s.getHours()).padStart(2, '0')}:${String(s.getMinutes()).padStart(2, '0')}`
}

export function runsUntil(e) {
  if (!e.ends_at) return null
  const end = new Date(e.ends_at)
  return end.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

export const DOG_LABEL = { yes: 'dogs fine', no: 'no dogs', outdoor: 'dogs outside only', unknown: 'dog rule unknown' }

export const BOOKING_LABEL = {
  required: 'Book ahead',
  advised: 'Book ahead',
  sold_out: 'Sold out',
  none: null,
}

// How many days until the booking deadline. Null when there is no deadline.
export function daysToBook(e) {
  if (!e.book_by) return null
  const by = new Date(e.book_by + 'T23:59:59')
  return Math.ceil((by - Date.now()) / 864e5)
}

// Things worth buying tickets for, soonest first. Sold-out rows are left out:
// they still show on the event itself, but there is nothing to act on.
export function bookNow(events, { pepper = false, elle = true } = {}) {
  return events
    .filter(e => e.booking === 'required' || e.booking === 'advised')
    .filter(e => new Date(e.ends_at || e.starts_at) >= new Date())
    .filter(e => !(pepper && e.dog === 'no'))
    .filter(e => !(elle && e.kid === false))
    .filter(e => !isLongRun(e))
    .sort((a, b) => new Date(a.starts_at) - new Date(b.starts_at))
}

// Which of the 20 does this event sit on?
export function journeyIds(e) {
  return Array.isArray(e.journey_ids) ? e.journey_ids : []
}

// Upcoming events grouped by journey id, for the reverse view in The 20.
export function eventsByJourney(events, { pepper = false, elle = true } = {}) {
  const out = {}
  const now = new Date()
  for (const e of events) {
    if (pepper && e.dog === 'no') continue
    if (elle && e.kid === false) continue
    if (new Date(e.ends_at || e.starts_at) < now) continue
    for (const id of journeyIds(e)) (out[id] ||= []).push(e)
  }
  for (const id of Object.keys(out)) {
    out[id].sort((a, b) => new Date(a.starts_at) - new Date(b.starts_at))
  }
  return out
}

// "Sat 19 Sep" for a plan entry or a booking deadline.
export function shortDay(iso) {
  if (!iso) return ''
  const d = new Date(String(iso).length <= 10 ? iso + 'T12:00:00' : iso)
  return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })
}
