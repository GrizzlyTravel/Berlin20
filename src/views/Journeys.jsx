import { useState } from 'react'
import { DogBadge, KidBadge, StatusBadge, num } from '../components.jsx'

export default function Journeys({ journeys, progress, open }) {
  const [f, setF] = useState({ pepper: false, rain: false, free: false, notDone: false, elle: false })
  const list = journeys.filter(j => {
    if (f.pepper && j.dog.verdict === 'no') return false
    if (f.rain && !(j.weather.rain_ok || j.weather.indoor_share >= 0.5)) return false
    if (f.free && j.cost.max > 40) return false
    if (f.notDone && progress[j.id]?.status === 'done') return false
    if (f.elle && j.kid.score < 3) return false
    return true
  })
  const T = (k, l) => <button className={`chip ${f[k] ? 'on' : ''}`} onClick={() => setF(x => ({ ...x, [k]: !x[k] }))}>{l}</button>

  return (
    <div className="fade">
      <div className="today-head">
        <h1>The twenty</h1>
        <div className="wx">Half-day outings that add up to a mental map of the city. Not a checklist. The point is to make Berlin ours.</div>
      </div>
      <div className="filters">
        {T('pepper', 'Pepper can come')}
        {T('elle', 'Strong for Elle')}
        {T('rain', 'Rain-proof')}
        {T('free', 'Under €40')}
        {T('notDone', 'Not done yet')}
      </div>
      <ul className="jlist">
        {list.map(j => {
          const p = progress[j.id]
          return (
            <li key={j.id}>
              <button className={`jrow ${p?.status === 'done' ? 'done' : ''}`} onClick={() => open(j)}>
                <div className="n">{num(j.id)}</div>
                <div>
                  <h3>{j.title}</h3>
                  <div className="area">{j.area} · {j.travel.minutes} min</div>
                  <div className="tl">{j.tagline}</div>
                  <div className="badges">
                    <StatusBadge prog={p} />
                    <DogBadge j={j} />
                    <KidBadge j={j} />
                    {(j.weather.rain_ok || j.weather.indoor_share >= 0.5) && <span className="badge rain">Rain-proof</span>}
                  </div>
                </div>
              </button>
            </li>
          )
        })}
      </ul>
      {list.length === 0 && <p className="quiet" style={{ marginTop: 16 }}>Nothing matches all of those.</p>}
    </div>
  )
}
