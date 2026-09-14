import { timeLabel, runsUntil, isLongRun, DOG_LABEL } from './lib/events.js'

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

export function EventRow({ e, dateStr, pepper }) {
  const long = isLongRun(e)
  const until = runsUntil(e)
  const bits = [e.venue, e.area].filter(Boolean).join(', ')
  const flags = []
  if (e.free === true) flags.push('free')
  if (e.dog && e.dog !== 'unknown') flags.push(DOG_LABEL[e.dog])
  else if (pepper) flags.push('dog rule unknown')
  return (
    <div className="event">
      <div className="when">{long ? 'on now' : timeLabel(e, dateStr)}</div>
      <div className="ebody">
        <div className="t">{e.title}</div>
        <div className="d">{bits}{flags.length ? ' · ' + flags.join(' · ') : ''}{long && until ? ` · until ${until}` : ''}</div>
        {e.note && <div className="n">{e.note}</div>}
        {e.url && <a className="lnk" href={e.url} target="_blank" rel="noreferrer">Details</a>}
      </div>
    </div>
  )
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
