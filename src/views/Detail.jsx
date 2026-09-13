import { useState } from 'react'
import { DogBadge, KidBadge, StatusBadge, euro, hoursText, num, fmtShort } from '../components.jsx'

const DAY = { mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat', sun: 'Sun' }

export default function Detail({ j, prog, back, onDone, onSave, onClear }) {
  const [sheet, setSheet] = useState(false)
  const [form, setForm] = useState({ done_on: today(), rating: 'good', elle_loved: true, pepper_came: false, notes: '' })

  return (
    <div className="detail fade">
      <button className="back" onClick={back}>← Back</button>
      <div className="num">{num(j.id)} · {j.area}</div>
      <h1>{j.title}</h1>
      <p className="tagline">{j.tagline}</p>
      <div className="facts" style={{ marginTop: 0 }}>
        <span><StatusBadge prog={prog} /></span>
        <span><DogBadge j={j} /></span>
        <span><KidBadge j={j} /></span>
      </div>
      <p className="intro">{j.intro}</p>

      <div className="actions">
        {prog?.status === 'done'
          ? <button className="btn ghost" onClick={onClear}>Mark as not done</button>
          : <button className="btn rust" onClick={() => setSheet(s => !s)}>We did this</button>}
        {prog?.status !== 'saved' && prog?.status !== 'done' && <button className="btn ghost" onClick={onSave}>Save for later</button>}
        {prog?.status === 'saved' && <button className="btn quiet" onClick={onClear}>Remove from saved</button>}
      </div>

      {sheet && (
        <div className="sheet fade">
          <div className="eyebrow">How was it?</div>
          <div className="row">
            {[['loved', 'Loved it'], ['good', 'Good'], ['meh', 'Meh']].map(([k, l]) => (
              <button key={k} className={`chip ${form.rating === k ? 'on' : ''}`} onClick={() => setForm(f => ({ ...f, rating: k }))}>{l}</button>
            ))}
          </div>
          <div className="row">
            <button className={`chip elle ${form.elle_loved ? 'on' : ''}`} onClick={() => setForm(f => ({ ...f, elle_loved: !f.elle_loved }))}>Elle loved it</button>
            <button className={`chip pepper ${form.pepper_came ? 'on' : ''}`} onClick={() => setForm(f => ({ ...f, pepper_came: !f.pepper_came }))}>Pepper came</button>
          </div>
          <div className="row"><input type="date" value={form.done_on} onChange={e => setForm(f => ({ ...f, done_on: e.target.value }))} /></div>
          <div className="row"><textarea rows={2} placeholder="A note for next time (optional)" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} /></div>
          <div className="row">
            <button className="btn" onClick={() => { onDone(form); setSheet(false) }}>Save</button>
            <button className="btn quiet" onClick={() => setSheet(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div className="grid2">
        <Fact k="Getting there" v={`${j.travel.minutes} min`} s={j.travel.how} />
        <Fact k="Time on the ground" v={hoursText(j)} s={j.energy === 'easy' ? 'Easy going' : j.energy === 'adventure' ? 'A proper outing' : 'Normal walking day'} />
        <Fact k="Cost for the three of you" v={euro(j.cost)} s={j.cost.note} />
        <Fact k="Days" v={j.days.avoid?.length ? `Avoid ${j.days.avoid.map(d => DAY[d]).join(', ')}` : 'Any day'} s={j.days.note} />
      </div>

      <div className={`panel dog-${j.dog.verdict}`}>
        <div className="k">With Pepper: {j.dog.verdict === 'great' ? 'yes, the whole way' : j.dog.verdict === 'workable' ? 'workable' : 'not this one'}</div>
        <p>{j.dog.note}</p>
        {j.dog.banned_stops?.length > 0 && <p><b>Off limits:</b> {j.dog.banned_stops.join(', ')}.</p>}
        {j.dog.workaround && j.dog.verdict !== 'great' && <p><b>Workaround:</b> {j.dog.workaround}</p>}
      </div>
      <div className="panel kid">
        <div className="k">For Elle: {j.kid.score === 3 ? 'strong' : j.kid.score === 2 ? 'fine' : 'a hard sell'}</div>
        <p>{j.kid.note}</p>
      </div>

      <section className="sec">
        <div className="eyebrow">The route</div>
        <ol className="stops">
          {j.stops.map((s, i) => (
            <li key={i}><div><div className="sn">{s.name}</div><div className="sd">{s.note}</div></div></li>
          ))}
        </ol>
      </section>

      <section className="sec">
        <div className="eyebrow">Know before you go</div>
        <ul className="plain warn">{j.warnings.map((w, i) => <li key={i}>{w}</li>)}</ul>
      </section>

      <section className="sec">
        <div className="eyebrow">Weather and season</div>
        <ul className="plain">
          <li>{j.weather.rain_ok ? 'Works in rain.' : j.weather.fallback ? `Rain fallback: ${j.weather.fallback}` : 'No real shelter on this route. Pick a dry day.'}</li>
          <li>{j.season.notes}</li>
          <li>Sunday: {j.sunday.note}</li>
        </ul>
      </section>

      {j.opening.length > 0 && (
        <section className="sec open">
          <div className="eyebrow">Hours and tickets</div>
          <table><tbody>
            {j.opening.map((o, i) => (
              <tr key={i}><td>{o.place}</td><td>{o.hours}{o.closed && o.closed !== 'none' ? `. Closed ${o.closed}.` : ''}{o.price ? ` ${o.price}.` : ''}{o.booking ? ` ${o.booking}` : ''}</td></tr>
            ))}
          </tbody></table>
        </section>
      )}

      <section className="sec">
        <div className="eyebrow">Food on the way</div>
        <ul className="plain">
          {j.food.map((f, i) => (
            <li key={i}><b>{f.name}</b>, {f.where}. {f.note}{f.dog_outdoor ? ' Dogs fine outside.' : ''}</li>
          ))}
        </ul>
      </section>

      <section className="sec">
        <div className="eyebrow">A local would know</div>
        <ul className="plain">{j.guide_notes.map((g, i) => <li key={i}>{g}</li>)}</ul>
      </section>

      {prog?.notes && (
        <section className="sec">
          <div className="eyebrow">Our note{prog.done_on ? ' · ' + fmtShort(prog.done_on) : ''}</div>
          <p>{prog.notes}</p>
        </section>
      )}

      <div className="sources">
        Checked September 2026. Sources: {j.sources.map((s, i) => <span key={i}><a href={s} target="_blank" rel="noreferrer">{host(s)}</a>{i < j.sources.length - 1 ? ' · ' : ''}</span>)}
      </div>
    </div>
  )
}

function Fact({ k, v, s }) {
  return <div className="fact"><div className="k">{k}</div><div className="v">{v}{s && <small>{s}</small>}</div></div>
}

function host(u) { try { return new URL(u).hostname.replace('www.', '') } catch { return u } }
function today() { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}` }
