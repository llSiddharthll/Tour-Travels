import { PackageCard } from "@/components/ui/PackageCard";
import { SearchFilter } from "@/components/SearchFilter";
import RegionSlider from "@/components/home/RegionSlider";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import ActivitiesSlider from "@/components/home/ActivitiesSlider";
import BlogSection from "@/components/home/BlogSection";
import HeroSlider from "@/components/home/HeroSlider";
import { WhyChooseUs, Feature } from "@/components/home/WhyChooseUs";
import { getFeaturedPackages } from "@/lib/db/packages";
import { getAllDestinations } from "@/lib/db/destinations";
import { getLatestBlogs } from "@/lib/db/blogs";
import { getAllTestimonials } from "@/lib/db/testimonials";
import { getAllActivities } from "@/lib/db/activities";
import { BottomCTA } from "@/components/ui/BottomCTA";
import {
  RiArrowRightLine,
  RiCompass3Line,
  RiCarLine,
  RiGroupLine,
  RiNavigationLine,
} from "react-icons/ri";
import Link from "next/link";
import { getSettings } from "@/lib/db/settings";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  const settings = await getSettings();
  return {
    title: settings.seo_home_title || "Best Himachal Tour Packages & Spiti Valley Tours",
    description: settings.seo_home_description || "Experience the magic of Himachal Pradesh with Himvigo.",
    keywords: settings.seo_home_keywords || "himachal tours, spiti valley",
    alternates: {
      canonical: "/",
    },
  };
}


export default async function HomePage() {
  // Fetch all dynamic data from database
  const [packages, destinations, blogs, testimonials, activities, settings] = await Promise.all([
    getFeaturedPackages(),
    getAllDestinations(),
    getLatestBlogs(3),
    getAllTestimonials(),
    getAllActivities(),
    getSettings(),
  ]);

  let features: Feature[] = [];
  if (settings.why_choose_us_json) {
    try {
      const parsed = JSON.parse(settings.why_choose_us_json);
      if (Array.isArray(parsed)) features = parsed;
    } catch {
      features = [];
    }
  }
  if (features.length === 0) {
    features = [
      {
        title: "Verified Drivers",
        desc: "Every driver is background-checked and skilled in navigating Himachal's mountain roads safely.",
        image: "/hero-1.png",
        icon: "RiShieldCheckLine",
      },
      {
        title: "100% Local Experts",
        desc: "Our guides are born and raised in the Himalayas. They know the hidden trails, the local legends, and the best ways to keep you safe.",
        image: "/hero-2.png",
        icon: "RiGroupLine",
      },
      {
        title: "Award Winning",
        desc: "Recognised by Himachal Tourism for service quality and safety standards.",
        image: "/hero-3.png",
        icon: "RiTrophyLine",
      },
      {
        title: "Curated Itineraries",
        desc: "Hand-built journeys that balance adventure, culture and downtime.",
        image: "/hero-4.png",
        icon: "RiCompass3Line",
      },
      {
        title: "Comfortable Vehicles",
        desc: "Modern fleet maintained for long mountain drives with experienced chauffeurs.",
        image: "/hero-5.png",
        icon: "RiCarLine",
      },
      {
        title: "Flexible Booking",
        desc: "Easy rescheduling and transparent pricing — pay only for what you use.",
        image: "/hero-6.png",
        icon: "RiCheckboxCircleLine",
      },
    ];
  }

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
    "telephone": settings.site_phone || "+91-XXXXXXXXXX"
  };

  return (
    <main className="flex flex-col min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="relative min-h-screen h-auto md:h-screen flex flex-col items-center overflow-hidden bg-brand-blue pt-20">
        <HeroSlider />
        
        {/* Main Content Container - Vertically Centered with Gap Management */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 text-center flex-1 flex flex-col justify-center">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-extrabold text-white mb-6 drop-shadow-2xl tracking-tight leading-[1.1] max-w-4xl mx-auto">
              {settings.hero_headline ? settings.hero_headline.split(' ').map((word: string, i: number) => {
                if (word.toLowerCase() === 'himachal' || word.toLowerCase() === 'himalayas') {
                   return (
                     <span key={i} className="relative inline-block text-brand-orange ml-2">
                       {word}
                       <svg className="absolute -bottom-2 left-0 w-[110%] -translate-x-[5%] h-5 text-brand-orange/80 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                         <path d="M0,15 Q30,0 100,10" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                       </svg>
                     </span>
                   )
                }
                return i === 0 ? word : ' ' + word;
              }) : 'Find Your Soul in The Himalayas'}
            </h1>
            
            <p className="text-base md:text-lg text-slate-100 mb-10 font-inter max-w-2xl mx-auto drop-shadow-xl font-medium leading-relaxed px-4 opacity-90">
              {settings.hero_subheadline || "Uncover the raw beauty of Spiti, scale the heights of Manali, and relax in the pines of Kasol. Authentic, secure, and unmatched."}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link 
                href="/packages"
                className="px-8 py-3.5 w-full sm:w-auto rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-lg transition-all duration-300 shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 font-outfit"
              >
                {settings.hero_cta_text || 'Explore Packages'} <RiArrowRightLine className="w-5 h-5" />
              </Link>
              <a 
                href={`tel:${settings.site_phone || '+917018318824'}`}
                className="px-8 py-3.5 w-full sm:w-auto rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center font-outfit backdrop-blur-sm"
              >
                {settings.hero_cta_call || 'Book a Cab'}
              </a>
            </div>
          </div>
        </div>

        {/* Search Filter - Pushed to Bottom with Flex but guaranteed space */}
        <div className="relative z-30 w-full max-w-5xl mx-auto px-4 pb-12 mt-auto">
          <SearchFilter />
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold text-brand-blue leading-tight">Our Services</h2>
            <div className="h-1.5 w-24 bg-brand-orange mt-6 rounded-full mx-auto" />
            <p className="mt-6 text-slate-500 text-lg max-w-2xl mx-auto font-inter italic">Tailored Himalayan experiences for every traveler.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-brand-blue/20 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-blue/5">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-outfit flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-blue text-white flex items-center justify-center">
                  <RiCompass3Line className="w-6 h-6" />
                </div>
                Tour Packages
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 whitespace-pre-line">
                {settings.service_packages_desc || "Thoughtfully planned itineraries covering Himachal's most loved destinations."}
              </p>
              <Link href="/packages" className="text-brand-blue font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                View Packages <RiArrowRightLine className="w-5 h-5" />
              </Link>
            </div>

            <div className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-brand-orange/20 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-orange/5">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-outfit flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-orange text-white flex items-center justify-center">
                  <RiCarLine className="w-6 h-6" />
                </div>
                Cab Services
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 whitespace-pre-line">
                {settings.service_cab_desc || "Reliable cab service across Himachal Pradesh with verified, experienced drivers."}
              </p>
              <Link href="/cab" className="text-brand-orange font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Book a Cab <RiArrowRightLine className="w-5 h-5" />
              </Link>
            </div>

            <div className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-brand-blue/20 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-blue/5">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-outfit flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-blue text-white flex items-center justify-center">
                  <RiGroupLine className="w-6 h-6" />
                </div>
                Tempo Traveller
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 whitespace-pre-line">
                {settings.service_tempo_desc || "Traveling with a group? Our tempo travellers seat 9 to 26 passengers comfortably."}
              </p>
              <Link href="/contact" className="text-brand-blue font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Inquire for Group <RiArrowRightLine className="w-5 h-5" />
              </Link>
            </div>

            <div className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-brand-orange/20 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-orange/5">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-outfit flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-orange text-white flex items-center justify-center">
                  <RiNavigationLine className="w-6 h-6" />
                </div>
                Custom Travel Plans
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 whitespace-pre-line">
                {settings.service_custom_desc || "Not finding what you're looking for? Tell us what you have in mind."}
              </p>
              <Link href="/contact" className="text-brand-orange font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Create Itinerary <RiArrowRightLine className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold text-brand-blue mb-6 leading-tight">Featured Expeditions</h2>
            <p className="text-slate-500 text-lg font-inter">Handpicked itineraries designed for the ultimate Himalayan experience.</p>
          </div>
          <Link href="/packages" className="inline-flex items-center gap-2 font-bold text-brand-orange hover:text-brand-orange/80 transition-colors group">
            View All Packages
            <RiArrowRightLine className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} tour={pkg} />
          ))}
        </div>
      </section>

      {/* Popular Destinations Slider */}
      <section className="py-24 bg-brand-blue overflow-hidden w-full flex justify-center">
        <div className="w-full max-w-7xl px-4 md:px-8">
          <RegionSlider destinations={destinations} />
        </div>
      </section>

      {/* Why Choose Us - Enhanced Responsive Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold text-brand-blue mb-6 leading-tight">Why Choose Himvigo</h2>
            <p className="text-slate-500 text-lg font-inter">Experience the difference of traveling with true Himalayan experts.</p>
          </div>

          <WhyChooseUs features={features} />
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-28 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold text-brand-blue mb-6 leading-tight">Adventures Await</h2>
            <p className="text-slate-500 text-lg font-inter">Curated experiences to make your Himalayan trip unforgettable.</p>
          </div>
          <ActivitiesSlider activities={activities} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Blogs Section */}
      <BlogSection blogs={blogs} />

      <BottomCTA />
    </main>
  );
}
