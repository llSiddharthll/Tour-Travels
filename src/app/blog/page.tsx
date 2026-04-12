import Link from "next/link";
import { ArrowRight, Calendar, User, Clock, Compass } from "lucide-react";
import { BottomCTA } from "@/components/ui/BottomCTA";

export const metadata = {
  title: "Travel Blog | Himvigo Tours",
  description: "Read the latest stories, guides, and tips from the heart of the Himalayas.",
};

const blogs = [
  {
    title: "10 Must-Visit Hidden Gems in Spiti valley",
    excerpt: "Spiti is more than just Kaza. Discover the secret villages and high-altitude lakes that most tourists miss...",
    date: "April 10, 2026",
    author: "Aditi Negi",
    img: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&w=800&q=80",
    slug: "hidden-gems-spiti"
  },
  {
    title: "A Complete Guide to Planning Your Manali Trip",
    excerpt: "From budget homestays to luxury resorts, here is everything you need to know about planning a perfect holiday in Manali...",
    date: "April 05, 2026",
    author: "Rohit Sharma",
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    slug: "manali-trip-guide"
  },
  {
    title: "Top 5 Activities to do in Shimla this Winter",
    excerpt: "Shimla turns into a white wonderland in winter. Here are the top 5 things you shouldn't miss during your visit...",
    date: "March 28, 2026",
    author: "Sonia Verma",
    img: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=800&q=80",
    slug: "shimla-winter-activities"
  }
];

export default function BlogListPage() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-50">
      <section className="relative h-[40vh] flex items-center justify-center bg-forest-900 border-b border-white/10">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-outfit font-extrabold text-white mb-4">Travel <span className="text-amber-400">Blog</span></h1>
          <p className="text-slate-200 text-lg font-medium">Stories and guides from the Himalayas</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog, i) => (
            <Link key={i} href={`/blog/${blog.slug}`} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
               <div className="h-64 overflow-hidden relative">
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-slate-900 uppercase tracking-widest border border-white/20">
                    Travel Guide
                  </div>
               </div>
               <div className="p-8">
                  <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 mb-4 uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {blog.date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {blog.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors font-outfit">
                    {blog.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed font-inter mb-6">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center font-bold text-amber-600 group-hover:text-amber-700 transition-colors">
                    Read More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
               </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Subscription Box */}
        <div className="mt-24 p-10 md:p-16 bg-forest-50 border border-forest-100 rounded-[3rem] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-forest-200/50 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-200/40 rounded-full blur-3xl -ml-10 -mb-10"></div>
          
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-forest-100 text-forest-700 text-[10px] font-bold uppercase tracking-widest mb-6">
              Travel Newsletter
            </div>
            <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-slate-900 mb-6">Never miss a hidden gem.</h2>
            <p className="text-slate-600 font-inter text-lg">Join 15,000+ travelers getting our monthly insights, untouched destination guides, and exclusive early-bird package discounts.</p>
          </div>

          <div className="relative z-10 w-full md:w-auto flex-shrink-0">
            <form className="flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-2xl md:rounded-full border border-slate-200 shadow-xl shadow-slate-200/40">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full md:w-72 px-6 py-4 rounded-xl md:rounded-full bg-transparent outline-none text-slate-700 font-inter text-sm" 
                required 
              />
              <button 
                type="submit" 
                className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-xl md:rounded-full hover:bg-amber-600 transition-colors shadow-md"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-slate-400 mt-4 text-center md:text-left font-medium flex items-center justify-center md:justify-start gap-1">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
      <BottomCTA />
    </main>
  );
}
