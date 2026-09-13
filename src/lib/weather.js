// Open-Meteo, no key, non-commercial. Prenzlauer Berg coordinates.
const LAT = 52.5400, LNG = 13.4200

export async function fetchWeather() {
  const p = new URLSearchParams({
    latitude: LAT, longitude: LNG,
    hourly: 'temperature_2m,precipitation_probability,precipitation',
    daily: 'temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,wind_speed_10m_max,sunset,sunrise,weather_code',
    timezone: 'Europe/Berlin', forecast_days: 3,
  })
  const res = await fetch('https://api.open-meteo.com/v1/forecast?' + p.toString())
  if (!res.ok) throw new Error('weather ' + res.status)
  const j = await res.json()
  return shape(j)
}

function shape(j) {
  const days = j.daily.time.map((t, i) => ({
    date: t,
    tempMax: j.daily.temperature_2m_max[i],
    tempMin: j.daily.temperature_2m_min[i],
    rainProb: j.daily.precipitation_probability_max[i] ?? 0,
    rainMm: j.daily.precipitation_sum[i] ?? 0,
    windMax: j.daily.wind_speed_10m_max[i] ?? 0,
    sunset: new Date(j.daily.sunset[i]),
    sunrise: new Date(j.daily.sunrise[i]),
    code: j.daily.weather_code[i],
  }))
  // Hourly, grouped by date, to compute "dry until"
  const hourly = {}
  j.hourly.time.forEach((t, i) => {
    const d = t.slice(0, 10)
    ;(hourly[d] ||= []).push({ time: t, hour: +t.slice(11, 13), temp: j.hourly.temperature_2m[i], rainProb: j.hourly.precipitation_probability[i] ?? 0, rain: j.hourly.precipitation[i] ?? 0 })
  })
  for (const d of days) {
    const hs = hourly[d.date] || []
    d.hours = hs
    const now = new Date()
    const startHour = d.date === todayStr() ? now.getHours() : 8
    const firstWet = hs.find(h => h.hour >= startHour && h.hour <= 21 && (h.rainProb >= 50 || h.rain >= 0.5))
    d.dryUntil = firstWet && firstWet.hour > startHour ? String(firstWet.hour).padStart(2, '0') + ':00' : null
    d.dryAllDay = !firstWet
    // Daytime rain probability (09:00 to 19:00) is a fairer number than the 24h max
    const day = hs.filter(h => h.hour >= 9 && h.hour <= 19)
    if (day.length) d.rainProb = Math.max(...day.map(h => h.rainProb))
  }
  return { days, byDate: Object.fromEntries(days.map(d => [d.date, d])) }
}

export function todayStr() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function describe(w) {
  if (!w) return ''
  const code = w.code
  let sky = 'clear'
  if (code >= 1 && code <= 2) sky = 'some cloud'
  else if (code === 3) sky = 'overcast'
  else if (code >= 45 && code <= 48) sky = 'fog'
  else if (code >= 51 && code <= 67) sky = 'rain'
  else if (code >= 71 && code <= 77) sky = 'snow'
  else if (code >= 80 && code <= 82) sky = 'showers'
  else if (code >= 95) sky = 'thunder'
  const t = `${Math.round(w.tempMax)}°`
  const rain = w.dryAllDay ? 'dry all day' : w.dryUntil ? `dry until ${w.dryUntil}` : w.rainProb >= 60 ? 'rain likely' : `${w.rainProb}% chance of rain`
  const sunset = w.sunset ? `sunset ${String(w.sunset.getHours()).padStart(2, '0')}:${String(w.sunset.getMinutes()).padStart(2, '0')}` : ''
  return [t, sky, rain, sunset].filter(Boolean).join(' · ')
}
