import { PackageCard } from "@/components/ui/PackageCard";
import { SearchFilter } from "@/components/SearchFilter";
import { BottomCTA } from "@/components/ui/BottomCTA";
import RegionSlider from "@/components/home/RegionSlider";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import ActivitiesSlider from "@/components/home/ActivitiesSlider";
import BlogSection from "@/components/home/BlogSection";
import { getFeaturedPackages } from "@/lib/db/packages";
import { ShieldCheck, Map, Users, Star, ArrowRight, Quote, Compass, CalendarCheck, CheckCircle, Heart, Trophy, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Best Himachal Tour Packages & Spiti Valley Tours | Himvigo Tours",
  description: "Experience the magic of Himachal Pradesh with Himvigo. Premium, offbeat Spiti Valley tours and reliable Chandigarh to Manali cab services.",
};

export default async function HomePage() {
  const packages = await getFeaturedPackages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Himvigo Tours",
    "image": "https://himvigo.com/logo.png",
    "description": "Premium Tour Operator in Himachal Pradesh.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manali",
      "addressRegion": "Himachal Pradesh",
      "addressCountry": "IN"
    },
    "telephone": "+91-XXXXXXXXXX"
  };

  const features = [
    { icon: <ShieldCheck className="w-8 h-8 text-forest-700" />, title: "Quality & Safety", desc: "Your safety is our priority. We use well-maintained vehicles and verified stays." },
    { icon: <Compass className="w-8 h-8 text-forest-700" />, title: "Personalized Service", desc: "Every traveler is unique. We customize itineraries to match your preferences." },
    { icon: <Users className="w-8 h-8 text-forest-700" />, title: "Expert Local Guides", desc: "Our local experts know the Himalayas like the back of their hand." },
    { icon: <Trophy className="w-8 h-8 text-forest-700" />, title: "Best Price Guarantee", desc: "Premium experiences at competitive prices with zero hidden costs." },
  ];

  const destinations = [
    { name: "Spiti Valley", img: "/images/destinations/spiti.png", tag: "The Middle Land", col: "md:col-span-2", row: "md:row-span-2" },
    { name: "Manali", img: "/images/destinations/manali.png", tag: "Valley of the Gods", col: "md:col-span-1", row: "md:row-span-1" },
    { name: "Kasol", img: "/images/destinations/kasol.png", tag: "Mini Israel", col: "md:col-span-1", row: "md:row-span-1" },
    { name: "Shimla", img: "/images/destinations/shimla.png", tag: "Queen of Hills", col: "md:col-span-1", row: "md:row-span-1" },
    { name: "Dharamshala", img: "/images/destinations/dharamshala.png", tag: "Little Lhasa", col: "md:col-span-1", row: "md:row-span-1" },
  ];

  const testimonials = [
    { name: "Rahul Sharma", text: "The Spiti expedition was completely mind-blowing. The driver was highly experienced on dangerous roads and the homestays were incredibly warm.", pkg: "Spiti Valley Road Trip" },
    { name: "Priya Desai", text: "Booked a tempo traveller for my family of 10. Seamless experience from Chandigarh pickup to Manali drop. Highly recommended!", pkg: "Manali Premium Snow Retreat" },
    { name: "Arjun Mehta", text: "I wanted an offbeat track in Kinnaur, and Himvigo delivered. Local knowledge makes a huge difference.", pkg: "Custom Kinnaur Tour" }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-forest-900 pt-32 pb-24">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80" 
            alt="Majestic Spiti landscape" 
            className="w-full h-full object-cover opacity-80 scale-100 animate-[pulse_10s_ease-in-out_infinite]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-transparent"></div>
          
          {/* Enhanced White Smoke / Fog Effect */}
          <div className="absolute bottom-0 left-0 w-full h-80 z-20 pointer-events-none overflow-hidden">
            {/* Base Fade */}
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent"></div>
            
            {/* Dynamic Smoke Blobs */}
            <div className="absolute -bottom-10 left-[-10%] w-[40%] h-64 bg-white/40 blur-[80px] rounded-full animate-[pulse_8s_infinite] opacity-60"></div>
            <div className="absolute -bottom-20 left-[20%] w-[50%] h-72 bg-white/30 blur-[100px] rounded-full animate-[pulse_12s_infinite] opacity-50"></div>
            <div className="absolute -bottom-10 right-[-10%] w-[40%] h-64 bg-white/40 blur-[80px] rounded-full animate-[pulse_10s_infinite] opacity-60"></div>
            
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>
        </div>
        
        {/* Text & Content Layer */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 mt-4">
          <div className="flex flex-col items-center">
            <div 
              style={{ 
                backdropFilter: 'blur(32px)', 
                WebkitBackdropFilter: 'blur(32px)',
                zIndex: 30,
                position: 'relative'
              }}
              className="inline-flex items-center gap-1.5 md:gap-2 py-1.5 px-3 md:py-2 md:px-5 rounded-full bg-white/20 text-white border border-white/40 text-[10px] sm:text-xs md:text-sm font-bold tracking-wide mb-6 md:mb-8 shadow-2xl hover:bg-white/30 transition-all cursor-default whitespace-nowrap"
            >
              <Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-400 fill-amber-400" />
              <span>4.9/5 Average Rating (2,000+ Reviews)</span>
            </div>
            
            <h1 className="relative text-4xl leading-[1.1] md:text-6xl lg:text-[6rem] font-outfit font-extrabold text-white text-center mb-6 md:mb-8 drop-shadow-2xl tracking-tight md:leading-[1.05] max-w-5xl z-20">
              Find Your Soul in <br className="hidden md:block"/> The{' '}
              <span className="relative inline-block text-amber-400 whitespace-nowrap">
                Himalayas
                {/* SVG Underline Doodle */}
                <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-[110%] -translate-x-[5%] h-4 md:h-5 text-amber-500 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q30,0 100,10" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-base md:text-2xl text-slate-100 mb-10 md:mb-14 font-inter text-center max-w-2xl drop-shadow-xl font-medium mix-blend-screen leading-snug md:leading-normal px-4">
              Uncover the raw beauty of Spiti, scale the heights of Manali, and relax in the pines of Kasol. Authentic, secure, and unmatched. Premium Cab services and custom tours for every traveler.
            </p>
          </div>
          
          {/* Massive Interactive Search Widget */}
          <div className="w-full relative z-50 flex justify-center mt-4">
            <SearchFilter />
          </div>

          {/* Minimalist Stats Section */}
          <div className="flex flex-wrap justify-between items-center gap-6 sm:gap-4 md:gap-10 px-2 py-8 mt-16 md:mt-24 w-full max-w-4xl mx-auto relative z-10">
            <div className="text-center flex-1 group hover:-translate-y-1 transition-transform cursor-default">
              <p className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 group-hover:text-amber-600 transition-colors">50+</p>
              <p className="text-[10px] md:text-sm font-inter text-slate-600 mt-1 uppercase tracking-widest font-bold group-hover:text-forest-700 transition-colors">Curated Routes</p>
            </div>
            <div className="w-px h-10 md:h-12 bg-slate-300 hidden sm:block"></div>
            <div className="text-center flex-1 group hover:-translate-y-1 transition-transform cursor-default">
              <p className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 group-hover:text-amber-600 transition-colors">10k+</p>
              <p className="text-[10px] md:text-sm font-inter text-slate-600 mt-1 uppercase tracking-widest font-bold group-hover:text-forest-700 transition-colors">Happy Travelers</p>
            </div>
            <div className="w-px h-10 md:h-12 bg-slate-300 hidden sm:block"></div>
            <div className="text-center flex-1 group hover:-translate-y-1 transition-transform cursor-default">
              <p className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 group-hover:text-amber-600 transition-colors">100%</p>
              <p className="text-[10px] md:text-sm font-inter text-slate-600 mt-1 uppercase tracking-widest font-bold group-hover:text-forest-700 transition-colors">Local Experts</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full relative z-20 -mt-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900">
              All Top Packages
            </h2>
            <div className="h-1.5 w-24 bg-forest-700 mt-6 rounded-full" />
            <p className="text-slate-600 mt-6 font-inter text-lg">
              Carefully curated itineraries blending adventure, culture, and relaxation. Find your perfect escape.
            </p>
          </div>
          <Link href="/packages" className="group flex items-center font-bold text-forest-700 hover:text-forest-900 transition-colors text-lg">
            View All Packages <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} tour={pkg} />
          ))}
        </div>
      </section>

      {/* Popular Destinations Slider */}
      <section className="py-24 bg-slate-950 overflow-hidden w-full flex justify-center">
        <div className="w-full max-w-7xl px-4 md:px-8">
          <RegionSlider />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 leading-tight">Why Choose Us</h2>
            <div className="h-1.5 w-24 bg-amber-500 mt-6 rounded-full mx-auto" />
            <p className="text-slate-500 mt-6 font-inter text-lg max-w-2xl mx-auto font-medium leading-relaxed">Experience the majestic Himalayas with premium comfort, local wisdom, and zero compromises on safety.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group cursor-default">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center text-forest-700 mb-6 group-hover:scale-110 group-hover:bg-forest-600 group-hover:text-white transition-all duration-500">
                  <div className="scale-110">{f.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-outfit">{f.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed font-inter">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Fun Activities Swiper */}
      <section className="py-28 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 leading-tight">Fun Activities</h2>
            <div className="h-1.5 w-24 bg-amber-500 mt-6 rounded-full mx-auto" />
            <p className="text-slate-500 mt-6 font-inter text-lg max-w-2xl mx-auto font-medium">From high-altitude trekking to white water rafting, experience the thrill of the Himalayas.</p>
          </div>
          <ActivitiesSlider />
        </div>
      </section>

      {/* Blogs Section */}
      <BlogSection />


      {/* Swiper Testimonials */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <TestimonialSlider />
        </div>
      </section>

      {/* Dark Cinematic Bottom CTA Component */}
      <BottomCTA />
    </main>
  );
}
