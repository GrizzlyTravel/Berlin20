import { journeysA } from './journeys-a.js'
import { journeysB } from './journeys-b.js'
export const journeys = [...journeysA, ...journeysB].sort((a, b) => a.id - b.id)
export const byId = Object.fromEntries(journeys.map(j => [j.id, j]))
export const bySlug = Object.fromEntries(journeys.map(j => [j.slug, j]))
