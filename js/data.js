// ==========================================
// HIMORA TRAVELS PRO — COMPREHENSIVE DATASET
// Curated for Local & International Explorers
// ==========================================

const HIMORA_DATA = {
  brand: {
    name: "Himora Travels",
    subtitle: "High-Altitude Luxury & Bespoke Himalayan Expeditions",
    headquarters: "Mall Road & Ridge, Shimla, Himachal Pradesh, India",
    phone: "+91 98160 12345",
    whatsapp: "919816012345", // Click-to-chat WhatsApp number
    email: "concierge@himoratravels.com",
    established: "2018",
    rating: 4.95,
    totalReviews: 1240,
    tripsCompleted: 3800
  },

  // Real-time exchange rates (Base: INR)
  currencies: {
    INR: { symbol: "₹", rate: 1, label: "INR (₹)" },
    USD: { symbol: "$", rate: 0.012, label: "USD ($)" },
    EUR: { symbol: "€", rate: 0.011, label: "EUR (€)" },
    GBP: { symbol: "£", rate: 0.0094, label: "GBP (£)" },
    AUD: { symbol: "A$", rate: 0.018, label: "AUD (A$)" }
  },

  // Live Mountain Road & Pass Status
  mountainPasses: [
    { name: "Atal Tunnel", altitude: "3,048 m (10,000 ft)", status: "OPEN", condition: "All-weather clear route", icon: "tunnel" },
    { name: "Rohtang Pass", altitude: "3,978 m (13,050 ft)", status: "OPEN (PERMIT)", condition: "Green permit required, light fog", icon: "mountain" },
    { name: "Kunzum Pass (Spiti)", altitude: "4,551 m (14,931 ft)", status: "OPEN (4X4)", condition: "High pass open for 4x4 vehicles", icon: "shield" },
    { name: "Jalori Pass (Tirthan)", altitude: "3,120 m (10,236 ft)", status: "OPEN", condition: "Scenic narrow mountain road clear", icon: "compass" },
    { name: "Chandratal Lake Road", altitude: "4,270 m (14,009 ft)", status: "ACCESSIBLE", condition: "High clearance SUV recommended", icon: "droplet" }
  ],

  // Live Weather Telemetry (Himachal Valleys)
  weatherStations: [
    { city: "Shimla", temp: "18°C", condition: "Pleasant Sunshine", altitude: "2,276 m", icon: "☀️" },
    { city: "Manali", temp: "14°C", condition: "Crisp Pine Breeze", altitude: "2,050 m", icon: "🌤️" },
    { city: "Kaza (Spiti)", temp: "4°C", condition: "Crystal Blue Skies", altitude: "3,800 m", icon: "❄️" },
    { city: "Dharamshala", temp: "21°C", condition: "Misty Cedars", altitude: "1,457 m", icon: "⛅" },
    { city: "Kasol", temp: "16°C", condition: "Valley Flowing Calm", altitude: "1,580 m", icon: "🌲" },
    { city: "Sangla (Kinnaur)", temp: "11°C", condition: "Apple Orchard Chill", altitude: "2,696 m", icon: "🍏" }
  ],

  // Curated Himalayan Packages
  packages: [
    {
      id: "spiti-circuit",
      title: "Spiti Valley Grand 4x4 Expedition",
      category: "expedition",
      vibeTag: "High Altitude Adventure",
      badge: "Flagship Expedition",
      duration: "8 Days / 7 Nights",
      durationDays: 8,
      basePriceINR: 21999,
      difficulty: "Challenging / Thrilling",
      maxAltitude: "4,551 m (Kunzum La)",
      bestSeason: "May to October (Summer & Autumn) | Jan-Feb (Snow Leopard Expedition)",
      heroImage: "images/landmarks/key_monastery.jpg",
      gallery: [
        "images/landmarks/key_monastery.jpg",
        "images/landmarks/chandratal.jpg",
        "images/landmarks/chicham_bridge.jpg"
      ],
      tagline: "Traverse the Middle Land between Tibet and India through lunar landscapes & millennial monasteries.",
      highlights: [
        "Visit Key Monastery & 1000-year-old Tabo UNESCO World Heritage",
        "Camp beneath billion-star galactic skies at mystical Chandratal Lake",
        "Send a postcard from Hikkim — the World's Highest Post Office (4,440 m)",
        "Fossil hunting in Langza village beneath snowcapped Chau Chau Kang Nilda",
        "High-clearance 4x4 vehicle with certified high-altitude hill captain"
      ],
      itinerary: [
        { day: 1, title: "Shimla to Sangla / Chitkul", desc: "Drive along the ancient Hindustan-Tibet road through deep gorges of Kinnaur to the last inhabited village on the Indo-Tibetan border." },
        { day: 2, title: "Chitkul to Nako & Tabo", desc: "Witness the dramatic transition from lush green valleys to moonscapes. Explore Nako Lake and Tabo's 10th-century mud monastery." },
        { day: 3, title: "Tabo to Dhankar & Kaza", desc: "Climb to Dhankar Monastery perched cliffside over the confluence of Spiti and Pin rivers. Evening walk in Kaza market." },
        { day: 4, title: "High Himalayan Villages (Hikkim, Komic, Langza)", desc: "Mail letters at the world's highest post office, visit Komic (highest motorable village), and spot marine fossils in Langza." },
        { day: 5, title: "Key Monastery & Kibber Sanctuary", desc: "Morning chanting with monks at Key Gompa, cross Chicham Bridge (Asia's highest suspension bridge), explore Kibber wildlife sanctuary." },
        { day: 6, title: "Kaza to Chandratal Lake via Kunzum La", desc: "Cross the mighty Kunzum Pass (4,551m) and hike to the crescent turquoise jewel — Chandratal Lake. Night in deluxe alpine dome camps." },
        { day: 7, title: "Chandratal to Manali via Atal Tunnel", desc: "Traverse rugged glacial streams of Batal, cross through the engineering marvel of Atal Tunnel into the lush cedar valley of Manali." },
        { day: 8, title: "Manali Departure & Farewell", desc: "Leisure morning in Old Manali cafes before chauffeur drop to Chandigarh or onward airport connection." }
      ],
      inclusions: [
        "Private 4x4 Chauffeur vehicle (Innova Crysta or 4x4 Scorpio/Thar) for all days",
        "All 7 nights boutique mountain homestays & luxury alpine camping at Chandratal",
        "Daily hearty mountain breakfast and multi-course Himalayan dinners",
        "Oxygen cylinder & medical AMS first-aid kit in every vehicle",
        "All Inner Line Permits (ILP), green cess, driver allowance & fuel",
        "Experienced local Spiti-native guide fluent in English & Hindi"
      ],
      exclusions: [
        "Flights / Train to Chandigarh or Delhi",
        "Personal expenses, snacks, and monument entry tickets",
        "Travel insurance (can be arranged upon request)"
      ]
    },
    {
      id: "manali-solang-alpine",
      title: "Manali, Rohtang & Solang Luxury Escape",
      category: "classic",
      vibeTag: "Alpine Scenic & Snow Peaks",
      badge: "Best Seller",
      duration: "4 Days / 3 Nights",
      durationDays: 4,
      basePriceINR: 9999,
      difficulty: "Easy / Moderate",
      maxAltitude: "3,978 m (Rohtang Pass)",
      bestSeason: "All Year Round (Snow in Dec-Feb, Meadows in May-Oct)",
      heroImage: "images/landmarks/solang.jpg",
      gallery: [
        "images/landmarks/solang.jpg",
        "images/landmarks/atal_tunnel.jpg",
        "images/landmarks/hadimba.jpg"
      ],
      tagline: "Pine-scented mountain air, roaring Beas river, ancient wooden temples, and majestic snow passes.",
      highlights: [
        "Day trip through the Atal Tunnel to Sissu waterfall in Lahaul Valley",
        "Snow games & paragliding in Solang Valley",
        "Private boutique riverside chalet with fireplace & apple orchard views",
        "Café hopping in bohemian Old Manali and cedar forest walk to Hadimba Temple",
        "Hot sulfur springs dip in Vashisht village"
      ],
      itinerary: [
        { day: 1, title: "Arrival in Manali & Riverside Welcome", desc: "Private pickup from Chandigarh/Bhuntar. Check-in to luxury riverside resort. Evening stroll along Old Manali's quaint artisan cafes." },
        { day: 2, title: "Solang Valley Adventure & Atal Tunnel", desc: "Morning drive to Solang for zorbing, ATV quad biking, or paragliding. Cross Atal Tunnel to behold the dramatic barren majesty of Lahaul." },
        { day: 3, title: "Rohtang Pass / Gulaba Snow Excursion", desc: "Ascend the iconic winding curves of Rohtang Pass (subject to weather/permit) with sweeping 360-degree panorama of Himalayan glaciers." },
        { day: 4, title: "Heritage Temples & Farewell", desc: "Visit the 500-year-old cedar Hadimba Temple, Manu Temple, and Naggar Castle before chauffeur drop for onward journey." }
      ],
      inclusions: [
        "Private dedicated chauffeur sedan/SUV for airport transfers and sightseeing",
        "3 nights in premium 4-star mountain resort or boutique orchard chalet",
        "Complimentary breakfast & multi-course dinners",
        "Atal Tunnel and Solang Valley permits & parking charges",
        "Bonfire evening with Himachali traditional music on request"
      ],
      exclusions: [
        "Adventure activity tickets (Paragliding, ATV)",
        "Meals outside specified plan"
      ]
    },
    {
      id: "kasol-kheerganga-magic",
      title: "Kasol, Tosh & Kheerganga Hot Spring Trek",
      category: "offbeat",
      vibeTag: "Wilderness & Bohemian Bliss",
      badge: "Trending Youth & Solo",
      duration: "4 Days / 3 Nights",
      durationDays: 4,
      basePriceINR: 7999,
      difficulty: "Moderate Trekking",
      maxAltitude: "2,960 m (Kheerganga)",
      bestSeason: "March to June | September to November",
      heroImage: "images/landmarks/parvati_kasol.jpg",
      gallery: [
        "images/landmarks/parvati_kasol.jpg",
        "images/landmarks/tosh.jpg",
        "images/landmarks/kheerganga.jpg"
      ],
      tagline: "Parvati Valley's iconic pine forests, riverside Israeli bakeries, and steaming natural hot spring pools under stars.",
      highlights: [
        "Scenic 12 km guided trek through waterfalls to Kheerganga summit",
        "Rejuvenating soak in natural hot sulfur baths overlooking snow peaks",
        "Stargazing & acoustic bonfire at high alpine wilderness campsite",
        "Explore bohemian Tosh and tranquil Chalal village",
        "Café hopping: shakshuka, fresh apple crumbles, and organic mint teas"
      ],
      itinerary: [
        { day: 1, title: "Kasol Arrival & Parvati River Walk", desc: "Check-in to riverside cottage. Afternoon walk to Chalal village through tall pines. Savor authentic culinary delights at Moon Dance cafe." },
        { day: 2, title: "Kasol to Barshaini & Trek to Kheerganga", desc: "Chauffeur drive to Barshaini dam. Begin the enchanting forest trek past Rudranag waterfall to Kheerganga. Evening hot spring bath." },
        { day: 3, title: "Kheerganga Sunrise to Tosh Village", desc: "Wake up to misty Himalayan sunrise. Trek down to Barshaini and transfer to cliffside Tosh village. Enjoy sunset over the snowcapped peaks." },
        { day: 4, title: "Manikaran Sahib Gurudwara & Departure", desc: "Visit the revered Manikaran Sahib hot springs and langar before onward transfer to Chandigarh / Delhi." }
      ],
      inclusions: [
        "Experienced certified mountain trek leader and porter support",
        "2 nights boutique homestay/cottage + 1 night alpine dome camping with sleeping bags",
        "All meals during trek (Breakfast, Packed Lunch, Hot Dinner)",
        "Bonfire, camping permits, and village environmental fees",
        "Private chauffeur cab from Chandigarh or Bhuntar"
      ],
      exclusions: [
        "Personal trekking equipment (trekking poles, personal backpacks)"
      ]
    },
    {
      id: "kinnaur-sangla-chitkul",
      title: "Kinnaur, Kalpa & Last Village of India",
      category: "expedition",
      vibeTag: "Ancient Silk Route Heritage",
      badge: "Offbeat Gem",
      duration: "6 Days / 5 Nights",
      durationDays: 6,
      basePriceINR: 15999,
      difficulty: "Moderate Road Expedition",
      maxAltitude: "3,450 m (Chitkul)",
      bestSeason: "April to October",
      heroImage: "images/landmarks/chitkul.jpg",
      gallery: [
        "images/landmarks/chitkul.jpg",
        "images/landmarks/kalpa.jpg",
        "images/landmarks/kamru_fort.jpg"
      ],
      tagline: "Apple laden slopes, cliff-hanging Hindustan-Tibet highway, and awe-inspiring views of sacred Kinner Kailash peak.",
      highlights: [
        "Stay in Chitkul (3,450m), the last inhabited Indian village before Tibetan border",
        "Golden hour photography of the sacred 6,050m Kinner Kailash Shivling from Kalpa",
        "Walk through Kamru Fort in Sangla Valley, dating back over a thousand years",
        "Drive the engineering marvel of Kinnaur's cliff-cut hanging roads",
        "Taste crisp Kinnauri Royal Delicious apples directly from family orchards"
      ],
      itinerary: [
        { day: 1, title: "Shimla to Narkanda & Sarahan", desc: "Drive past apple belts to Sarahan. Visit the extraordinary 800-year-old wooden Bhimakali Temple." },
        { day: 2, title: "Sarahan to Sangla Valley", desc: "Enter deep into Kinnaur along the gushing Baspa River to Sangla. Visit Kamru Fort and traditional wood-carved hamlets." },
        { day: 3, title: "Sangla to Chitkul (The Edge of India)", desc: "Excursion to pristine Chitkul with its wooden slate-roof houses and emerald river beach." },
        { day: 4, title: "Sangla to Kalpa & Roghi Cliff", desc: "Drive to Kalpa village. Stand on the breathtaking Roghi 'Suicide Point' cliff and watch sunset paint Kinner Kailash gold." },
        { day: 5, title: "Kalpa to Shoja / Tirthan", desc: "Begin scenic return loop through high cedar forests and tranquil mountain passes." },
        { day: 6, title: "Return to Shimla / Chandigarh Drop", desc: "Morning village walk before seamless drop at Chandigarh airport/railway station." }
      ],
      inclusions: [
        "Dedicated SUV (Innova / Scorpio) with expert mountain driver",
        "5 nights deluxe valley-view mountain lodges & heritage stays",
        "Breakfast & gourmet dinner daily",
        "Inner line advisory & all highway tolls"
      ],
      exclusions: [
        "Personal shopping (Kinnauri handwoven shawls/caps)"
      ]
    },
    {
      id: "dharamshala-triund-dalai",
      title: "Dharamshala, McLeodGanj & Triund Sky Camp",
      category: "classic",
      vibeTag: "Tibetan Soul & Dhauladhar Ridges",
      badge: "Spiritual & Trek",
      duration: "4 Days / 3 Nights",
      durationDays: 4,
      basePriceINR: 8499,
      difficulty: "Easy to Moderate",
      maxAltitude: "2,850 m (Triund Ridge)",
      bestSeason: "March to June | September to December",
      heroImage: "images/landmarks/triund.jpg",
      gallery: [
        "images/landmarks/triund.jpg",
        "images/landmarks/mcleodganj.jpg",
        "images/landmarks/bhagsu.jpg"
      ],
      tagline: "Resonating Tibetan prayer bells, Dalai Lama's residence, and camping on a sheer mountain ridge overlooking Kangra valley.",
      highlights: [
        "Private guided visit to Tsuglagkhang Temple (Dalai Lama's monastery)",
        "Panoramic day trek to Triund Ridge directly facing vertical Dhauladhar snow walls",
        "Sunset over Kangra valley with thousands of city lights twinkling below",
        "Explore Norbulingka Institute preserving sacred Tibetan thangka art",
        "Bhagsunag waterfall cafe trails"
      ],
      itinerary: [
        { day: 1, title: "Dharamshala Arrival & McLeodGanj Culture", desc: "Chauffeur pickup, check-in to hillside pine lodge. Visit Dalai Lama Temple and Tibetan market." },
        { day: 2, title: "The Iconic Triund Trek", desc: "Trek through oak and rhododendron forests up to Triund meadow. Stunning close-up views of sheer Dhauladhar peaks." },
        { day: 3, title: "Kangra Fort & Norbulingka Institute", desc: "Descend to Dharamshala, tour ancient Kangra Fort and traditional Tibetan art ateliers." },
        { day: 4, title: "Tea Gardens & Departure", desc: "Morning stroll in Dharamshala organic tea estates before airport drop at Gaggal (DHM) or Pathankot." }
      ],
      inclusions: [
        "3 nights accommodation (2 nights hotel + 1 night Triund ridge camp with dome tents)",
        "Private chauffeur vehicle for entire tour",
        "Trek guide, camping gear, and daily breakfast & dinner"
      ],
      exclusions: ["Personal airfare"]
    },
    {
      id: "bir-billing-paragliding",
      title: "Bir Billing: Soar The Skies & Monasteries",
      category: "adventure",
      vibeTag: "Aviation & Zen Serenity",
      badge: "Adventure Top Pick",
      duration: "3 Days / 2 Nights",
      durationDays: 3,
      basePriceINR: 6499,
      difficulty: "Thrilling Adventure",
      maxAltitude: "2,400 m (Billing Takeoff)",
      bestSeason: "October to November (Best thermals) | March to June",
      heroImage: "images/landmarks/bir.jpg",
      gallery: [
        "images/landmarks/bir.jpg",
        "images/landmarks/mcleodganj.jpg"
      ],
      tagline: "Take off from the world's 2nd highest paragliding launch site and glide like an eagle over lush tea plantations.",
      highlights: [
        "Tandem paragliding flight with international certified pilot + HD GoPro video",
        "Sunset at the Billing takeoff with views across Shivalik mountain ranges",
        "Cycling tour through Tibetan colony, Chokling Monastery and tea estates",
        "Eclectic organic vegan cafes and artisan bakeries in Bir"
      ],
      itinerary: [
        { day: 1, title: "Arrival in Bir & Monastery Tour", desc: "Arrive in Bir, check in to garden eco-resort. Evening bicycle exploration of Tibetan monasteries." },
        { day: 2, title: "Billing Flight & Landing", desc: "Drive to 2,400m Billing launch site. Experience 20-30 minutes soaring thermals with landing at sunset." },
        { day: 3, title: "Dharmalaya Institute & Departure", desc: "Morning meditation / eco-walk before transfer to Pathankot or Chandigarh." }
      ],
      inclusions: [
        "Tandem paragliding flight with certified pilot & HD footage",
        "2 nights stay in boutique eco-resort",
        "Private transfers and daily breakfast"
      ],
      exclusions: ["Additional extreme aerial stunts"]
    },
    {
      id: "tirthan-jibhi-secret",
      title: "Tirthan Valley & Jibhi: The Secret Woods",
      category: "offbeat",
      vibeTag: "Untouched Pine Wilderness",
      badge: "Off the Beaten Path",
      duration: "4 Days / 3 Nights",
      durationDays: 4,
      basePriceINR: 8999,
      difficulty: "Easy / Relaxing",
      maxAltitude: "3,120 m (Jalori Pass)",
      bestSeason: "All Year (Lush green May-Sep, Snow Nov-Feb)",
      heroImage: "images/landmarks/jibhi_waterfall.jpg",
      gallery: [
        "images/landmarks/jibhi_waterfall.jpg",
        "images/landmarks/jalori_pass.jpg",
        "images/landmarks/ghnp.jpg"
      ],
      tagline: "Crystal clear trout streams, Great Himalayan National Park trails, and wooden treehouses nestled in apple orchards.",
      highlights: [
        "Trek to pristine holy Serolsar Lake through ancient deodar cedar forests",
        "Explore Jibhi stone-and-wood waterfalls and hidden Kulvi architectural homes",
        "River pebble walk and brown trout angling along Tirthan River",
        "Bonfire evenings with local Siddu (steamed walnut delicacy) tasting"
      ],
      itinerary: [
        { day: 1, title: "Arrival in Tirthan Valley", desc: "Private pickup. Check-in to riverside wooden cottage. Leisure riverside hammock evening." },
        { day: 2, title: "Jalori Pass & Serolsar Lake Hike", desc: "Drive up the switchbacks of Jalori Pass (3,120m). Easy 5km forest walk to mystical Serolsar Lake." },
        { day: 3, title: "Jibhi Waterfalls & Chehni Kothi", desc: "Visit the towering 1,500-year-old Chehni Kothi tower temple, highest wood-and-stone structure in western Himalayas." },
        { day: 4, title: "Great Himalayan National Park Walk & Departure", desc: "Morning riverside trail inside UNESCO buffer zone before drop to Chandigarh/Delhi." }
      ],
      inclusions: [
        "3 nights in riverside wood chalets or treehouse",
        "Private dedicated chauffeur vehicle",
        "Daily mountain breakfast and local cuisine dinner",
        "Jalori Pass forest permits and guide"
      ],
      exclusions: ["Trout angling fishing license (can be arranged on-spot)"]
    },
    {
      id: "shimla-colonial-heritage",
      title: "Shimla & Kufri: Imperial Pines & British Heritage",
      category: "classic",
      vibeTag: "Colonial Elegance & Forest Walks",
      badge: "Family & Heritage",
      duration: "3 Days / 2 Nights",
      durationDays: 3,
      basePriceINR: 5999,
      difficulty: "Easy",
      maxAltitude: "2,622 m (Kufri)",
      bestSeason: "All Year Round (Snow in Jan, Cool in Summer)",
      heroImage: "images/landmarks/ridge_church.jpg",
      gallery: [
        "images/landmarks/ridge_church.jpg",
        "images/landmarks/jakhoo.jpg",
        "images/landmarks/kufri.jpg"
      ],
      tagline: "Himora's home turf — walk the historic Mall Road, majestic Viceregal Lodge, and secluded pine trails of Mashobra.",
      highlights: [
        "Privately guided heritage walk through British Raj architectural landmarks",
        "Horseback trail & panoramic Himalayan viewpoints in Kufri & Mahasu Peak",
        "Secluded picnic in the apple orchards of Mashobra & Craignano Nature Park",
        "Ride the historic UNESCO Kalka-Shimla Toy Train"
      ],
      itinerary: [
        { day: 1, title: "Arrival in Shimla & Heritage Evening", desc: "Pickup from Chandigarh / Kalka. Check-in to heritage hotel. Evening walk on Ridge & Christ Church." },
        { day: 2, title: "Kufri, Mashobra & Jakhoo Peak", desc: "Ascend to Jakhoo Temple via ropeway cable car. Afternoon forest excursion to Kufri and serene Mashobra." },
        { day: 3, title: "Viceregal Lodge & Departure", desc: "Explore the historic Indian Institute of Advanced Study before private drop to Chandigarh." }
      ],
      inclusions: [
        "2 nights in 4-star colonial or pine-facing boutique hotel",
        "Dedicated private sedan / SUV",
        "Breakfast and dinner included",
        "Local Shimla native concierge guidance"
      ],
      exclusions: ["Toy train tickets (subject to railway availability)"]
    },
    {
      id: "honeymoon-luxury-himalayan",
      title: "Himalayan Romance: Private Chalets & Candlelit Valleys",
      category: "honeymoon",
      vibeTag: "Luxury & Intimate Seclusion",
      badge: "Honeymoon Special",
      duration: "5 Days / 4 Nights",
      durationDays: 5,
      basePriceINR: 18999,
      difficulty: "Pure Luxury & Leisure",
      maxAltitude: "2,600 m",
      bestSeason: "September to May (Snow Season & Blossom Season)",
      heroImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
        "images/landmarks/hadimba.jpg"
      ],
      tagline: "Glass-front luxury chalets, private jacuzzi with snow views, starlit bonfire, and couple spa sessions.",
      highlights: [
        "4 nights in glass-domed luxury chalet with panoramic mountain & snow views",
        "Complimentary candlelight dinner with Himachali apple wine and floral setup",
        "Private chauffeur in luxury Innova Crysta throughout the journey",
        "Couple herbal aroma spa session overlooking pine forest",
        "Private riverside sunset picnic setup in Solang/Beas valley"
      ],
      itinerary: [
        { day: 1, title: "Romantic Welcome in Manali / Kullu", desc: "Private luxury chauffeur pickup from Chandigarh or Bhuntar airport. Flower bouquet, apple wine & scenic check-in." },
        { day: 2, title: "Atal Tunnel & Private Picnic in Lahaul", desc: "Drive through Atal tunnel. Set up a private gourmet picnic with folding chairs overlooking snowy Lahauli peaks." },
        { day: 3, title: "Solang Cable Car & Couple Spa", desc: "Panoramic cable car ride to high mountain viewpoints. Afternoon therapeutic couple spa." },
        { day: 4, title: "Naggar Castle & Candlelit Bonfire", desc: "Visit ancient Russian artist Roerich art estate and Naggar Castle. Private candlelit dinner by the fire." },
        { day: 5, title: "Fond Memories & Chauffeur Drop", desc: "Breakfast in bed before comfortable private drop to airport or railway station." }
      ],
      inclusions: [
        "Luxury mountain chalet stay with private balcony & heating",
        "Chauffeur-driven Innova Crysta for all 5 days",
        "Daily gourmet breakfast, candlelight dinners, and arrival cake & wine",
        "Couple spa session & photography assistance"
      ],
      exclusions: ["Personal shopping & airfare"]
    }
  ],

  // Dedicated Himachal Cab / Taxi Fleet (Starting with the Mountain King: Maruti Alto)
  cabs: [
    {
      id: "alto",
      name: "Maruti Alto / Alto K10 (Mountain King)",
      badge: "Most Popular Mountain Cab",
      seats: "3-4 Passengers + 1 Driver",
      luggage: "2 Small / Medium Bags",
      perKmRate: 11,
      dailyRateINR: 2200,
      suitedFor: "Couples, solo explorers, budget backpackers, agile mountain hairpin navigation",
      features: ["Native Hill Driver", "Compact Agile Cornering", "Heater / AC", "Fuel & Tolls Included", "Music System"],
      image: "images/cabs/alto.jpg"
    },
    {
      id: "sedan",
      name: "Sedan (Swift Dzire / Toyota Etios)",
      badge: "Comfort Touring",
      seats: "4 Passengers + 1 Driver",
      luggage: "2 Large + 2 Small Bags",
      perKmRate: 14,
      dailyRateINR: 3400,
      suitedFor: "Small families, couples, smooth highway + valley sightseeing",
      features: ["Full Climate Control AC", "Spacious Boot Trunk", "Hill-Certified Chauffeur", "Phone Chargers", "Sanitized Daily"],
      image: "images/cabs/dzire.jpg"
    },
    {
      id: "suv-innova",
      name: "Luxury SUV (Toyota Innova Crysta)",
      badge: "Premium Family Choice",
      seats: "6-7 Passengers + 1 Driver",
      luggage: "4 Large + 3 Small Bags",
      perKmRate: 20,
      dailyRateINR: 5200,
      suitedFor: "Families, corporate retreats, high comfort mountain cruising",
      features: ["Captain Reclining Seats", "Dual Blower Rear AC", "Plush Mountain Suspension", "High Ground Clearance", "Roof Carrier Available"],
      image: "images/cabs/innova.jpg"
    },
    {
      id: "offroad-thar",
      name: "4x4 Expedition (Mahindra Thar / Scorpio 4WD)",
      badge: "Extreme Pass & Snow",
      seats: "4 Passengers + 1 Driver",
      luggage: "3 Bags",
      perKmRate: 24,
      dailyRateINR: 6500,
      suitedFor: "Spiti Valley circuit, Chandratal Lake, Kunzum Pass, heavy snow & river crossings",
      features: ["4x4 Low/High Range Transfer Box", "High Altitude Engine Tuning", "Snow Chains Equipped", "Off-Road Specialist Driver"],
      image: "images/cabs/thar.jpg"
    },
    {
      id: "tempo-traveller",
      name: "Group Cruiser (Force Urbania / Tempo 12-16 Seater)",
      badge: "Group & College Tours",
      seats: "12 to 16 Passengers",
      luggage: "Full Rooftop Carrier & Deep Trunk",
      perKmRate: 32,
      dailyRateINR: 7800,
      suitedFor: "College squads, corporate teams, large joint family tours",
      features: ["Individual Pushback Reclining Seats", "Dedicated AC Louvres & Reading Lights", "High Roof Walk-In Cabin", "Stereo Surround Sound", "Experienced Mountain Captain"],
      image: "images/cabs/traveller.jpg"
    }
  ],

  // Popular Fixed Route Taxi Fares (Transparent)
  taxiRoutes: [
    { from: "Chandigarh Airport", to: "Shimla", distance: "115 km (3.5 hrs)", altoINR: 2200, sedanINR: 2800, innovaINR: 4200 },
    { from: "Chandigarh Airport", to: "Manali", distance: "285 km (7 hrs via 4-Lane)", altoINR: 4500, sedanINR: 5800, innovaINR: 8500 },
    { from: "Delhi IGI Airport (T3)", to: "Shimla", distance: "360 km (7.5 hrs)", altoINR: 4900, sedanINR: 6200, innovaINR: 9200 },
    { from: "Delhi IGI Airport (T3)", to: "Manali", distance: "520 km (11 hrs)", altoINR: 6900, sedanINR: 8900, innovaINR: 13500 },
    { from: "Kalka Railway Station", to: "Shimla Mall Road", distance: "88 km (2.5 hrs)", altoINR: 1800, sedanINR: 2300, innovaINR: 3500 },
    { from: "Manali", to: "Spiti Valley (Kaza) Round Trip 4x4", distance: "7 Days Circuit", altoINR: 0, sedanINR: 0, innovaINR: 32000, tharINR: 36000 }
  ],

  // Famous Actual Sites & Activities by Location (Clickable Valley Cards & Modal Details)
  famousSites: [
    {
      id: "shimla",
      location: "Shimla & Kufri",
      tagline: "Colonial Capital, Jakhoo Ridge & Snow Slopes",
      altitude: "2,276 m - 2,622 m",
      driveTime: "3.5 hrs from Chandigarh Airport",
      bestSeason: "All Year (Dec-Feb for Snow, Mar-Jun for Pleasant Summers)",
      coverImage: "images/landmarks/ridge_church.jpg",
      sitesCount: "3 Iconic Sites • 4 Mountain Activities",
      packageId: "shimla-colonial-heritage",
      localFood: "Authentic Siddu with hot ghee, Chha Gosht, Madra curry",
      items: [
        {
          name: "Jakhoo Temple & Giant Hanuman Statue",
          altitude: "2,455 m",
          type: "Spiritual & Viewpoint",
          desc: "The highest peak in Shimla featuring the iconic 108-foot colossal Hanuman statue and Jakhoo Ropeway aerial cable car offering 360-degree snow peak vistas.",
          image: "images/landmarks/jakhoo.jpg",
          activity: "Jakhoo Ropeway Cable Car Ride • Panoramic Snow Range Views • Pine Forest Walk"
        },
        {
          name: "Kufri Snow Adventure Slopes",
          altitude: "2,622 m",
          type: "Snow Sports & Nature",
          desc: "Winter wonderland with thrilling snow skiing, tobogganing sledges, Himalayan yak rides, and horse treks up to Mahasu Peak.",
          image: "images/landmarks/kufri.jpg",
          activity: "Skiing & Snow Sledging • Yak & Horse Riding • Himalayan Nature Park Tour"
        },
        {
          name: "The Ridge, Christ Church & Mall Road",
          altitude: "2,205 m",
          type: "Heritage & Stroll",
          desc: "The beating heart of Shimla. Neo-Gothic 1857 Christ Church, British Gaiety Theatre, Tudor library, and sunset Lakkar Bazaar artisan crafts.",
          image: "images/landmarks/ridge_church.jpg",
          activity: "Heritage British Architecture Walk • Sunset Photography • Street Cafe Hopping"
        }
      ]
    },
    {
      id: "manali",
      location: "Manali & Solang",
      tagline: "Valley of Gods, Snow Passes & Cafe Culture",
      altitude: "2,050 m - 3,978 m",
      driveTime: "7 hrs from Chandigarh via New 4-Lane",
      bestSeason: "Dec-Feb (Heavy Snow & Skiing) | May-Oct (Lush Meadows)",
      coverImage: "images/landmarks/solang.jpg",
      sitesCount: "3 Iconic Sites • 5 Extreme Adventures",
      packageId: "manali-solang-alpine",
      localFood: "Wood-smoked Beas trout, Siddu, Walnut chutneys",
      items: [
        {
          name: "Solang Valley Snow Sports Hub",
          altitude: "2,560 m",
          type: "Extreme Adventure",
          desc: "Vibrant alpine valley famous for snowmobiles, tandem paragliding, giant zorbing balls, quad biking, and ropeway cable cars over cedar forests.",
          image: "images/landmarks/solang.jpg",
          activity: "Snowmobiling • Tandem Paragliding Flights • ATV Quad Biking • Gondola Cable Car"
        },
        {
          name: "Rohtang Pass & Atal Tunnel Marvel",
          altitude: "3,978 m (Rohtang) / 3,048 m (Tunnel)",
          type: "Glacial High Pass",
          desc: "Traverse the 9.02 km Atal Tunnel beneath Rohtang into Lahaul's Sissu waterfall, or climb Rohtang's snowy glaciers facing Pir Panjal peaks.",
          image: "images/landmarks/atal_tunnel.jpg",
          activity: "Glacier Snow Walking • Sissu Waterfall Excursion • 4x4 High-Pass Drives"
        },
        {
          name: "Old Manali Bohemian Cafes & Hadimba Temple",
          altitude: "2,050 m",
          type: "Culture & Nightlife",
          desc: "Ancient 500-year-old carved wooden pagoda Hadimba Temple hidden inside centuries-old cedar groves, leading to bohemian live-music cafes.",
          image: "images/landmarks/hadimba.jpg",
          activity: "Live Acoustic Cafe Nights • Wood-Fired Pizza • Cedar Forest Nature Walks"
        }
      ]
    },
    {
      id: "kasol",
      location: "Kasol & Parvati Valley",
      tagline: "Riverside Magic, Hot Springs & Mountain Trails",
      altitude: "1,580 m - 2,960 m",
      driveTime: "6.5 hrs from Chandigarh",
      bestSeason: "March to June | September to November",
      coverImage: "images/landmarks/parvati_kasol.jpg",
      sitesCount: "3 Iconic Sites • 4 Valley Treks",
      packageId: "kasol-kheerganga-magic",
      localFood: "Fresh Apple Crumble, Shakshuka, Himachali mint tea",
      items: [
        {
          name: "Kheerganga Hot Springs Summit",
          altitude: "2,960 m",
          type: "Alpine Trek & Wellness",
          desc: "A mesmerizing 12 km pine-forest trek passing Rudranag waterfall, ending at steaming natural sulfur hot pools overlooking snow peaks.",
          image: "images/landmarks/kheerganga.jpg",
          activity: "Natural Hot Spring Bath under Stars • Mountain Ridge Camping • Forest Trek"
        },
        {
          name: "Tosh Cliffside Village & Waterfalls",
          altitude: "2,400 m",
          type: "Rustic Alpine Living",
          desc: "Traditional wooden slate-roof houses perched cliffside at the head of Parvati valley, famous for sunset views and vibrant cafe music.",
          image: "images/landmarks/tosh.jpg",
          activity: "Waterfall Cafes • Tosh River Trails • Panoramic Parvati Mountain Views"
        },
        {
          name: "Parvati Riverfront Bonfire Camping",
          altitude: "1,580 m",
          type: "Parties & Stargazing",
          desc: "Camp directly along the gushing turquoise Parvati river with roaring evening bonfires, acoustic guitars, Israeli bakery treats, and starlight.",
          image: "images/landmarks/parvati_kasol.jpg",
          activity: "Riverside Bonfires • Stargazing • Acoustic Jams • Cafe Hopping in Kasol"
        }
      ]
    },
    {
      id: "spiti",
      location: "Spiti Valley & Chandratal",
      tagline: "Lunar Deserts, Ancient Monasteries & Highest Villages",
      altitude: "3,800 m - 4,551 m",
      driveTime: "12 hrs circuit via Kinnaur / Atal Tunnel",
      bestSeason: "May to October (Summer & Autumn) | Jan-Feb (Winter 4x4)",
      coverImage: "images/landmarks/key_monastery.jpg",
      sitesCount: "3 Iconic Sites • 4 Expedition Highlights",
      packageId: "spiti-circuit",
      localFood: "Butter tea (Po Cha), Spitian Thukpa & Steamed Tingmo",
      items: [
        {
          name: "Key Monastery & Kaza High Villages",
          altitude: "4,166 m (Key) / 4,440 m (Hikkim)",
          type: "Ancient Tibetan Heritage",
          desc: "1000-year-old cliffside monastery fortress, and Hikkim — the highest post office in the world where you can mail letters to loved ones.",
          image: "images/landmarks/key_monastery.jpg",
          activity: "Monk Chanting Ceremonies • Send World's Highest Postcard • Fossil Exploration in Langza"
        },
        {
          name: "Chandratal Moon Lake Stargazing",
          altitude: "4,270 m",
          type: "Glacial Wonder",
          desc: "Turquoise crescent lake situated in high Himalayan wilderness. Phenomenal Milky Way astrophotography and luxury alpine dome camping.",
          image: "images/landmarks/chandratal.jpg",
          activity: "Billion-Star Galaxy Photography • Alpine Dome Camp • Glacial Lake Walk"
        },
        {
          name: "Chicham Bridge & Pin Valley",
          altitude: "4,145 m",
          type: "High Engineering & Wildlife",
          desc: "Asia's highest suspension bridge spanning over a 1000-foot deep canyon, and the untamed wildlife valley of Ibex and Snow Leopards.",
          image: "images/landmarks/chicham_bridge.jpg",
          activity: "Chicham Bridge Walk • Pin Valley National Park Drive • Mud Village Stays"
        }
      ]
    },
    {
      id: "dharamshala",
      location: "Dharamshala & McLeodGanj",
      tagline: "Tibetan Soul, Dalai Lama's Abode & Triund Ridge",
      altitude: "1,457 m - 2,850 m",
      driveTime: "5.5 hrs from Chandigarh / Airport at Gaggal",
      bestSeason: "March to June | September to December",
      coverImage: "images/landmarks/triund.jpg",
      sitesCount: "3 Iconic Sites • 3 Cultural Treks",
      packageId: "dharamshala-triund-dalai",
      localFood: "Tibetan Momos, Thukpa, Kangri Dham feasts",
      items: [
        {
          name: "Tsuglagkhang Complex (Dalai Lama Temple)",
          altitude: "1,770 m",
          type: "Spiritual Center",
          desc: "The sacred official residence and temple of His Holiness the 14th Dalai Lama, featuring vibrant prayer wheels, golden Buddha statues, and monk debates.",
          image: "images/landmarks/mcleodganj.jpg",
          activity: "Tibetan Prayer Wheels • Meditation Hall • Tibet Museum Visit"
        },
        {
          name: "Triund Ridge Summit Camp",
          altitude: "2,850 m",
          type: "Panoramic Ridge Trek",
          desc: "Spectacular ridge meadow directly facing vertical Dhauladhar snow walls on one side and the sprawling Kangra valley below.",
          image: "images/landmarks/triund.jpg",
          activity: "Triund Ridge Day Hike • Sunset Viewpoint • Starry Night Ridge Camping"
        },
        {
          name: "Bhagsunag Waterfall & Shiva Cafe",
          altitude: "1,850 m",
          type: "Nature & Chill",
          desc: "Fresh mountain cascade surrounded by slate cliffs, leading to iconic cliffside cafes with acoustic sounds and fresh ginger lemon honey tea.",
          image: "images/landmarks/bhagsu.jpg",
          activity: "Waterfall Dip • Cliff Cafe Vibes • Bhagsunath Ancient Temple"
        }
      ]
    },
    {
      id: "kinnaur",
      location: "Kinnaur & Chitkul",
      tagline: "The Last Village of India & Ancient Silk Route",
      altitude: "2,600 m - 3,450 m",
      driveTime: "8.5 hrs from Shimla along Sutlej River",
      bestSeason: "April to October",
      coverImage: "images/landmarks/chitkul.jpg",
      sitesCount: "3 Iconic Sites • 3 Heritage Trails",
      packageId: "kinnaur-sangla-chitkul",
      localFood: "Kinnauri Royal Delicious Apples, Buckwheat Ogla pancakes",
      items: [
        {
          name: "Chitkul — The Last Inhabited Village of India",
          altitude: "3,450 m",
          type: "Border Wonder",
          desc: "Pristine fairytale village on the Indo-Tibetan border in Sangla Valley with roaring Baspa river, wooden temples, and potato-apple farms.",
          image: "images/landmarks/chitkul.jpg",
          activity: "Last Dhaba of India Meal • Baspa River Pebble Walk • Mathi Devi Temple"
        },
        {
          name: "Kalpa & Kinner Kailash Viewpoint",
          altitude: "2,960 m",
          type: "Sacred Peak Views",
          desc: "Historic apple village facing the majestic 6,050-meter sacred Kinner Kailash Shivling, which changes colors with the shifting sun.",
          image: "images/landmarks/kalpa.jpg",
          activity: "Kinner Kailash Golden Sunset • Roghi Suicide Point Cliff • Hu-Bu-Lan-Kar Monastery"
        },
        {
          name: "Sangla Valley & Kamru Fort",
          altitude: "2,696 m",
          type: "Ancient Himalayan Fortress",
          desc: "1000-year-old wooden tower fortress that served as the ancient coronation seat of the rulers of Bushahr state.",
          image: "images/landmarks/kamru_fort.jpg",
          activity: "Kamru Fort Heritage Walk • Trout Farm Excursion • Wood-carved Village Trails"
        }
      ]
    },
    {
      id: "bir",
      location: "Bir Billing",
      tagline: "World #2 Paragliding Takeoff & Zen Monasteries",
      altitude: "1,500 m - 2,400 m",
      driveTime: "6 hrs from Chandigarh",
      bestSeason: "October to November (Best Thermals) | March to June",
      coverImage: "images/landmarks/bir.jpg",
      sitesCount: "3 Iconic Sites • 3 Aerial & Eco Experiences",
      packageId: "bir-billing-paragliding",
      localFood: "Artisan bakery sourdough, Organic Himalayan kombucha, Vegan bowls",
      items: [
        {
          name: "Billing Paragliding Takeoff Point",
          altitude: "2,400 m",
          type: "Aerial Aviation",
          desc: "World famous natural launch ridge offering 20-30 minutes of tandem soaring over lush mountain slopes, landing safely in Bir.",
          image: "images/landmarks/bir.jpg",
          activity: "Tandem Paragliding Flight with GoPro • Sunset Launch Viewpoint • Mountain Camping"
        },
        {
          name: "Chokling & Palpung Sherabling Monasteries",
          altitude: "1,500 m",
          type: "Zen Monastery Architecture",
          desc: "Sprawling Tibetan Buddhist monasteries set amid pine forests and rolling tea gardens with serene prayer chanting.",
          image: "images/landmarks/mcleodganj.jpg",
          activity: "Monastery Meditation • Bicycle Tour through Tea Gardens • Stupa Walks"
        },
        {
          name: "Bir Tibetan Colony Cafes",
          altitude: "1,500 m",
          type: "Cafe Culture & Eco-living",
          desc: "Vibrant pedestrian colony filled with organic vegan cafes, Tibetan craft stores, and open air bakeries.",
          image: "images/landmarks/kasol_view.jpg",
          activity: "Artisan Coffee Tasting • Sunset Landing Site Hangout • Eco-living Workshops"
        }
      ]
    },
    {
      id: "tirthan",
      location: "Tirthan Valley & Jibhi",
      tagline: "Untouched Cedar Woods, Serolsar Lake & Riverside Stays",
      altitude: "1,600 m - 3,120 m",
      driveTime: "6 hrs from Chandigarh",
      bestSeason: "All Year (Lush green May-Sep, Snow Nov-Feb)",
      coverImage: "images/landmarks/jibhi_waterfall.jpg",
      sitesCount: "3 Iconic Sites • 3 Wilderness Trails",
      packageId: "tirthan-jibhi-secret",
      localFood: "Fresh Pan-Fried Brown Trout, Forest Honey, Siddu",
      items: [
        {
          name: "Jalori Pass & Sacred Serolsar Lake",
          altitude: "3,120 m",
          type: "High Mountain Pass & Sacred Lake",
          desc: "Scenic mountain pass switchbacks leading to a 5 km fairytale cedar forest hike to the holy emerald Serolsar Lake and Buddhi Nagin Temple.",
          image: "images/landmarks/jalori_pass.jpg",
          activity: "Jalori Pass Mountain Drive • Serolsar Lake Forest Hike • Buddhi Nagin Temple Tour"
        },
        {
          name: "Jibhi Waterfalls & Wooden Treehouses",
          altitude: "1,600 m",
          type: "Fairy-tale Wooden Hamlets",
          desc: "Secret wooden suspension bridges, natural plunge waterfalls, and cozy treehouses perched directly above rushing crystal streams.",
          image: "images/landmarks/jibhi_waterfall.jpg",
          activity: "Waterfall Pebble Walk • Treehouse Living • Stream Angling"
        },
        {
          name: "Chehni Kothi Ancient Tower Fortress",
          altitude: "2,100 m",
          type: "Ancient Himalayan Architecture",
          desc: "A towering 1,500-year-old multi-story tower temple constructed solely from interlocking deodar cedar beams and stone without any cement.",
          image: "images/landmarks/ghnp.jpg",
          activity: "Village Forest Trek to Chehni • Traditional Kulvi Woodcarving Architecture Tour"
        }
      ]
    }
  ],

  // Real Mountain Aesthetic & Vibe Gallery (Snow, Cozy Rooms, Bonfire Parties)
  mountainVibes: [
    {
      category: "cozy-stays",
      title: "Private Alpine Chalets & Jacuzzi Suites",
      desc: "Warm cedar-wood interiors, roaring fireplaces, glass roofs for stargazing, and private jacuzzis overlooking snow-laden pine valleys.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      tag: "Cozy Stays"
    },
    {
      category: "cozy-stays",
      title: "Luxury Apple Orchard Glass Cottages",
      desc: "Wake up surrounded by blooming apple blossoms or snowy orchards with floor-to-ceiling panoramic views of Pir Panjal peaks.",
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
      tag: "Orchard Chalet"
    },
    {
      category: "snow-magic",
      title: "Fresh Powder Snow Wonderland",
      desc: "Step directly onto fresh snow drifts in Kufri, Solang, and Rohtang. Snowball fights, skiing lessons, and warm hot chocolate.",
      image: "images/landmarks/kufri.jpg",
      tag: "Snow Adventures"
    },
    {
      category: "parties-nights",
      title: "Riverside Bonfires & Mountain Acoustic Nights",
      desc: "Golden crackling pine bonfires by the Beas and Parvati rivers. Live guitars, acoustic singers, roasted marshmallows, and siddu feasts.",
      image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?auto=format&fit=crop&w=800&q=80",
      tag: "Bonfire & Music"
    },
    {
      category: "parties-nights",
      title: "Bohemian Mountain Cafe Parties & Celebrations",
      desc: "Old Manali and Kasol's famous night culture: international cuisine, DJ parties, fairy lights, and meeting global mountain wanderers.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      tag: "Nightlife & Cafes"
    },
    {
      category: "snow-magic",
      title: "High-Altitude 4x4 Snow Expedition Drives",
      desc: "Pushing through snow drifts and icy switchbacks in heavy-duty 4x4 Thars and snow-chained SUVs with certified mountain captains.",
      image: "images/cabs/thar.jpg",
      tag: "4x4 Snow Trails"
    }
  ],

  // International Traveler Specific Services
  internationalFeatures: [
    {
      icon: "passport",
      title: "Inner Line Permit (ILP) Concierge",
      desc: "Hassle-free permit processing for foreign passport holders visiting border regions like Spiti, Kinnaur, and Pooh."
    },
    {
      icon: "languages",
      title: "English & European Speaking Guides",
      desc: "Culturally sensitive, knowledgeable native Himalayan guides with fluent English; German & French interpreters on request."
    },
    {
      icon: "shield-check",
      title: "Solo & Female Traveler Certified",
      desc: "Verified homestays, GPS-tracked vehicles, 24/7 emergency dispatch, and vetted hill drivers with zero-incident record."
    },
    {
      icon: "heart-pulse",
      title: "High Altitude & AMS Safety Protocol",
      desc: "Pulse oximeters, portable medical oxygen canisters, and medically certified acclimatization day schedules on all high passes."
    },
    {
      icon: "utensils",
      title: "Vegan, Gluten-Free & Farm Dining",
      desc: "Curated organic stays offering wholesome local Himachali cuisine tailored to dietary preferences (vegan, kosher, continental)."
    },
    {
      icon: "credit-card",
      title: "Global Payments & Transparent Quotes",
      desc: "Direct booking support via Wise, International Wire, Credit Cards, PayPal, and instant WhatsApp booking."
    }
  ],

  // Verified Traveler Testimonials (Domestic & Global)
  testimonials: [
    {
      quote: "Travelling through Spiti with Himora felt like exploring the mountains with trusted friends who know every secret cliff and monastery. Chandratal at dawn was life-altering.",
      author: "Elena Rostova & Mark Lindqvist",
      origin: "Stockholm, Sweden 🇸🇪",
      trip: "Spiti 4x4 Grand Circuit (8 Days)",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "As a solo female traveler visiting India for the first time, safety was my priority. Himora provided an exceptional driver, incredible homestays, and genuine warmth throughout Himachal.",
      author: "Dr. Chloe Vance",
      origin: "Melbourne, Australia 🇦🇺",
      trip: "Dharamshala & Tirthan Valley (7 Days)",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Quick WhatsApp replies, transparent pricing without hidden tourist markups, and their local driver took us to non-touristy cafes in Old Manali that you won't find on Google Maps.",
      author: "Aditya & Sanjana Rao",
      origin: "Bengaluru, India 🇮🇳",
      trip: "Manali & Solang Luxury (4 Days)",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The paragliding in Bir Billing combined with peaceful monastery stays was impeccably organized. The pilot had 12+ years experience. Best mountain agency hands down.",
      author: "Felix Bauer",
      origin: "Munich, Germany 🇩🇪",
      trip: "Bir Billing Sky & Monasteries",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  ],

  // Interactive FAQs
  faqs: [
    {
      q: "How do I book a trip with Himora Travels?",
      a: "You can use our interactive Trip Customizer on this website to build your itinerary, or simply click any 'Book on WhatsApp' button. Our local Shimla team will instantly share a detailed PDF itinerary and confirm pricing with zero hassle."
    },
    {
      q: "Do foreign tourists require special permits for Spiti and Kinnaur?",
      a: "Yes, non-Indian passport holders require an Inner Line Permit (ILP) to travel between Reckong Peo (Kinnaur) and Tabo/Kaza (Spiti) due to proximity to the border. Himora arranges this entire permit process seamlessly on arrival in Shimla or Reckong Peo."
    },
    {
      q: "What measures are taken for Acute Mountain Sickness (AMS)?",
      a: "On all high-altitude trips (Spiti, Rohtang, Chandratal), our itineraries include gradual acclimatization days. Every expedition vehicle is equipped with a pulse oximeter and a medical-grade portable oxygen cylinder. Our hill captains are trained in wilderness first aid."
    },
    {
      q: "Can I customize the hotels, dates, and vehicle?",
      a: "100%! We do not believe in rigid cookie-cutter packages. You can choose whether you prefer rustic mud-brick village homestays, 4-star boutique alpine resorts, or private glass chalets. Vehicle choices range from Swift Dzire to Innova Crysta and 4x4 Thars."
    },
    {
      q: "What is the best time to visit Himachal Pradesh?",
      a: "Snow & Skiing: December to February. Apple Blossoms & Clear Peaks: March to June. Lush Green Meadows & Waterfalls: July to August. Golden Autumn & Starry Nights: September to November. Spiti is best visited from May to October."
    },
    {
      q: "What are your payment terms and cancellation policy?",
      a: "We only require a 25% token advance to lock your dates, vehicle, and hotel bookings. The remaining balance can be settled upon arrival in Himachal. If mountain road blockages or weather emergencies occur, we offer flexible free date rescheduling."
    }
  ]
};

// Export to window for global access
window.HIMORA_DATA = HIMORA_DATA;
