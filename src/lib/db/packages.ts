import { TourPackage } from "@/components/ui/PackageCard";
import pool from "./pool";

const MOCK_PACKAGES: TourPackage[] = [
  {
    id: "1",
    slug: "spiti-valley-expedition",
    title: "Spiti Valley Road Trip",
    location: "Spiti Valley",
    price_per_person: 14999,
    duration_days: 7,
    duration_nights: 6,
    image_urls: ["/images/destinations/spiti.png"],
    vehicle_type: "Tempo Traveller",
    max_occupancy: 12,
    description: "Embark on an unforgettable journey through the rugged terrains of the cold Himalayan desert. The Spiti Valley expedition takes you through high-altitude passes, ancient monasteries, and moon-like landscapes. Experience the thrill of crossing the treacherous Kunzum Pass, camp by the mesmerizing Chandratal Lake, and interact with the warm locals surviving in extremes.",
    itinerary: [
      { day: 1, title: "Arrival in Shimla & Drive to Kalpa", activities: "Pickup from Shimla. Scenic drive through the Kinnaur valley. Overnight stay in Kalpa with views of Kinner Kailash." },
      { day: 2, title: "Kalpa to Kaza via Nako & Tabo", activities: "Drive through the treacherous terrain into Spiti. Visit Nako Lake and the 1000-year-old Tabo Monastery." },
      { day: 3, title: "Key Monastery, Kibber & Chicham", activities: "Explore the iconic Key Monastery. Visit Kibber village (high altitude settlement) and the massive Chicham Bridge." },
      { day: 4, title: "Kaza to Chandratal Lake", activities: "Cross Kunzum Pass and reach the stunning crescent-shaped Chandratal Lake. Evening camping." },
      { day: 5, title: "Chandratal to Manali", activities: "Offroading via Batal and Chhatru through the majestic Rohtang pass down into the green valley of Manali." },
      { day: 6, title: "Manali Local Exploration", activities: "Visit Hadimba Temple, Old Manali, and relax in the cafes." },
      { day: 7, title: "Departure from Manali", activities: "Drop off at Manali bus stand/taxi stand for onward journey." }
    ],
    inclusions: [
      "Transportation via Tempo Traveller/SUV",
      "Accommodation in premium homestays & camps",
      "Breakfast and Dinner",
      "Experienced local driver/guide",
      "Inner Line Permits & Tolls"
    ],
    exclusions: [
      "Lunch and personal expenses",
      "Entry fees to monuments",
      "Travel Insurance",
      "Any medical expenses"
    ],
    categories: ["adventure"]
  },
  {
    id: "2",
    slug: "manali-snow-retreat",
    title: "Manali Premium Snow Retreat",
    location: "Manali",
    price_per_person: 8999,
    duration_days: 4,
    duration_nights: 3,
    image_urls: ["/images/destinations/manali.png"],
    vehicle_type: "Innova Crysta",
    max_occupancy: 6,
    description: "A perfect short getaway to the Valley of the Gods. This premium retreat is designed for families and couples seeking luxury amidst snow-capped peaks. Stay in top-rated resorts, enjoy private taxi transfers, and experience the thrill of snow activities in Solang Valley.",
    itinerary: [
      { day: 1, title: "Arrival in Manali", activities: "Pickup from Chandigarh/Kullu. Check-in to premium resort. Evening at leisure at Mall Road." },
      { day: 2, title: "Solang Valley Snow Point", activities: "Full day excursion to Solang Valley. Enjoy skiing, ATV rides, and incredible views of glaciers." },
      { day: 3, title: "Naggar Castle & Local Sightseeing", activities: "Visit the historic Naggar Castle, Roerich Art Gallery, Hadimba Temple, and Vashisht Hot Springs." },
      { day: 4, title: "Departure", activities: "Morning breakfast and drop-off to the starting point." }
    ],
    inclusions: [
      "Private Innova Crysta for all transfers",
      "3 Nights in a 4-Star Resort",
      "Buffet Breakfast and Dinner",
      "All toll taxes and parking fees"
    ],
    exclusions: [
      "Activity charges in Solang Valley",
      "Lunch",
      "Airfare/Train tickets"
    ],
    categories: ["family", "honeymoon"]
  },
  {
    id: "3",
    slug: "lahaul-spiti-extreme",
    title: "Lahaul & Spiti Offbeat Tour",
    location: "Lahaul",
    price_per_person: 18499,
    duration_days: 8,
    duration_nights: 7,
    image_urls: ["/images/destinations/spiti.png"],
    vehicle_type: "4x4 SUV",
    max_occupancy: 4,
    description: "For the hardcore adventure enthusiasts. This tour takes you deep into the remote corners of Lahaul and Spiti, places that remain cutoff from the rest of the world for half the year. Requires good physical fitness and an appetite for adventure.",
    itinerary: [
      { day: 1, title: "Manali to Keylong", activities: "Drive through Atal Tunnel into the rugged Lahaul valley." },
      { day: 2, title: "Keylong to Kaza", activities: "Cross Kunzum Pass, visit Losar and acclimatize to the high altitude." },
      { day: 3, title: "Langza, Hikkim & Comic", activities: "Visit the highest post office in the world at Hikkim and the fossil village Langza." },
      { day: 4, title: "Pin Valley National Park", activities: "Drive into the green oasis of Pin Valley. Spot snow leopards if you are incredibly lucky." },
      { day: 5, title: "Kaza to Chandratal", activities: "Journey to the beautiful Moon Lake." },
      { day: 6, title: "Chandratal camping", activities: "A full day relaxing and hiking around the lake." },
      { day: 7, title: "Chandratal to Manali", activities: "Return via Rohtang Pass." },
      { day: 8, title: "Departure", activities: "Tour ends in Manali." }
    ],
    inclusions: [
      "4x4 SUV with experienced driver",
      "Tents, sleeping bags, and camping gear",
      "All meals (Breakfast, Lunch, Dinner)",
      "High altitude medical kit & Oxygen cylinder"
    ],
    exclusions: [
      "Personal trekking gear",
      "Insurance",
      "Anything not mentioned in inclusions"
    ],
    categories: ["adventure"]
  },
  {
    id: "4",
    slug: "kasol-kheerganga-trek",
    title: "Kasol & Kheerganga Backpacking",
    location: "Kasol",
    price_per_person: 6499,
    duration_days: 4,
    duration_nights: 3,
    image_urls: ["/images/destinations/kasol.png"],
    vehicle_type: "Tempo Traveller",
    max_occupancy: 12,
    description: "Experience the vibrant hippie culture of Kasol and trek through the dense pine forests of Parvati Valley to reach the mystical Kheerganga hot springs. Perfect for solo travelers and groups of friends looking for an escape.",
    itinerary: [
      { day: 1, title: "Arrival in Kasol", activities: "Reach Kasol. Check-in to riverside camps. Explore local cafes and Chalal village." },
      { day: 2, title: "Trek to Kheerganga", activities: "Start the 12km trek from Barshaini. Hike through waterfalls and dense forests. Camp at Kheerganga." },
      { day: 3, title: "Kheerganga to Tosh", activities: "Trek down to Barshaini and drive to Tosh village. Explore the traditional wooden houses." },
      { day: 4, title: "Departure", activities: "Return to Bhuntar for onward journey." }
    ],
    inclusions: [
      "Accommodation in Riverside/Alpine Camps",
      "Meals (Breakfast & Dinner)",
      "Trek Guide",
      "Transfers from Bhuntar"
    ],
    exclusions: [
      "Lunch",
      "Porter charges",
      "Personal expenses"
    ],
    categories: ["adventure"]
  },
  {
    id: "5",
    slug: "shimla-heritage-tour",
    title: "Shimla Colonial Heritage Tour",
    location: "Shimla",
    price_per_person: 11999,
    duration_days: 5,
    duration_nights: 4,
    image_urls: ["/images/destinations/shimla.png"],
    vehicle_type: "Sedan / SUV",
    max_occupancy: 4,
    description: "Step back in time to the era of the British Raj. This heritage tour focuses on the colonial architecture, the legendary toy train ride, and peaceful walks through the deep cedar forests of Mashobra and Naldehra.",
    itinerary: [
      { day: 1, title: "Arrival via Toy Train", activities: "Experience the UNESCO toy train ride from Kalka to Shimla. Check into a heritage hotel." },
      { day: 2, title: "Shimla Heritage Walk", activities: "Guided walking tour covering the Viceregal Lodge, Christ Church, The Ridge, and Mall Road." },
      { day: 3, title: "Kufri & Mashobra", activities: "Day excursion to Kufri for panoramic Himalayan views, followed by a quiet nature walk in Mashobra." },
      { day: 4, title: "Naldehra Golf Course", activities: "Visit the oldest 9-hole golf course in India surrounded by thick deodar trees. Afternoon at leisure." },
      { day: 5, title: "Departure", activities: "Drive back to Chandigarh." }
    ],
    inclusions: [
      "Heritage Hotel Accommodation",
      "Breakfast",
      "Toy Train Ticket (subject to availability)",
      "Private vehicle for local sightseeing"
    ],
    exclusions: [
      "Lunch & Dinner",
      "Monument entry fees",
      "Guide charges (unless specified)"
    ],
    categories: ["family", "honeymoon"]
  },
  {
    id: "6",
    slug: "dharamshala-dalhousie-escape",
    title: "Dharamshala & Dalhousie Escape",
    location: "Dharamshala",
    price_per_person: 13499,
    duration_days: 6,
    duration_nights: 5,
    image_urls: ["/images/destinations/dharamshala.png"],
    vehicle_type: "Innova / Sedan",
    max_occupancy: 6,
    description: "A perfect blend of Tibetan spirituality in McLeod Ganj and unspoiled colonial charm in Dalhousie. Experience the serene monasteries, cascading waterfalls, and the spectacular 'Mini Switzerland of India' at Khajjiar.",
    itinerary: [
      { day: 1, title: "Arrival in Dharamshala", activities: "Check-in to hotel. Evening visit to the Tibetan market and Dalai Lama Temple." },
      { day: 2, title: "McLeod Ganj Sightseeing", activities: "Visit Bhagsu Waterfall, St. John in the Wilderness Church, and Naddi viewpoint." },
      { day: 3, title: "Drive to Dalhousie", activities: "Scenic drive to Dalhousie. Evening walk across Garam Sadak and Thandi Sadak." },
      { day: 4, title: "Khajjiar Excursion", activities: "Full day trip to Khajjiar (Mini Switzerland). Enjoy horse riding and zorbing in the meadows." },
      { day: 5, title: "Chamba Town Visit", activities: "Optional visit to historical Chamba town on the banks of Ravi river, or relax in Dalhousie." },
      { day: 6, title: "Departure", activities: "Drop off in Pathankot/Chandigarh." }
    ],
    inclusions: [
      "Accommodation in 3/4 Star Hotels",
      "MAP Meal Plan (Breakfast & Dinner)",
      "Private Chauffeur driven vehicle",
      "All interstate taxes"
    ],
    exclusions: [
      "Lunch",
      "Adventure activities in Khajjiar",
      "Any extra stops not in itinerary"
    ],
    categories: ["family", "spiritual"]
  },
  {
    id: "7",
    slug: "kinnaur-valleys-exploration",
    title: "Kinnaur Apple Orchards Tour",
    location: "Kinnaur",
    price_per_person: 12499,
    duration_days: 6,
    duration_nights: 5,
    image_urls: ["/images/destinations/kinnaur.png"],
    vehicle_type: "SUV",
    max_occupancy: 6,
    description: "Discover the land of gods and myths. Kinnaur is famous for its massive apple orchards, ancient temples, and the majestic Kinner Kailash range. Experience the hospitality of the high mountains.",
    itinerary: [
      { day: 1, title: "Shimla to Sarahan", activities: "Drive to Sarahan. Visit the famous Bhimakali Temple." },
      { day: 2, title: "Sarahan to Sangla", activities: "Drive into the beautiful Sangla Valley. Explore Kamru Fort." },
      { day: 3, title: "Chitkul - The Last Village", activities: "Visit Chitkul, the last inhabited village on the Indo-Tibetan border." },
      { day: 4, title: "Sangla to Kalpa", activities: "Drive to Kalpa. Witness the sunrise over Kinner Kailash." },
      { day: 5, title: "Kalpa Local & Roghi Village", activities: "Visit the Roghi village and the famous suicide point. Walk through orchards." },
      { day: 6, title: "Departure", activities: "Drive back to Shimla/Chandigarh." }
    ],
    inclusions: ["Transfers in SUV", "Stay in Boutique Hotels", "Breakfast & Dinner", "Guide"],
    exclusions: ["Lunch", "Internal permits for foreigners", "Tips"],
    categories: ["offbeat", "culture"]
  },
  {
    id: "8",
    slug: "manali-solang-honeymoon",
    title: "Romantic Manali Honeymoon Special",
    location: "Manali",
    price_per_person: 15999,
    duration_days: 5,
    duration_nights: 4,
    image_urls: ["/images/destinations/manali.png"],
    vehicle_type: "Private Sedan",
    max_occupancy: 2,
    description: "A specially curated romantic getaway for newlyweds. Includes candlelight dinners, flower decorations, and private tours of the most scenic spots in Manali.",
    itinerary: [
      { day: 1, title: "Arrival & Welcome", activities: "Pickup from Kullu. Flower decoration in room. Candlelight dinner." },
      { day: 2, title: "Snow Point & Solang", activities: "Private tour to Rohtang/Solang. Photography session in snow." },
      { day: 3, title: "Kullu & Manikaran", activities: "Visit the holy Manikaran gurudwara and enjoy river crossing in Kullu." },
      { day: 4, title: "Old Manali Walks", activities: "Cafe hopping in Old Manali and shopping at Mall Road." },
      { day: 5, title: "Departure", activities: "Drop off in Chandigarh." }
    ],
    inclusions: ["Honeymoon inclusions (Cake, Milk, Flower decoration)", "Candlelight Dinner", "Private Transfers", "Luxury Stay"],
    exclusions: ["Activity costs", "Everything else"],
    categories: ["honeymoon"]
  }
];

export async function getFeaturedPackages(): Promise<TourPackage[]> {
  if (process.env.DATABASE_URL) {
    try {
      const { rows } = await pool.query('SELECT * FROM tour_packages WHERE is_featured = TRUE ORDER BY created_at DESC LIMIT 3');
      if (rows.length > 0) return rows as TourPackage[];
    } catch (error) {
      console.error('Error fetching featured packages from DB:', error);
    }
  }
  return MOCK_PACKAGES.slice(0, 3);
}

export async function getPackageBySlug(slug: string): Promise<TourPackage | null> {
  if (process.env.DATABASE_URL) {
    try {
      const res = await pool.query('SELECT * FROM tour_packages WHERE slug = $1', [slug]);
      if (res.rows.length > 0) {
        return res.rows[0] as TourPackage;
      }
    } catch (error) {
      console.error(`[DB Error] Failed to fetch package ${slug}, falling back to mock data:`, error);
    }
  }
  const pkg = MOCK_PACKAGES.find(p => p.slug === slug);
  return pkg || null;
}

export async function getAllPackages(): Promise<TourPackage[]> {
  if (process.env.DATABASE_URL) {
    try {
      const res = await pool.query('SELECT * FROM tour_packages ORDER BY created_at DESC');
      if (res.rows.length > 0) {
        return res.rows as TourPackage[];
      }
    } catch (error) {
      console.error('[DB Error] Failed to fetch all packages, falling back to mock data:', error);
    }
  }
  return MOCK_PACKAGES;
}
