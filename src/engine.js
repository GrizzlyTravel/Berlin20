// The Today engine. Pure functions, no network. Takes the 20 journeys plus today's
// context and returns one pick, two alternatives, and the reasoning behind each.

const DOW = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
const DOW_LONG = { sun: 'Sunday', mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday', fri: 'Friday', sat: 'Saturday' }

const MOOD_TAGS = {
  outdoors: ['nature', 'park', 'water', 'lake', 'forest', 'views', 'island'],
  history: ['history', 'wall', 'coldwar', 'royal'],
  museums: ['museum', 'science'],
  nature: ['nature', 'forest', 'lake', 'water', 'island', 'park'],
  unusual: ['unusual', 'coldwar', 'streetart', 'views'],
  neighbourhood: ['neighbourhood', 'market', 'food'],
  water: ['water', 'lake', 'island'],
}

function inRange(dateStr, from, to) {
  return dateStr >= from && dateStr <= to
}

export function isoDate(d) {
  const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, '0'), day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

// Deterministic per-day jitter so "surprise me" is stable within a day but changes tomorrow.
function daySeed(dateStr, id) {
  let h = 2166136261
  const s = dateStr + ':' + id
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0 }
  h ^= h >>> 13; h = Math.imul(h, 0x5bd1e995) >>> 0; h ^= h >>> 15
  return (h % 1000) / 1000
}

function distanceKm(a, b) {
  if (!a || !b || a.lat == null || b.lat == null) return Infinity
  const R = 6371, dLat = (b.lat - a.lat) * Math.PI / 180, dLng = (b.lng - a.lng) * Math.PI / 180
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * Math.PI / 180) * Math.cos(b.lat * Math.PI / 180) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(x))
}

export function weatherWord(w) {
  if (!w) return null
  if (w.rainProb >= 70) return 'wet'
  if (w.rainProb >= 45) return 'showery'
  if (w.tempMax >= 26) return 'hot and dry'
  if (w.tempMax <= 4) return 'cold and dry'
  return 'dry'
}

/**
 * @param journeys array of journey objects
 * @param ctx { date: Date, hours: 2|5|8, elle: bool, pepper: bool, mood: string,
 *              weather: {tempMax, rainProb, rainMm, windMax, sunset: Date|null, dryUntil: string|null} | null,
 *              progress: { [journeyId]: {status, done_on, rating} }, events: [] }
 */
export function rank(journeys, ctx) {
  const date = ctx.date || new Date()
  const dateStr = isoDate(date)
  const dow = DOW[date.getDay()]
  const month = date.getMonth() + 1
  const w = ctx.weather
  const hours = ctx.hours || 5
  const nowMin = date.getHours() * 60 + date.getMinutes()
  const sunsetMin = w?.sunset ? w.sunset.getHours() * 60 + w.sunset.getMinutes() : null

  const results = journeys.map(j => {
    let score = j.editorial_score
    const why = []        // positive, human-readable
    const caveats = []    // things to know
    const excluded = []   // hard reasons this is not today
    const prog = ctx.progress?.[j.id]

    // Dated closures
    for (const r of j.season.closed_ranges || []) {
      if (inRange(dateStr, r.from, r.to)) {
        if (r.effect === 'exclude') excluded.push(`${r.what} (closed until ${r.to.slice(8)}.${r.to.slice(5, 7)}.)`)
        else { score -= 3; caveats.push(`${r.what} today`) }
      }
    }

    // Day of week
    if ((j.days.avoid || []).includes(dow)) excluded.push(`Not a ${DOW_LONG[dow]} outing: ${j.days.note}`)
    if ((j.days.best || []).includes(dow)) { score += 2; if (!(dow === 'sun' && j.sunday.score === 3)) why.push(`${DOW_LONG[dow]} is a good day for it`) }
    if (dow === 'sun') {
      score += (j.sunday.score - 2) * 2
      if (j.sunday.score === 3) why.push('at its best on a Sunday')
      if (j.sunday.score === 1) caveats.push(j.sunday.note)
    }

    // The dog
    if (ctx.pepper) {
      if (j.dog.verdict === 'no') {
        if (j.dog.workaround) { score -= 5; caveats.push('with Pepper this becomes the workaround version: ' + j.dog.workaround) }
        else excluded.push('No dogs: ' + j.dog.note)
      } else if (j.dog.verdict === 'great') { score += 1.5; why.push('Pepper can come the whole way') }
      else { score -= 0.5; if (j.dog.banned_stops?.length) caveats.push(`Pepper cannot go into ${j.dog.banned_stops.join(', ')}`) }
    }

    // Elle
    if (ctx.elle) {
      score += (j.kid.score - 2) * 2
      if (j.kid.score === 3) why.push('strong for Elle')
      if (j.kid.score === 1) caveats.push('not much in it for Elle unless you frame it as a game')
    }

    // Time available
    const roundTrip = (j.travel.minutes * 2) / 60
    const needed = j.duration_hours[0] + roundTrip
    if (hours < 8) {
      if (needed > hours + 2.5) excluded.push(`Needs about ${Math.round(needed)} hours with travel, more than you have`)
      else if (needed > hours + 1) { score -= 2.5; caveats.push(`a long one for the time you have, about ${Math.round(needed)} hours door to door`) }
    }
    if (hours <= 2 && j.travel.minutes <= 25) { score += 2; why.push('close to home') }
    if (hours >= 8 && j.energy === 'adventure') { score += 1.5; why.push('worth a whole day') }

    // Daylight: does the outing fit before sunset if you leave now?
    if (sunsetMin != null && nowMin > 9 * 60) {
      const finish = nowMin + j.travel.minutes + j.duration_hours[0] * 60
      if (finish > sunsetMin + 30 && j.weather.indoor_share < 0.5) { score -= 3; caveats.push('light runs out before you finish if you leave now') }
    }

    // Weather
    if (w) {
      const wet = w.rainProb >= 70 || (w.rainProb >= 55 && w.rainMm >= 3)
      const showery = !wet && w.rainProb >= 40
      const dry = w.rainProb < 30
      if (wet) {
        if (j.weather.rain_ok || j.weather.indoor_share >= 0.6) { score += 3; why.push('a proper rainy-day choice') }
        else if (j.weather.fallback) { score -= 3; caveats.push(`rain likely, fallback is ${j.weather.fallback}`) }
        else { score -= 6; caveats.push('rain likely and there is nowhere to shelter on this one') }
      } else if (showery) {
        if (j.weather.indoor_share >= 0.5) score += 1
        else if (!j.weather.fallback) { score -= 2; caveats.push('showers possible, no roof on the route') }
      } else if (dry) {
        if (j.weather.indoor_share <= 0.3) { score += 2; why.push(`${Math.round(w.tempMax)}° and dry${w.dryUntil ? ' until ' + w.dryUntil : ''}`) }
        if (j.weather.indoor_share >= 0.7) { score -= 1.5 }
      }
      if (w.tempMax >= 22 && j.tags.some(t => ['lake', 'water', 'island'].includes(t))) { score += 2; why.push('warm enough for the water') }
      if (w.tempMax <= 4 && j.weather.indoor_share <= 0.3) { score -= 2; caveats.push('cold day for an outdoor route') }
      if (j.weather.wind_sensitive && w.windMax >= 45) { score -= 4; caveats.push('strong wind forecast, and this one depends on calm weather') }
    }

    // Season
    if ((j.season.best_months || []).includes(month)) score += 1
    else { score -= 1.5; caveats.push(j.season.notes) }

    // Novelty
    if (prog?.status === 'done') { score -= 6; caveats.push(`you did this on ${prog.done_on || 'an earlier day'}`) }
    if (prog?.status === 'saved') { score += 2; why.push('on your saved list') }
    if (prog?.status === 'skip') { score -= 3 }
    if (!prog && Object.keys(ctx.progress || {}).length > 0) why.push('you have not done it yet')

    // Mood
    const mood = ctx.mood || 'surprise'
    if (mood === 'relaxed') { if (j.energy === 'easy') { score += 3; why.push('an easy one') } else if (j.energy === 'adventure') score -= 2 }
    else if (mood === 'active') { if (j.energy === 'adventure') { score += 3; why.push('a proper outing') } else if (j.energy === 'easy') score -= 1 }
    else if (MOOD_TAGS[mood]) {
      const hit = j.tags.filter(t => MOOD_TAGS[mood].includes(t))
      if (hit.length) { score += 3; why.push(`fits ${mood}`) } else score -= 1.5
    } else if (mood === 'surprise') {
      score += daySeed(dateStr, j.id) * 3
    }

    // Live events nearby or attached
    const evs = (ctx.events || []).filter(e => {
      if (ctx.pepper && e.dog === 'no') return false
      const attached = (e.journey_ids || []).includes(j.id)
      const near = distanceKm(j.coords, e.lat != null ? { lat: e.lat, lng: e.lng } : null) <= 1.5
      return attached || near
    })
    if (evs.length) { score += 3; why.push(`${evs[0].title} is on nearby today`) }

    return { journey: j, score: Math.round(score * 10) / 10, why, caveats, excluded, events: evs, ok: excluded.length === 0 }
  })

  const ok = results.filter(r => r.ok).sort((a, b) => b.score - a.score)
  const out = results.filter(r => !r.ok)
  const pick = ok[0] || null
  const rest = ok.slice(1)

  // Alternative one: easier. Alternative two: bolder or best for Elle.
  const easier = rest.find(r => r.journey.energy === 'easy' && r.journey.travel.minutes <= (pick?.journey.travel.minutes ?? 99))
    || rest.find(r => r.journey.travel.minutes < (pick?.journey.travel.minutes ?? 99))
    || rest[0] || null
  const bolder = rest.find(r => r !== easier && (ctx.elle ? r.journey.kid.score === 3 : true) && (r.journey.energy === 'adventure' || r.journey.tags.includes('unusual')))
    || rest.find(r => r !== easier && r.journey.kid.score === 3)
    || rest.find(r => r !== easier) || null

  return { pick, easier, bolder, ranked: ok, out, dateStr, dow }
}

// Turn the reason lists into one readable sentence.
export function whySentence(r, ctx) {
  const bits = [...r.why]
  if (!bits.length) return 'A good default for today.'
  const s = bits.slice(0, 4)
  const last = s.pop()
  const text = s.length ? `${s.join(', ')}, and ${last}.` : `${last[0].toUpperCase()}${last.slice(1)}.`
  return text[0].toUpperCase() + text.slice(1)
}
