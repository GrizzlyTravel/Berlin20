import { useEffect, useState, useCallback } from 'react'
import { journeys, bySlug } from './data/journeys.js'
import { readFamilyKey, makeClient, loadFamily, loadProgress, loadEvents, loadEventsSyncedAt, loadPlan, setProgress, clearProgress, logFeedback } from './lib/supabase.js'
import { fetchWeather } from './lib/weather.js'
import { isoDate } from './lib/events.js'
import Today from './views/Today.jsx'
import Journeys from './views/Journeys.jsx'
import Detail from './views/Detail.jsx'
import WhatsOn from './views/WhatsOn.jsx'
import { TabBar } from './components.jsx'

const DEFAULT_PREFS = { elle: true, pepper: false, hours: 5, mood: 'surprise', date: null }

function useHash() {
  const [hash, setHash] = useState(window.location.hash || '#/')
  useEffect(() => {
    const f = () => setHash(window.location.hash || '#/')
    window.addEventListener('hashchange', f)
    return () => window.removeEventListener('hashchange', f)
  }, [])
  return hash
}

export default function App() {
  const [familyKey] = useState(() => readFamilyKey())
  const [db] = useState(() => makeClient(familyKey))
  const [family, setFamily] = useState(null)
  const [progress, setProg] = useState({})
  const [events, setEvents] = useState([])
  const [eventsError, setEventsError] = useState(null)
  const [syncedAt, setSyncedAt] = useState(null)
  const [plan, setPlan] = useState(null)
  const [weather, setWeather] = useState(undefined)
  const [prefs, setPrefsRaw] = useState(() => {
    try { return { ...DEFAULT_PREFS, ...JSON.parse(localStorage.getItem('b20_prefs') || '{}'), date: null } } catch { return DEFAULT_PREFS }
  })
  const [toast, setToast] = useState(null)
  const hash = useHash()

  const setPrefs = useCallback(fn => setPrefsRaw(p => {
    const n = typeof fn === 'function' ? fn(p) : fn
    try { localStorage.setItem('b20_prefs', JSON.stringify({ elle: n.elle, pepper: n.pepper, hours: n.hours, mood: n.mood })) } catch {}
    return n
  }), [])

  useEffect(() => { fetchWeather().then(setWeather).catch(() => setWeather(null)) }, [])

  useEffect(() => {
    if (!db) return
    loadFamily(db).then(f => { if (!f) { setToast('That family key is not recognised.'); return } setFamily(f) })
    loadProgress(db).then(setProg)
    loadEventsSyncedAt(db).then(setSyncedAt)
    loadPlan(db).then(setPlan).catch(() => setPlan(null))
    const from = isoDate(new Date())
    // A month ahead: Today and What's on only read the first ten days, but The 20
    // shows what is coming up on each journey, and that wants a longer view.
    const to = new Date(); to.setDate(to.getDate() + 31)
    loadEvents(db, from, isoDate(to)).then(({ events, error }) => { setEvents(events); setEventsError(error) })
  }, [db])

  useEffect(() => { window.scrollTo(0, 0) }, [hash])
  useEffect(() => { if (toast) { const t = setTimeout(() => setToast(null), 2200); return () => clearTimeout(t) } }, [toast])

  const go = h => { window.location.hash = h }
  const open = j => go('#/j/' + j.slug)

  async function refresh() { if (db) setProg(await loadProgress(db)) }

  async function markDone(j, form) {
    if (!db || !family) return
    await setProgress(db, family.id, j.id, { status: 'done', done_on: form.done_on, rating: form.rating, elle_loved: form.elle_loved, pepper_came: form.pepper_came, notes: form.notes || null })
    await refresh(); setToast('Marked as done')
  }
  async function save(j) {
    if (!db || !family) return
    await setProgress(db, family.id, j.id, { status: 'saved' })
    await refresh(); setToast('Saved for later')
  }
  async function clear(j) {
    if (!db) return
    await clearProgress(db, j.id); await refresh()
  }
  async function notToday(id) {
    if (db && family) logFeedback(db, family.id, 'not_today', id, { prefs, date: prefs.date || isoDate(new Date()) })
  }

  if (!familyKey) return <Gate onKey={k => { localStorage.setItem('b20_family_key', k); window.location.reload() }} />

  let tab = 'today', view
  const m = hash.match(/^#\/j\/([a-z0-9-]+)/)
  if (m && bySlug[m[1]]) {
    const j = bySlug[m[1]]
    tab = 'journeys'
    view = <Detail j={j} prog={progress[j.id]} back={() => window.history.length > 1 ? window.history.back() : go('#/journeys')} onDone={f => markDone(j, f)} onSave={() => save(j)} onClear={() => clear(j)} />
  } else if (hash.startsWith('#/journeys')) {
    tab = 'journeys'
    view = <Journeys journeys={journeys} progress={progress} open={open} events={events} prefs={prefs} />
  } else if (hash.startsWith('#/whatson')) {
    tab = 'whatson'
    view = <WhatsOn events={events} eventsError={eventsError} syncedAt={syncedAt} prefs={prefs} setPrefs={setPrefs} go={go} />
  } else {
    view = <Today journeys={journeys} weather={weather} progress={progress} events={events} eventsError={eventsError} syncedAt={syncedAt} plan={plan}
      prefs={prefs} setPrefs={setPrefs} open={open} onNotToday={notToday} go={go}
      onSetDate={d => setPrefs(p => ({ ...p, date: d }))} goWhatsOn={() => go('#/whatson')} />
  }

  return (
    <div className="shell">
      <header className="top">
        <div className="wordmark">Berlin <span>20</span></div>
        <div className="sub">Make Berlin ours{family ? ' · ' + family.name : ''}</div>
      </header>
      {view}
      <TabBar tab={tab} go={go} />
      {toast && <div className="toast fade">{toast}</div>}
    </div>
  )
}

function Gate({ onKey }) {
  const [v, setV] = useState('')
  return (
    <div className="gate">
      <div className="wordmark">Berlin <span>20</span></div>
      <h1>A private family app.</h1>
      <p>Open the link you were sent, or paste the family key here.</p>
      <input value={v} onChange={e => setV(e.target.value)} placeholder="fam_…" />
      <div className="actions" style={{ justifyContent: 'center' }}>
        <button className="btn" onClick={() => v && onKey(v.trim())}>Open</button>
      </div>
    </div>
  )
}
