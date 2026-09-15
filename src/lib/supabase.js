import { createClient } from '@supabase/supabase-js'

const SB_URL = import.meta.env.VITE_SUPABASE_URL
const SB_KEY = import.meta.env.VITE_SUPABASE_KEY

export function readFamilyKey() {
  try {
    const u = new URL(window.location.href)
    const k = u.searchParams.get('k')
    if (k) {
      localStorage.setItem('b20_family_key', k)
      u.searchParams.delete('k')
      window.history.replaceState({}, '', u.pathname + u.search + u.hash)
      return k
    }
    return localStorage.getItem('b20_family_key')
  } catch { return null }
}

export function makeClient(familyKey) {
  if (!SB_URL || !SB_KEY || !familyKey) return null
  return createClient(SB_URL, SB_KEY, { global: { headers: { 'x-family-key': familyKey } } })
}

export async function loadFamily(db) {
  const { data } = await db.from('families').select('id,name,home_lat,home_lng').limit(1).maybeSingle()
  return data
}

export async function loadProgress(db) {
  const { data } = await db.from('progress').select('*').order('updated_at', { ascending: false })
  const map = {}
  for (const row of data || []) if (!map[row.journey_id]) map[row.journey_id] = row
  return map
}

export async function loadEvents(db, fromDate, toDate) {
  const start = new Date(fromDate + 'T00:00:00')
  const end = new Date(toDate + 'T23:59:59')
  const { data, error } = await db.from('events').select('*')
    .lte('starts_at', end.toISOString())
    .or(`ends_at.gte.${start.toISOString()},ends_at.is.null`)
    .order('starts_at')
  if (error) return { events: [], error }
  const events = (data || []).filter(e => e.ends_at || new Date(e.starts_at) >= start)
  return { events, error: null }
}

// When were the events last refreshed? Used so the app never claims
// "nothing on" when the truth is "nobody has looked yet".
export async function loadEventsSyncedAt(db) {
  const { data } = await db.from('events').select('created_at').order('created_at', { ascending: false }).limit(1).maybeSingle()
  return data?.created_at || null
}

// The week-ahead plan, written by the Monday scheduled task. Null when no plan
// has been generated yet, which the Today view handles by saying nothing.
export async function loadPlan(db) {
  const { data } = await db.from('plans').select('*').order('generated_at', { ascending: false }).limit(1).maybeSingle()
  return data || null
}

export async function setProgress(db, familyId, journeyId, patch) {
  const { data: existing } = await db.from('progress').select('id').eq('journey_id', journeyId).limit(1).maybeSingle()
  const row = { family_id: familyId, journey_id: journeyId, updated_at: new Date().toISOString(), ...patch }
  if (existing) return db.from('progress').update(row).eq('id', existing.id).select().single()
  return db.from('progress').insert(row).select().single()
}

export async function clearProgress(db, journeyId) {
  return db.from('progress').delete().eq('journey_id', journeyId)
}

export async function logFeedback(db, familyId, kind, journeyId, context) {
  return db.from('feedback').insert({ family_id: familyId, kind, journey_id: journeyId, context })
}
