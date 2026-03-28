import { db } from "@workspace/db";
import {
  destinationsTable,
  experiencesTable,
  regionsTable,
} from "@workspace/db/schema";

async function seed() {
  console.log("Seeding Algeria Tourism database...");

  // Clear existing data
  await db.delete(experiencesTable);
  await db.delete(destinationsTable);
  await db.delete(regionsTable);

  // Seed Regions
  const regions = await db
    .insert(regionsTable)
    .values([
      {
        name: "Sahara Desert",
        slug: "sahara-desert",
        description:
          "The world's largest hot desert stretches across southern Algeria, offering breathtaking dunes, ancient rock art, and starlit skies unlike anywhere else on Earth.",
        imageUrl:
          "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
        destinationCount: 8,
        highlights: [
          "Towering golden sand dunes",
          "Prehistoric Tassili cave art",
          "Camel trekking routes",
          "Oasis villages",
          "Stargazing under clear skies",
        ],
        climate: "Hot desert climate — scorching summers, mild winters (Oct–Mar best)",
      },
      {
        name: "Northern Tell",
        slug: "northern-tell",
        description:
          "The Mediterranean heartland of Algeria, encompassing Algiers, Roman ruins, fertile valleys, and a rich blend of Berber, Arab, Ottoman, and French heritage.",
        imageUrl:
          "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
        destinationCount: 10,
        highlights: [
          "Historic Casbah of Algiers",
          "Roman ruins of Timgad and Djemila",
          "Ottoman palaces and mosques",
          "Vibrant souks and markets",
          "Mediterranean coast",
        ],
        climate: "Mediterranean — hot dry summers, mild wet winters",
      },
      {
        name: "Kabylie Mountains",
        slug: "kabylie-mountains",
        description:
          "A rugged mountainous region northeast of Algiers, home to the ancient Berber (Amazigh) people, traditional villages clinging to cliffs, and stunning valleys.",
        imageUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        destinationCount: 6,
        highlights: [
          "Berber Amazigh culture and language",
          "Traditional mountain villages",
          "Akfadou Forest",
          "Bejaia coastal cliffs",
          "Gorges of Kherrata",
        ],
        climate: "Highland Mediterranean — cool summers, cold snowy winters",
      },
      {
        name: "Hauts Plateaux",
        slug: "hauts-plateaux",
        description:
          "The vast high steppes between the Atlas mountains, a landscape of wide skies, grazing flocks, traditional crafts, and historic cities like Constantine and Tlemcen.",
        imageUrl:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        destinationCount: 7,
        highlights: [
          "Constantine's dramatic gorges and bridges",
          "Tlemcen's Islamic art and architecture",
          "Traditional Berber weaving and crafts",
          "Wild steppe landscapes",
          "Migratory bird watching",
        ],
        climate: "Semi-arid steppe — hot summers, cold winters, spring flowers",
      },
      {
        name: "Mediterranean Coast",
        slug: "mediterranean-coast",
        description:
          "Over 1,200 km of coastline with pristine beaches, turquoise waters, charming fishing villages, and hidden coves largely undiscovered by mass tourism.",
        imageUrl:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        destinationCount: 5,
        highlights: [
          "Crystal clear beaches",
          "Historic port cities",
          "Fresh seafood restaurants",
          "Snorkeling and diving",
          "Coral caves at Bejaia",
        ],
        climate: "Warm Mediterranean — best April–October for beach",
      },
      {
        name: "Ahaggar Mountains",
        slug: "ahaggar-mountains",
        description:
          "The spectacular volcanic highlands of the deep Sahara, home to the Tuareg people, dramatic rock formations, Père de Foucauld's hermitage, and Algeria's highest peak.",
        imageUrl:
          "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&q=80",
        destinationCount: 4,
        highlights: [
          "Assekrem plateau sunrise",
          "Tuareg nomadic culture",
          "Tahat Peak (2,908m)",
          "Ancient rock art",
          "Dramatic basalt formations",
        ],
        climate: "High altitude desert — warm days, very cold nights year-round",
      },
    ])
    .returning();

  console.log(`Seeded ${regions.length} regions`);

  // Seed Destinations
  const destinations = await db
    .insert(destinationsTable)
    .values([
      // Sahara
      {
        name: "Tassili n'Ajjer",
        slug: "tassili-najjer",
        region: "Sahara Desert",
        category: "UNESCO Heritage",
        description:
          "A vast plateau in the central Sahara, Tassili n'Ajjer is one of the most important groupings of prehistoric cave art in the world. With over 15,000 rock paintings and engravings dating back 12,000 years, it reveals a time when this desert was a lush savanna teeming with life. The lunar landscape of sandstone arches and mushroom-shaped rocks is equally awe-inspiring.",
        shortDescription:
          "UNESCO World Heritage site with 15,000+ prehistoric rock paintings amid dramatic sandstone formations.",
        imageUrl:
          "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
        highlights: [
          "Over 15,000 prehistoric rock paintings",
          "Dramatic sandstone arches and formations",
          "Neolithic artifacts",
          "Rare endemic plant species",
          "UNESCO dual World Heritage status",
        ],
        bestTimeToVisit: "October to April (avoid peak summer heat)",
        difficulty: "Moderate to Challenging",
        duration: "3–7 days",
        featured: true,
        rating: 4.9,
        reviewCount: 847,
        lat: 25.5,
        lng: 8.75,
      },
      {
        name: "Grand Erg Oriental",
        slug: "grand-erg-oriental",
        region: "Sahara Desert",
        category: "Natural Wonder",
        description:
          "A sea of golden sand dunes stretching endlessly across the eastern Sahara, the Grand Erg Oriental offers some of the most spectacular desert scenery in Africa. The dunes reach heights of over 300 meters and create an ever-shifting landscape of ridges, bowls, and rippled surfaces. The nearby town of El Oued, 'City of a Thousand Domes,' provides a perfect base.",
        shortDescription:
          "Endless golden dunes up to 300m high — the quintessential Saharan experience near El Oued.",
        imageUrl:
          "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
        highlights: [
          "Towering dunes over 300m high",
          "Sunrise and sunset spectacles",
          "Camel trekking routes",
          "El Oued 'City of Domes'",
          "Desert camping under stars",
        ],
        bestTimeToVisit: "November to March",
        difficulty: "Easy to Moderate",
        duration: "1–4 days",
        featured: true,
        rating: 4.8,
        reviewCount: 1203,
        lat: 33.36,
        lng: 8.11,
      },
      {
        name: "Djanet Oasis",
        slug: "djanet-oasis",
        region: "Sahara Desert",
        category: "Oasis Town",
        description:
          "A magical oasis town at the foot of the Tassili plateau, Djanet is the gateway to some of Algeria's most remote and spectacular desert landscapes. The town itself, built around palm groves and ancient ksour (fortified villages), is home to the Kel Ajjer Tuareg people who have navigated these desert routes for millennia.",
        shortDescription:
          "Gateway oasis town to Tassili, home to the Tuareg people amid ancient palm groves.",
        imageUrl:
          "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
        highlights: [
          "Tuareg cultural experiences",
          "Ancient ksour architecture",
          "Palm grove walks",
          "Desert festival (January)",
          "Gateway to Tassili treks",
        ],
        bestTimeToVisit: "October to March",
        difficulty: "Easy",
        duration: "2–5 days",
        featured: false,
        rating: 4.7,
        reviewCount: 432,
        lat: 24.55,
        lng: 9.48,
      },
      {
        name: "Tamanrasset",
        slug: "tamanrasset",
        region: "Ahaggar Mountains",
        category: "Cultural Hub",
        description:
          "The capital of the Ahaggar region and principal city of southern Algeria, Tamanrasset is a crossroads of Saharan civilization. From here, travelers access the Ahaggar Mountains, the Assekrem plateau, and the routes of the ancient trans-Saharan caravan trade. The city thrives with Tuareg artisans, silver jewelry workshops, and vibrant markets.",
        shortDescription:
          "Desert city and hub for the Ahaggar Mountains, rich in Tuareg culture and artisanal crafts.",
        imageUrl:
          "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&q=80",
        highlights: [
          "Tuareg silver and leatherwork markets",
          "Gateway to Ahaggar Mountains",
          "Trans-Saharan caravan history",
          "Desert music and festivals",
          "Traditional Tuareg cuisine",
        ],
        bestTimeToVisit: "October to April",
        difficulty: "Easy",
        duration: "2–4 days",
        featured: false,
        rating: 4.6,
        reviewCount: 319,
        lat: 22.78,
        lng: 5.52,
      },
      {
        name: "Assekrem Plateau",
        slug: "assekrem-plateau",
        region: "Ahaggar Mountains",
        category: "Natural Wonder",
        description:
          "At 2,728 meters, Assekrem is the spiritual heart of the Ahaggar. Every dawn, the volcanic peaks glow in shades of amber and purple as the sun rises over the Sahara below. Father Charles de Foucauld, a French hermit, built a chapel here in 1911, and the site remains one of the most transcendent natural viewpoints in the world.",
        shortDescription:
          "High-altitude plateau with legendary sunrise views over the volcanic Ahaggar landscape.",
        imageUrl:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
        highlights: [
          "Legendary Saharan sunrise",
          "Père de Foucauld hermitage chapel",
          "360° volcanic panorama",
          "Rare high-altitude desert flora",
          "Tuareg guided hikes",
        ],
        bestTimeToVisit: "October to April",
        difficulty: "Challenging",
        duration: "2–3 days",
        featured: true,
        rating: 5.0,
        reviewCount: 289,
        lat: 23.27,
        lng: 5.44,
      },
      // Northern
      {
        name: "Casbah of Algiers",
        slug: "casbah-algiers",
        region: "Northern Tell",
        category: "UNESCO Heritage",
        description:
          "A UNESCO World Heritage Site since 1992, the Casbah of Algiers is one of the finest examples of an Ottoman-era medina in North Africa. Its labyrinthine alleys cascade down a hillside to the Mediterranean, lined with mosques, palaces, fountains, and the distinctive white-washed houses of the ancient city. The Casbah has been inhabited for over 3,000 years and carries the weight of Algerian history in every stone.",
        shortDescription:
          "UNESCO-listed Ottoman medina of winding alleys, palaces, and mosques cascading to the sea.",
        imageUrl:
          "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
        highlights: [
          "Ketchaoua Mosque and Dar Aziza palace",
          "Traditional haouche courtyard houses",
          "Panoramic sea views",
          "Vibrant spice and craft souks",
          "Ottoman and Andalusian architecture",
        ],
        bestTimeToVisit: "March to May, September to November",
        difficulty: "Easy",
        duration: "1–2 days",
        featured: true,
        rating: 4.7,
        reviewCount: 2103,
        lat: 36.78,
        lng: 3.06,
      },
      {
        name: "Timgad (Thamugadi)",
        slug: "timgad",
        region: "Northern Tell",
        category: "Roman Ruins",
        description:
          "Often called the 'Pompeii of Africa,' Timgad is one of the best-preserved Roman cities in the world. Founded by Emperor Trajan in 100 AD, this UNESCO World Heritage Site reveals a complete Roman colonial city with its forum, theater, triumphal arch, temples, and street grid virtually intact. The surrounding Aurès Mountains provide a dramatic backdrop.",
        shortDescription:
          "Spectacular Roman city of Trajan, one of the best-preserved in the world — the Pompeii of Africa.",
        imageUrl:
          "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
        highlights: [
          "Trajan's Arch (2nd century AD)",
          "Complete Roman street grid",
          "4,000-seat theater",
          "Forum and Capitol Temple",
          "On-site museum with mosaics",
        ],
        bestTimeToVisit: "April to June, September to November",
        difficulty: "Easy",
        duration: "1 day",
        featured: true,
        rating: 4.8,
        reviewCount: 1567,
        lat: 35.48,
        lng: 6.47,
      },
      {
        name: "Djemila (Cuicul)",
        slug: "djemila",
        region: "Northern Tell",
        category: "Roman Ruins",
        description:
          "Perched on a mountain ridge at 900 meters, Djemila ('the beautiful' in Arabic) is the ruins of the Roman city of Cuicul, founded in the 1st century AD. Its dramatic mountain setting distinguishes it from other Roman sites, with the city built along a narrow ridge surrounded by deep valleys. The site includes a magnificent Severan forum, theater, temples, and triumphal arch.",
        shortDescription:
          "Roman city on a mountain ridge with stunning valley views — one of Africa's finest archaeological sites.",
        imageUrl:
          "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
        highlights: [
          "Severan Forum and Temple of the Septimii",
          "Spectacular mountain setting",
          "Well-preserved mosaics",
          "Christian basilica ruins",
          "UNESCO World Heritage Site",
        ],
        bestTimeToVisit: "April to June, September to October",
        difficulty: "Easy to Moderate",
        duration: "1 day",
        featured: false,
        rating: 4.7,
        reviewCount: 892,
        lat: 36.32,
        lng: 5.74,
      },
      {
        name: "Constantine",
        slug: "constantine",
        region: "Hauts Plateaux",
        category: "Historic City",
        description:
          "Perched dramatically atop a rocky mesa above the Rhumel River Gorge, Constantine is one of the oldest cities in the world, continuously inhabited for over 2,500 years. The gorge, spanned by extraordinary suspended bridges, creates one of North Africa's most spectacular urban landscapes. The city overflows with Ottoman palaces, ancient mosques, and a vibrant arts scene.",
        shortDescription:
          "Ancient city of bridges dramatically perched above the Rhumel Gorge — one of Algeria's most spectacular sights.",
        imageUrl:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        highlights: [
          "Spectacular suspended bridges over gorge",
          "El Kantara arch bridge",
          "Ahmed Bey Palace (Ottoman)",
          "Emir Abdelkader Mosque",
          "Ancient Numidia museum",
        ],
        bestTimeToVisit: "April to June, September to November",
        difficulty: "Easy",
        duration: "2–3 days",
        featured: true,
        rating: 4.8,
        reviewCount: 1876,
        lat: 36.36,
        lng: 6.61,
      },
      {
        name: "Tlemcen",
        slug: "tlemcen",
        region: "Hauts Plateaux",
        category: "Islamic Heritage",
        description:
          "Known as the 'City of Art and History,' Tlemcen was the capital of the medieval Zyanid Kingdom and reached its zenith as a major center of Islamic culture and learning. Its Great Mosque, Mansourah ruins, and the Sanctuaries of Sidi Bel Abbès and Sidi Boumediene showcase extraordinary medieval Islamic architecture and craftsmanship.",
        shortDescription:
          "Medieval Islamic capital of unparalleled culture — mosques, medersas, and ancient ramparts.",
        imageUrl:
          "https://images.unsplash.com/photo-1519817914152-22d216bb9170?w=800&q=80",
        highlights: [
          "Grand Mosque (12th century)",
          "Mansourah minaret ruins",
          "El Mechouar Palace",
          "Artisanal crafts and carpet weaving",
          "Tlemcen National Park waterfalls",
        ],
        bestTimeToVisit: "March to May, September to November",
        difficulty: "Easy",
        duration: "2–3 days",
        featured: false,
        rating: 4.6,
        reviewCount: 743,
        lat: 34.88,
        lng: -1.31,
      },
      {
        name: "Bejaia (Béjaïa)",
        slug: "bejaia",
        region: "Kabylie Mountains",
        category: "Coastal & Mountain",
        description:
          "A stunning coastal city at the foot of the Kabylie Mountains where mountain meets the Mediterranean. Bejaia's dramatic setting includes the towering Gouraya cliffs, secluded coves, the Corniche Kabyle coastal road, and the cave paintings at Afalou. The city was once the capital of the Hammadid Kingdom and gave the world the concept of 'zero' through Al-Battani.",
        shortDescription:
          "Where Kabylie mountains dive into the Mediterranean — coastal cliffs, coves, and Berber culture.",
        imageUrl:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        highlights: [
          "Gouraya National Park coastal cliffs",
          "Hidden coves and beaches",
          "Corniche Kabyle scenic drive",
          "Historic Hammadid port",
          "Amazigh Berber culture and crafts",
        ],
        bestTimeToVisit: "May to September",
        difficulty: "Easy",
        duration: "2–4 days",
        featured: false,
        rating: 4.5,
        reviewCount: 654,
        lat: 36.75,
        lng: 5.08,
      },
      {
        name: "Ghardaïa (M'zab Valley)",
        slug: "ghardaia-mzab",
        region: "Sahara Desert",
        category: "UNESCO Heritage",
        description:
          "The M'zab Valley is home to five fortified towns built by the Ibadite Muslim community in the 10th century — an extraordinary example of human adaptation to a harsh desert environment. The pentapolis of Ghardaïa, Melika, Beni Isguen, Bounoura, and El Atteuf inspired architects including Le Corbusier with their innovative urban planning and vernacular architecture.",
        shortDescription:
          "Five fortified Ibadite cities of breathtaking vernacular architecture that inspired Le Corbusier.",
        imageUrl:
          "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
        highlights: [
          "Five medieval fortified ksour cities",
          "Ibadite Muslim heritage",
          "Traditional market square architecture",
          "Artisanal carpet and pottery workshops",
          "UNESCO World Heritage Site",
        ],
        bestTimeToVisit: "October to April",
        difficulty: "Easy",
        duration: "2–3 days",
        featured: true,
        rating: 4.8,
        reviewCount: 1204,
        lat: 32.48,
        lng: 3.67,
      },
    ])
    .returning();

  console.log(`Seeded ${destinations.length} destinations`);

  // Seed Experiences
  const experiences = await db
    .insert(experiencesTable)
    .values([
      {
        title: "Sahara Desert Camel Trek",
        category: "Adventure",
        description:
          "Ride into the heart of the Grand Erg Oriental on camelback, guided by Tuareg nomads who have crossed these dunes for centuries. Spend two nights under the stars, waking to golden sunrise over the sea of dunes.",
        imageUrl:
          "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80",
        duration: "3 days / 2 nights",
        difficulty: "Moderate",
        price: "From €280 per person",
        highlights: [
          "Guided camel trekking with Tuareg nomads",
          "Desert camp under stars",
          "Traditional Tuareg music and storytelling",
          "Sunrise and sunset over the dunes",
          "All meals and equipment included",
        ],
        included: [
          "Camel riding equipment",
          "Desert camping gear",
          "Traditional meals",
          "Tuareg guide",
          "Water and supplies",
        ],
      },
      {
        title: "Tassili Prehistoric Art Expedition",
        category: "Cultural",
        description:
          "Trek through the surreal rock formations of Tassili n'Ajjer with an expert archaeologist guide. Discover cave paintings thousands of years old depicting giraffes, hippos, and human figures in what was once a fertile savanna.",
        imageUrl:
          "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
        duration: "5 days / 4 nights",
        difficulty: "Moderate to Challenging",
        price: "From €450 per person",
        highlights: [
          "Expert archaeologist guide",
          "Access to restricted rock art sites",
          "Ouan Derbaouen natural arch",
          "Sunset over Tassili plateau",
          "Traditional Tuareg desert camp",
        ],
        included: [
          "Archaeologist guide",
          "Permits and entry fees",
          "Camping equipment",
          "All meals",
          "Desert vehicle support",
        ],
      },
      {
        title: "Algiers Casbah Walking Tour",
        category: "Cultural",
        description:
          "Explore the labyrinthine alleys of the UNESCO-listed Casbah with a local historian guide. Discover hidden Ottoman palaces, Andalusian fountains, the mosque where Abd al-Qader was born, and the homes of independence fighters.",
        imageUrl:
          "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
        duration: "4 hours",
        difficulty: "Easy",
        price: "From €35 per person",
        highlights: [
          "Ottoman-era palaces",
          "Traditional hammam visit",
          "Spice souk shopping",
          "Traditional mint tea tasting",
          "Revolutionary history stories",
        ],
        included: [
          "Local historian guide",
          "Traditional tea tasting",
          "Entry to key sites",
          "Historical narrative book",
        ],
      },
      {
        title: "Constantine Gorge & Bridges Tour",
        category: "Scenic",
        description:
          "Walk the extraordinary suspended bridges spanning the Rhumel Gorge, explore the Ahmed Bey Palace, and watch eagles soar in the deep canyon below. An architectural and natural wonder unlike anywhere in the world.",
        imageUrl:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        duration: "Full day",
        difficulty: "Easy",
        price: "From €55 per person",
        highlights: [
          "Walk all six suspended bridges",
          "Gorge viewpoint at sunset",
          "Ahmed Bey Ottoman Palace",
          "Emir Abdelkader Mosque",
          "Panoramic city photography",
        ],
        included: [
          "Licensed local guide",
          "Palace entry fees",
          "Traditional lunch",
          "Transport within city",
        ],
      },
      {
        title: "Algerian Food & Spice Market Tour",
        category: "Culinary",
        description:
          "Dive into Algeria's rich culinary heritage with a morning in the souks and an afternoon cooking class preparing couscous, lamb tagine, and Algerian pastries with a local family.",
        imageUrl:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        duration: "Full day",
        difficulty: "Easy",
        price: "From €70 per person",
        highlights: [
          "Guided spice market walk",
          "Traditional cooking class",
          "Lamb couscous and tagine recipes",
          "Algerian pastry making",
          "Shared family meal",
        ],
        included: [
          "All ingredients",
          "Chef instructor",
          "Recipe cards",
          "Full lunch and tasting",
        ],
      },
      {
        title: "Roman Ruins Road Trip (Timgad & Djemila)",
        category: "Historical",
        description:
          "A two-day journey through Algeria's remarkable Roman heritage. Explore the perfectly preserved streets of Timgad (Pompeii of Africa) and the mountain-top city of Djemila, both UNESCO World Heritage Sites.",
        imageUrl:
          "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
        duration: "2 days",
        difficulty: "Easy",
        price: "From €160 per person",
        highlights: [
          "Timgad complete Roman city tour",
          "Djemila mountain-top ruins",
          "Expert archaeologist guide",
          "On-site museum visits",
          "Aurès Mountain landscapes",
        ],
        included: [
          "Expert guide",
          "Transport",
          "All entry fees",
          "Hotel accommodation",
          "Meals",
        ],
      },
      {
        title: "Kabylie Mountain Village Trek",
        category: "Adventure",
        description:
          "Trek through the spectacular Kabylie Mountains, visiting traditional Berber (Amazigh) villages perched on cliff edges, learning about the ancient culture and language that predates Arabic in this region.",
        imageUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        duration: "3 days / 2 nights",
        difficulty: "Moderate",
        price: "From €220 per person",
        highlights: [
          "Traditional Berber village homestay",
          "Amazigh culture and language",
          "Akfadou cedar forest",
          "Gorges du Kherrata viewpoints",
          "Traditional Berber cuisine",
        ],
        included: [
          "Local Berber guide",
          "Village homestay",
          "All meals",
          "Traditional craft demonstration",
        ],
      },
      {
        title: "Tuareg Silversmithing Workshop",
        category: "Cultural",
        description:
          "In Tamanrasset, learn the ancient art of Tuareg silver jewelry making from master artisans whose families have practiced this craft for generations. Create your own Tuareg talisman to take home.",
        imageUrl:
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
        duration: "Half day",
        difficulty: "Easy",
        price: "From €45 per person",
        highlights: [
          "Hands-on silversmithing lesson",
          "Master Tuareg artisan instruction",
          "Create your own silver piece",
          "Learn Tuareg symbolism and meanings",
          "Take home your creation",
        ],
        included: [
          "All silver materials",
          "Expert artisan guide",
          "Finished jewelry piece",
          "Tea ceremony",
        ],
      },
      {
        title: "Saharan Stargazing Night",
        category: "Adventure",
        description:
          "With zero light pollution, the Algerian Sahara offers some of the darkest skies on Earth. An astronomer guide leads a night of deep-sky observation with professional telescopes, followed by sleeping under the Milky Way.",
        imageUrl:
          "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
        duration: "1 night",
        difficulty: "Easy",
        price: "From €95 per person",
        highlights: [
          "Professional telescope observation",
          "Expert astronomer guide",
          "Milky Way photography session",
          "Desert camp accommodation",
          "Sunrise breakfast in the dunes",
        ],
        included: [
          "Telescope and equipment",
          "Astronomer guide",
          "Desert camp",
          "Dinner and breakfast",
        ],
      },
      {
        title: "Mediterranean Coastal Sailing",
        category: "Adventure",
        description:
          "Sail along Algeria's pristine and largely undiscovered Mediterranean coastline, exploring hidden coves, sea caves, and secluded beaches accessible only by boat. Snorkel crystal-clear waters and dine on freshly caught seafood.",
        imageUrl:
          "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=800&q=80",
        duration: "Full day",
        difficulty: "Easy",
        price: "From €120 per person",
        highlights: [
          "Secluded sea caves and coves",
          "Snorkeling in crystal waters",
          "Fresh seafood lunch on board",
          "Coastal photography opportunities",
          "Swimming in hidden beaches",
        ],
        included: [
          "Sailboat and captain",
          "Snorkeling equipment",
          "Fresh seafood lunch",
          "Cold drinks",
        ],
      },
    ])
    .returning();

  console.log(`Seeded ${experiences.length} experiences`);
  console.log("✅ Seeding complete!");
}

seed().catch(console.error);
