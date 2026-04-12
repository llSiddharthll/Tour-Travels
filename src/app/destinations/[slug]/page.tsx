import { notFound } from "next/navigation";
import { PackageCard } from "@/components/ui/PackageCard";
import { BottomCTA } from "@/components/ui/BottomCTA";
import { getAllPackages } from "@/lib/db/packages";
import { MapPin, Sun, Snowflake, Compass, Clock, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

const destinationsData = [
  {
    slug: "spiti-valley",
    name: "Spiti Valley",
    tagline: "The Middle Land",
    description: "A cold desert mountain valley located high in the Himalaya mountains in the north-eastern part of the northern Indian state of Himachal Pradesh. Known for its stark beauty, ancient monasteries, and pure unadulterated Tibetan culture.",
    bestTime: "June to October",
    altitude: "12,500 ft (avg)",
    vibe: "Adventure & Spiritual",
    image: "https://images.unsplash.com/photo-1597843796321-230ff2ebcb71?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Key Monastery", "Chandratal Lake", "Komic Village", "Kunzum Pass"],
  },
  {
    slug: "manali",
    name: "Manali",
    tagline: "Valley of the Gods",
    description: "A high-altitude Himalayan resort town in India's northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Surrounded by towering peaks and lush pine forests.",
    bestTime: "October to June",
    altitude: "6,726 ft",
    vibe: "Romantic & Leisure",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Rohtang Pass", "Solang Valley", "Old Manali", "Hadimba Temple"],
  },
  {
    slug: "kasol",
    name: "Kasol",
    tagline: "Mini Israel of India",
    description: "A hamlet in the Kullu district of the Indian state of Himachal Pradesh. It is situated in Parvati Valley, on the banks of the Parvati River. Famous among backpackers for its vibrant cafe culture and pristine trekking trails.",
    bestTime: "March to May",
    altitude: "5,180 ft",
    vibe: "Backpacking & Nature",
    image: "https://images.unsplash.com/photo-1599661046289-e31887846eac?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Kheerganga Trek", "Tosh Village", "Parvati River", "Malana"],
  },
  {
    slug: "shimla",
    name: "Shimla",
    tagline: "Queen of Hills",
    description: "The capital and the largest city of the northern Indian state of Himachal Pradesh. Known for its colonial Victorian architecture, the legendary Mall Road, and surrounding snow-capped peaks in winter.",
    bestTime: "March to June",
    altitude: "7,467 ft",
    vibe: "Heritage & Family",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    highlights: ["The Ridge", "Mall Road", "Jakhoo Temple", "Kufri"],
  },
  {
    slug: "dharamshala",
    name: "Dharamshala",
    tagline: "Little Lhasa",
    description: "The winter capital of Himachal Pradesh. It serves as the residence of the Dalai Lama and the headquarters of the Central Tibetan Administration. It blends rich Tibetan culture with beautiful Dhauladhar mountain backdrops.",
    bestTime: "February to June",
    altitude: "4,780 ft",
    vibe: "Culture & Peace",
    image: "https://images.unsplash.com/photo-1605649440417-062867824707?auto=format&fit=crop&w=1200&q=80",
    highlights: ["McLeod Ganj", "Triund Trek", "Dal Lake", "Bhagsu Waterfall"],
  },
  {
    slug: "kinnaur",
    name: "Kinnaur",
    tagline: "Land of Fairytales",
    description: "A mountainous district in the northern Indian state of Himachal Pradesh. It is known for its apples and the Kinner Kailash, a mountain sacred to Hindus. Beautiful river valleys, rugged terrains, and warm people.",
    bestTime: "April to October",
    altitude: "7,612 ft (Rekong Peo)",
    vibe: "Offbeat & Pristine",
    image: "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Sangla Valley", "Chitkul", "Kalpa", "Sarahan"],
  }
];

export async function generateStaticParams() {
  return destinationsData.map((dest) => ({
    slug: dest.slug,
  }));
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinationsData.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  const allPackages = await getAllPackages();
  const destinationPackages = allPackages.filter((pkg) => 
    pkg.location.toLowerCase().includes(destination.name.toLowerCase()) ||
    destination.name.toLowerCase().includes(pkg.location.toLowerCase())
  );

  return (
    <main className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-forest-900">
        <div className="absolute inset-0 z-0">
          <img 
            src={destination.image} 
            alt={destination.name} 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h4 className="text-amber-400 font-bold uppercase tracking-[0.3em] text-sm md:text-base mb-4 drop-shadow-md">
            {destination.tagline}
          </h4>
          <h1 className="text-5xl md:text-8xl font-outfit font-extrabold text-white mb-6 drop-shadow-2xl">
            {destination.name}
          </h1>
        </div>
      </section>

      {/* Info & Packages Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          {/* Left: Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-outfit font-bold text-slate-900 mb-8 pb-4 border-b border-slate-200">About {destination.name}</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-12 font-inter font-medium">
              {destination.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-6">
                  <Compass className="w-6 h-6 text-amber-500" /> Key Highlights
                </h3>
                <ul className="space-y-4">
                  {destination.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                      <ShieldCheck className="w-4 h-4 text-forest-600" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-forest-50 border border-forest-100 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-forest-600">
                    <Sun className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Best Time to Visit</h4>
                    <p className="text-slate-900 font-bold">{destination.bestTime}</p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-amber-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Average Altitude</h4>
                    <p className="text-slate-900 font-bold">{destination.altitude}</p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600">
                    <Snowflake className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Popular Vibe</h4>
                    <p className="text-slate-900 font-bold">{destination.vibe}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Links / Custom Quote */}
          <div className="space-y-12">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Compass className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-outfit font-bold mb-6 relative z-10">Traveler Tips</h3>
              <div className="space-y-6 relative z-10">
                <p className="flex items-start gap-4 text-slate-300 leading-relaxed italic text-sm">
                  "Always carry extra layers of clothing, even in summer. The mountain weather can change in minutes."
                </p>
                <p className="flex items-start gap-4 text-slate-300 leading-relaxed italic text-sm">
                  "Respect local customs and monasteries. Always walk clockwise around shrines."
                </p>
                <p className="flex items-start gap-4 text-slate-300 leading-relaxed italic text-sm">
                  "Carry enough cash as ATMs can be unreliable in high-altitude regions."
                </p>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-amber-500 text-slate-900 shadow-xl shadow-amber-500/20">
              <h3 className="text-xl font-bold mb-4">Want a Custom Trip?</h3>
              <p className="text-sm font-medium mb-8 leading-relaxed">Our experts can create a personalized 100% customized itinerary for your trip to {destination.name}.</p>
              <Link href="/contact" className="block text-center py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-forest-700 transition-colors">
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Full-width Packages Grid */}
        <div className="border-t border-slate-200 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900">
                Packages for {destination.name}
              </h2>
              <div className="h-1.5 w-24 bg-forest-700 mt-6 rounded-full" />
              <p className="text-slate-600 mt-6 font-inter text-lg">
                Explore our handpicked itineraries for {destination.name} and surrounding valleys.
              </p>
            </div>
            {destinationPackages.length > 0 && (
              <p className="bg-white px-6 py-2 rounded-full border border-slate-200 font-bold text-slate-500 shadow-sm">
                Showing {destinationPackages.length} Results
              </p>
            )}
          </div>

          {destinationPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinationPackages.map((pkg) => (
                <PackageCard key={pkg.id} tour={pkg} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-white rounded-[3rem] border border-dashed border-slate-300">
              <Compass className="w-16 h-16 text-slate-300 mx-auto mb-6" />
              <p className="text-slate-500 font-bold text-xl italic">No packages available for this destination yet.</p>
              <Link href="/contact" className="mt-8 inline-block text-forest-700 font-bold hover:underline">
                Inquire about custom {destination.name} trips &rarr;
              </Link>
            </div>
          )}
        </div>
      </section>

      <BottomCTA />
    </main>
  );
}
