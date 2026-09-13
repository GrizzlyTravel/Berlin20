import { fmtShort, num } from '../components.jsx'

export default function Ours({ journeys, progress, open }) {
  const done = journeys.filter(j => progress[j.id]?.status === 'done')
    .sort((a, b) => (progress[b.id].done_on || '').localeCompare(progress[a.id].done_on || ''))
  const saved = journeys.filter(j => progress[j.id]?.status === 'saved')
  const pct = Math.round((done.length / journeys.length) * 100)

  return (
    <div className="ours fade">
      <div className="today-head">
        <h1>Ours so far</h1>
        <div className="stat">{done.length} <small>of {journeys.length}</small></div>
        <div className="bar"><i style={{ width: pct + '%' }} /></div>
      </div>

      <section className="sec">
        <div className="eyebrow">Done</div>
        {done.length === 0 && <p className="quiet">Nothing yet. The first one is the hardest.</p>}
        <ul className="jlist">
          {done.map(j => {
            const p = progress[j.id]
            return (
              <li key={j.id}>
                <button className="jrow" onClick={() => open(j)}>
                  <div className="n">{num(j.id)}</div>
                  <div>
                    <h3>{j.title}</h3>
                    <div className="area">{fmtShort(p.done_on)}{p.rating ? ' · ' + ({ loved: 'loved it', good: 'good', meh: 'meh' }[p.rating] || p.rating) : ''}{p.elle_loved ? ' · Elle loved it' : ''}{p.pepper_came ? ' · Pepper came' : ''}</div>
                    {p.notes && <div className="tl">{p.notes}</div>}
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="sec">
        <div className="eyebrow">Saved for later</div>
        {saved.length === 0 && <p className="quiet">Nothing saved. Tap Save on any journey.</p>}
        <ul className="jlist">
          {saved.map(j => (
            <li key={j.id}>
              <button className="jrow" onClick={() => open(j)}>
                <div className="n">{num(j.id)}</div>
                <div><h3>{j.title}</h3><div className="area">{j.area}</div></div>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
