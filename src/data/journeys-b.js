// Journeys 11 to 20. Facts from the September 2026 research pass; anything the
// research could not confirm is left out or marked unverified in the text.

export const journeysB = [
  {
    id: 11,
    slug: 'lake-town',
    title: 'Berlin Becomes a Lake Town',
    area: 'Köpenick and Müggelsee',
    tagline: 'Old town cobbles, a Baroque palace on an island, then the biggest lake in the city.',
    intro: 'Köpenick is older than Berlin and still acts like a separate town, with its own island palace and a town hall famous for being robbed by a cobbler in a captain\'s uniform. Ten minutes further east the city simply stops and the Müggelsee begins. This is the outing that shows Elle that Berlin has a coast. It is also a real trip, 50 to 70 minutes each way, so pick two or three stops and do them properly.',
    stops: [
      { name: 'Köpenick old town', note: 'Alt-Köpenick and the Rathaus. In 1906 Wilhelm Voigt, a cobbler in a bought captain\'s uniform, marched real soldiers in here, seized the treasury and arrested the mayor. Tell her the story on the tram.' },
      { name: 'Schloss Köpenick', note: 'The Kunstgewerbemuseum on the Schlossinsel. Grounds are free public green space; inside it is decorative arts, not a children\'s museum. Apr to Sep Wed to Fri 11:00 to 17:00, Sat and Sun to 18:00. Shut Mon and Tue.' },
      { name: 'Friedrichshagen and Bölschestraße', note: 'Two S3 stops on. A café street that comes alive at weekends, and the walk down to the Müggelsee waterfront.' },
      { name: 'Müggelsee shore path', note: 'Leashed dog, flat path, big water. Do not promise Pepper a swim here; no designated dog bathing spot on the Müggelsee could be verified.' },
      { name: 'Kutzker Linie 6 boat', note: 'Circular lake tour from Friedrichshagen calling at Neu-Helgoland, Müggelseeperle and Rübezahl. Departures 10:30, 11:45, 13:00, 14:15, 15:30, 16:45, 18:00. Cash only, on board. Season ends 11 October.' },
      { name: 'Rübezahl am Müggelsee', note: 'Lakeside beer garden and fish hut with its own Linie 6 landing. Open year-round. The natural place to get off the boat and sit down.' },
      { name: 'Müggelturm', note: 'Optional. 126 steps up a 30 m tower for views up to 60 km on a clear day. Listed 10:00 to 16:00 daily; winter hours unverified, phone ahead Oct to Mar. Needs a bus plus an uphill walk.' }
    ],
    duration_hours: [5, 7],
    energy: 'adventure',
    travel: {
      minutes: 60,
      how: 'Tram or walk to S Prenzlauer Allee, Ring to Ostkreuz, S3 to Köpenick, then a tram into the old town. Friedrichshagen is two more S3 stops. Budget 60 to 70 minutes door to lake shore. No direct line.',
      lines: ['S41', 'S8', 'S3']
    },
    cost: {
      min: 16, max: 70,
      note: 'Schloss €16 for two adults, child free. Müggelturm €15 for the three of you. Kutzker fares unverified and cash only, so carry notes. Free if you stick to the old town, the shore and the F12 ferry.'
    },
    tags: ['lake', 'water', 'royal', 'views', 'museum'],
    kid: { score: 2, note: 'The Hauptmann von Köpenick story, the boat and the tower carry it; the museum itself does nothing for her.' },
    dog: {
      verdict: 'great',
      note: 'The whole spine is outdoors: cobbles, island grounds, waterfront, shore path, beer garden. Leashed throughout. The verified dog swim water is Langer See by Wendenschloss, tolerated rather than designated, and not the Strandbad Grünau.',
      banned_stops: ['Schloss Köpenick'],
      workaround: 'One adult walks the Schlossinsel grounds with Pepper while the other takes Elle inside, or skip the interior. Dog policy on the Kutzker boat is unverified; ask at the landing before you build the day around it.'
    },
    weather: {
      indoor_share: 0.15,
      rain_ok: false,
      fallback: 'Schloss Köpenick, which is small and shut Mon and Tue. In steady rain the trip out is not worth it.',
      wind_sensitive: true
    },
    days: {
      best: ['sun', 'sat'],
      avoid: ['mon', 'tue'],
      note: 'Schloss Köpenick shut Mon and Tue all year. Kutzker does not sail Mondays from 1 Sep to 11 Oct. Ratskeller shut Mondays.'
    },
    sunday: { score: 3, note: 'Best day for this one: longest Schloss hours in summer, boats run, Bölschestraße is at its liveliest, and bakeries cover Sunday food until 16:00.' },
    season: {
      best_months: [4, 5, 6, 7, 8, 9, 10],
      notes: 'Kutzker boats stop 11 October 2026. From October the Schloss drops to Thu to Sun 11:00 to 17:00. Müggelturm winter hours unconfirmed. Rübezahl stays open all year and runs an ice rink Nov to Mar. The F12 ferry runs year-round.',
      closed_ranges: [
        { from: '2026-10-12', to: '2027-03-31', what: 'No Kutzker boats on the Müggelsee; 2027 start date not yet published', effect: 'downgrade' }
      ]
    },
    opening: [
      { place: 'Schloss Köpenick', hours: 'Apr to Sep Wed to Fri 11:00 to 17:00, Sat and Sun 11:00 to 18:00; Oct to Mar Thu to Sun 11:00 to 17:00', closed: 'Mon and Tue', price: 'Adult €8, under 18 free', booking: null },
      { place: 'Müggelturm', hours: '10:00 to 16:00 daily (winter hours unverified)', closed: 'none listed', price: 'Adult €6, reduced €3', booking: null },
      { place: 'Kutzker Linie 6', hours: '1 Sep to 11 Oct Tue to Sun, first sailing 10:30, last 18:00', closed: 'Mondays outside June to August; season ends 11 Oct', price: 'Unverified, cash only on board', booking: null },
      { place: 'BVG ferry F12 Grünau to Wendenschloss', hours: 'Year-round', closed: 'none', price: 'Normal BVG ticket', booking: null }
    ],
    food: [
      { name: 'Ratskeller Köpenick', where: 'Alt-Köpenick 21', note: 'Tue to Sun 12:00 to 22:00, kitchen break 16:00 to 17:00, closed Mon. Smoked pork knuckle named for Wilhelm Voigt. Reservations advised.', dog_outdoor: false },
      { name: 'Rübezahl am Müggelsee', where: 'Müggelheimer Damm 143', note: 'Open year-round, beer garden and bistro right on the shore, bus 169 or the Linie 6 landing. Dog policy unverified but it is an open lakeside garden.', dog_outdoor: true }
    ],
    guide_notes: [
      'The F12 is a BVG line, not an excursion. Your AB ticket covers the Dahme crossing between Grünau and Wendenschloss, the oldest BVG ferry route, running since before the war. Guidebooks sell a €25 cruise from Treptow and never mention it.',
      'Kutzker takes cash only, on board. There is no ticket office. Arrive card-only and you watch the 14:15 leave.',
      'Voigt\'s 1906 stunt is why the town hall is famous. Get the story in first; the Ratskeller even names a dish after him.'
    ],
    warnings: [
      'After 11 October there is no boat on the lake.',
      'Monday or Tuesday means a locked palace.',
      'This is a 50 to 70 minute trip each way with changes, not a hop. Pick two stops.',
      'No verified dog swimming on the Müggelsee. Langer See is the tolerated option.'
    ],
    sources: [
      'https://www.smb.museum/museen-einrichtungen/schloss-koepenick/besuch-planen/',
      'https://www.smb.museum/en/museums-institutions/schloss-koepenick/plan-your-visit/prices-tickets/',
      'https://www.berlin.de/en/attractions-and-sights/3560054-3104052-mueggelturm.en.html',
      'https://www.reederei-kutzker.de/fahrplan/linie-6/',
      'https://www.berlin.de/en/public-transportation/ferries/1826182-7322324-ferry-f12.en.html',
      'https://ruebezahl-berlin.de/',
      'https://ratskeller-koepenick.de/',
      'https://www.diehundezeitung.com/baden-mit-hund-in-berlin/'
    ],
    coords: { lat: 52.445, lng: 13.62 },
    editorial_score: 7
  },

  {
    id: 12,
    slug: 'peacocks-on-an-island',
    title: 'Peacocks on an Island',
    area: 'Wannsee and Pfaueninsel',
    tagline: 'A ferry, a white fairy-tale palace and peacocks loose in the woods.',
    intro: 'Pfaueninsel is a Prussian king\'s private fantasy on an island in the Havel: a palace built to look like a ruin, a dairy dressed as an abbey, and peacocks that wander the paths. Berlin\'s oldest ferry, running since 1821, takes you across in a few minutes. The palace restoration finished in May 2025, so the whole thing is open again. It is the best single day out of the twenty and it is a full day, not a half, because the journey is 75 to 90 minutes each way.',
    stops: [
      { name: 'Ferry house on the mainland', note: 'Buy the palace ticket here, before you cross. It is sold nowhere else and cannot be booked ahead. Ticket machines take cards or coins, not banknotes.' },
      { name: 'Ferry Luise', note: 'Departs at :15, :35 and :55 past the hour. Carries 150, so Sunday queues build from 11:00. Aim for the 10:15 or 10:35.' },
      { name: 'Schloss Pfaueninsel', note: 'Two white towers joined by a bridge. Apr to Oct Tue to Sun 10:00 to 17:30, closed Mondays, closed entirely Nov and Dec. Adult €8; child rate unverified.' },
      { name: 'Meierei', note: 'The dairy built as a ruined abbey at the far end of the island. About €2, per a third-party listing.' },
      { name: 'Island paths and peacocks', note: '67 hectares of landscape park. Stay on the paths, no bikes, no swimming, no picnic blankets in the meadows. The peacocks come to you.' },
      { name: 'Havel shore to Nikolskoe', note: 'Back on the mainland, a leashed forest path along the water to the Blockhaus Nikolskoe terrace. This is the dog leg of a split party.' },
      { name: 'Wirtshaus Moorlake', note: 'Lakeside garden a little further along the shore, Wed to Sun 11:00 to 24:00. Alternative meeting point.' }
    ],
    duration_hours: [6, 8],
    energy: 'adventure',
    travel: {
      minutes: 80,
      how: 'S-Bahn from Prenzlauer Allee round the Ring, change to the S1 or S7 for S Wannsee, then bus 218 to the Pfaueninsel terminus. Two changes. The 218 runs roughly hourly and is the constraint, not the S-Bahn. Check the last return bus before you cross.',
      lines: ['S41', 'S42', 'S1', 'S7', '218']
    },
    cost: {
      min: 28, max: 70,
      note: 'Ferry family card €12 covers the crossing and island admission for all three. Palace €8 per adult, child rate unverified. Meierei about €2 each. BVG tickets are not valid on the ferry.'
    },
    tags: ['island', 'royal', 'water', 'nature', 'forest'],
    kid: { score: 3, note: 'Peacocks, a boat, a castle with towers and a fake ruin; the catch is a strict stay-on-the-path rule that will frustrate a child who wants to run.' },
    dog: {
      verdict: 'no',
      note: 'Dogs are banned from the island outright under the SPSG Parkordnung, alongside bikes. You will be turned back at the ferry house after a 75-minute journey. Strandbad Wannsee bans animals too.',
      banned_stops: ['Ferry Luise', 'Schloss Pfaueninsel', 'Meierei', 'Island paths and peacocks'],
      workaround: 'Split the party. One adult and Elle take the ferry; the other walks Pepper, leashed, along the Havel shore to Moorlake and Nikolskoe and everyone meets there, with bus 218 linking both ends. For a proper dog day on the same S-Bahn line, the Wannsee-Düppel forest dog area has mapped off-leash zones and tolerated water access, and the Grunewald area between Schlachtensee and Krumme Lanke is the largest urban off-leash zone in Europe.'
    },
    weather: {
      indoor_share: 0.1,
      rain_ok: false,
      fallback: null,
      wind_sensitive: true
    },
    days: {
      best: ['sat', 'sun'],
      avoid: ['mon'],
      note: 'Palace shut Mondays. Blockhaus Nikolskoe and Moorlake shut Mon and Tue. A Monday out here gets you a locked palace and two locked restaurants.'
    },
    sunday: { score: 2, note: 'Everything is open but this is the Berlin Sunday excursion and the ferry holds 150, so take the first crossing and carry your own lunch from a bakery.' },
    season: {
      best_months: [4, 5, 6, 7, 8, 9, 10],
      notes: 'The ferry runs all year. 1 Mar to 31 Oct daily 10:00 to 18:00, last crossing 17:15. 1 Nov to 28 Feb daily 10:00 to 16:00, last crossing 15:15. Palace closed Nov and Dec. Nikolskoe runs goose menus 1 Nov to 20 Dec.',
      closed_ranges: [
        { from: '2026-11-01', to: '2026-12-31', what: 'Schloss Pfaueninsel closed for the winter; ferry and island still run 10:00 to 16:00', effect: 'downgrade' }
      ]
    },
    opening: [
      { place: 'Pfaueninsel ferry and island', hours: '1 Mar to 31 Oct daily 10:00 to 18:00; 1 Nov to 28 Feb daily 10:00 to 16:00; 1 Jan 11:00 to 16:00. Last crossing 45 min before closing', closed: 'none', price: 'Single €6, reduced €5, family card €12 (2 adults + up to 4 children)', booking: 'Buy online in advance to skip the pier queue. BVG tickets not valid.' },
      { place: 'Schloss Pfaueninsel', hours: 'Apr to Oct Tue to Sun 10:00 to 17:30', closed: 'Mondays; all of Nov and Dec', price: 'Adult €8, reduced €6', booking: 'Same-day only, at the mainland ferry house. Not sold on the island, not sold ahead.' }
    ],
    food: [
      { name: 'Blockhaus Nikolskoe', where: 'On the Havel between Wannsee and Potsdam', note: 'Wed, Thu, Sun 12:00 to 18:00; Fri and Sat 12:00 to 20:00; closed Mon and Tue. Terrace on the water. Dog policy unverified.', dog_outdoor: true },
      { name: 'Wirtshaus Moorlake', where: 'Moorlakeweg 6', note: 'Wed to Sun 11:00 to 24:00, closed Mon and Tue, warm kitchen all day. Lakeside garden. Dog policy unverified.', dog_outdoor: true },
      { name: 'Bring your own', where: 'The island', note: 'No shops out here at all. Bakery before you leave (Sun to 16:00) or a station. A sandwich on a bench, not a blanket in a meadow.', dog_outdoor: false }
    ],
    guide_notes: [
      'The palace ticket is sold only at the mainland ferry house, on the day. Cross without one and you are looking at a building you cannot enter, with a 20-minute ferry round trip to fix it.',
      'The ferry runs all winter. The idea that it stops for the season is the most common Pfaueninsel mistake. What stops is the palace, and the last crossing moves to 15:15 from 1 November.',
      'A restoration finished in May 2025, so anything older than that describing a closed palace is out of date.'
    ],
    warnings: [
      'No dogs, no bikes. Verified in the Parkordnung.',
      'Last crossing back is 45 minutes before closing: 17:15 until 31 October, 15:15 from 1 November.',
      'The 218 is hourly and the last runs are earlier than you would guess. Check the return before you cross.',
      'Monday: palace, Nikolskoe and Moorlake all shut.'
    ],
    sources: [
      'https://www.spsg.de/schloesser-gaerten/objekt/pfaueninsel/',
      'https://www.spsg.de/schloesser-gaerten/objekt/schloss-pfaueninsel/',
      'https://www.spsg.de/schloesser-gaerten/unterwegs-im-gartendenkmal/parkordnung/parkordnung-pfaueninsel',
      'https://www.berlin.de/en/public-transportation/ferries/1828176-7322324-ferry-pfaueninsel.en.html',
      'https://www.museumsportal-berlin.de/en/museums/schloss-und-park-pfaueninsel/',
      'https://www.bvg.de/en/connections/route-overview/218',
      'https://blockhaus-nikolskoe.de/',
      'https://www.berlin.de/forsten/_assets/walderlebnis/hundeauslauf-im-wald/hundeauslaufgebiet_wannsee_dueppel.pdf'
    ],
    coords: { lat: 52.435, lng: 13.13 },
    editorial_score: 9
  },

  {
    id: 13,
    slug: 'spy-station-in-the-forest',
    title: 'Spy Station in the Forest',
    area: 'Grunewald and Teufelsberg',
    tagline: 'A rubble mountain, a Cold War listening post and the highest point in Berlin.',
    intro: 'Teufelsberg is a hill made of bombed-out Berlin, 120 m high, with an abandoned American listening station on top that is now one of the largest street art sites in Europe. You walk 2 km through the Grunewald to get there and climb the last stretch on a private road. The domes, the view over the whole city and the operator\'s written welcome for dogs make it the strongest dog outing of the set. The main tower is closed unless you book the flashlight tour.',
    stops: [
      { name: 'S Grunewald', note: 'The only line here is the S7. Nothing to buy between the station and the gate, so carry food and water.' },
      { name: 'Forest walk to Teufelsbergchaussee', note: 'About 2 km, 30 minutes, gently rising through trees. Leash on; whether this stretch sits inside the Grunewald off-leash zone is unverified and the signs on site decide.' },
      { name: 'Access road climb', note: 'From the gravel car parks, about 10 minutes uphill on the private road. This is the actual climb. No parking on the road; cars get towed.' },
      { name: 'Tageskasse', note: 'Cash or card at the gate, or online. Last admission one hour before closing. Family ticket €27 for two adults and up to two children.' },
      { name: 'Radomes and street art', note: 'Self-guided. Stand under the domes, walk the painted floors. Uneven ground, broken glass and debris, so proper shoes and no running off.' },
      { name: 'Courtyard bar', note: 'Beer garden with the view. You can bring your own food and drink. Water and bowls for dogs at the bar.' }
    ],
    duration_hours: [5, 6],
    energy: 'adventure',
    travel: {
      minutes: 80,
      how: 'S42 anticlockwise from Prenzlauer Allee to Westkreuz, S7 one stop to Grunewald, then the 30-minute walk to the gate. About 50 minutes to the station, 80 to the top. Same again home.',
      lines: ['S42', 'S7']
    },
    cost: {
      min: 43, max: 62,
      note: 'Family ticket €27 plus transport. Guided tours are extra and their prices are unverified.'
    },
    tags: ['coldwar', 'streetart', 'views', 'forest', 'unusual'],
    kid: { score: 3, note: 'A spy station painted wall to wall with domes to stand under and the city at her feet; just not the inside of the big tower.' },
    dog: {
      verdict: 'great',
      note: 'The operator says four-legged guests are welcome: short leash, bring bags, water bowls at the bar. The forest approach is leash-on. Wild boar live here and are a real hazard at dawn and dusk.',
      banned_stops: [],
      workaround: null
    },
    weather: {
      indoor_share: 0.1,
      rain_ok: false,
      fallback: 'Nothing close. Jagdschloss Grunewald is 4 km south, Nov to Dec weekends only, assistance dogs only. In practice the fallback is the S7 back to Zoo.',
      wind_sensitive: true
    },
    days: {
      best: ['sun', 'sat', 'fri'],
      avoid: [],
      note: 'Open daily 11:00 until sunset, last entry an hour before. Public tours run mainly Fri to Sun. Closed all day 18 Sep 2026. Mondays and Tuesdays closed in Jan and Feb 2027.'
    },
    sunday: { score: 3, note: 'Best day for the tours and the busiest, so arrive at 11:00 when it opens.' },
    season: {
      best_months: [4, 5, 6, 7, 8, 9, 10],
      notes: 'Sep 11:00 to 20:00, Oct 11:00 to 19:00, Nov and Dec 11:00 to 16:30 with last entry 15:30 and sunset around 15:55. In winter be at the station by 13:00 or you get a rushed hour in fading light. Closes early on 25 and 26 Sep from 19:00.',
      closed_ranges: [
        { from: '2026-09-18', to: '2026-09-18', what: 'Teufelsberg closed all day', effect: 'exclude' },
        { from: '2026-12-24', to: '2026-12-24', what: 'Teufelsberg closed', effect: 'exclude' },
        { from: '2026-12-31', to: '2026-12-31', what: 'Teufelsberg closed', effect: 'exclude' },
        { from: '2027-01-01', to: '2027-02-28', what: 'Closed Mondays and Tuesdays', effect: 'downgrade' }
      ]
    },
    opening: [
      { place: 'Teufelsberg', hours: 'Daily 11:00 until sunset; Sep to 20:00, Oct to 19:00, Nov and Dec to 16:30. Last admission one hour before closing', closed: '18 Sep, 24 Dec, 31 Dec 2026; Mon and Tue in Jan and Feb 2027', price: 'Adult €12, child to 17 €5, family (2 adults + 2 children) €27, under 7 free', booking: 'None needed for a self-guided visit. The flashlight tour into the tower must be booked; price unverified.' }
    ],
    food: [
      { name: 'Teufelsberg courtyard bar', where: 'On site', note: 'Beer garden with the view. Bring-your-own food and drink allowed outside events. Water bowls for dogs.', dog_outdoor: true },
      { name: 'Paulsborn am Grunewaldsee', where: 'Hüttenweg 90', note: 'Former forester\'s house with garden seating over the lake, listed as open daily. It is on the far side of the forest, so a separate trip rather than a stop. Dog policy unverified.', dog_outdoor: true }
    ],
    guide_notes: [
      'The last hour before closing is the view, and in winter there is not one. Sunset moves from 18:46 at the start of October to 16:41 at the end. The outing changes character inside a single month.',
      'The site is a street art gallery in one direction only. Unauthorised spraying or stickering is treated as criminal damage and reported every time.',
      'Strollers, walkers and wheelchairs are not allowed on the tours, and the tours are not barrier-free.'
    ],
    warnings: [
      'Turning up in the last 90 minutes and being refused at the gate.',
      '18 September 2026 it is shut all day.',
      'The main dome is off limits without a booked flashlight tour.',
      'Broken glass and rubble underfoot. Real shoes, not sandals.'
    ],
    sources: [
      'https://www.teufelsberg-berlin.de/besuch/oeffnungszeiten-preise/',
      'https://www.teufelsberg-berlin.de/besuch/wichtige-informationen/',
      'https://www.teufelsberg-berlin.de/besuch/anreise/',
      'https://www.teufelsberg-berlin.de/besuch/',
      'https://www.teufelsberg-berlin.de/fuehrungen/',
      'https://berliner-hundeauslaufgebiete.de/index.php/hundeauslaufgebiet-grunewald.html',
      'https://www.spsg.de/schloesser-gaerten/objekt/jagdschloss-grunewald/'
    ],
    coords: { lat: 52.498, lng: 13.241 },
    editorial_score: 8
  },

  {
    id: 14,
    slug: 'the-other-old-berlin',
    title: 'The Other Old Berlin',
    area: 'Spandau',
    tagline: 'A Renaissance fortress with a moat, a tower and 10,000 bats.',
    intro: 'Spandau was its own city until 1920 and still says so. The Zitadelle is a complete 16th-century fortress you enter over water, with cannon in a hall, a tower to climb and a cellar full of bats, and it opens every day of the year. The Altstadt has Berlin\'s oldest townhouse and a stretch of 14th-century wall almost nobody walks to. It is the most rain-proof outing of the twenty and the cross-city trip is the price.',
    stops: [
      { name: 'Gotisches Haus', note: 'Breite Straße 32, right at U Altstadt Spandau. 15th century, net-rib vault on the ground floor, tourist office and a gallery. Hours and price unverified; ask inside.' },
      { name: 'Rathausvorplatz market', note: 'Carl-Schurz-Str. Wednesday 08:00 to 18:00 and Saturday 08:00 to 16:00, with food stalls. Never on Sunday.' },
      { name: 'Behnitz and Kolk', note: 'Three minutes from the market square: narrow lanes, half-timbered houses, a 14th-century town wall at Hoher Steinweg, a tower rebuilt in 1986, and St. Marien am Behnitz from 1848.' },
      { name: 'Havel promenade', note: 'Plain riverside walk between the old town and the fortress. Leashed dog, no rules to think about.' },
      { name: 'Zitadelle Spandau', note: 'Daily 10:00 to 17:00, last entry 16:30, open 365 days. Family ticket €10 covers the Julius Tower, the Exerzierhalle cannon, the removed Berlin monuments in Enthüllt, and the Fledermauskeller 12:00 to 17:00. Courtyard is mostly cobbles.' },
      { name: 'Zita Café', note: 'Through the main gate and immediately right. Outdoor seating against the fortress walls, dogs welcome outside.' },
      { name: 'Brauhaus Spandau', note: 'Neuendorfer Straße 1. Beer garden for 400, open year-round with a winter tent. Apr to Oct from 10:00, Nov to Mar from 11:00.' }
    ],
    duration_hours: [4, 6],
    energy: 'normal',
    travel: {
      minutes: 60,
      how: 'S42 from Prenzlauer Allee to Westkreuz, then S3 or S9 to Berlin-Spandau. U7 one stop to Altstadt Spandau or a 10-minute walk. The Zitadelle has its own U7 stop. A regional train from Friedrichstraße or Hauptbahnhof is faster if you catch one.',
      lines: ['S42', 'S3', 'S9', 'U7']
    },
    cost: {
      min: 26, max: 49,
      note: 'Zitadelle family ticket €10, audio guide €2 each. Everything else on the route is free street.'
    },
    tags: ['history', 'museum', 'unusual', 'market', 'neighbourhood'],
    kid: { score: 3, note: 'A fortress over a moat, a tower to climb, cannon, and bats in a cellar; hard to beat at nine.' },
    dog: {
      verdict: 'workable',
      note: 'Streets, lanes and the river are easy. The Zitadelle only documents assistance dogs, yet its own café inside the walls welcomes dogs outdoors, so the grounds are reachable. The Julius Tower and the bat cellar, a protected roost, are the likely hard no.',
      banned_stops: ['Zitadelle Spandau'],
      workaround: 'Phone the Zitadelle first on 030 354 944 297. Then plan for one adult to sit at Zita Café with Pepper while the other takes Elle up the tower and into the cellar, and swap.'
    },
    weather: {
      indoor_share: 0.6,
      rain_ok: true,
      fallback: 'The Zitadelle itself: five museums inside the walls, plus the Gotisches Haus in the Altstadt.',
      wind_sensitive: false
    },
    days: {
      best: ['sat', 'thu'],
      avoid: [],
      note: 'Fortress open every day. Thursday to 20:00 per visitSpandau and the café, though the operator page says 17:00, so confirm if it matters. Markets Wed and Sat only. Guided tours Sat and Sun 14:00, English on the first Sunday.'
    },
    sunday: { score: 2, note: 'Fortress open with a 14:00 tour, but both markets and every Altstadt shop are shut; food is the café, the Brauhaus or the station shops.' },
    season: {
      best_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      notes: 'Nothing on access changes in winter. The bat cellar is fullest Nov to Mar, which is a gain. The Havelländischer farmers market at Markt 3 drops to Tue and Fri only Jan to Mar. Open-air stage May to Sep. December Christmas market in the Altstadt, 2026 dates unverified.',
      closed_ranges: []
    },
    opening: [
      { place: 'Zitadelle Spandau', hours: 'Daily 10:00 to 17:00, last entry 16:30; Thursday to 20:00 per two sources, unconfirmed by the operator', closed: 'none, open 365 days', price: 'Adult €4.50, child 6 to 14 €2.50, family (2 adults + up to 3 children) €10, under 6 free, audio guide €2', booking: null }
    ],
    food: [
      { name: 'Zita Café und Weingarten', where: 'Am Juliusturm 64, inside the Zitadelle', note: 'Mon to Wed 10:00 to 17:00, Thu 13:00 to 20:00, Fri to Sun 10:00 to 17:00, seasonal variation. Dogs welcome outdoors, in writing.', dog_outdoor: true },
      { name: 'Brauhaus Spandau', where: 'Neuendorfer Straße 1', note: 'Apr to Oct daily from 10:00, Nov to Mar from 11:00, weekday lunch 11:30 to 15:30. Year-round beer garden. Dog policy unverified.', dog_outdoor: true },
      { name: 'Market stalls', where: 'Rathausvorplatz', note: 'Wednesday and Saturday only.', dog_outdoor: true }
    ],
    guide_notes: [
      'Thursday is the long day, to 20:00, and in winter the only way to see the fortress lit against a dark sky. The operator\'s own page does not mention it.',
      'The Kolk is three minutes from the market square and almost nobody walks it. The wall fragment at Hoher Steinweg is 14th century; the tower behind the houses is a 1986 rebuild on excavated foundations.',
      'Alte Kolkschänke still appears in guidebooks. It closed for good in 2013.'
    ],
    warnings: [
      'No market on Sunday, and no Havelländischer market on Mon or Thu from January to March.',
      'Do not assume the Julius Tower will take the dog.',
      'Julius Tower and the Commander\'s House are not wheelchair accessible; the courtyard is cobbles.'
    ],
    sources: [
      'https://www.zitadelle-berlin.de/besucherinfo/',
      'https://www.zitadelle-berlin.de/barrierefreiheit/',
      'https://www.visitspandau.de/kiek-ma-/kunst-und-kultur/zitadelle/',
      'https://www.visitspandau.de/kiek-ma-/altstadt-zitadelle/behnitz-kolk/',
      'https://www.visitspandau.de/kiek-ma-/altstadt-zitadelle/maerkte/spandauer-wochenmarkt',
      'https://zita-cafe.de/?lang=de',
      'https://brauhaus-spandau.de/restaurant/',
      'https://www.spandau-tourist-info.de/alte-kolkschaenke-behnitz/'
    ],
    coords: { lat: 52.538, lng: 13.205 },
    editorial_score: 8
  },

  {
    id: 15,
    slug: 'village-inside-neukoelln',
    title: 'Village Inside Neukölln',
    area: 'Rixdorf',
    tagline: 'An 18th-century Bohemian village hiding behind a six-lane shopping street.',
    intro: 'Step off Karl-Marx-Straße and within 300 m you are in a village founded by Bohemian religious refugees in 1737: cobbles, old lamps, front gardens and the oldest working forge in Berlin. Ten minutes further is Körnerpark, a formal sunken garden you descend into, with a free gallery. It is the shortest trip of the set and the lowest-risk Sunday, and it is mostly an adult pleasure unless you land on a museum Sunday or the December market.',
    stops: [
      { name: 'Rixdorfer Wochenmarkt', note: 'Karl-Marx-Platz, 300 m from Richardplatz. Wednesday 11:00 to 18:00, Saturday 08:00 to 15:00. Small and calm. Not Sundays.' },
      { name: 'Richardplatz and the Rixdorfer Schmiede', note: 'The smithy at Richardplatz 2 has worked since 1624. You can watch the smith during events and the Christmas market.' },
      { name: 'Böhmisches Dorf lanes', note: 'Kirchgasse and around. People live here and the lanes are their front gardens, so the district asks visitors to behave as guests. Say that to Elle before you go in.' },
      { name: 'Museum im Böhmischen Dorf', note: 'Kirchgasse 5, two rooms in a 1753 house. Thursdays 14:00 to 17:00 and the first and third Sunday 12:00 to 14:00. That is the whole schedule. Price unverified.' },
      { name: 'Bethlehemskirche and Comenius-Garten', note: 'The village church and a small philosophical garden on the way south.' },
      { name: 'Körnerpark', note: 'A sunken garden with lawns and parterres, lower than the streets around it. Stay on the paths with the dog.' },
      { name: 'Galerie im Körnerpark', note: 'Schierker Straße 8. Daily 10:00 to 20:00, free. Current show runs to 7 Oct 2026. Ramp entry from Wittmannsdorfer Straße.' }
    ],
    duration_hours: [3, 4],
    energy: 'easy',
    travel: {
      minutes: 40,
      how: 'S41 clockwise from Prenzlauer Allee straight to S Neukölln, then U7 one stop to Karl-Marx-Straße or walk. No change on the S-Bahn.',
      lines: ['S41', 'U7']
    },
    cost: {
      min: 16, max: 55,
      note: 'Gallery free, museum by donation with the price unverified. Add about €20 for two adults if you do KINDL as a rain plan (adult €10, reduced €7, child price unverified).'
    },
    tags: ['neighbourhood', 'history', 'park', 'market', 'unusual'],
    kid: { score: 2, note: 'The working forge and the strange sunken park save it; on the Christmas market weekend, with pony rides and oil lamps, it is a strong three.' },
    dog: {
      verdict: 'workable',
      note: 'Streets and lanes are easy and short. Körnerpark is a protected green space with the leash rule; a park-specific ban could not be confirmed either way. The museum is two rooms and the gallery is an art space, so someone stands outside for both.',
      banned_stops: ['Museum im Böhmischen Dorf', 'Galerie im Körnerpark'],
      workaround: 'One adult holds the lead; both indoor stops are ten-minute visits. Skip the Maybachufer market with Pepper, it is the biggest in the city.'
    },
    weather: {
      indoor_share: 0.2,
      rain_ok: false,
      fallback: 'Galerie im Körnerpark, free, daily 10:00 to 20:00. Or KINDL, Am Sudhaus 3, ten minutes away, Wed 12:00 to 20:00 and Thu to Sun 12:00 to 18:00, with a 20 m boiler hall and a café.',
      wind_sensitive: false
    },
    days: {
      best: ['sun', 'sat', 'thu'],
      avoid: [],
      note: 'Museum only on Thursday afternoons and the first and third Sunday. Market Wed and Sat. Everything else is open daily.'
    },
    sunday: { score: 3, note: 'Quiet streets, a free gallery, and on the first or third Sunday the museum opens for two hours; the shops on Karl-Marx-Straße are shut, which barely matters.' },
    season: {
      best_months: [4, 5, 6, 7, 8, 9, 10, 12],
      notes: 'Very little closes. Winter loses the planting in Körnerpark and the Sommer im Park concerts, which are Sundays in June only. The Alt-Rixdorfer Weihnachtsmarkt on Richardplatz is 4 to 6 December 2026, Fri 17:00 to 21:00, Sat 14:00 to 21:00, Sun 14:00 to 20:00, lit by oil lamps. If you do this once between October and March, do it then. Gallery shut 24, 25 and 31 Dec and 1 Jan.',
      closed_ranges: []
    },
    opening: [
      { place: 'Museum im Böhmischen Dorf', hours: 'Thu 14:00 to 17:00; first and third Sunday 12:00 to 14:00', closed: 'all other times', price: 'Unverified', booking: null },
      { place: 'Galerie im Körnerpark', hours: 'Daily 10:00 to 20:00', closed: '24, 25, 31 Dec, 1 Jan', price: 'Free', booking: null },
      { place: 'KINDL Zentrum für zeitgenössische Kunst', hours: 'Wed 12:00 to 20:00, Thu to Sun 12:00 to 18:00', closed: 'Mon, Tue, 24 and 25 Dec', price: 'Adult €10, reduced €7 or €4; child price unverified', booking: null }
    ],
    food: [
      { name: 'Café Rix', where: 'Karl-Marx-Straße 141, in the Heimathafen building', note: 'Sun 09:00 to 24:00, Sat 10:00 to 24:00, weekdays from 09:00. A grand old ballroom café with a courtyard beer garden. Dog policy unverified.', dog_outdoor: true },
      { name: 'Café im Körnerpark', where: 'Schierker Straße 8', note: 'Terrace onto the park. Operating through 2026, hours unverified.', dog_outdoor: true },
      { name: 'KINDL café and beer garden', where: 'Am Sudhaus 3', note: 'On the gallery schedule, Wed to Sun.', dog_outdoor: true }
    ],
    guide_notes: [
      'The museum opens for two hours, twice a month, plus Thursday afternoons. Get the Sunday right and the outing has a centre.',
      'Neukölln\'s district office asks visitors to treat the Böhmisches Dorf as someone\'s front garden: take your rubbish, keep the noise down.',
      'The forge at Richardplatz 2 is the oldest working smithy in Berlin and runs smithing courses.'
    ],
    warnings: [
      'A second or fourth Sunday means a closed door on Kirchgasse.',
      'Maybachufer market runs Tuesday and Friday only, and it is a 25-minute walk away. Not part of this route.',
      'Karl-Marx-Straße shops shut on Sunday.'
    ],
    sources: [
      'https://www.berlin.de/tourismus-neukoelln/entdecken/artikel.1152599.php',
      'https://www.rixdorf.info/rixdorf/museum-im-boehmischen-dorf/',
      'https://galerie-im-koernerpark.de/en',
      'https://www.diemarktplaner.de/rixdorf/',
      'https://www.deutsche-weihnachtsmaerkte.de/weihnachtsmarkt/in/berlin/alt-rixdorfer-weihnachtsmarkt-1475.html',
      'https://www.kindl-berlin.de/',
      'https://www.offen.net/berlin/cafe-rix-2AMNWS/'
    ],
    coords: { lat: 52.474, lng: 13.443 },
    editorial_score: 6
  },

  {
    id: 16,
    slug: 'elegant-schoeneberg',
    title: 'Elegant Schöneberg',
    area: 'Schöneberg',
    tagline: 'Café streets, a famous speech, a noon bell and 80 signs on lampposts.',
    intro: 'Schöneberg is the handsome West Berlin of Isherwood and Kennedy: Nollendorfplatz, the Winterfeldt market, the cafés on Goltzstraße and Akazienstraße, and the town hall where the Freedom Bell rings every day at noon. On its own that is an adult\'s walk. What turns it into Elle\'s walk is the flea market on the town hall square and a search for the 80 memorial signs hung three metres up in the Bayerisches Viertel. Closest and cheapest outing of the twenty.',
    stops: [
      { name: 'Nollendorfplatz', note: 'The only U-Bahn station with four lines, elevated hall from 1902, Art Nouveau dome restored 2002. A plaque honours homosexual victims of the Nazis; Isherwood lived here 1929 to 1933 and Cabaret comes from these streets.' },
      { name: 'Winterfeldtplatz market', note: 'Wednesday 08:00 to 14:00, Saturday 08:00 to 16:00, hot food stalls. Packed 10:00 to 13:00 on Saturdays. Closed on public holidays, including Saturday 3 October 2026.' },
      { name: 'Goltzstraße', note: 'Cafés and small shops running south. Shops shut Sundays, cafés do not.' },
      { name: 'Akazienstraße', note: 'The Akazienkiez. Café BilderBuch at number 28 is the best all-rounder and open to midnight.' },
      { name: 'Bayerisches Viertel', note: 'Around Bayerischer Platz: the Places of Remembrance, 80 aluminium signs on lampposts, a picture on one side and a real Nazi law from 1933 to 1945 on the back. Give Elle the job of finding them.' },
      { name: 'Rathaus Schöneberg', note: 'Kennedy spoke on these steps on 26 June 1963. The Freedom Bell rings for two minutes at noon daily, so be here at 11:55. Flea market on the square Saturday and Sunday 08:00 to 16:00, free. Tower access unverified.' }
    ],
    duration_hours: [3, 5],
    energy: 'easy',
    travel: {
      minutes: 35,
      how: 'U2 from Senefelderplatz or Alexanderplatz straight through to Nollendorfplatz. Alternative: S41 Ring to S Schöneberg, then U4 or a 10-minute walk. U4 Rathaus Schöneberg is 100 m from the town hall square.',
      lines: ['U2']
    },
    cost: {
      min: 16, max: 35,
      note: 'Nothing to pay beyond transport. Flea market entry is free. The Rathaus exhibition price is unverified.'
    },
    tags: ['neighbourhood', 'market', 'history', 'food'],
    kid: { score: 2, note: 'Handsome streets do nothing for her; the flea market, the noon bell and hunting the lamppost signs are what make it work.' },
    dog: {
      verdict: 'workable',
      note: 'Pavement the whole way, leashed, no forest or fortress rules. The only pinch is the Winterfeldt market on a Saturday between 10:00 and 13:00, when a small dog is underfoot.',
      banned_stops: [],
      workaround: 'Hit the market at 08:30 or after 14:00, or send one adult in. The town hall flea market is spread over an open square and easier with Pepper.'
    },
    weather: {
      indoor_share: 0.1,
      rain_ok: false,
      fallback: 'Café BilderBuch, Akazienstraße 28, open to midnight daily, with a library room. The Rathaus exhibition Wir waren Nachbarn if you can confirm its hours.',
      wind_sensitive: false
    },
    days: {
      best: ['sat', 'sun'],
      avoid: [],
      note: 'Winterfeldt market Wed and Sat only. Flea market Sat and Sun. Bell at noon every day. Sunday sees the Akazienkiez without its shops.'
    },
    sunday: { score: 3, note: 'Flea market open 08:00 to 16:00, bell at noon, every café open; only the shops and the Winterfeldt market are missing.' },
    season: {
      best_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      notes: 'Nothing closes Oct to Mar. The market publishes no winter change, and the flea market runs all year except two Sundays in November, Volkstrauertag and Totensonntag. What you lose is terrace weather.',
      closed_ranges: [
        { from: '2026-10-03', to: '2026-10-03', what: 'Winterfeldt market closed for German Unity Day, which is a Saturday', effect: 'downgrade' }
      ]
    },
    opening: [],
    food: [
      { name: 'Café BilderBuch', where: 'Akazienstraße 28', note: 'Mon to Sat 09:00 to 24:00, Sun 10:00 to 24:00. Street seating, reading café with a library room. Dog policy unverified.', dog_outdoor: true },
      { name: 'Café Berio', where: 'Maaßenstraße 7, by Nollendorfplatz', note: 'A Schöneberg institution with a big pavement terrace. Exact hours unverified.', dog_outdoor: true },
      { name: 'Winterfeldt market stalls', where: 'Winterfeldtplatz', note: 'Wednesday and Saturday, hot food.', dog_outdoor: true }
    ],
    guide_notes: [
      'The Places of Remembrance by Renata Stih and Frieder Schnock, 1993: 80 signs, 50 by 70 cm, 3 m up on lampposts around Bayerischer Platz. The artists refused to build one monument and scattered the laws across playgrounds and shopfronts instead. For a nine-year-old it is a hunt first and a lesson second.',
      'The Freiheitsglocke was a 1950 gift from American citizens. The signature lists that came with it are kept in a document chamber in the tower. On Sundays the noon peal goes out on Deutschlandradio Kultur.',
      'The market shuts on public holidays and names 3 October. In 2026 that is a Saturday, its biggest day.'
    ],
    warnings: [
      'Saturday at 15:00 for the Winterfeldt market is too late; it thins out well before the 16:00 close. Wednesday after 14:00 it is gone.',
      'Sunday for the Akazienkiez shops means every shop shut.',
      'Whether you can go up the Rathaus tower is unverified.'
    ],
    sources: [
      'https://winterfeldtplatz.winterfeldt-markt.de/257/oeffnungszeiten-winterfeldtmarkt-auf-dem-winterfeldtplatz/',
      'https://dasisstberlin.de/troedelmarkt-am-rathaus-schoeneberg/',
      'https://www.berlin.de/ba-tempelhof-schoeneberg/ueber-den-bezirk/historisches/artikel.362167.php',
      'https://en.wikipedia.org/wiki/Places_of_Remembrance',
      'https://en.wikipedia.org/wiki/Nollendorfplatz_(Berlin_U-Bahn)',
      'https://www.nochoffen.de/schoeneberg-cafe-bilderbuch',
      'https://www.ihk.de/berlin/service-und-beratung/recht-und-steuern/gewerberecht/ladenoeffnungszeiten-3770050'
    ],
    coords: { lat: 52.492, lng: 13.352 },
    editorial_score: 6
  },

  {
    id: 17,
    slug: 'monumental-park-on-the-spree',
    title: 'A Monumental Park on the Spree',
    area: 'Treptow',
    tagline: 'A 4 km riverside, a 12 m soldier on a mound, and a telescope Einstein spoke under.',
    intro: 'Treptower Park is one Ring train from home and holds three very different things: a long Spree promenade with boats for hire, the Soviet War Memorial, which is a cemetery for 7,000 soldiers as much as a monument, and the Archenhold observatory with the longest movable refractor on earth. Everything but the observatory is free, and the dog is welcome the whole way. If you do one dog outing this autumn, this is it.',
    stops: [
      { name: 'S Treptower Park', note: 'Straight off the Ring. The park starts at the station.' },
      { name: 'Hafen Treptow and the promenade', note: 'Puschkinallee 15 is where the Stern und Kreis boats leave. The 4 km promenade runs on from here. Fills with families on a sunny Sunday.' },
      { name: 'Soviet War Memorial', note: 'The Liberator statue is 12 m on a 30 m mound. The lawns between the sarcophagi are 32 mass graves. Walk the stone flanks, stay off the grass, short leash, no games.' },
      { name: 'Archenhold-Sternwarte', note: 'Inside the park. The Great Refractor of 1896 is a 130-tonne machine she can stand under. Sunday ticket office 13:00 to 18:30; Saturday from 12:00. Family ticket €31.50.' },
      { name: 'Abteibrücke and Insel der Jugend', note: 'Steel bridge to a small island with a seasonal beer garden, Tue to Fri from 14:00, Sat and Sun from 12:00.' },
      { name: 'Boat hire at the Abteibrücke', note: 'Rowing, paddle and pedal boats daily 10:00 to 20:00 in season. Prices unverified; budget €20 to €30 an hour. Sells out on the first warm day.' },
      { name: 'Zenner', note: 'Alt-Treptow 15, beer garden on the Spree with organic ice cream. Sunday 11:00 to 20:00, closed Fridays, card only.' }
    ],
    duration_hours: [3, 5],
    energy: 'normal',
    travel: {
      minutes: 25,
      how: 'S41 clockwise from Prenzlauer Allee direct to S Treptower Park, five stops via Ostkreuz. One train.',
      lines: ['S41']
    },
    cost: {
      min: 16, max: 67,
      note: 'Park, memorial and island are free. Archenhold family ticket €31.50 is optional. Boat hire unverified, budget €20 to €30 an hour.'
    },
    tags: ['park', 'water', 'history', 'science', 'playground'],
    kid: { score: 3, note: 'The Weltspielplatz has ziplines, there are pedal boats, and a 12 m soldier on a mound is genuinely startling at nine.' },
    dog: {
      verdict: 'great',
      note: 'Public park end to end, leashed, no grilling. No explicit dog ban is posted at the memorial, but it is a war cemetery: stone paths only. Stern und Kreis takes dogs up to 5 kg as lap dogs and larger ones only at the crew\'s discretion, so do not build the day around a cruise.',
      banned_stops: ['Archenhold-Sternwarte'],
      workaround: 'One adult waits in the park with Pepper; the observatory is an optional 45 minutes. Boat hire dog policy is unverified, ask at the pontoon.'
    },
    weather: {
      indoor_share: 0.15,
      rain_ok: false,
      fallback: 'Archenhold-Sternwarte inside the park, but on Sundays it opens only at 13:00, so a wet Sunday morning has no plan B here.',
      wind_sensitive: false
    },
    days: {
      best: ['sat', 'sun'],
      avoid: ['fri'],
      note: 'Zenner is shut Fridays. Archenhold ticket office is mornings only on weekdays, Sat 12:00 to 22:00, Sun 13:00 to 18:30.'
    },
    sunday: { score: 2, note: 'Busiest day of the week on the promenade and the boats sell out, so come early; Zenner is open and the observatory only from 13:00.' },
    season: {
      best_months: [4, 5, 6, 7, 8, 9, 10],
      notes: 'Boat hire and the island beer garden are warm-season and weather-dependent, assume gone or erratic from late October. Stern und Kreis cruises from Treptow are a summer product; the last 2026 sailing date is unverified. The memorial is better in winter, bare trees and no crowds.',
      closed_ranges: []
    },
    opening: [
      { place: 'Archenhold-Sternwarte', hours: 'Ticket office Mon to Wed 09:00 to 13:00; Thu 09:00 to 13:00 and 21:00 to 22:00; Fri 09:00 to 11:30 and 16:30 to 22:00; Sat 12:00 to 22:00; Sun 13:00 to 18:30', closed: 'none listed', price: 'Adult €12, reduced €8, family (2 adults + 3 children) €31.50', booking: null },
      { place: 'Rent a Boat, An der Abteibrücke', hours: 'Daily 10:00 to 20:00 in season', closed: 'winter, dates unverified', price: 'Unverified', booking: null },
      { place: 'Stern und Kreis Brückenfahrt C1', hours: 'Departures 11:15 and 15:15, about 3h15', closed: 'winter', price: 'From €35.50 adult, under 14 half price, under 6 free', booking: 'Optional, sells out on fine days' }
    ],
    food: [
      { name: 'Zenner', where: 'Alt-Treptow 15', note: 'Beer garden Sun 11:00 to 20:00, Sat 11:00 to 21:00, Mon to Thu 12:00 to 20:00, closed Fri. Kitchen from 12:00. Card only. Dog policy unverified.', dog_outdoor: true },
      { name: 'Insel der Jugend beer garden', where: 'On the island', note: 'Tue to Fri from 14:00, Sat and Sun from 12:00, seasonal and weather-dependent.', dog_outdoor: true },
      { name: 'Freischwimmer', where: 'Vor dem Schlesischen Tor 2', note: 'Waterside garden 20 minutes up the Spree. Weekdays from 12:00, Sat and Sun from 15:00 with brunch 10:00 to 14:00.', dog_outdoor: true }
    ],
    guide_notes: [
      'The memorial is a graveyard, not a monument. Around 7,000 men lie in 32 mass graves under the unmarked grass, protected by a 1992 German-Russian agreement. Berliners walk the stone flanks. Tell Elle that and she will too.',
      'Einstein first spoke publicly about general relativity in the Archenhold lecture hall in 1915. The Great Refractor, 21 m focal length, 680 mm lens, is still the longest fully movable refracting telescope on earth.'
    ],
    warnings: [
      'Zenner is closed Fridays and takes cards only.',
      'The Archenhold does not open until 13:00 on Sundays.',
      'Boats sell out fast on the first warm day.',
      'Pepper is probably over 5 kg, so a Stern und Kreis cruise is a maybe, not a plan.'
    ],
    sources: [
      'https://www.tip-berlin.de/ausfluege/parks/treptower-park/',
      'https://de.wikipedia.org/wiki/Sowjetisches_Ehrenmal_im_Treptower_Park',
      'https://www.planetarium.berlin/en/visit/archenhold-observatory',
      'https://zenner.berlin/info-kontakt/',
      'https://www.inselberlin.de/ueber-uns/',
      'https://www.sternundkreis.de/infos/faq/',
      'https://www.berliner-freizeit-tipps.de/boots-und-tretbootverleih-in-berlin-treptow/'
    ],
    coords: { lat: 52.488, lng: 13.47 },
    editorial_score: 8
  },

  {
    id: 18,
    slug: 'around-the-world-in-marzahn',
    title: 'Around the World in Marzahn',
    area: 'Gärten der Welt',
    tagline: 'A cable car over a hill, a glass-floored lookout and eleven gardens from four continents.',
    intro: 'On the eastern edge of the city, between the Marzahn tower blocks, a real gondola crosses a real hill to a park of Chinese, Japanese, Balinese, Korean and Islamic gardens with a maze in the middle. The cable car is the draw for Elle and it runs properly only until 1 November. The gardens ban dogs outright, but the hill, the lookout and the cable car sit in a free public park where Pepper can come, which almost nobody knows.',
    stops: [
      { name: 'U Kienberg (Gärten der Welt)', note: 'The U5 stop is named for the gardens. Walk into Kienbergpark from here; it is free and public.' },
      { name: 'Kienbergpark', note: 'Unrestricted public park around the hill, leashed dog fine. Summer gate hours for the plateau roughly 06:00 to 21:30, winter 07:30 to 19:30.' },
      { name: 'Seilbahn from the Kienbergpark station', note: 'Three stations: Kienbergpark, Wolkenhain mid-station, Gärten der Welt. Ticket offices shut 30 minutes before the last ride. Stops in strong wind.' },
      { name: 'Wolkenhain', note: 'Viewing platform at 120 m with a lift, glass floor, and the whole city. It is in the free park, not behind the turnstile.' },
      { name: 'Gärten der Welt', note: 'Daily from 09:00 to dusk, Japanese Garden from 10:00. Summer adult €9, child €4. No dogs, no bikes, no scooters, no kites, no glass.' },
      { name: 'Themed gardens and the maze', note: 'Balinese glasshouse, Chinese, Japanese, Korean, Oriental-Islamic, Christian and Jewish gardens plus the maze. Brazil and Thailand cabinets are shut for renovation.' },
      { name: 'Visitor centre', note: 'Daily from 10:00, closing 18:30 Mar to Oct and 16:00 Nov to Feb. The one roof on site.' }
    ],
    duration_hours: [4, 6],
    energy: 'normal',
    travel: {
      minutes: 45,
      how: 'S41 from Prenzlauer Allee to Frankfurter Allee, then U5 east to Kienberg (Gärten der Welt). Two legs.',
      lines: ['S41', 'U5']
    },
    cost: {
      min: 38, max: 85,
      note: 'Summer gardens only €22 for the three of you. Day-Combi with one cable car return €33.30. Flat-rate combi with unlimited rides €50. Winter gardens €10. Dog version, cable car only from Kienbergpark, about €20. No single-visit family ticket; the €90 family ticket is an annual pass.'
    },
    tags: ['park', 'views', 'unusual', 'nature'],
    kid: { score: 3, note: 'A gondola over a hill, a glass floor at the top and a maze; the gardens themselves are the bit she walks through to get to the next thing.' },
    dog: {
      verdict: 'no',
      note: 'The Parkordnung bans dogs and all other animals from the gardens, certified assistance dogs excepted, and Grün Berlin repeats it on the cable car page. The cable car itself does carry dogs, leashed and muzzled, both compulsory.',
      banned_stops: ['Gärten der Welt', 'Themed gardens and the maze', 'Visitor centre'],
      workaround: 'Build the day out of the free half. Ride the Seilbahn from Kienbergpark to the Wolkenhain and back with Pepper leashed and muzzled, no garden ticket needed, and walk Kienbergpark. Two adult returns plus one reduced is about €20, possibly plus a €1.50 surcharge that is unverified for dogs. Or one adult does the gardens with Elle while the other walks the park with the dog and they meet at the Wolkenhain station.'
    },
    weather: {
      indoor_share: 0.05,
      rain_ok: false,
      fallback: 'Only the visitor centre and the Balinese glasshouse. In real rain or wind, abandon and go elsewhere.',
      wind_sensitive: true
    },
    days: {
      best: ['sat', 'sun'],
      avoid: [],
      note: 'Gardens daily from 09:00 to dusk. Cable car daily 10:00 to 19:00 to end of September, 10:00 to 17:00 from 1 October to 1 November. Moon Festival Saturday 26 September 2026, 15:00 to 21:30, busy.'
    },
    sunday: { score: 2, note: 'The cable car queues on a sunny Sunday and its ticket office shuts 30 minutes before the last ride, around 16:30 in October; catering is on site so Sunday shop closures do not bite.' },
    season: {
      best_months: [4, 5, 6, 7, 8, 9, 10],
      notes: 'The cable car shuts for maintenance from 2 November and returns 5 December to 7 January on weekends and holidays only, 10:00 to 16:30, then closes again 5 to 30 January and 9 February to 20 March. Gardens open all winter at half price, €4 adult and €2 child, with some themed gardens closed; which ones is unverified.',
      closed_ranges: [
        { from: '2026-11-02', to: '2026-12-04', what: 'Cable car shut for maintenance', effect: 'downgrade' },
        { from: '2026-12-24', to: '2026-12-24', what: 'Cable car closed', effect: 'downgrade' },
        { from: '2026-12-31', to: '2026-12-31', what: 'Cable car closed', effect: 'downgrade' },
        { from: '2027-01-05', to: '2027-01-30', what: 'Cable car closed', effect: 'downgrade' },
        { from: '2027-02-09', to: '2027-03-20', what: 'Cable car closed', effect: 'downgrade' }
      ]
    },
    opening: [
      { place: 'Gärten der Welt', hours: 'Daily from 09:00 to dusk. Ticket counters close Nov to Feb 16:00, Mar and Oct 18:00, Apr to Sep 20:00', closed: 'none', price: 'Summer adult €9, child 6+ €4; winter €4 and €2; Day-Combi with cable car €12.90 and €7.50; flat-rate combi €19 and €12; after-work Mon to Fri from 17:00 €5.50', booking: null },
      { place: 'Seilbahn Gärten der Welt', hours: 'Apr to Sep daily 10:00 to 19:00; 1 Oct to 1 Nov daily 10:00 to 17:00; 5 Dec to 7 Jan weekends and holidays 10:00 to 16:30', closed: '2 Nov to 4 Dec; 24 and 31 Dec; 5 to 30 Jan; 9 Feb to 20 Mar', price: 'Adult return €7.50, one-way €5, reduced return €5. Separate from garden admission', booking: null }
    ],
    food: [
      { name: 'Garden cafés and visitor centre', where: 'Inside Gärten der Welt', note: 'Ticketed catering only. Specific outlets and hours unverified, so do not count on any one being open. Not reachable with the dog.', dog_outdoor: false },
      { name: 'Pack a picnic', where: 'Kienbergpark', note: 'No verified dog-welcome terrace within walking distance. Bring food from Prenzlauer Berg and eat in the free park; the gardens ban glass bottles and grilling.', dog_outdoor: true }
    ],
    guide_notes: [
      'You can ride the cable car with the dog and never buy garden admission. The operator states you need no garden ticket and need not get off at Kienberg. The muzzle is compulsory, not a suggestion.',
      'The Wolkenhain is in the free park, with a lift. People pay garden admission believing the lookout is inside. It is not.',
      'Eisenacher Straße is shut to vehicles from 5 October 2026 for bridge works, which matters if anyone takes a taxi.'
    ],
    warnings: [
      'Turning up at the garden gate with the dog. You will be turned away.',
      'After 1 November there is no cable car until 5 December, and then weekends only.',
      'From 1 October the last cable car tickets go around 16:30.',
      'Wind stops the gondola, and the gondola is the outing.'
    ],
    sources: [
      'https://www.gaertenderwelt.de/besuch-planen/parkordnung/',
      'https://www.gaertenderwelt.de/en/service-info/visitor-information/entrance-fees/',
      'https://www.gaertenderwelt.de/besuch-planen/oeffnungszeiten/',
      'https://gruen-berlin.de/en/projects/infrastructure/seilbahn/service-info',
      'https://gruen-berlin.de/projekte/infrastruktur/seilbahn/service-infos',
      'https://www.berlin.de/en/attractions-and-sights/5094238-3104052-cable-car-the-gardens-of-the-world.en.html',
      'https://www.kienbergpark.de/entdecken-erleben/wolkenhain/',
      'https://www.kienbergpark.de/service-infos/besuch-planen/'
    ],
    coords: { lat: 52.538, lng: 13.573 },
    editorial_score: 7
  },

  {
    id: 19,
    slug: 'modernism-and-moabit',
    title: 'Modernism and Moabit',
    area: 'Hansaviertel to Moabit',
    tagline: 'The West\'s answer to Karl-Marx-Allee, then across the river for lunch.',
    intro: 'The Hansaviertel is a 1957 building exhibition where over 50 architects from 14 countries put up 1,300 flats on a bombed-out quarter next to the Tiergarten, as West Berlin\'s reply to Stalinallee. Walk it after Karl-Marx-Allee and the Cold War stops being abstract. It is a flat walk past flats, free, all year, and the dog costs you nothing. It is also the dullest outing in the set for a nine-year-old unless you give her a job.',
    stops: [
      { name: 'Schloss Bellevue', note: 'The president\'s house, seen from the fence. Interior visits need about nine months\' notice. Do not test the security perimeter.' },
      { name: 'Hansaplatz and the Interbau buildings', note: 'Slab blocks, point blocks, a church, a library, a building on stilts. Give Elle a photo hunt: find the balcony that changes colour every floor, find the church, find the stilts.' },
      { name: 'Akademie der Künste', note: 'Hanseatenweg 10, in the middle of the quarter. Building open daily 10:00 to 20:00 including Sunday, Café Düttmann Tue to Sun 11:00 to 18:00. Show Metaxy runs 10 Sep to 6 Dec 2026. Admission price unverified, tickets at reception.' },
      { name: 'Tiergarten edge', note: 'Public green space, leash on, no off-leash zone here.' },
      { name: 'Café am Neuen See', note: 'Lichtensteinallee 2, lakeside beer garden with rowing boats, daily 09:00 to 24:00. The reward at the end of the hunt.' },
      { name: 'Spree paths into Moabit', note: 'Back north along the river. Public, leashed, quiet.' },
      { name: 'Arminiusmarkthalle', note: 'Arminiusstr. 2 to 4. Italian, Peruvian and Bavarian kitchens, Mon to Sat 08:00 to 22:00, food to 20:00 weekdays and 18:00 Saturday. Closed Sunday. No pets inside.' }
    ],
    duration_hours: [3, 5],
    energy: 'normal',
    travel: {
      minutes: 40,
      how: 'Tram M4 from Hufelandstr. to S Hackescher Markt, then S5 or S7 westbound to S Bellevue. Or Ring to Westhafen and U9 south to Hansaplatz.',
      lines: ['M4', 'S5', 'S7']
    },
    cost: {
      min: 16, max: 35,
      note: 'The quarter, the park, the river and Bellevue from outside are free. Akademie der Künste admission is unverified and extra.'
    },
    tags: ['architecture', 'coldwar', 'park', 'neighbourhood'],
    kid: { score: 1, note: 'A walk past 1950s flats has no purchase at nine; a photo scavenger hunt ending at the lake beer garden lifts it to fine.' },
    dog: {
      verdict: 'great',
      note: 'Pavement, park edge and riverbank, leashed throughout, no ticketed grounds and no cemetery. The two exceptions are indoors.',
      banned_stops: ['Akademie der Künste', 'Arminiusmarkthalle'],
      workaround: 'One adult waits at Café Düttmann\'s outdoor tables during the Akademie. Eat at Café am Neuen See or Zollpackhof instead of the market hall.'
    },
    weather: {
      indoor_share: 0.15,
      rain_ok: false,
      fallback: 'Akademie der Künste, Hanseatenweg 10, daily to 20:00 with a café, right on the route. Hamburger Bahnhof and the Haus der Kulturen der Welt are within reach, hours unverified.',
      wind_sensitive: false
    },
    days: {
      best: ['sun', 'sat'],
      avoid: [],
      note: 'Akademie open daily 10:00 to 20:00, Sundays included. Arminiusmarkthalle Mon to Sat only.'
    },
    sunday: { score: 3, note: 'Quiet streets, the Tiergarten full of families and the Akademie open, with the one catch that the market hall is shut, so lunch is the lake or Zollpackhof.' },
    season: {
      best_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      notes: 'Works all year. The buildings read better in winter with the trees bare. Daylight is the limit: in December usable light is roughly 08:00 to 16:00 and the buildings are the point.',
      closed_ranges: [
        { from: '2026-12-24', to: '2026-12-24', what: 'Akademie der Künste closed', effect: 'downgrade' },
        { from: '2026-12-31', to: '2026-12-31', what: 'Akademie der Künste closed', effect: 'downgrade' }
      ]
    },
    opening: [
      { place: 'Akademie der Künste, Hanseatenweg', hours: 'Building daily 10:00 to 20:00; Café Düttmann Tue to Sun 11:00 to 18:00; bookshop daily 10:00 to 19:00', closed: '24 and 31 Dec', price: 'Unverified; sold at reception 10:00 to 20:00', booking: null }
    ],
    food: [
      { name: 'Café am Neuen See', where: 'Lichtensteinallee 2, Tiergarten', note: 'Restaurant daily 09:00 to 24:00, lakeside beer garden. Dog policy unverified.', dog_outdoor: true },
      { name: 'Zollpackhof', where: 'Elisabeth-Abegg-Str. 1', note: 'Daily 12:00 to 23:00. Augustiner beer garden on the Spree opposite the Chancellery under a 150-year-old chestnut; Glühwein and fire bowls in winter. Dog policy unverified.', dog_outdoor: true },
      { name: 'Arminiusmarkthalle', where: 'Arminiusstr. 2 to 4', note: 'Mon to Sat only, closed Sunday. No dogs inside.', dog_outdoor: false }
    ],
    guide_notes: [
      'Le Corbusier\'s Interbau building is not in the Hansaviertel. His Unité d\'Habitation Typ Berlin is at Flatowallee 16 by the Olympic stadium, too big for this site. People look for it around Hansaplatz and never find it.',
      'The quarter is a Cold War argument in concrete. West Berlin\'s building minister called Interbau a clear commitment to the western world against the false ostentation of Stalinallee. Opened 6 July 1957, 1.3 million visitors.'
    ],
    warnings: [
      'Sunday lunch at the Arminiusmarkthalle: it is closed.',
      'Schloss Bellevue is outside only. Nine months\' notice to go in.',
      'In winter check sunset; the buildings need light.',
      'Do not pitch it to Elle as an architecture walk.'
    ],
    sources: [
      'https://hansaviertel.berlin/en/interbau-1957/geschichte-der-interbau-1957/',
      'https://hansaviertel.berlin/en/',
      'https://adk.de/en/visit/opening-hours',
      'https://adk.de/en/visit/tickets-prices',
      'https://www.in-berlin-brandenburg.com/Sehenswuerdigkeiten/Schloesser/Schloss-Bellevue.html',
      'https://arminiusmarkthalle.com/',
      'https://www.cafeamneuensee.de/',
      'https://zollpackhof.de/the-beergarden.html'
    ],
    coords: { lat: 52.518, lng: 13.342 },
    editorial_score: 5
  },

  {
    id: 20,
    slug: 'our-local-sunday',
    title: 'Our Local East Berlin Sunday',
    area: 'Weißensee',
    tagline: 'One tram, a lake, cake, and the biggest Jewish cemetery in Europe.',
    intro: 'Fifteen minutes on the M4 and you are at the Weißer See, a small lake with a promenade under 19th-century oaks and a Greek restaurant on the water. The point of the day is slowness: ducks, a loop, breakfast, maybe the Strandbad in summer. Fifteen minutes on from the lake is the Jüdischer Friedhof Weißensee, 42 hectares and 115,000 graves under a forest canopy, which is the one place here Pepper cannot go. This is the outing for when nobody can face planning.',
    stops: [
      { name: 'Weißer See promenade', note: 'Tree-lined loop around 8.3 hectares of water, Berlin\'s seventh largest lake. Leashed; no off-leash area nearby and no sanctioned dog swimming here.' },
      { name: 'Strandbad Weißensee', note: 'In season only. Adult €8, child 3 to 12 €3, family card €19. Dogs on the terrace and in the beer garden, not on the sand. Season dates and hours unverified and it shuts in rain.' },
      { name: 'Ormos by Milchhäuschen', note: 'Parkstr. 33a. The old Milchhäuschen site under new operators since 2026, so the old name is gone from the sign. Daily 09:00 to 01:00, breakfast 09:00 to 12:00, terrace on the water.' },
      { name: 'Orankesee', note: 'Ten minutes north. Leash still required, but at several points on the bank a dog can get into the water. Check for glass and fish hooks first.' },
      { name: 'Fieldstone wall on Indira-Gandhi-Straße', note: '750 m of wall with menorah motifs on the way to the cemetery. Looks ancient, built 1983 to 1984.' },
      { name: 'Jüdischer Friedhof Weißensee', note: 'Herbert-Baum-Str. 45, free. Sunday 08:00 to 17:00, 16:00 from 1 October. Closed every Saturday and on Jewish holidays. Men cover their heads; kippot are free at the gate. Children must be accompanied. No dogs.' },
      { name: 'Café Sommerregen', note: 'Berliner Allee 249, opposite the Rathaus. Sat and Sun 08:00 to 16:00, homemade cakes. On the way back to the tram.' }
    ],
    duration_hours: [2, 4],
    energy: 'easy',
    travel: {
      minutes: 15,
      how: 'Tram M4 from Hufelandstr. direct to Weißer See. One vehicle, no change. For the Strandbad and Ormos get off at Berliner Allee/Indira-Gandhi-Str.',
      lines: ['M4']
    },
    cost: {
      min: 16, max: 54,
      note: 'Lake, promenade and cemetery are free. Strandbad in season is €19 for the three of you on the family card or as singles.'
    },
    tags: ['lake', 'neighbourhood', 'park', 'history', 'water'],
    kid: { score: 2, note: 'A lake, ducks and cake is a real pleasure but not a thrill; in summer the Strandbad makes it strong, and the cemetery is the surprise for a curious nine-year-old, your call whether she is ready for it.' },
    dog: {
      verdict: 'great',
      note: 'Leashed everywhere, welcome everywhere except the cemetery. The Strandbad is the one venue in the whole set with a written dog-welcome terrace policy.',
      banned_stops: ['Jüdischer Friedhof Weißensee'],
      workaround: 'Do the cemetery on a separate visit without Pepper, it deserves its own hour, or split: one adult walks the lake with the dog while the other takes Elle in, and meet at Ormos. The gate is about 15 minutes from the lake.'
    },
    weather: {
      indoor_share: 0.1,
      rain_ok: false,
      fallback: 'Ormos, Parkstr. 33a, daily 09:00 to 01:00, indoor room and terrace.',
      wind_sensitive: false
    },
    days: {
      best: ['sun'],
      avoid: ['sat'],
      note: 'The cemetery is shut every Saturday and opens a full Sunday, 08:00 to 17:00 (16:00 from October). Also shut on Jewish holidays; ring 030 92 53 330 first. Sommerregen weekends 08:00 to 16:00.'
    },
    sunday: { score: 3, note: 'Built for Sunday: the cemetery opens early, Sommerregen and Ormos do breakfast, and the promenade fills but never unpleasantly.' },
    season: {
      best_months: [4, 5, 6, 7, 8, 9, 10],
      notes: 'The Strandbad is summer only with unverified dates. From 1 October the cemetery closes at 16:00. November to March this is a walk-and-cake outing rather than a lake outing, which is fine.',
      closed_ranges: [
        { from: '2026-09-20', to: '2026-09-21', what: 'Cemetery closed for Yom Kippur', effect: 'downgrade' },
        { from: '2026-09-25', to: '2026-10-04', what: 'Cemetery closed for Sukkot through Simchat Torah', effect: 'downgrade' }
      ]
    },
    opening: [
      { place: 'Jüdischer Friedhof Weißensee', hours: '1 Apr to 30 Sep Mon to Thu 07:30 to 17:00, Fri 07:30 to 14:30, Sun 08:00 to 17:00; 1 Oct to 31 Mar closes 16:00', closed: 'Every Saturday and all Jewish holidays', price: 'Free', booking: null },
      { place: 'Strandbad Weißensee', hours: 'Seasonal, varies with weather, unverified', closed: 'Winter and rainy days', price: 'Adult €8, reduced €4.50, child 3 to 12 €3, under 3 free, from 18:00 €5, family card €19', booking: null }
    ],
    food: [
      { name: 'Ormos by Milchhäuschen', where: 'Parkstr. 33a', note: 'Daily 09:00 to 01:00, hot kitchen to 22:00, breakfast 09:00 to 12:00, Greek, waterside terrace. Dog policy unverified.', dog_outdoor: true },
      { name: 'Café Sommerregen', where: 'Berliner Allee 249', note: 'Mon to Fri 06:00 to 16:00, Sat and Sun 08:00 to 16:00. Coffee, cake, panini, soup.', dog_outdoor: false },
      { name: 'Strandbad Weißensee terrace', where: 'On the lake, in season', note: 'Dogs yes on the terrace and in the beer garden, no on the beach, in writing. Pizza and grilling. Shuts in rain.', dog_outdoor: true }
    ],
    guide_notes: [
      'The fieldstone wall along Indira-Gandhi-Straße is not original. It went up in 1983 to 1984 with menorah motifs, a late GDR gesture toward a cemetery the state had ignored for decades. It is younger than most of the flats around it.',
      'The Ehrenfeld just inside the main gate, laid out in 1914, honours 12,000 Jewish soldiers who fought for Germany in the First World War, with 395 buried on the field itself. Set that against what came twenty years later and the whole century is in one lawn.',
      'The Milchhäuschen is Ormos now. Same building, new operators, no old sign.'
    ],
    warnings: [
      'Saturday at the cemetery gate: closed, without exception.',
      'Jewish holidays close it too, and late September 2026 is mostly holidays. Ring first.',
      'Pepper at the cemetery gate wastes the walk.',
      'A man in the party needs a head covering; kippot are free at the entrance.'
    ],
    sources: [
      'https://juedischer-friedhof-weissensee.de/oeffnungszeiten/',
      'https://www.in-berlin-brandenburg.com/Sehenswuerdigkeiten/Friedhoefe/juedische-Friedhof.html',
      'https://www.pankow-weissensee-prenzlauerberg.berlin/en/judischer-friedhof-weissensee',
      'https://www.hebcal.com/holidays/2026',
      'https://www.strandbadweissensee.de/faq',
      'https://www.strandbadweissensee.de/strandbadeintritt',
      'https://ormos-berlin.de/',
      'https://sommerregen-berlin.de/'
    ],
    coords: { lat: 52.555, lng: 13.463 },
    editorial_score: 7
  }
];
