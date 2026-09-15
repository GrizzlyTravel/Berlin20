import { useMemo, useState } from 'react'
import { forDate, isLongRun, onDate, runsUntil, bookNow, shortDay } from '../lib/events.js'
import { EventRow, BookingBadge } from '../components.jsx'
import { dayList } from './Today.jsx'

export default function WhatsOn({ events, eventsError, syncedAt, prefs, setPrefs, go }) {
  const [f, setF] = useState({ free: false, outdoor: false })
  const days = useMemo(() => dayList(10), [])

  const match = e => (!f.free || e.free === true) && (!f.outdoor || e.outdoor === true)

  const toBook = useMemo(
    () => bookNow(events, { pepper: prefs.pepper, elle: prefs.elle }).slice(0, 4),
    [events, prefs.pepper, prefs.elle]
  )

  const longRuns = useMemo(() => events.filter(e =>
    isLongRun(e) && onDate(e, days[0]) && !(prefs.pepper && e.dog === 'no') && match(e)
  ), [events, days, prefs.pepper, f])

  const byDay = useMemo(() => days.map(d => ({
    date: d,
    items: forDate(events, d, { pepper: prefs.pepper, elle: prefs.elle }).filter(e => !isLongRun(e)).filter(match),
  })).filter(x => x.items.length), [events, days, prefs.pepper, prefs.elle, f])

  const total = byDay.reduce((n, d) => n + d.items.length, 0)
  const T = (k, l) => <button className={`chip ${f[k] ? 'on' : ''}`} onClick={() => setF(x => ({ ...x, [k]: !x[k] }))}>{l}</button>

  return (
    <div className="fade">
      <div className="today-head">
        <h1>What's on</h1>
        <div className="wx">
          The next ten days in Berlin{syncedAt ? `, last checked ${new Date(syncedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}` : ''}.
        </div>
      </div>

      <div className="filters">
        <button className={`chip elle ${prefs.elle ? 'on' : ''}`} onClick={() => setPrefs(p => ({ ...p, elle: !p.elle }))}>Elle</button>
        <button className={`chip pepper ${prefs.pepper ? 'on' : ''}`} onClick={() => setPrefs(p => ({ ...p, pepper: !p.pepper }))}>Pepper</button>
        {T('free', 'Free')}
        {T('outdoor', 'Outdoors')}
      </div>

      {eventsError && <p className="quiet" style={{ marginTop: 16 }}>Could not reach the events list just now.</p>}

      {toBook.length > 0 && (
        <section className="sec booklist">
          <div className="eyebrow rust">Worth booking</div>
          {toBook.map(e => (
            <div className="bookrow" key={e.id}>
              <div className="bbody">
                <div className="t">{e.title}</div>
                <div className="d">{shortDay(e.starts_at)}{e.venue ? ' · ' + e.venue : ''}</div>
              </div>
              <BookingBadge e={e} />
            </div>
          ))}
        </section>
      )}

      {!eventsError && total === 0 && longRuns.length === 0 && (
        <p className="quiet" style={{ marginTop: 16 }}>
          Nothing matches those filters{prefs.pepper ? ' with Pepper along' : ''}.
        </p>
      )}

      {longRuns.length > 0 && (
        <section className="sec">
          <div className="eyebrow">Running now</div>
          {longRuns.map(e => (
            <div className="event" key={e.id}>
              <div className="when">{runsUntil(e) ? 'to ' + runsUntil(e) : 'open'}</div>
              <div className="ebody">
                <div className="t">{e.title}</div>
                <div className="d">{[e.venue, e.area].filter(Boolean).join(', ')}{e.dog === 'no' ? ' · no dogs' : ''}</div>
                {e.note && <div className="n">{e.note}</div>}
                {e.url && <a className="lnk" href={e.url} target="_blank" rel="noreferrer">Details</a>}
              </div>
            </div>
          ))}
        </section>
      )}

      {byDay.map(({ date, items }) => (
        <section className="sec" key={date}>
          <div className="eyebrow">{dayHeading(date, days[0])}</div>
          {items.map(e => <EventRow key={e.id} e={e} dateStr={date} pepper={prefs.pepper} go={go} />)}
        </section>
      ))}
    </div>
  )
}

function dayHeading(dateStr, todayStr) {
  const d = new Date(dateStr + 'T12:00:00')
  const t = new Date(todayStr + 'T12:00:00')
  const diff = Math.round((d - t) / 864e5)
  if (diff === 0) return 'Today'
  if (diff === 1) return 'Tomorrow'
  return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
}
