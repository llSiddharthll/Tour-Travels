"use client";

import { motion } from "framer-motion";
import { Send, ShieldCheck, Mail, User, Phone, MapPin, Calendar as CalendarIcon, MessageSquare } from "lucide-react";

interface BookingFormProps {
  price?: number;
}

export function BookingForm({ price }: BookingFormProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="sticky top-24 bg-white p-6 lg:p-7 rounded-3xl shadow-xl border border-slate-200 shadow-slate-200/50 flex flex-col"
    >
      {price ? (
        <div className="flex justify-between items-start mb-5 pb-5 border-b border-slate-100">
          <div>
            <span className="text-slate-500 font-medium text-xs block mb-1">Starting from</span>
            <span className="text-3xl font-outfit font-extrabold text-slate-900">₹{price.toLocaleString()}</span>
            <span className="text-slate-500 font-inter text-xs block mt-1">per person (approx)</span>
          </div>
          <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
            Limited Offer
          </div>
        </div>
      ) : (
        <div className="mb-5 pb-5 border-b border-slate-100 text-center">
          <h3 className="text-2xl font-outfit font-extrabold text-slate-900">Book Your Trip</h3>
          <p className="text-slate-500 text-xs mt-1">Get a free customized itinerary</p>
        </div>
      )}

      <form className="space-y-4">
        <div>
          <label className="block text-[13px] font-bold text-slate-700 mb-1.5">Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="John Doe" className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all text-slate-700 text-sm" required />
          </div>
        </div>

        <div>
           <label className="block text-[13px] font-bold text-slate-700 mb-1.5">Email</label>
           <div className="relative">
             <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
             <input type="email" placeholder="john@example.com" className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all text-slate-700 text-sm" required />
           </div>
        </div>

        <div>
          <label className="block text-[13px] font-bold text-slate-700 mb-1.5">Phone Number</label>
          <div className="relative">
             <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
             <input type="tel" placeholder="+91 70183 18824" className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all text-slate-700 text-sm" required />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-1.5">Adults</label>
            <input type="number" min="1" placeholder="2" className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all text-slate-700 text-sm" required />
          </div>
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-1.5">Kids</label>
            <input type="number" min="0" placeholder="0" className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all text-slate-700 text-sm" />
          </div>
        </div>

        <div>
          <label className="block text-[13px] font-bold text-slate-700 mb-1.5">Pickup Location</label>
          <div className="relative">
             <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
             <input type="text" placeholder="e.g. Delhi / Chandigarh" className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all text-slate-700 text-sm" required />
          </div>
        </div>

        <div>
          <label className="block text-[13px] font-bold text-slate-700 mb-1.5">Drop Location</label>
          <div className="relative">
             <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
             <input type="text" placeholder="e.g. Manali / Shimla" className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all text-slate-700 text-sm" required />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1.5 truncate">Pickup Date</label>
            <div className="relative">
              <input type="date" className="w-full pl-8 pr-2 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all text-slate-700 text-[11px] sm:text-xs" required />
              <CalendarIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1.5 truncate">Drop Date</label>
            <div className="relative">
              <input type="date" className="w-full pl-8 pr-2 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all text-slate-700 text-[11px] sm:text-xs" required />
              <CalendarIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-[13px] font-bold text-slate-700 mb-1.5">Message</label>
          <textarea rows={3} placeholder="Tell us about your trip requirements..." className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-forest-500 focus:border-forest-500 outline-none transition-all text-slate-700 text-sm resize-none"></textarea>
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit" 
          className="w-full py-3.5 mt-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-base rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
        >
          Request Free Quote <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      </form>

      <div className="mt-5 pt-5 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-500 text-xs">
        <ShieldCheck className="w-4 h-4 text-forest-600" />
        Your information is secure and private
      </div>
      
      <div className="mt-3 text-center">
        <span className="text-slate-500 text-xs text-center">Need help? Call us at </span>
        <a href="tel:+917018318824" className="text-forest-700 text-xs font-bold hover:underline">+91 70183 18824</a>
      </div>
    </motion.div>
  );
}
