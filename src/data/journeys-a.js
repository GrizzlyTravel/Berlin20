// Journeys 1 to 10. Facts from the September 2026 research pass; anything the
// research could not confirm is left out or marked unverified in the text.

export const journeysA = [
  {
    id: 1,
    slug: 'origin-story',
    title: 'The Berlin Origin Story',
    area: 'Mitte',
    tagline: 'Old Berlin, rebuilt Berlin, and the East German boulevard, in one walk.',
    intro: 'This is the spine of the city: the courtyards off Hackescher Markt, the park on the Spree, Museum Island from the outside, the Dom, the rebuilt palace, the medieval quarter that is really a 1980s reconstruction, then the TV tower and the Stalinist boulevard east of it. Nothing on it is more than ten minutes from the next thing. It is the outing to do first, because every other one refers back to it, and it is one tram from home.',
    stops: [
      { name: 'Hackesche Höfe', note: 'Eight linked courtyards, free to walk through. Shops shut Sunday, restaurants and the cinema do not. Heaviest crowds Saturday afternoon, quieter Sunday. Pepper is allowed in the courtyards but has to wait outside the shops.' },
      { name: 'Monbijoupark', note: 'Small park on the Spree opposite the Bode Museum. The Kinderbad Monbijou is a summer-only children\'s pool and is already shut for the season. Leash on, dog out of the playground and the pool enclosure.' },
      { name: 'Lustgarten and Museum Island from outside', note: 'The lawn in front of the Dom and the Altes Museum. Free, open, and a wind tunnel from November to February. For Elle this is architecture homework, so keep it short.' },
      { name: 'Berliner Dom', note: 'Mon to Sat 09:00 to 18:00, Sunday from 12:00, last admission 17:00 every day. The dome walk is the bit she will want. Hours shift around services, so check their calendar for the day.' },
      { name: 'Humboldt Forum free areas', note: 'Sculpture Hall, Castle Cellars and the Video Panorama need no ticket. Roof terrace €3, child free. Wed to Mon 10:30 to 18:30, shut Tuesdays. This is your rain shelter.' },
      { name: 'Nikolaiviertel', note: 'Lanes around the Nikolaikirche. Zur letzten Instanz is shut on Sundays, so do not plan lunch there on a Sunday.' },
      { name: 'Alexanderplatz and the Fernsehturm', note: 'Observation deck 09:00 to 23:00, from €20 an adult; child and family pricing unverified. Optional and expensive.' },
      { name: 'Karl-Marx-Allee', note: 'The East German boulevard. Café Sibylle at number 72 has a free exhibition on the street\'s history, open during café hours.' }
    ],
    duration_hours: [4, 5],
    energy: 'normal',
    travel: {
      minutes: 20,
      how: 'Tram M4 from Hufelandstr. straight to S Hackescher Markt, 12 minutes on the tram. One vehicle, no change. Alexanderplatz is 6 minutes on the same line.',
      lines: ['M4']
    },
    cost: {
      min: 16, max: 65,
      note: 'Walking-only version is transport alone. The Dom is €30 for the three of you using one adult ticket plus one family ticket. Humboldt Forum roof €6. Add the Fernsehturm and you are past €110.'
    },
    tags: ['history', 'architecture', 'neighbourhood'],
    kid: { score: 2, note: 'The Dom dome climb, the courtyards and the TV tower are what she will actually want; the rest is looking at buildings.' },
    dog: {
      verdict: 'workable',
      note: 'Courtyards, park, squares and pavement are all fine on a lead. The Dom bans animals outright apart from guide and therapy dogs, and there is no cloakroom for a pet. The Humboldt Forum publishes no policy; assume assistance dogs only.',
      banned_stops: ['Berliner Dom', 'Humboldt Forum free areas'],
      workaround: 'One adult waits outside with Pepper for 45 to 60 minutes while the other takes Elle up the Dom, or skip the interior and keep it a walk.'
    },
    weather: {
      indoor_share: 0.3,
      rain_ok: false,
      fallback: 'Humboldt Forum free areas on Schlossplatz, no ticket, shut Tuesdays. Or the Dom interior. The Höfe are semi-covered at best.',
      wind_sensitive: false
    },
    days: {
      best: ['sun', 'sat'],
      avoid: ['tue'],
      note: 'Dom opens 12:00 on Sundays. Humboldt Forum shut Tuesdays, which is also the day the Dom is emptiest, so on a Tuesday your rain shelter does not exist. Zur letzten Instanz shut Sundays.'
    },
    sunday: { score: 2, note: 'Everything opens, but the Dom not until noon and the Höfe shops not at all; do courtyards and park first, Dom after lunch, and buy groceries at the Hackescher Markt or Alexanderplatz station shops.' },
    season: {
      best_months: [4, 5, 6, 7, 8, 9, 10],
      notes: 'Nothing closes Oct to Mar, but the open stretches at the Lustgarten and Schlossplatz stop being pleasant. Kinderbad Monbijou is summer only and already shut. Strandbar Mitte in the park is a summer bar with 2026 dates unverified.',
      closed_ranges: []
    },
    opening: [
      { place: 'Berliner Dom', hours: 'Mon to Sat 09:00 to 18:00, Sun 12:00 to 18:00, last admission 17:00', closed: 'No fixed day; hours shift for services and events', price: 'Adult €15, family €15 (1 adult + up to 4 children under 18)', booking: null },
      { place: 'Humboldt Forum', hours: 'Wed to Mon 10:30 to 18:30', closed: 'Tuesdays', price: 'Free areas need no ticket; exhibitions €9 adult, under 18 free; roof terrace €3', booking: null },
      { place: 'Fernsehturm', hours: 'Observation deck 09:00 to 23:00', closed: 'none listed', price: 'From €20 adult; child and family pricing unverified', booking: null },
      { place: 'Hackesche Höfe courtyards', hours: '07:00 to 23:00 per the FAQ, 09:00 to 22:00 per the contact page on the same site', closed: 'none', price: 'Free', booking: null }
    ],
    food: [
      { name: 'Café Sibylle', where: 'Karl-Marx-Allee 72', note: 'Reported daily 10:00 to 20:00 via a third-party listing, no primary confirmation, so phone before relying on it. Free exhibition inside.', dog_outdoor: false },
      { name: 'Zur letzten Instanz', where: 'Nikolaiviertel', note: 'Closed Sundays. Other hours unverified.', dog_outdoor: false },
      { name: 'Station shops', where: 'S Hackescher Markt and Alexanderplatz', note: 'The Sunday grocery option. Bakeries elsewhere until 16:00.', dog_outdoor: false }
    ],
    guide_notes: [
      'The Dom family ticket is a pricing quirk worth €15. One family ticket covers one adult plus up to four children, so buy one adult ticket and one family ticket and pay €30, not €45.',
      'The Hohenzollern crypt reopened on 1 March 2026 after a long renovation. Anything written in 2024 or 2025 will tell you it is shut.',
      'The Höfe site gives two different opening times for the courtyards, 07:00 to 23:00 and 09:00 to 22:00. Either way they are open all day; just do not rely on the early or late end.'
    ],
    warnings: [
      'Turning up at the Dom on a Sunday morning. It opens at 12:00.',
      'Last admission to the Dom is 17:00 every day.',
      'Tuesday means no Humboldt Forum, and that is the rain plan.',
      '3 October can bring a large event footprint around Unter den Linden; check before planning that date.'
    ],
    sources: [
      'https://www.berlinerdom.de/besuchen-wissen/service/besucherservice/',
      'https://www.berlinerdom.de/en/visiting/service/house-rules/',
      'https://www.humboldtforum.org/en/visit/',
      'https://www.humboldtforum.org/en/visit/prices-and-tickets/',
      'https://www.tv-turm.de/en/tickets/',
      'https://www.hackesche-hoefe.de/de/faq',
      'https://www.stalinbauten.de/ausstellung/',
      'https://www.bvg.de/en/connections/route-overview/m4'
    ],
    coords: { lat: 52.52, lng: 13.402 },
    editorial_score: 7
  },

  {
    id: 2,
    slug: 'where-the-wall-was-real',
    title: 'Where the Wall Was Real',
    area: 'Bernauer Straße',
    tagline: 'The preserved death strip, a chapel that reads a name at noon, then Mauerpark.',
    intro: 'Bernauer Straße is where the Wall is still physically legible: 1.4 km of border strip with a watchtower, tunnel markers and a preserved section of the full installation, all free and outdoors. The ghost-station exhibition at Nordbahnhof and the chapel built where a church was blown up are on the same street. Then the M10 takes you east to Mauerpark, which on a Sunday is a flea market with karaoke. It is ten minutes from home and the best of the Wall outings for a nine-year-old.',
    stops: [
      { name: 'S Nordbahnhof ghost-station exhibition', note: 'Grenz- und Geisterbahnhöfe on the mezzanine, Gartenstraße entrance, free, open whenever the station is. Photographs of the sealed stations under East Berlin.' },
      { name: 'Open-air exhibition and border strip', note: 'Daily 08:00 to 22:00 all year, free. The preserved section with the death strip and the watchtower sight lines is the concrete bit that lands for a child. Leashed dogs allowed on the grounds, in writing.' },
      { name: 'Documentation Centre and observation tower', note: 'Tue to Sun 10:00 to 18:00, last tower ascent 17:45, free. The tower gives the view down onto the strip. Shut Mondays. Assistance dogs only inside.' },
      { name: 'Chapel of Reconciliation', note: 'Tue to Sun 10:00 to 17:00. Every day at 12:00 a 30-minute Andacht reads the biography of one person who died at the Wall. Volunteer-run, so short-notice changes happen.' },
      { name: 'Mauerpark', note: 'M10 east along Bernauer Str. to Eberswalder Str. Flea market every Sunday 10:00 to 18:00, year-round. Arrive before 11:00 to shop it or after 16:00 to find it thinned out. Bearpit karaoke from about 15:00 in the warm months.' },
      { name: 'Oderberger Straße', note: 'Cafés with street seating, several listed as dog-friendly. The natural place to stop.' },
      { name: 'Konnopke\'s Imbiss', note: 'Schönhauser Allee 44B under the U2 viaduct. Tue to Fri 11:00 to 18:00, Sat 12:00 to 19:00, shut Sunday and Monday. Optional currywurst on the way home.' }
    ],
    duration_hours: [3, 5],
    energy: 'easy',
    travel: {
      minutes: 25,
      how: 'Walk 10 to 15 minutes to Prenzlauer Allee/Danziger Str., then tram M10 to the stop named Gedenkstätte Berliner Mauer, 10 minutes, or to S Nordbahnhof, 12 minutes. The M10 is the spine of the whole day and takes you back east to Mauerpark.',
      lines: ['M10']
    },
    cost: {
      min: 16, max: 35,
      note: 'Transport and nothing else. Every site is free. A guided tour is €5 adult, €3 reduced if you want one.'
    },
    tags: ['wall', 'coldwar', 'history', 'market'],
    kid: { score: 3, note: 'The death strip, the watchtower and the ghost-station photographs are concrete in a way most Wall content is not, and then there is a flea market with karaoke.' },
    dog: {
      verdict: 'great',
      note: 'The Foundation permits leashed pets on the whole 1.4 km of grounds; only the indoor centres, the tower and the chapel are assistance dogs only. Mauerpark has a registered off-leash area at the Eberswalder Straße end, boundary and fencing unverified, and the district runs campaigns because people ignore the leash rule. On a flea-market Sunday keep her on the lead regardless.',
      banned_stops: ['Documentation Centre and observation tower', 'Chapel of Reconciliation'],
      workaround: 'Both indoor stops are short. One adult stands on the strip with Pepper for 20 minutes and swaps.'
    },
    weather: {
      indoor_share: 0.25,
      rain_ok: false,
      fallback: 'Documentation Centre and Visitor Centre, free, Tue to Sun 10:00 to 18:00, directly on the route, plus the Nordbahnhof exhibition, which is underground. A real 90 minutes dry. Stadtbad Oderberger is a booked-slot hotel pool, not a walk-up.',
      wind_sensitive: false
    },
    days: {
      best: ['sun'],
      avoid: ['mon'],
      note: 'Documentation Centre, tower and chapel shut Mondays; the strip and the station exhibition never close. Flea market Sundays only. Konnopke\'s shut Sun and Mon.'
    },
    sunday: { score: 3, note: 'The best day for the memorial and the flea market, and the worst for managing a child and a small dog through 400 stalls after noon; memorial first, Mauerpark second, out by mid-afternoon.' },
    season: {
      best_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      notes: 'Nothing closes Oct to Mar. In December the strip is open 08:00 to 22:00 but dark for most of it, and the tower view needs daylight. The flea market runs through winter with fewer stalls and skips Volkstrauertag and Totensonntag in November. Karaoke is warm-months only.',
      closed_ranges: []
    },
    opening: [
      { place: 'Berlin Wall Memorial open-air exhibition', hours: 'Daily 08:00 to 22:00', closed: 'never', price: 'Free', booking: null },
      { place: 'Documentation Centre, Visitor Centre and tower', hours: 'Tue to Sun 10:00 to 18:00, last tower ascent 17:45', closed: 'Mondays', price: 'Free; guided tours €5 adult, €3 reduced', booking: null },
      { place: 'Chapel of Reconciliation', hours: 'Tue to Sun 10:00 to 17:00, Andacht daily 12:00 to 12:30', closed: 'Mondays', price: 'Free', booking: null },
      { place: 'Mauerpark flea market', hours: 'Sundays 10:00 to 18:00, year-round', closed: 'Volkstrauertag and Totensonntag', price: 'Free', booking: null }
    ],
    food: [
      { name: 'Bonanza Coffee', where: 'Oderberger Str. 35', note: 'Mon to Fri 09:00 to 18:00, Sat and Sun 10:00 to 18:00. Listed as dog-friendly.', dog_outdoor: true },
      { name: 'Café Krone', where: 'Oderberger Str. 38', note: 'Street seating, listed as dog-friendly with water bowls. Hours unverified.', dog_outdoor: true },
      { name: 'Konnopke\'s Imbiss', where: 'Schönhauser Allee 44B', note: 'Tue to Fri 11:00 to 18:00, Sat 12:00 to 19:00, closed Sun and Mon. Stand-up counter under the railway, outdoor eating area, about as dog-easy as it gets.', dog_outdoor: true }
    ],
    guide_notes: [
      'The memorial has two opening regimes and the important one never closes. The strip is 08:00 to 22:00 daily; only the centres and the tower are Tue to Sun. A Monday visit is fine, you just lose the view from the tower.',
      'The chapel reads a name every day at noon. Thirty minutes, free, one person who died at the Wall, a different one each day. It lands harder than any panel.',
      'Cycle-infrastructure works in northern Prenzlauer Berg from April 2026. Take the tram, not bikes.'
    ],
    warnings: [
      'Monday: no tower, no Documentation Centre, no chapel.',
      'Mauerpark after noon on a Sunday is not a place to manage a small dog and a child at once.',
      'Konnopke\'s is shut Sunday and Monday.',
      'Stadtbad Oderberger needs a booked slot, has no lifeguard and takes a €20 cash deposit. Not a rain plan.'
    ],
    sources: [
      'https://www.stiftung-berliner-mauer.de/en/berlin-wall-memorial/visit/information',
      'https://www.stiftung-berliner-mauer.de/de/gedenkstaette-berliner-mauer/besuch/informationen',
      'https://kapelle-versoehnung.de/',
      'https://www.berlin.de/mauer/orte/museen-und-ausstellungen/ausstellung-im-nordbahnhof-geisterbahnhoefe/',
      'https://berlinecho.de/flohmarkt-mauerpark-oeffnungszeiten-berlin/',
      'https://www.berlin.de/ba-pankow/aktuelles/pressemitteilungen/2024/pressemitteilung.1501310.php',
      'https://konnopke-imbiss.de/',
      'https://www.bvg.de/en/connections/route-overview/m10'
    ],
    coords: { lat: 52.535, lng: 13.395 },
    editorial_score: 8
  },

  {
    id: 3,
    slug: 'canal-berlin',
    title: 'Canal Berlin',
    area: 'Kreuzberg',
    tagline: 'A towpath, a bridge people sit on, and a hill with a waterfall.',
    intro: 'Kreuzberg is best understood from the water. Start at Kottbusser Tor, walk the Landwehrkanal past the Admiralbrücke and the Maybachufer, then cross to the Bergmannkiez and climb the Kreuzberg itself, where an artificial waterfall runs down the north face from Easter to autumn. Almost nothing on the route costs money or has a gate, which is also its weakness: on a wet Sunday there is nowhere to go indoors.',
    stops: [
      { name: 'Kottbusser Tor', note: 'Off the U8. Crowded, glass on the ground in places, so a short lead and straight through.' },
      { name: 'Admiralbrücke', note: 'The bridge everyone sits on. Packed on warm Sunday evenings, pleasant at midday, better still in cold weather when the drinkers are gone.' },
      { name: 'Maybachufer and the Türkenmarkt', note: 'The market runs Tuesdays and Fridays only, 11:00 to 18:30, 200 m from the bridge. On those days it is the centre of the outing. On a weekend it does not exist.' },
      { name: 'Landwehrkanal towpath to Görlitzer Ufer', note: 'Flat, year-round, leash on. Canal boats are a summer product with 2026 end dates unverified; do not promise one.' },
      { name: 'Görlitzer Park', note: 'Optional, for the playgrounds. Fenced since March 2026 with 16 gates; a court ruled the night closure unlawful in June and it is currently open around the clock, with the Senate appealing. Off-leash areas exist but keep her on the lead here.' },
      { name: 'Bergmannkiez and Marheineke Markthalle', note: 'Marheinekeplatz 15, Mon to Fri 09:00 to 20:00, Sat 09:00 to 18:00, shut Sunday. The food hall and the only roof on the route.' },
      { name: 'Viktoriapark and the waterfall', note: 'Steep gravel paths to the top of the Kreuzberg. The waterfall runs roughly Maundy Thursday to mid or late October, about 09:00 to 21:00; the district says through November. Animal enclosures in the park, so short lead.' }
    ],
    duration_hours: [3, 5],
    energy: 'normal',
    travel: {
      minutes: 25,
      how: 'Tram M4 from Hufelandstr. to U Alexanderplatz, 6 minutes, then U8 to Kottbusser Tor, 6 minutes. One change. Home from the Bergmannkiez end via U7 Mehringdamm, about 35 minutes.',
      lines: ['M4', 'U8']
    },
    cost: {
      min: 16, max: 35,
      note: 'Transport only. Everything on the route is free. A canal boat, if the season is running, is extra and 2026 prices are unverified.'
    },
    tags: ['water', 'neighbourhood', 'park', 'market'],
    kid: { score: 2, note: 'The waterfall and the climb are a real draw when the water is on; the canal and the bridge are adult pleasures, and from November this slides toward dull unless you add the Görlitzer Park playgrounds.' },
    dog: {
      verdict: 'great',
      note: 'Towpath, bridge, streets and hill park are all leash-walk territory with no bans, and there are listed dog-friendly cafés at both ends. Görlitzer Park has a north off-leash area on a hill with reports of drug litter, condition unverified since 2022, and a cleaner one to the south from 2021. The Markthalle is a food hall; assume no dogs inside, unverified.',
      banned_stops: ['Bergmannkiez and Marheineke Markthalle'],
      workaround: 'One adult goes into the Markthalle while the other sits on Marheinekeplatz with Pepper, or eat at Ankerklause on the canal instead.'
    },
    weather: {
      indoor_share: 0.05,
      rain_ok: false,
      fallback: 'Marheineke Markthalle, Mon to Sat only. On a rainy Sunday there is nothing under a roof on this route at all; pick a different outing.',
      wind_sensitive: false
    },
    days: {
      best: ['tue', 'fri', 'sat'],
      avoid: [],
      note: 'Tuesday or Friday gives you the Türkenmarkt and turns this into a better day. Markthalle shut Sundays. 1 May the whole route is unusable.'
    },
    sunday: { score: 2, note: 'The canal and the hill are fine and the Admiralbrücke is pleasant at midday, but the Markthalle is shut and the market never runs on a weekend, so it is a walk with Ankerklause and Curry 36 for food.' },
    season: {
      best_months: [4, 5, 6, 7, 8, 9, 10],
      notes: 'The waterfall is off from late autumn and the climb loses its point. Golgatha in Viktoriapark shuts October to March. Canal boats take a winter break with 2026 last-sailing dates unverified. The towpath itself is better in the cold.',
      closed_ranges: [
        { from: '2026-10-01', to: '2027-03-31', what: 'Golgatha beer garden closed for the winter; waterfall off from late autumn', effect: 'downgrade' },
        { from: '2027-05-01', to: '2027-05-01', what: 'May Day: Kottbusser Tor and Görlitzer Park are the centre of the demo footprint', effect: 'exclude' }
      ]
    },
    opening: [
      { place: 'Marheineke Markthalle', hours: 'Mon to Fri 09:00 to 20:00, Sat 09:00 to 18:00', closed: 'Sundays', price: 'Free', booking: null },
      { place: 'Türkenmarkt, Maybachufer', hours: 'Tue and Fri 11:00 to 18:30', closed: 'all other days', price: 'Free', booking: null },
      { place: 'Viktoriapark waterfall', hours: 'Roughly Maundy Thursday to mid or late October, about 09:00 to 21:00', closed: 'winter', price: 'Free', booking: null },
      { place: 'Görlitzer Park', hours: 'Currently 24 hours by court order; the fence stays and the Senate has appealed', closed: 'none at present', price: 'Free', booking: null }
    ],
    food: [
      { name: 'Ankerklause', where: 'Kottbusser Damm 104, at the Kottbusser Brücke', note: 'Daily from 10:00. Canal-side terrace on the Maybachufer, independently listed as dog-friendly.', dog_outdoor: true },
      { name: 'Golgatha', where: 'Viktoriapark, Katzbachstr. entrance', note: 'Mon to Fri from 12:00, Sat and Sun from 11:00, April to September only. Cashless; they cannot take cash.', dog_outdoor: true },
      { name: 'Curry 36', where: 'Mehringdamm 36', note: 'Daily 09:00 to 05:00. Stand-up counter between the Bergmannkiez and the U-Bahn, dog stays on the pavement with you.', dog_outdoor: true }
    ],
    guide_notes: [
      'The Türkenmarkt is Tuesday and Friday, 11:00 to 18:30, not weekends. Guidebooks get this wrong constantly. It is 200 m from the Admiralbrücke.',
      'Golgatha stops taking cash and stops opening entirely from October. Two separate ways to walk twenty minutes uphill for nothing.',
      'The Wolfsschlucht below the waterfall was replanted and the fall reactivated in a district project finished in 2025, so when it runs it is in good shape.'
    ],
    warnings: [
      'A rainy Sunday: the Markthalle is shut and there is no other roof.',
      'The Görlitzer Park night-closure rule is in the courts and could flip again; check before any plan that runs past dusk.',
      'Outside roughly Easter to late October the waterfall is off.',
      'Kottbusser Tor has glass underfoot; short lead.'
    ],
    sources: [
      'https://www.berlin.de/ba-friedrichshain-kreuzberg/aktuelles/pressemitteilungen/2025/pressemitteilung.1601689.php',
      'https://berlinecho.de/viktoriapark-berlin-kreuzberg/',
      'https://meine-markthalle.de/',
      'https://www.tuerkenmarkt.de/',
      'https://www.lto.de/recht/nachrichten/n/vg-berlin-eilverfahren-vg24l11726-goerlitzer-park-vorerst-wieder-nachts-geoeffnet',
      'https://www.entwicklungsstadt.de/goerlitzer-park-wieder-nachts-offen-so-hat-sich-die-kriminalitaet-entwickelt/',
      'https://golgatha-berlin.de/',
      'https://www.ankerklause.de/'
    ],
    coords: { lat: 52.494, lng: 13.41 },
    editorial_score: 6
  },

  {
    id: 4,
    slug: 'airport-you-can-play-on',
    title: 'An Airport You Can Play On',
    area: 'Tempelhofer Feld',
    tagline: 'Two real runways, 300 hectares of grass, kites, and three fenced dog runs.',
    intro: 'Tempelhof closed as an airport in 2008 and the city kept the whole thing as a park: two 2 km runways with the markings still painted on, the taxiways, the grass between them, community gardens along the Neukölln edge. Elle can run, cycle or skate down a runway. Pepper gets three fenced off-leash runs. The catch is that there is no roof anywhere on it, and the gates lock on a monthly timetable that drops to 17:00 in midwinter.',
    stops: [
      { name: 'Schillerkiez', note: 'Off U Boddinstr. Herrfurthplatz is being traffic-calmed in phases from March 2026 with rolling street closures. Schillermarkt on the square Wednesday and Saturday, never Sunday.' },
      { name: 'Oderstraße entrance', note: 'One of four main gates with revolving exit gates that still work after the entrance locks. Entry is free.' },
      { name: 'The runways', note: 'Paved and shared with cyclists and skaters; pedestrians have priority and fast skaters must give way. Leash on. This is the bit she will remember.' },
      { name: 'Community gardens', note: 'Allmende-Kontor and the raised beds. Keep the dog on the path; the gardens publish no specific policy.' },
      { name: 'Dog runs', note: 'Three fenced off-leash areas, marked on the official park map; two documented on the Columbiadamm side and the Tempelhofer Damm side. The Tempelschlucht nature area is explicitly not a dog zone.' },
      { name: 'Die Treppe', note: 'Staircase building 113 at the Leinestraße entrance. Daily noon to sunset, waffles and cold drinks, outdoors on the field.' },
      { name: 'THF Tower', note: 'Optional. The airport building\'s tower, Wed to Sun 11:00 to 18:00, adult €5, child €3, roof terrace can shut for weather. A 15 to 25 minute walk from the Oderstraße side. Free on Sunday 20 September 2026.' }
    ],
    duration_hours: [3, 5],
    energy: 'normal',
    travel: {
      minutes: 32,
      how: 'Tram M4 from Hufelandstr. to U Alexanderplatz, 6 minutes, then U8 to Boddinstr., 11 minutes, for the Oderstraße gate, or to Leinestr., 13 minutes, for Die Treppe. One change.',
      lines: ['M4', 'U8']
    },
    cost: {
      min: 16, max: 48,
      note: 'Field is free. THF Tower €13 for the three of you, or free on 20 September 2026. The Tempelhof Myths tour is €47 and the dog cannot come.'
    },
    tags: ['park', 'unusual', 'nature', 'playground'],
    kid: { score: 3, note: 'She gets to run, cycle or fly a kite down a real runway with the aircraft markings still on it; nothing else on the list competes.' },
    dog: {
      verdict: 'great',
      note: 'The operator says it plainly: leashed everywhere except three fenced runs, and around 4 hectares of dog field in total. From roughly April to August the skylark meadows between the runways are cordoned off and leash discipline is enforced across the whole field; September to March the zones reopen. The tower and the building tour do not take dogs.',
      banned_stops: ['THF Tower'],
      workaround: 'Skip the tower or let one adult do it. The tower is a side dish; the field is the outing.'
    },
    weather: {
      indoor_share: 0,
      rain_ok: false,
      fallback: 'Nothing within minutes. THF Tower is 15 to 25 minutes across the field and only Wed to Sun; otherwise the Schillerkiez cafés. Rain here is the end of the outing.',
      wind_sensitive: false
    },
    days: {
      best: ['sun', 'sat', 'wed'],
      avoid: [],
      note: 'The field is open every day by monthly hours. THF Tower Wed to Sun only. Tours skip Tuesdays. Schillermarkt Wed and Sat.'
    },
    sunday: { score: 3, note: 'The peak day and the best one, kites and skaters and windsurfers on the runways; tower open, tours run twice, and the only grocery is the Hermannstraße station shop.' },
    season: {
      best_months: [3, 4, 5, 6, 7, 8, 9, 10],
      notes: 'Gates: Jan and Dec 07:30 to 17:00; Feb and Nov 07:00 to 18:00; Mar 06:00 to 19:00; Apr and Sep 06:00 to 20:30; May and Aug 06:00 to 21:30; Jun and Jul 06:00 to 22:30; Oct 07:00 to 19:00. Tempelgarten Apr to Oct, Luftschloss May to Sep, coffee bikes weekends only. Nov to Feb is the best kite season and there is no shelter on 300 hectares.',
      closed_ranges: [
        { from: '2027-04-01', to: '2027-08-31', what: 'Skylark protection zones between the runways cordoned off and leash rule enforced field-wide; dates approximate and set each spring', effect: 'downgrade' }
      ]
    },
    opening: [
      { place: 'Tempelhofer Feld', hours: 'Monthly: 07:30 to 17:00 in Jan and Dec, up to 06:00 to 22:30 in Jun and Jul; exit gates work after closing', closed: 'never', price: 'Free', booking: null },
      { place: 'THF Tower', hours: 'Wed to Sun 11:00 to 18:00', closed: 'Mon and Tue; roof terrace for weather', price: 'Adult €5, reduced €3 (children 6 to 14); free Sun 20 Sep 2026', booking: null },
      { place: 'Tempelhof Myths guided tour', hours: 'Mon, Wed to Fri 13:30; Sat and Sun 13:30 and 14:30, about 2 hours', closed: 'Tuesdays', price: 'Adult €17.50, child 6 to 14 €12', booking: 'Opens about 4 weeks ahead; cancelled below 8 participants. No dogs, prams or wheelchairs; closed-toe shoes.' }
    ],
    food: [
      { name: 'Die Treppe', where: 'Staircase building 113, Leinestraße entrance', note: 'Daily noon to sunset. Snacks, homemade waffles, cold drinks. On the field, dog on a lead fine.', dog_outdoor: true },
      { name: 'Tempelgarten', where: 'Columbiadamm picnic area', note: 'April to October. Hot food at weekends, snacks midweek, cake and Sicilian ice cream, about 300 seats, open to park closing in good weather. The replacement for the shut Luftgarten.', dog_outdoor: true },
      { name: 'La Maison Neukölln', where: 'Herrfurthplatz 14', note: 'Terrace on the square. Current hours and dog policy unverified.', dog_outdoor: true }
    ],
    guide_notes: [
      'You can always get out after the gates lock; the four main entrances have revolving exit gates. The real risk of being late is not getting back in.',
      'The Tempelhof Myths tour needs eight people or it is cancelled. A family of three on a quiet February Wednesday has a real chance of it being called off on the day.',
      'The THF Tower is free on Sunday 20 September 2026 as part of the Aktionstag Tempelhof.'
    ],
    warnings: [
      'Turning up at 16:30 in January. The gates shut at 17:00 in December and January, 18:00 in November and February.',
      'The Luftgarten beer garden is closed for a ground-up renovation; Tempelgarten replaces it and only April to October.',
      'From roughly April to August you cannot cut across the middle of the field; the skylark zones are cordoned and staffed.',
      'Herrfurthplatz construction from March 2026 with rolling closures in the Schillerkiez.'
    ],
    sources: [
      'https://www.tempelhoferfeld.de/en/service-infos/faq/',
      'https://www.berlin.de/en/parks-and-gardens/3561883-4407152-park-tempelhofer-feld.en.html',
      'https://www.tempelhoferfeld.de/en/nature-environment/skylark-protection-zone/',
      'https://www.tempelhoferfeld.de/en/service-infos/food-drinks/',
      'https://gruen-berlin.de/park-meldung/biergarten-geschlossen-ersatz-angebot-in-dieser-saison',
      'https://www.thf-berlin.de/en/your-visit/thf-tower',
      'https://www.thf-berlin.de/en/your-visit/guided-tours/tempelhof-myths',
      'https://herrfurthplatz.de/'
    ],
    coords: { lat: 52.475, lng: 13.402 },
    editorial_score: 8
  },

  {
    id: 5,
    slug: 'royal-berlin',
    title: 'Royal Berlin and the West',
    area: 'Charlottenburg',
    tagline: 'A Baroque palace, a free garden with a carp pond, and a Sunday-only pavilion.',
    intro: 'Schloss Charlottenburg is the biggest palace in the city and the garden behind it is a public park: free, open 08:00 to dusk every day of the year, and dog-legal in writing. The palace interior is a long parade of porcelain and gilt that a nine-year-old will endure. The garden, the mausoleum, the Schinkel pavilion and the Bröhan across the road are what make it a day. Then Savignyplatz for the old West Berlin café streets.',
    stops: [
      { name: 'Palace forecourt', note: 'Luisenplatz. The parterre and forecourt fill mid-morning on Sundays; the English landscape end of the garden past the carp pond stays quiet.' },
      { name: 'Altes Schloss', note: 'Tue to Sun, Apr to Oct 10:00 to 17:30, Nov and Dec to 16:30, last entry 30 minutes before. Adult €12, child 7 to 18 €8, under 7 free. Prams not allowed in the exhibition rooms.' },
      { name: 'Schlossgarten', note: 'Free, 08:00 to dusk, no ticket check at the gates. The Baroque parterre, the carp pond and the landscape park beyond. Short leash, waste removed immediately, per the written Parkordnung.' },
      { name: 'Mausoleum', note: 'Apr to Oct Tue to Sun 10:00 to 17:30, €3 adult. Shut every day in November and December. The ticket machine takes coins only.' },
      { name: 'Neuer Pavillon', note: 'Schinkel\'s small house. Open Sundays only, Apr to Oct, 10:00 to 17:30, €8 adult. The single strongest reason to make this a Sunday.' },
      { name: 'Belvedere meadow', note: 'The Belvedere itself is closed until further notice. In season around 50 horned Gotland sheep graze the meadow, which for Elle beats any state room.' },
      { name: 'Bröhan-Museum', note: 'Schloßstraße 1a, opposite the forecourt. Tue to Sun 11:00 to 18:00, €9 adult, under 18 free. Art Nouveau and Art Deco; a better pairing for her than a second palace wing.' },
      { name: 'Savignyplatz', note: 'S-Bahn from Charlottenburg or a walk. Café terraces under the railway arches; dogs on leads are routine outside though no venue publishes a policy.' }
    ],
    duration_hours: [4, 6],
    energy: 'normal',
    travel: {
      minutes: 50,
      how: 'Tram M4 from Hufelandstr. to S+U Alexanderplatz, then U2 toward Ruhleben to Sophie-Charlotte-Platz and a 12-minute walk. Or M4 two stops to S Greifswalder Str., S41 to Westend, bus M45 to Luisenplatz: similar time, fewer stairs with the dog. 45 to 60 minutes either way.',
      lines: ['M4', 'U2']
    },
    cost: {
      min: 16, max: 71,
      note: 'Garden only is transport alone. Altes Schloss €32 for the three of you. Add €18 if both adults do the Bröhan, child free. The €45 charlottenburg+ family ticket is only worth it Apr to Oct when the Mausoleum and Pavillon are open.'
    },
    tags: ['royal', 'park', 'museum', 'architecture', 'history'],
    kid: { score: 2, note: 'The state rooms are endured; the carp pond, the mausoleum, the parterre hedges and the sheep on the Belvedere meadow rescue it.' },
    dog: {
      verdict: 'workable',
      note: 'The gardens allow dogs on a short leash under the written Parkordnung, and they are the best two hours of the outing. Interiors are assistance dogs only, and there is no off-leash area anywhere in the park; a petition asking for one tells you so. Bröhan and Scharf-Gerstenberg publish no policy; assume assistance dogs only.',
      banned_stops: ['Altes Schloss', 'Mausoleum', 'Neuer Pavillon', 'Bröhan-Museum'],
      workaround: 'One adult walks the garden with Pepper while the other does the palace with Elle, about an hour, then swap for the Bröhan. The Mausoleum and Pavillon are 15-minute visits.'
    },
    weather: {
      indoor_share: 0.4,
      rain_ok: false,
      fallback: 'Bröhan-Museum and Sammlung Scharf-Gerstenberg, both on Schloßstraße within 300 m. Both shut Mondays, Scharf-Gerstenberg also Tuesdays.',
      wind_sensitive: false
    },
    days: {
      best: ['sun'],
      avoid: ['mon'],
      note: 'Palace, Bröhan and Scharf-Gerstenberg all shut Mondays, leaving a free garden and nothing else. Neuer Pavillon Sundays only, Apr to Oct.'
    },
    sunday: { score: 3, note: 'The only day the Pavillon opens, every museum is open, and the shops on Schloßstraße being shut costs you nothing; groceries are the supermarket inside S+U Zoologischer Garten.' },
    season: {
      best_months: [4, 5, 6, 7, 8, 9, 10],
      notes: 'From November the palace closes at 16:30, the Mausoleum and Pavillon shut entirely, and the garden gates close at dusk, roughly 16:00 in December. Buy single Altes Schloss tickets in winter, not the combined one. Palace closed 24 and 25 Dec, 31 Dec 10:00 to 14:00, 1 Jan 11:00 to 16:30.',
      closed_ranges: [
        { from: '2026-11-01', to: '2026-12-31', what: 'Mausoleum and Neuer Pavillon closed; palace closes 16:30', effect: 'downgrade' },
        { from: '2026-12-24', to: '2026-12-25', what: 'Palace closed', effect: 'downgrade' }
      ]
    },
    opening: [
      { place: 'Altes Schloss', hours: 'Tue to Sun, Apr to Oct 10:00 to 17:30, Nov and Dec 10:00 to 16:30, last entry 30 min before', closed: 'Mondays; 24 and 25 Dec', price: 'Adult €12, reduced €8, under 7 free; charlottenburg+ €19, family €45', booking: null },
      { place: 'Mausoleum', hours: 'Apr to Oct Tue to Sun 10:00 to 17:30', closed: 'Mondays; all of Nov and Dec', price: 'Adult €3, reduced €2, coins only', booking: null },
      { place: 'Neuer Pavillon', hours: 'Apr to Oct, Sundays only, 10:00 to 17:30', closed: 'Mon to Sat; Nov and Dec', price: 'Adult €8, reduced €6', booking: null },
      { place: 'Bröhan-Museum', hours: 'Tue to Sun 11:00 to 18:00', closed: 'Mondays; 24 and 31 Dec', price: 'Adult €9, reduced €6, under 18 free', booking: null },
      { place: 'Sammlung Scharf-Gerstenberg', hours: 'Wed to Sun 11:00 to 18:00', closed: 'Mon and Tue', price: 'Adult €10, reduced €5', booking: null }
    ],
    food: [
      { name: 'Savignyplatz cafés', where: 'Around the S-Bahn arches', note: 'Restaurants and cafés open normally on Sundays. Outdoor seating with dogs on leads is routine; no individual venue publishes a policy.', dog_outdoor: true },
      { name: 'Luisenbräu am Schloss', where: 'By the palace', note: 'Lemke\'s pub has reopened, but address and hours are not published; phone +49 30 30 87 89 79 before relying on it.', dog_outdoor: false },
      { name: 'S+U Zoologischer Garten supermarket', where: 'Inside the station', note: 'The Sunday grocery option on this side of town.', dog_outdoor: false }
    ],
    guide_notes: [
      'The charlottenburg+ ticket is a trap in winter. It bundles the Belvedere, closed indefinitely, with the Mausoleum and the Pavillon, both shut Nov and Dec. From November it buys exactly what two single tickets buy.',
      'The Mausoleum ticket machine takes coins only, and the Pavillon opens Sundays only. Between them they decide the day and the change in your pocket.',
      'Museum Berggruen has been shut since September 2022 for renovation with no reopening date published. Guidebooks still send people there.'
    ],
    warnings: [
      'Monday: palace and both museums shut.',
      'Museum Berggruen is closed and has been for four years.',
      'Prams are not allowed in the palace rooms.',
      'Nov and Dec: no Mausoleum, no Pavillon, garden dark by 16:00.'
    ],
    sources: [
      'https://www.spsg.de/en/palaces-gardens/object/charlottenburg-palace-old-palace',
      'https://www.spsg.de/schloesser-gaerten/objekt/schlossgarten-charlottenburg/',
      'https://www.spsg.de/schloesser-gaerten/unterwegs-im-gartendenkmal/parkordnung/parkordnung-schlossgarten-charlottenburg/',
      'https://www.spsg.de/en/palaces-gardens/object/mausoleum-charlottenburg',
      'https://www.spsg.de/en/palaces-gardens/object/new-pavilion-in-charlottenburgs-palace-gardens',
      'https://www.spsg.de/en/palaces-gardens/object/belvedere-charlottenburg',
      'https://www.smb.museum/en/museums-institutions/museum-berggruen/plan-your-visit/',
      'https://www.museumsportal-berlin.de/en/museums/broehan-museum/'
    ],
    coords: { lat: 52.52, lng: 13.296 },
    editorial_score: 6
  },

  {
    id: 6,
    slug: 'wall-becomes-a-canvas',
    title: 'The Wall Becomes a Canvas',
    area: 'Friedrichshain to Kreuzberg',
    tagline: '1.3 km of painted Wall, a castle bridge with a train on top, and a river.',
    intro: 'The East Side Gallery is the longest surviving piece of the Wall, painted in 1990 and repainted since, running along the Spree between Ostbahnhof and the Oberbaumbrücke. It is free, never closes, and explicitly allows leashed dogs. Cross the bridge with the U1 rattling over your head and you are in Kreuzberg with a burger stand under the viaduct. Shortest trip of the twenty and the easiest with a dog: one tram, step-free, never underground.',
    stops: [
      { name: 'S Ostbahnhof', note: 'Start at this end and walk west, against the crowd. The supermarket inside the station is the Sunday grocery.' },
      { name: 'East Side Gallery', note: 'Mühlenstraße, 1.3 km, open around the clock, free. Something changes every thirty metres. The pavement is narrow in places and the lead gets stepped on; e-scooters are dense.' },
      { name: 'Visitor information centre', note: 'Mühlenstraße 73, daily 10:00 to 17:00. A restored border-strip gatehouse opened January 2025, the one original piece of the installation most people walk past. The only warm room on the route.' },
      { name: 'The Oberbaumbrücke end', note: 'The Brezhnev and Honecker kiss and the Trabant are here, so it is a scrum on any fine Sunday between 11:00 and 16:00.' },
      { name: 'Oberbaumbrücke', note: 'Double-deck: U1 and U3 on top, road and footway below. A Wall-era crossing for West Berliners only from December 1963. Tram tracks at Warschauer Straße before it.' },
      { name: 'Wrangelkiez and Burgermeister', note: 'Across the bridge at Schlesisches Tor. Burgermeister under the U-Bahn viaduct is the finish for a nine-year-old. Broken glass on the riverbank near the RAW grounds, so mind the paws.' }
    ],
    duration_hours: [2, 4],
    energy: 'easy',
    travel: {
      minutes: 22,
      how: 'Walk to Arnswalder Platz, then tram M10 direct to S+U Warschauer Str., nine stops, about 15 minutes. No change. To start at the far end, S-Bahn one stop to Ostbahnhof, or walk the gallery from Warschauer Straße and back.',
      lines: ['M10']
    },
    cost: {
      min: 16, max: 53,
      note: 'Transport and nothing else; every stop is free. Add the Computerspielemuseum as a rain plan and the large family ticket is €32 on top.'
    },
    tags: ['wall', 'streetart', 'coldwar', 'water'],
    kid: { score: 3, note: 'A wall covered in cartoons, a bridge with turrets and a train on top, a river and a burger; she can walk the whole 1.3 km without complaint.' },
    dog: {
      verdict: 'great',
      note: 'The Berlin Wall Foundation states that dogs are permitted on leash along the gallery pavement. Bridge, river path and streets are public highway, leash required, no ban. No off-leash area on the route. The only real risk is paws: glass, tram tracks and scooters.',
      banned_stops: [],
      workaround: 'None needed. The Computerspielemuseum rain plan publishes no dog policy; assume no.'
    },
    weather: {
      indoor_share: 0.05,
      rain_ok: false,
      fallback: 'Computerspielemuseum, Karl-Marx-Allee 93a, daily 10:00 to 20:00, three M10 stops from Warschauer Straße to Frankfurter Tor then a short walk. The best rainy-day museum in the district for a nine-year-old.',
      wind_sensitive: false
    },
    days: {
      best: ['sun', 'sat'],
      avoid: [],
      note: 'Nothing is ticketed or staffed, so any day works. Markthalle Neun is shut Sundays. Busiest 11:00 to 16:00.'
    },
    sunday: { score: 3, note: 'Best day of the week for it, everything open and free; the one trap is planning lunch at Markthalle Neun, which is closed on Sundays.' },
    season: {
      best_months: [4, 5, 6, 7, 8, 9, 10],
      notes: 'The gallery never closes, but it is a fully exposed strip with a stiff wind off the Spree from Oct to Mar and the visitor centre is the only warm room. The Foundation began a restoration initiative in September 2025; which sections are hoarded on any given day is unverified.',
      closed_ranges: []
    },
    opening: [
      { place: 'East Side Gallery visitor information centre', hours: 'Daily 10:00 to 17:00', closed: 'none listed', price: 'Free; guided tours €5 adult, €3 reduced', booking: null },
      { place: 'Computerspielemuseum', hours: 'Daily 10:00 to 20:00', closed: 'none listed', price: 'Adult €12, reduced €8 (6 to 17), small family €20, large family €32', booking: null }
    ],
    food: [
      { name: 'Burgermeister', where: 'Under the U1 viaduct at Schlesisches Tor', note: 'The finish line. Hours unverified.', dog_outdoor: true },
      { name: 'Curry 36', where: 'S-Bahnhof Warschauer Straße', note: 'Daily 09:00 to 23:00.', dog_outdoor: true },
      { name: 'Holzmarkt 25 marketplace tavern', where: 'Holzmarktstraße, on the Spree', note: 'Seven days a week from midday until dark. Dog policy unverified.', dog_outdoor: true }
    ],
    guide_notes: [
      'Walk it east to west, from Ostbahnhof toward the Oberbaumbrücke, not the way the crowd walks it. The murals everyone photographs are at the bridge end, so you build to them and finish at Burgermeister instead of a station car park.',
      'The wall you are looking at is the inner wall, the Hinterlandmauer. The death strip was on the river side, which is why the murals face the road and not the Spree.',
      'The visitor centre is itself an original border gatehouse, restored and opened in January 2025.'
    ],
    warnings: [
      'Markthalle Neun is closed on Sundays.',
      'Expect scaffolding and hoarding on some sections; which ones is unverified.',
      'Tram tracks, e-scooters and glass on the riverbank. Short lead and proper shoes.',
      'The bridge end is a scrum on a fine Sunday afternoon.'
    ],
    sources: [
      'https://www.stiftung-berliner-mauer.de/en/east-side-gallery/visit/map-information',
      'https://www.stiftung-berliner-mauer.de/en/east-side-gallery/historical-site/open-air-gallery',
      'https://en.wikipedia.org/wiki/Oberbaum_Bridge',
      'https://www.computerspielemuseum.de/Tickets/3-Eintritt.htm',
      'https://markthalleneun.de/',
      'https://www.curry36.de/',
      'https://www.holzmarkt.com/',
      'https://www.bvg.de/en/connections/route-overview/m10'
    ],
    coords: { lat: 52.505, lng: 13.44 },
    editorial_score: 8
  },

  {
    id: 7,
    slug: 'capital-again',
    title: 'Berlin as a Capital Again',
    area: 'Government quarter and Tiergarten',
    tagline: 'The glass dome, the Gate, 285 steps up the Goldelse, and a lake with beer.',
    intro: 'The Reichstag dome is the one thing in the government quarter a child can actually go inside: a glass spiral you walk up, a free audio guide that starts by itself, a hole looking down into the chamber. It is free and it needs a registration with everyone\'s name and date of birth, in a window that only opens a month ahead. Around it: the Brandenburg Gate, the Tiergarten, the Siegessäule and a beer garden on a lake. Without the dome booked, this is grey buildings she cannot enter.',
    stops: [
      { name: 'Brandenburger Tor', note: 'Off the S-Bahn. At its worst between 11:00 and 16:00 every day. Fenced and partly shut around 3 October and 31 December.' },
      { name: 'Reichstag service centre, Platz der Republik', note: 'If you have no booking, this issues permits for today or the next two days if space remains, at least two hours before the slot. Summer 08:00 to 20:00, winter 08:00 to 18:00, weekends 10:00 to 18:00.' },
      { name: 'Reichstag dome', note: 'Original ID for everyone, checked twice; no cloakroom, no storage, bags x-rayed. Admission every 15 minutes, last 21:45. Open to the sky at the top, with a drain in the floor.' },
      { name: 'Haus der Kulturen der Welt', note: 'Wed to Mon 12:00 to 19:00, shut Tuesday. Free exhibition entry every Monday. Weltwirtschaft restaurant daily from 12:00.' },
      { name: 'Tiergarten', note: 'Leash on throughout; there is no off-leash area anywhere in it and the licence exemption does not apply in parks. Playgrounds for Elle, paths unlit and dark by 16:30 in December.' },
      { name: 'Siegessäule', note: 'Reached only by the four pedestrian tunnels under the Großer Stern roundabout. 285 steps, no lift, cash only, €4.50 adult, €3.50 reduced, child rate unverified. Summer 09:30 to 19:00, winter to 17:30.' },
      { name: 'Café am Neuen See', note: 'Lichtensteinallee 2. Beer garden on the lake, daily 09:00 to midnight, from 11:00 on Sundays. Boat hire resumes in spring.' }
    ],
    duration_hours: [4, 6],
    energy: 'normal',
    travel: {
      minutes: 28,
      how: 'Tram M4 from Hufelandstr. to S+U Alexanderplatz, then S5, S7 or S9 three stops to Brandenburger Tor. One change. Or bus 200 from Am Friedrichshain, no change, step-free, along the south edge of the Tiergarten.',
      lines: ['M4', 'S5', 'S7', 'S9', '200']
    },
    cost: {
      min: 16, max: 40,
      note: 'Dome free. Siegessäule about €12.50 for the three of you, cash only, child rate unverified. Futurium free. HKW prices unverified.'
    },
    tags: ['history', 'park', 'views', 'architecture'],
    kid: { score: 3, note: 'With the dome booked it is strong: the ramp, the audio guide, the view down into the chamber; without it the quarter is dull and the Siegessäule and playgrounds have to carry it.' },
    dog: {
      verdict: 'no',
      note: 'The Bundestag house rules ban animals from the buildings apart from guide dogs and police dogs, and there is no cloakroom to leave anything. Futurium bans dogs. HKW and the Siegessäule publish no policy, and 285 steps of narrow spiral is a bad idea anyway. The Tiergarten is leash-only with no run.',
      banned_stops: ['Reichstag dome', 'Haus der Kulturen der Welt', 'Siegessäule'],
      workaround: 'Leave Pepper at home for this one, or split: one adult does the dome with Elle while the other walks the Tiergarten to Café am Neuen See and everyone meets there.'
    },
    weather: {
      indoor_share: 0.2,
      rain_ok: false,
      fallback: 'Futurium, Alexanderufer 2, free, about 15 minutes\' walk from the Reichstag, shut Tuesdays. HKW, also shut Tuesdays. The dome itself is wet in rain by design.',
      wind_sensitive: false
    },
    days: {
      best: ['sun', 'sat'],
      avoid: ['tue'],
      note: 'Futurium and HKW both shut Tuesdays, and the service centre closes at 14:00 on Tuesdays in sitting weeks. HKW is free on Mondays.'
    },
    sunday: { score: 3, note: 'Weekend dome slots outside school holidays are easier to get, the Tiergarten is at its best and the beer gardens open from 11:00; food is Weltwirtschaft, the lake café or the Hauptbahnhof supermarket.' },
    season: {
      best_months: [4, 5, 6, 7, 8, 9, 10],
      notes: 'Dome shut 14 to 18 Sep, 28 Sep to 2 Oct and 19 to 30 Oct 2026; the roof terrace stays open. The October closure is exactly the school autumn holiday. Siegessäule drops to 17:30 in winter. Schleusenkrug shuts Mon and Tue from November. Tiergarten dark by 16:30 in December.',
      closed_ranges: [
        { from: '2026-09-14', to: '2026-09-18', what: 'Reichstag dome maintenance, roof terrace open', effect: 'downgrade' },
        { from: '2026-09-28', to: '2026-10-02', what: 'Reichstag dome maintenance, roof terrace open', effect: 'downgrade' },
        { from: '2026-10-19', to: '2026-10-30', what: 'Reichstag dome maintenance, roof terrace open', effect: 'downgrade' },
        { from: '2026-12-24', to: '2026-12-24', what: 'Reichstag dome closed all day; Siegessäule closed', effect: 'downgrade' }
      ]
    },
    opening: [
      { place: 'Reichstag dome', hours: 'Admission every 15 minutes, last admission 21:45', closed: '14 to 18 Sep, 28 Sep to 2 Oct, 19 to 30 Oct 2026; 24 Dec; from 16:00 on 31 Dec', price: 'Free', booking: 'Compulsory. Register at visite.bundestag.de with full name and date of birth for everyone; requests only for the current and following month. Or the service centre on Platz der Republik for today or the next two days, two hours ahead. A Käfer Dachgarten reservation also gets you in.' },
      { place: 'Siegessäule', hours: 'Summer 09:30 to 19:00, winter 09:30 to 17:30', closed: '24 Dec', price: 'Adult €4.50, reduced €3.50, cash only; child rate unverified', booking: null },
      { place: 'Haus der Kulturen der Welt', hours: 'Wed to Mon 12:00 to 19:00', closed: 'Tuesdays', price: 'Varies by show, unverified; free every Monday', booking: null },
      { place: 'Futurium', hours: 'Mon, Wed, Fri to Sun 10:00 to 18:00; Thu 10:00 to 20:00', closed: 'Tuesdays', price: 'Free', booking: null }
    ],
    food: [
      { name: 'Café am Neuen See', where: 'Lichtensteinallee 2, Tiergarten', note: 'Daily 09:00 to midnight, beer garden from 11:00 on Sundays. Dog policy unverified.', dog_outdoor: true },
      { name: 'Weltwirtschaft', where: 'Haus der Kulturen der Welt', note: 'Daily from 12:00.', dog_outdoor: false },
      { name: 'Curry 36', where: 'Bahnhof Zoo', note: 'Daily 08:00 to 05:00.', dog_outdoor: true }
    ],
    guide_notes: [
      'A table at the Käfer Dachgarten restaurant gets you into the dome without the registration queue; every reservation includes access to the dome and terrace. The standard local move when the online slots are gone.',
      'You cannot cross to the Siegessäule at street level. It sits in the middle of the Großer Stern and is reached by four pedestrian tunnels built to Speer\'s plans. People walk a full lap looking for a crossing. Berliners call the statue Goldelse.',
      'Dome requests can only be made for the current month and the next, and next year opens in early to mid November. There is no booking this a season ahead.'
    ],
    warnings: [
      'Dome shut 14 to 18 Sep, 28 Sep to 2 Oct and 19 to 30 Oct 2026.',
      'A photocopy of a passport ends the visit at the door. Originals only, for everyone.',
      'No cloakroom or storage at the Reichstag; nowhere to leave a bag, let alone a dog.',
      'Cash for the Siegessäule.'
    ],
    sources: [
      'https://www.bundestag.de/en/visitthebundestag/dome/registration-245686',
      'https://www.bundestag.de/besuche/kuppel-dachterrasseunddachgartenrestaurant/kuppel-inhalt-244990',
      'https://www.bundestag.de/besuche/hinweise',
      'https://www.bundestag.de/resource/blob/340518/cfa7e4876f107486f356c066f177927a/zugangsregeln-data.pdf',
      'https://www.feinkost-kaefer.de/pages/dachgarten-restaurant-berlin',
      'https://www.berlin.de/en/attractions-and-sights/3560160-3104052-victory-column.en.html',
      'https://www.hkw.de/en/the-house/visit/visit',
      'https://futurium.de/en/visit'
    ],
    coords: { lat: 52.517, lng: 13.37 },
    editorial_score: 8
  },

  {
    id: 8,
    slug: 'city-cut-in-two',
    title: 'The City That Was Cut in Two',
    area: 'Potsdamer Platz and Gleisdreieck',
    tagline: 'Wall fragments, the Gestapo site, a bombed station, then a park on rail land.',
    intro: 'Potsdamer Platz was the busiest square in Europe, then a minefield between two walls for 28 years, then the biggest building site in Europe. The trace runs south: a wall segment along Niederkirchnerstraße beside the excavated Gestapo cellars, the ruined front of Anhalter Bahnhof, and then the railway wasteland that became Park am Gleisdreieck, with five playgrounds and a proper off-leash dog run. The Technikmuseum sits at the end of it, which is journey 10. This is the outing that is hardest to get wrong on a weekday, because no single day shuts everything.',
    stops: [
      { name: 'Potsdamer Platz', note: 'Off the bus 200 or the U2. Office towers and Wall segments. The Panoramapunkt lift at Potsdamer Platz 1 is optional, daily 10:00 to 19:00, family ticket €19.50.' },
      { name: 'Niederkirchnerstraße wall segment', note: 'A long stretch of outer wall on the street between the Gropius Bau and the Topography. Public pavement, leashed dog fine.' },
      { name: 'Topography of Terror', note: 'Daily 10:00 to 20:00, free. The outdoor trench along the excavated Gestapo cellars closes at dusk, so from November it is a 10:00 to 16:00 site. Grim and text-heavy; for Elle keep it to the trench and the wall.' },
      { name: 'Gropius Bau', note: 'Mon and Wed to Fri 11:00 to 19:00, Sat and Sun 10:00 to 19:00, shut Tuesdays. Adult €15, child rate unverified. Kreuzberg show 10 Sep 2026 to 17 Jan 2027, Schlingensief from 9 Oct.' },
      { name: 'Anhalter Bahnhof', note: 'Askanischer Platz. The surviving centre of the façade with the Tempodrom behind on the old terminus site, and a deportation memorial board. The Exilmuseum building is not yet open; the site hosts installations, opening date unverified.' },
      { name: 'Park am Gleisdreieck', note: 'Open around the clock. Five playgrounds including a big water play area in the Westpark, a Stangenwald for older kids, and a red railway-themed one on Monumentenplatz. Dog run south of the U2 between the beach volleyball and the ICE line.' },
      { name: 'Deutsches Technikmuseum', note: 'Trebbiner Str. 9, five minutes on. Shut Mondays, free under 18 with a €0 ticket. The add-on that turns a fine day into a strong one.' }
    ],
    duration_hours: [4, 6],
    energy: 'normal',
    travel: {
      minutes: 25,
      how: 'Bus 200 from Am Friedrichshain direct to S+U Potsdamer Platz, no change, step-free. Or tram M4 to Alexanderplatz then U2 four stops to Potsdamer Platz; the U2 continues to Mendelssohn-Bartholdy-Park and Gleisdreieck, so it covers the whole route.',
      lines: ['200', 'M4', 'U2']
    },
    cost: {
      min: 16, max: 75,
      note: 'Topography, the park and Anhalter Bahnhof are free. Add either Gropius Bau, €30 to €45 with the child rate unverified, or the Technikmuseum, €30 online with the child free. Panoramapunkt family ticket €19.50.'
    },
    tags: ['wall', 'coldwar', 'history', 'park', 'playground'],
    kid: { score: 2, note: 'Office towers and a fragment of wall do nothing for her; the Gleisdreieck playgrounds carry it, and the Technikmuseum next door makes it strong.' },
    dog: {
      verdict: 'workable',
      note: 'Street and pavement for the first half, then a park with a real designated off-leash run, one of the district\'s official Hundeauslaufflächen. Elsewhere in the park leashed, off the playgrounds, ball courts and lawns. The Topography publishes no dog policy at all; leashed dogs on the open-air trench are normal in practice. Gropius Bau and the Technikmuseum: assume assistance dogs only.',
      banned_stops: ['Gropius Bau', 'Deutsches Technikmuseum'],
      workaround: 'One adult takes Pepper to the Gleisdreieck run while the other does a museum with Elle, then swap. The park and the museum are next to each other, so the split actually works.'
    },
    weather: {
      indoor_share: 0.5,
      rain_ok: true,
      fallback: 'The Technikmuseum at Gleisdreieck, vast and on the route. Gropius Bau and the Topography\'s indoor documentation centre, which is free.',
      wind_sensitive: false
    },
    days: {
      best: ['sun', 'sat'],
      avoid: [],
      note: 'Gropius Bau shuts Tuesday, the Technikmuseum shuts Monday; no single day shuts both. Sunday opens the Gropius Bau an hour earlier and the Technikmuseum to 18:00.'
    },
    sunday: { score: 3, note: 'Longer museum hours, the park at its busiest and best, and nothing shut except shops; whether the Playce restaurants trade on Sundays is unverified, so Curry 36 or the park kiosks in season.' },
    season: {
      best_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      notes: 'The three park kiosks run daily April to October and only on good-weather days after that. The Topography trench is dusk-limited from November. At the Technikmuseum the Photography and Chemistry galleries are shut for renovation until further notice.',
      closed_ranges: [
        { from: '2026-12-24', to: '2026-12-24', what: 'Topography of Terror closed', effect: 'downgrade' },
        { from: '2026-12-31', to: '2027-01-01', what: 'Topography of Terror closed', effect: 'downgrade' }
      ]
    },
    opening: [
      { place: 'Topography of Terror', hours: 'Daily 10:00 to 20:00; outdoor grounds to dusk', closed: '24 and 31 Dec, 1 Jan', price: 'Free', booking: null },
      { place: 'Gropius Bau', hours: 'Mon, Wed to Fri 11:00 to 19:00; Sat, Sun and holidays 10:00 to 19:00; ticket desk to 18:15', closed: 'Tuesdays', price: 'Adult €15, reduced €10, child rate unverified', booking: null },
      { place: 'Panoramapunkt', hours: 'Daily 10:00 to 19:00, last ascent 18:30', closed: 'none listed', price: 'Adult €9, reduced €7, family €19.50, under 6 free', booking: null },
      { place: 'Deutsches Technikmuseum', hours: 'Tue to Fri 09:00 to 17:30; Sat, Sun and holidays 10:00 to 18:00; last entry 17:00', closed: 'Mondays', price: 'Adult €15 online or €17 at the desk; under 18 free with a €0 ticket; includes Spectrum', booking: 'Online saves €2 per ticket' }
    ],
    food: [
      { name: 'Park am Gleisdreieck kiosks', where: 'Three in the park', note: 'Daily April to October; occasional good-weather days only from November.', dog_outdoor: true },
      { name: 'Café Eule', where: 'Bülowstr. 69a, western half of the park', note: 'Feb to end of October daily 09:30 to 20:00, weekends only Nov to Jan. Outdoor seating in an allotment setting with a children\'s play area. Dog policy not stated but it is an open-air café inside a park with a dog run.', dog_outdoor: true },
      { name: 'Curry 36', where: 'Mehringdamm 36', note: 'Daily 09:00 to 05:00.', dog_outdoor: true }
    ],
    guide_notes: [
      'The Deutsche Kinemathek has left Potsdamer Platz. The film museum every older guidebook puts in the Filmhaus is now at Mauerstraße 79, Thu to Sun 10:00 to 18:00. People still turn up at the Sony Center looking for it.',
      'Gropius Bau closes on Tuesdays, not Mondays, the inverse of almost every Berlin museum. The useful side is that it is one of the few serious exhibition houses open on a Berlin Monday.',
      'Under-18s are free at the Technikmuseum but still need a €0 ticket issued. People skip it and get sent back to the desk.'
    ],
    warnings: [
      'Tuesday for the Gropius Bau, Monday for the Technikmuseum.',
      'From November do not count on buying a coffee in the park.',
      'Get the €0 child ticket at the Technikmuseum.',
      'The Topography is not a place to let a nine-year-old wander the panels; do the trench and move on.'
    ],
    sources: [
      'https://www.topographie.de/en/your-visit/directions-opening-hours',
      'https://www.berlinerfestspiele.de/en/gropius-bau/besuch/informationen',
      'https://www.berlinerfestspiele.de/en/gropius-bau/ausstellungen/aktuell-und-vorschau',
      'https://www.parkamgleisdreieck.de/en/service-info/information-for-visitors/',
      'https://www.parkamgleisdreieck.de/en/sport-play/playgrounds/',
      'https://www.panoramapunkt.de/en/prices-tickets/',
      'https://technikmuseum.berlin/en/visit/tickets',
      'https://www.deutsche-kinemathek.de/en'
    ],
    coords: { lat: 52.505, lng: 13.377 },
    editorial_score: 7
  },

  {
    id: 9,
    slug: 'dinosaurs-and-science',
    title: 'Dinosaurs, Science and Old Berlin',
    area: 'Mitte north',
    tagline: 'The tallest dinosaur on earth, then a free museum of the future by the Spree.',
    intro: 'The Museum für Naturkunde on Invalidenstraße has the tallest mounted dinosaur skeleton anywhere and a T. rex made of real bone. Ten minutes on foot past Hauptbahnhof is the Futurium, which is free, hands-on and has a roof walk over the Spree. Two museums that both ban the dog, both shut on different weekdays, and between them the most rain-proof outing of the twenty. Book the dinosaur slot first; the Futurium is the release valve.',
    stops: [
      { name: 'Museum für Naturkunde', note: 'Invalidenstr. 43. Tue to Fri 09:30 to 18:00, Sat and Sun 10:00 to 18:00, shut Mondays, last admission 30 minutes before. Timed-entry ticket required; it is not a buy-at-the-door museum. Family ticket €18.' },
      { name: 'Brachiosaurus and Tristan', note: 'The Brachiosaurus is the tallest mounted skeleton in the world. Tristan the T. rex is real fossil bone, not a cast. Start here while she is fresh.' },
      { name: 'Invalidenstraße to Hauptbahnhof', note: 'A ten-minute walk. The station\'s retail levels are a statutory Sunday exemption, so this is the Sunday supermarket.' },
      { name: 'Futurium', note: 'Alexanderufer 2, 350 m from Hauptbahnhof. Free. Mon, Wed, Fri to Sun 10:00 to 18:00, Thu to 20:00, shut Tuesdays. Free lockers, bring a 50 cent or one euro coin.' },
      { name: 'Futurium Lab and Skywalk', note: 'The Lab floor is hands-on: printing robots, musical computers. The roof Skywalk is listed as open and closes in bad weather.' },
      { name: 'Spree promenade', note: 'Public river path from Hauptbahnhof past the Futurium. Leashed dog fine. This is the dog version of the outing.' },
      { name: 'Zollpackhof', note: 'Elisabeth-Abegg-Str. 1, five minutes away. Restaurant daily 12:00 to 23:00 year-round; beer garden April to September. Terrace dog policy unverified.' }
    ],
    duration_hours: [3, 5],
    energy: 'easy',
    travel: {
      minutes: 28,
      how: 'Walk or tram to the M10, which stops at Naturkundemuseum on its way to Hauptbahnhof. Roughly 25 to 30 minutes with one change; an estimate from the network, not a journey-planner time.',
      lines: ['M10']
    },
    cost: {
      min: 16, max: 53,
      note: 'Naturkunde family ticket €18 for two adults and up to three children. Futurium free. Futurium only is transport alone.'
    },
    tags: ['museum', 'science', 'water'],
    kid: { score: 3, note: 'The tallest dinosaur on earth and a real T. rex, then a free floor of robots she can touch, with no sunk cost if she burns out after an hour.' },
    dog: {
      verdict: 'no',
      note: 'Both anchors ban dogs in writing: the Naturkundemuseum FAQ says no except assistance and guide dogs, and the Futurium says animals are not allowed except assistance dogs. There is no shaded holding area outside either worth using.',
      banned_stops: ['Museum für Naturkunde', 'Brachiosaurus and Tristan', 'Futurium', 'Futurium Lab and Skywalk'],
      workaround: 'Leave Pepper at home. The dog-only version is the Spree promenade from Hauptbahnhof past the Futurium building into the north edge of the Tiergarten, ending at Zollpackhof.'
    },
    weather: {
      indoor_share: 0.85,
      rain_ok: true,
      fallback: 'The outing is the fallback. Rain only costs you the Spree walk and the Skywalk.',
      wind_sensitive: false
    },
    days: {
      best: ['thu', 'sat', 'sun'],
      avoid: ['mon', 'tue'],
      note: 'Naturkundemuseum shut Monday, Futurium shut Tuesday. Thursday is the only late day, Futurium to 20:00.'
    },
    sunday: { score: 2, note: 'Both open, but the Naturkundemuseum is busiest at weekends and Sunday slots go first, so book early; the Futurium has no booking and therefore no crowd control.' },
    season: {
      best_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      notes: 'Museum hours do not change. Zollpackhof\'s beer garden is April to September and its Augustiner Keller reopens 5 October after a summer break. The Skywalk shuts in bad weather.',
      closed_ranges: []
    },
    opening: [
      { place: 'Museum für Naturkunde', hours: 'Tue to Fri 09:30 to 18:00; Sat and Sun 10:00 to 18:00; last admission 30 min before', closed: 'Mondays', price: 'Adult €11, child 6+ €5, under 6 free, family €18 (2 adults + up to 3 children under 14), mini-family €12', booking: 'Timed-entry ticket required; book online with a date and slot' },
      { place: 'Futurium', hours: 'Mon, Wed, Fri to Sun 10:00 to 18:00; Thu 10:00 to 20:00', closed: 'Tuesdays', price: 'Free; workshops and events paid', booking: null }
    ],
    food: [
      { name: 'Futurium restaurant', where: 'Inside the Futurium', note: 'Seasonal, organic, vegetarian and vegan options, inside the free building.', dog_outdoor: false },
      { name: 'Zollpackhof', where: 'Elisabeth-Abegg-Str. 1', note: 'Daily 12:00 to 23:00, kitchen to 21:30. Beer garden April to September 10:00 to 23:00. Terrace dog policy unverified.', dog_outdoor: true },
      { name: 'Hauptbahnhof retail levels', where: 'Inside the station', note: 'The Sunday supermarket, by statutory exemption. Bakeries until 16:00 elsewhere.', dog_outdoor: false }
    ],
    guide_notes: [
      'Futurium is free, so use it as the release valve, not the main event. Do the dinosaurs on the booked slot first, then walk over with no pressure to extract value.',
      'Thursday is the only late day in this cluster, Futurium to 20:00. Everything else shuts at 18:00. A Thursday turns a half-day into a long afternoon and evening.'
    ],
    warnings: [
      'Turning up at the Naturkundemuseum without a booked slot.',
      'Monday kills the dinosaurs, Tuesday kills the Futurium.',
      'The Skywalk closes in bad weather, so do not promise it.'
    ],
    sources: [
      'https://www.museumfuernaturkunde.berlin/de/museum/besuch-planen',
      'https://www.berlin.de/en/museums/3109703-3104050-natural-history-museum.en.html',
      'https://www.visitberlin.de/en/tickets/day-ticket-natural-history-museum-berlin',
      'https://futurium.de/en/visit',
      'https://futurium.de/de/besuch',
      'https://www.zollpackhof.de/',
      'https://www.berlin.de/sen/wirtschaft/branchen/handel/ladenoeffnungszeiten/ladenoeffnungszeiten-in-berlin-152543.php'
    ],
    coords: { lat: 52.527, lng: 13.378 },
    editorial_score: 8
  },

  {
    id: 10,
    slug: 'machines-and-trains',
    title: 'Machines, Trains and Experiments',
    area: 'Kreuzberg',
    tagline: 'Locomotives, windmills, 150 experiments, and a park next door with a dog run.',
    intro: 'The Deutsches Technikmuseum at Gleisdreieck is vast: locomotives in the old rail yard, windmills in the museum park, and across the road the Science Center Spectrum with about 150 hands-on experiment stations, all on one ticket. Under-18s are free. Park am Gleisdreieck wraps around it with an official off-leash area, so one adult can run the dog while the other runs the child, then swap. The strongest bad-weather outing in the set.',
    stops: [
      { name: 'U Gleisdreieck', note: 'The U2 stops here. The museum entrance is on Trebbiner Str. 9, Spectrum at Möckernstr. 26.' },
      { name: 'Technikmuseum main halls', note: 'Tue to Fri 09:00 to 17:30, Sat and Sun 10:00 to 18:00, last entry 17:00. Adults €15 online or €17 at the desk. Elle is free but needs a €0 ticket issued. Photography and Chemistry galleries shut for renovation.' },
      { name: 'Museumspark', note: 'Windmills, locomotives and the rail yard outdoors, inside the ticketed grounds. Eating is allowed here and there are picnic areas; food is banned in the halls. Dog status unverified, assume no.' },
      { name: 'Science Center Spectrum', note: 'Möckernstr. 26, on the same ticket. Around 150 experiment stations. Queues with school-age kids on Sundays.' },
      { name: 'Park am Gleisdreieck Westpark', note: 'The off-leash area is south of the U2 between the beach volleyball and the ICE line. Elsewhere leashed, off the playgrounds, ball courts, lawns and out of the water features.' },
      { name: 'Viaducts and skate bowl', note: 'The old elevated rail lines and the bowl. A good two-hour dog outing on its own with no museum at all.' },
      { name: 'Café Eule', note: 'Bülowstr. 69a in the western half of the park. Feb to end of October daily 09:30 to 20:00, weekends only Nov to Jan. Fire bowls and roasted bread in the cold months.' }
    ],
    duration_hours: [4, 6],
    energy: 'normal',
    travel: {
      minutes: 32,
      how: 'Tram M4 from Hufelandstr. to Alexanderplatz, then U2 direct to Gleisdreieck. Roughly 30 to 35 minutes with one change; an estimate from the network, not a journey-planner time.',
      lines: ['M4', 'U2']
    },
    cost: {
      min: 16, max: 69,
      note: 'Two adults €30 online or €34 at the desk, Elle free with a €0 ticket. Free for everyone from 13:00 on the first Friday of the month. Park only is transport alone.'
    },
    tags: ['museum', 'science', 'park', 'playground'],
    kid: { score: 3, note: 'About 150 experiments she can put her hands on, locomotives to climb around outside, and she gets in free.' },
    dog: {
      verdict: 'workable',
      note: 'The museum bans dogs indoors except guide and service dogs, and the FAQ is silent on the outdoor Museumspark, which sits inside the ticketed grounds. Park am Gleisdreieck next door is named by the Senate as a designated dog exercise area. Café Eule is an outdoor café inside that park; its own policy is not stated.',
      banned_stops: ['Technikmuseum main halls', 'Museumspark', 'Science Center Spectrum'],
      workaround: 'One adult does the off-leash park with Pepper while the other takes Elle through Spectrum, then swap. The museum and the park are adjacent, so the split works. Phone +49 30 439 734 0 if you want a ruling on the Museumspark.'
    },
    weather: {
      indoor_share: 0.7,
      rain_ok: true,
      fallback: 'The museum is the fallback. Rain only costs you the Museumspark and the Gleisdreieck run.',
      wind_sensitive: false
    },
    days: {
      best: ['sun', 'sat', 'fri'],
      avoid: ['mon'],
      note: 'Shut Mondays. First Friday of the month free from 13:00. Weekends open 10:00 to 18:00, the longest afternoon.'
    },
    sunday: { score: 2, note: 'Longest hours of the week, but the busiest day and the Spectrum stations queue with school-age kids; Café Eule and the museum restaurants cover food.' },
    season: {
      best_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      notes: 'Museum hours are unchanged all year. Café Eule drops to weekends only from November to January. The park is open around the clock.',
      closed_ranges: []
    },
    opening: [
      { place: 'Deutsches Technikmuseum and Science Center Spectrum', hours: 'Tue to Fri 09:00 to 17:30; Sat, Sun and holidays 10:00 to 18:00; last entry 17:00', closed: 'Mondays', price: 'Adult €15 online, €17 at the desk; reduced €9 or €11; under 18 free with a €0 ticket; one ticket covers both buildings', booking: 'Online saves €2 per ticket; free from 13:00 on the first Friday of the month' }
    ],
    food: [
      { name: 'Café Eule', where: 'Bülowstr. 69a, Park am Gleisdreieck', note: 'Feb to end of October daily 09:30 to 20:00, weekends only Nov to Jan. Outdoor seating, vintage tables, a children\'s play area, fire bowls in the cold. Dog policy not stated.', dog_outdoor: true },
      { name: 'Technikmuseum restaurants', where: 'On site', note: 'Open during museum hours.', dog_outdoor: false },
      { name: 'Bring your own', where: 'Museumspark', note: 'The museum permits eating in the park and has picnic areas; no food in the halls.', dog_outdoor: false }
    ],
    guide_notes: [
      'The under-18 rule makes this the cheapest big museum day in Berlin for a family, but the €0 ticket is not automatic. Get one for Elle or you get sent back to the desk.',
      'The €2 on-site surcharge is per ticket, not per transaction. Two adults at the door pay €34 for the same visit that costs €30 online.',
      'The first Friday of the month is free from 13:00. That is the day to try the museum with no commitment.'
    ],
    warnings: [
      'Do not assume the dog can come into the Museumspark because it is outdoors. It is inside the ticketed grounds and the FAQ does not clear it.',
      'Last entry is 17:00 on weekdays even though the doors say 17:30.',
      'Monday.'
    ],
    sources: [
      'https://technikmuseum.berlin/besuch/',
      'https://technikmuseum.berlin/besuch/tickets/',
      'https://technikmuseum.berlin/en/visit/faq/',
      'https://www.berlin.de/senuvk/umwelt/stadtgruen/gruenanlagen/de/nutzungsmoeglichkeiten/hundefreilauf/',
      'https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/strassen-und-gruenflaechenamt/gruenflaechen/gruenanlagen/artikel.146176.php',
      'https://www.visitberlin.de/en/cafe-eule-gleisdreieck-park'
    ],
    coords: { lat: 52.499, lng: 13.375 },
    editorial_score: 8
  }
];
