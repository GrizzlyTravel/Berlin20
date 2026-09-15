import { useMemo, useState } from 'react'
import { rank, whySentence } from '../engine.js'
import { describe } from '../lib/weather.js'
import { isoDate, feedForDate, countsByDate } from '../lib/events.js'
import { DogBadge, KidBadge, EventRow, PlanCard, euro, hoursText, num } from '../components.jsx'

const MOODS = [
  ['surprise', 'Surprise us'], ['outdoors', 'Outdoors'], ['history', 'History'], ['museums', 'Museums'],
  ['nature', 'Nature'], ['water', 'Water'], ['unusual', 'Unusual'], ['neighbourhood', 'Neighbourhood'],
  ['relaxed', 'Relaxed'], ['active', 'Active'],
]

// The strip covers today plus nine days, which is as far as the forecast reaches.
export function dayList(n = 10) {
  const out = []
  for (let i = 0; i < n; i++) {
    const d = new Date(); d.setDate(d.getDate() + i)
    out.push(isoDate(d))
  }
  return out
}

function label(dateStr, i) {
  if (i === 0) return 'Today'
  if (i === 1) return 'Tomorrow'
  const d = new Date(dateStr + 'T12:00:00')
  return d.toLocaleDateString('en-GB', { weekday: 'short' }) + ' ' + d.getDate()
}

function nextSaturday() {
  const d = new Date()
  const delta = (6 - d.getDay() + 7) % 7
  d.setDate(d.getDate() + delta)
  return isoDate(d)
}

export default function Today({ journeys, weather, progress, events, eventsError, syncedAt, plan, prefs, setPrefs, open, onNotToday, onSetDate, goWhatsOn, go }) {
  const [skipped, setSkipped] = useState([])
  const days = useMemo(() => dayList(10), [])
  const todayStr = days[0]
  const dateStr = prefs.date && days.includes(prefs.date) ? prefs.date : todayStr
  const isToday = dateStr === todayStr
  const w = weather?.byDate?.[dateStr] || null
  const sat = nextSaturday()

  const dayEvents = useMemo(
    () => feedForDate(events, dateStr, { pepper: prefs.pepper, elle: prefs.elle }),
    [events, dateStr, prefs.pepper, prefs.elle]
  )
  const counts = useMemo(
    () => countsByDate(events, days, { pepper: prefs.pepper, elle: prefs.elle }),
    [events, days, prefs.pepper, prefs.elle]
  )

  const result = useMemo(() => {
    const js = journeys.filter(j => !skipped.includes(j.id))
    const when = isToday ? new Date() : new Date(dateStr + 'T10:00:00')
    return rank(js, { date: when, hours: prefs.hours, elle: prefs.elle, pepper: prefs.pepper, mood: prefs.mood, weather: w, progress, events: dayEvents })
  }, [journeys, skipped, prefs, w, progress, dayEvents, isToday, dateStr])

  const { pick, easier, bolder, out } = result
  const full = new Date(dateStr + 'T12:00:00').toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })

  function toggle(k) { setPrefs(p => ({ ...p, [k]: !p[k] })) }

  return (
    <div className="fade">
      <div className="today-head">
        <div className="date">{isToday ? 'Today, ' : ''}{full}</div>
        <h1>What should we do{isToday ? ' today' : dateStr === sat ? ' on Saturday' : ' then'}?</h1>
        <div className="wx">{w ? describe(w) : weather === null ? 'Weather unavailable right now.' : 'Checking the weather…'}</div>
      </div>

      {isToday && <PlanCard plan={plan} go={go} />}

      <div className="strip">
        {days.map((d, i) => (
          <button key={d} className={`day ${d === dateStr ? 'on' : ''}`} onClick={() => onSetDate(i === 0 ? null : d)}>
            <span className="dl">{label(d, i)}</span>
            <span className="dw">{weather?.byDate?.[d] ? `${Math.round(weather.byDate[d].tempMax)}°` : '·'}</span>
            {counts[d] > 0 && <span className="dc">{counts[d]}</span>}
          </button>
        ))}
        <button className={`day wknd ${dateStr === sat ? 'on' : ''}`} onClick={() => onSetDate(sat === todayStr ? null : sat)}>
          <span className="dl">Weekend</span>
          <span className="dw">Sat</span>
        </button>
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
          <p className="why">Nothing works with those settings. Give it more time, drop the mood filter, or leave Pepper at home for this one.</p>
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
        {eventsError ? (
          <p className="quiet">Could not reach the events list just now.</p>
        ) : dayEvents.length === 0 ? (
          <p className="quiet">
            {syncedAt
              ? `Nothing on file for ${isToday ? 'today' : 'that day'}${prefs.pepper ? ' that takes a dog' : ''}. Last checked ${new Date(syncedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}.`
              : 'The events list has not been filled yet.'}
          </p>
        ) : (
          <>
            {dayEvents.slice(0, 4).map(e => <EventRow key={e.id} e={e} dateStr={dateStr} pepper={prefs.pepper} go={go} />)}
            {dayEvents.length > 4 && (
              <button className="btn quiet small" style={{ marginTop: 12 }} onClick={goWhatsOn}>
                All {dayEvents.length} for this day
              </button>
            )}
          </>
        )}
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
