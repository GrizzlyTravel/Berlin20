import { timeLabel, runsUntil, isLongRun, isoDate, DOG_LABEL, BOOKING_LABEL, daysToBook, journeyIds, shortDay } from './lib/events.js'
import { byId } from './data/journeys.js'

export function DogBadge({ j, short }) {
  const v = j.dog.verdict
  const label = v === 'great' ? 'Pepper: yes' : v === 'workable' ? 'Pepper: partly' : 'No dogs'
  return <span className={`badge dog-${v}`}>{short ? label.replace('Pepper: ', '') : label}</span>
}

export function KidBadge({ j }) {
  if (j.kid.score !== 3) return null
  return <span className="badge kid">Strong for Elle</span>
}

export function StatusBadge({ prog }) {
  if (!prog) return null
  if (prog.status === 'done') return <span className="badge done">Done{prog.done_on ? ' · ' + fmtShort(prog.done_on) : ''}</span>
  if (prog.status === 'saved') return <span className="badge saved">Saved</span>
  return null
}

export function fmtShort(iso) {
  if (!iso) return ''
  const d = new Date(iso + 'T12:00:00')
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

export function euro(c) {
  if (!c) return ''
  if (c.min === c.max) return `€${c.min}`
  return `€${c.min} to €${c.max}`
}

export function hoursText(j) {
  const [a, b] = j.duration_hours
  return a === b ? `${a} h` : `${a} to ${b} h`
}

export function num(id) {
  return String(id).padStart(2, '0')
}

export function BookingBadge({ e }) {
  const label = BOOKING_LABEL[e.booking]
  if (!label) return null
  if (e.booking === 'sold_out') return <span className="badge soldout">Sold out</span>
  const left = daysToBook(e)
  const text = left === null ? label
    : left <= 0 ? 'Book today'
    : left === 1 ? 'Book by tomorrow'
    : `Book by ${shortDate(e.book_by)}`
  return <span className={`badge book ${e.booking === 'required' ? 'must' : ''}`}>{text}</span>
}

// The chips that tie an event back to the 20. This is the merge made visible:
// an event that sits on a journey says so, and tapping it opens the journey.
export function JourneyChips({ e, go }) {
  const ids = journeyIds(e).map(id => byId[id]).filter(Boolean)
  if (!ids.length) return null
  return (
    <div className="jchips">
      {ids.slice(0, 2).map(j => (
        <button key={j.id} className="jchip" onClick={() => go('#/j/' + j.slug)}>
          On {num(j.id)} {j.title}
        </button>
      ))}
    </div>
  )
}

export function EventRow({ e, dateStr, pepper, go }) {
  const long = isLongRun(e)
  const until = runsUntil(e)
  const bits = [e.venue, e.area].filter(Boolean).join(', ')
  const flags = []
  if (e.free === true) flags.push('free')
  if (e.dog && e.dog !== 'unknown') flags.push(DOG_LABEL[e.dog])
  else if (pepper) flags.push('dog rule unknown')
  return (
    <div className="event">
      <div className="when">{long ? (dateStr === isoDate(new Date()) ? 'on now' : 'all day') : timeLabel(e, dateStr)}</div>
      <div className="ebody">
        <div className="t">{e.title}</div>
        <div className="d">{bits}{flags.length ? ' · ' + flags.join(' · ') : ''}{long && until ? ` · until ${until}` : ''}</div>
        {(e.booking || e.transit) && (
          <div className="erow">
            <BookingBadge e={e} />
            {e.transit && <span className="transit">{e.transit}</span>}
          </div>
        )}
        {e.note && <div className="n">{e.note}</div>}
        {go && <JourneyChips e={e} go={go} />}
        {e.url && <a className="lnk" href={e.url} target="_blank" rel="noreferrer">Details</a>}
      </div>
    </div>
  )
}

// The week-ahead plan from the Monday task. Three shapes: a journey on its own,
// an event on its own, or the combo where an event lands on one of the 20.
export function PlanCard({ plan, go }) {
  if (!plan || !plan.pick) return null
  const p = plan.pick
  const alts = Array.isArray(plan.alternates) ? plan.alternates : []
  const mid = Array.isArray(plan.midweek) ? plan.midweek : []
  const book = Array.isArray(plan.book_now) ? plan.book_now : []
  const j = p.journey_id ? byId[p.journey_id] : null
  const kind = p.type === 'combo' ? 'Journey and event together' : p.type === 'event' ? 'Worth the trip on its own' : 'From the twenty'

  return (
    <section className="plan">
      <div className="planhead">
        <div className="eyebrow rust">The week ahead</div>
        <div className="wk">{weekLabel(plan.week_start)}</div>
      </div>

      <div className={`planpick ${p.type === 'combo' ? 'combo' : ''}`}>
        <div className="kind">{kind}</div>
        <h2>{p.title}</h2>
        {p.day && <div className="pday">{p.day}</div>}
        {p.why && <p className="why">{p.why}</p>}
        <div className="planmeta">
          {p.dog && <span className={`badge ${dogClass(p.dog)}`}>Pepper: {p.dog}</span>}
          {p.booking && p.booking !== 'none' && <span className="badge book">{p.booking}</span>}
        </div>
        {j && <button className="btn rust small" onClick={() => go('#/j/' + j.slug)}>See the plan</button>}
      </div>

      {book.length > 0 && (
        <div className="booknow">
          <div className="eyebrow">Book this week</div>
          <ul>{book.map((b, i) => <li key={i}><b>{b.title}</b>{b.note ? <span>{b.note}</span> : null}</li>)}</ul>
        </div>
      )}

      {(alts.length > 0 || mid.length > 0) && (
        <details className="planmore">
          <summary>Alternates and what else is on this week</summary>
          {alts.map((a, i) => <PlanLine key={'a' + i} x={a} tag="Or" />)}
          {mid.map((m, i) => <PlanLine key={'m' + i} x={m} tag="Midweek" />)}
        </details>
      )}
    </section>
  )
}

function PlanLine({ x, tag }) {
  return (
    <div className="planline">
      <div className="tag">{tag}</div>
      <div>
        <div className="t">{x.title}</div>
        {x.day && <div className="pday">{x.day}</div>}
        {x.why && <p>{x.why}</p>}
        <div className="planmeta">
          {x.dog && <span className={`badge ${dogClass(x.dog)}`}>Pepper: {x.dog}</span>}
          {x.booking && x.booking !== 'none' && <span className="badge book">{x.booking}</span>}
        </div>
      </div>
    </div>
  )
}

// "Wed 16" — short enough to sit on one line inside a badge.
function shortDate(iso) {
  if (!iso) return ''
  const d = new Date(String(iso).length <= 10 ? iso + 'T12:00:00' : iso)
  return `${d.toLocaleDateString('en-GB', { weekday: 'short' })} ${d.getDate()}`
}

function dogClass(v) {
  const s = String(v).toLowerCase()
  if (s.startsWith('yes')) return 'dog-great'
  if (s.startsWith('no')) return 'dog-no'
  return 'dog-workable'
}

function weekLabel(ws) {
  if (!ws) return ''
  const a = new Date(ws + 'T12:00:00')
  const b = new Date(a); b.setDate(b.getDate() + 6)
  const m = d => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
  return `${m(a)} to ${m(b)}`
}

export function TabBar({ tab, go }) {
  const tabs = [['today', 'Today'], ['journeys', 'The 20'], ['whatson', "What's on"]]
  return (
    <nav className="tabs">
      <div className="in">
        {tabs.map(([k, l]) => (
          <button key={k} className={tab === k ? 'on' : ''} onClick={() => go('#/' + (k === 'today' ? '' : k))}>{l}</button>
        ))}
      </div>
    </nav>
  )
}