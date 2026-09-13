import { useMemo, useState } from 'react'
import { rank, whySentence } from '../engine.js'
import { describe } from '../lib/weather.js'
import { DogBadge, KidBadge, euro, hoursText, num } from '../components.jsx'

const MOODS = [
  ['surprise', 'Surprise us'], ['outdoors', 'Outdoors'], ['history', 'History'], ['museums', 'Museums'],
  ['nature', 'Nature'], ['water', 'Water'], ['unusual', 'Unusual'], ['neighbourhood', 'Neighbourhood'],
  ['relaxed', 'Relaxed'], ['active', 'Active'],
]

export default function Today({ journeys, weather, progress, events, prefs, setPrefs, open, onNotToday, onSetDate }) {
  const [skipped, setSkipped] = useState([])
  const date = prefs.date ? new Date(prefs.date + 'T10:00:00') : new Date()
  const dateStr = isoDate(date)
  const w = weather?.byDate?.[dateStr] || null
  const isToday = dateStr === isoDate(new Date())

  const result = useMemo(() => {
    const js = journeys.filter(j => !skipped.includes(j.id))
    return rank(js, { date: isToday ? new Date() : date, hours: prefs.hours, elle: prefs.elle, pepper: prefs.pepper, mood: prefs.mood, weather: w, progress, events })
  }, [journeys, skipped, prefs, w, progress, events, isToday])

  const { pick, easier, bolder, out } = result
  const dayLabel = date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })

  function toggle(k) { setPrefs(p => ({ ...p, [k]: !p[k] })) }

  return (
    <div className="fade">
      <div className="today-head">
        <div className="date">
          {isToday ? 'Today, ' : ''}{dayLabel}
          {' · '}
          <button className="chip" style={{ padding: '2px 8px', fontSize: 12 }} onClick={() => onSetDate(isToday ? shift(1) : null)}>{isToday ? 'plan tomorrow' : 'back to today'}</button>
        </div>
        <h1>What should we do{isToday ? ' today' : ''}?</h1>
        <div className="wx">{w ? describe(w) : weather === null ? 'Weather unavailable right now.' : 'Checking the weather…'}</div>
      </div>

      <div className="controls">
        <div className="chiprow">
          <span className="lbl">Who</span>
          <button className={`chip elle ${prefs.elle ? 'on' : ''}`} onClick={() => toggle('elle')}>Elle</button>
          <button className={`chip pepper ${prefs.pepper ? 'on' : ''}`} onClick={() => toggle('pepper')}>Pepper</button>
        </div>
        <div className="chiprow">
          <span className="lbl">Time</span>
          {[[2, 'A couple of hours'], [5, 'Half a day'], [8, 'All day']].map(([h, l]) => (
            <button key={h} className={`chip ${prefs.hours === h ? 'on' : ''}`} onClick={() => setPrefs(p => ({ ...p, hours: h }))}>{l}</button>
          ))}
        </div>
        <div className="chiprow scroll">
          <span className="lbl">Mood</span>
          {MOODS.map(([k, l]) => (
            <button key={k} className={`chip ${prefs.mood === k ? 'on' : ''}`} onClick={() => setPrefs(p => ({ ...p, mood: k }))}>{l}</button>
          ))}
        </div>
      </div>

      {pick ? (
        <section className="pick">
          <div className="eyebrow rust">Our pick</div>
          <h2>{pick.journey.title}</h2>
          <div className="area">{num(pick.journey.id)} · {pick.journey.area}</div>
          <p className="why">{whySentence(pick)}</p>
          <div className="facts">
            <span>{pick.journey.travel.minutes} min away</span>
            <span>{hoursText(pick.journey)}</span>
            <span>{euro(pick.journey.cost)}</span>
            <span><DogBadge j={pick.journey} /></span>
            {prefs.elle && <span><KidBadge j={pick.journey} /></span>}
          </div>
          {pick.caveats.length > 0 && (
            <ul className="caveats">{pick.caveats.slice(0, 3).map((c, i) => <li key={i}>{c}</li>)}</ul>
          )}
          <div className="actions">
            <button className="btn rust" onClick={() => open(pick.journey)}>Show the route</button>
            <button className="btn quiet" onClick={() => { setSkipped(s => [...s, pick.journey.id]); onNotToday?.(pick.journey.id) }}>Not feeling it</button>
          </div>
        </section>
      ) : (
        <section className="pick">
          <div className="eyebrow rust">Nothing fits</div>
          <p className="why">With those settings nothing works today. Give it more time, or leave Pepper at home for this one.</p>
        </section>
      )}

      {(easier || bolder) && (
        <div className="alts">
          {easier && <Alt r={easier} label="Easier" open={open} />}
          {bolder && <Alt r={bolder} label={prefs.elle && bolder.journey.kid.score === 3 ? 'Best for Elle' : 'Bolder'} open={open} />}
        </div>
      )}

      <section className="sec">
        <div className="eyebrow">Happening {isToday ? 'today' : 'that day'}</div>
        {events.length === 0 ? (
          <p className="quiet">Nothing on file for this day yet. The live events layer is next.</p>
        ) : events.map(e => (
          <div className="event" key={e.id}>
            <div className="when">{fmtTime(e.starts_at)}</div>
            <div>
              <div className="t">{e.title}</div>
              <div className="d">
                {[e.venue, e.area].filter(Boolean).join(', ')}
                {e.dog === 'no' ? ' · no dogs' : e.dog === 'yes' ? ' · dogs fine' : e.dog === 'outdoor' ? ' · dogs outside only' : ''}
                {e.free ? ' · free' : ''}
              </div>
              {e.url && <a className="d" href={e.url} target="_blank" rel="noreferrer">Details</a>}
            </div>
          </div>
        ))}
      </section>

      {out.length > 0 && (
        <section className="sec out">
          <div className="eyebrow">Not {isToday ? 'today' : 'that day'}</div>
          <details>
            <summary>{out.length} {out.length === 1 ? 'journey' : 'journeys'} ruled out, and why</summary>
            <ul>
              {out.map(r => (
                <li key={r.journey.id}><b>{r.journey.title}</b><span>{r.excluded[0]}</span></li>
              ))}
            </ul>
          </details>
        </section>
      )}
    </div>
  )
}

function Alt({ r, label, open }) {
  return (
    <button className="alt" onClick={() => open(r.journey)}>
      <div className="lab">{label}</div>
      <h3>{r.journey.title}</h3>
      <div className="area">{r.journey.area} · {r.journey.travel.minutes} min</div>
      <p>{whySentence(r)}</p>
    </button>
  )
}

function fmtTime(iso) {
  const d = new Date(iso)
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

function isoDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function shift(days) {
  const d = new Date(); d.setDate(d.getDate() + days); return isoDate(d)
}
