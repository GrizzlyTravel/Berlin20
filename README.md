# Berlin 20

Make Berlin ours. A private family app that answers one question: what should we do in Berlin today?

Twenty half-day journeys, checked against real opening hours, seasons, Sunday rules and dog rules, plus a Today engine that weighs weather, day of the week, who is coming (Elle, Pepper), time available and what the family has already done.

## Stack

- Vite + React, static build
- Supabase (Postgres) for shared family state: done, saved, ratings, notes, events
- Open-Meteo for weather, no key
- Hosted on Render as a static site, auto-deploys from `main`

## Running locally

```
npm install
cp .env.example .env   # fill in the Supabase publishable key
npm run dev
```

Open with `?k=<family key>` once; the key is then remembered on that device.

## Content

`src/data/journeys-a.js` and `journeys-b.js` hold the 20 journeys. The schema is in `JOURNEY_SCHEMA.md`. Every fact in there was checked in September 2026 and carries its source. When something changes in the city, change it there.
