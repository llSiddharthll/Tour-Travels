"use client";

import Image from "next/image";
import Link from "next/link";
import {
  RiTimeLine,
  RiMapPinLine,
  RiGroupLine,
  RiCarLine,
  RiArrowRightUpLine,
  RiStarSFill,
  RiCheckLine,
} from "react-icons/ri";
import { motion } from "framer-motion";

export type TourPackage = {
  id?: string;
  slug: string;
  title: string;
  location: string;
  pricePerPerson: number;
  durationDays: number;
  durationNights: number;
  imageUrls: string[];
  vehicleType: string;
  maxOccupancy: number;
  description?: string;
  itinerary?: { day: number; title: string; activities: string }[];
  inclusions?: string[];
  exclusions?: string[];
  categories?: string[];
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
};

const categoryLabelMap: Record<string, string> = {
  adventure: "Adventure",
  family: "Family",
  honeymoon: "Honeymoon",
  spiritual: "Spiritual",
  cultural: "Cultural",
  offbeat: "Offbeat",
};

export const PackageCard = ({ tour }: { tour: TourPackage }) => {
  const category = tour.categories?.[0];
  const categoryLabel = category
    ? categoryLabelMap[category] ?? category
    : null;

  const topInclusions = (tour.inclusions ?? []).slice(0, 3);

  return (
    <motion.article
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_4px_24px_-8px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(15,23,42,0.25)] hover:ring-slate-300"
    >
      {/* Animated gradient ring on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/0 via-orange-500/0 to-rose-500/0 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-30" />

      {/* Image */}
      <Link
        href={`/packages/${tour.slug}`}
        className="relative block aspect-[5/4] overflow-hidden bg-slate-100"
      >
        <Image
          src={tour.imageUrls[0] || "/placeholder-mountain.png"}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Image gradient — stronger on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/10 transition-opacity duration-500 group-hover:from-slate-950/90" />

        {/* Top row */}
        <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
          {categoryLabel ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm backdrop-blur">
              <RiStarSFill className="h-2.5 w-2.5 text-amber-500" />
              {categoryLabel}
            </span>
          ) : (
            <span />
          )}

          <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/65 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ring-1 ring-white/15 backdrop-blur">
            <RiTimeLine className="h-2.5 w-2.5" />
            {tour.durationDays}D / {tour.durationNights}N
          </span>
        </div>

        {/* Bottom overlay info on image */}
        <div className="absolute inset-x-4 bottom-4 space-y-2 text-white">
          {/* Location */}
          <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-300/95">
            <RiMapPinLine className="h-3 w-3" />
            <span className="text-white/95">{tour.location}</span>
          </div>

          {/* Title (now over image — large, premium) */}
          <h3 className="font-outfit text-xl font-extrabold leading-[1.15] text-white drop-shadow-md sm:text-2xl line-clamp-2">
            {tour.title}
          </h3>
        </div>

        {/* Hover-revealed inclusions strip */}
        {topInclusions.length > 0 && (
          <motion.div
            variants={{
              rest: { y: 16, opacity: 0 },
              hover: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-x-0 bottom-0 hidden border-t border-white/10 bg-slate-950/70 px-4 py-2.5 backdrop-blur-md sm:block"
            style={{ transform: "translateY(100%)" }}
          >
            <motion.div
              variants={{
                rest: { y: "100%" },
                hover: { y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-medium text-white/90"
            >
              {topInclusions.map((inc, i) => (
                <span key={i} className="inline-flex items-center gap-1">
                  <RiCheckLine className="h-3 w-3 text-emerald-400" />
                  <span className="line-clamp-1 max-w-[10rem]">{inc}</span>
                </span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {tour.description && (
          <p className="line-clamp-2 text-sm leading-relaxed text-slate-500">
            {tour.description}
          </p>
        )}

        {/* Specs row */}
        <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-slate-600">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1">
            <RiCarLine className="h-3.5 w-3.5 text-slate-500" />
            <span className="truncate max-w-[7rem]">{tour.vehicleType}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1">
            <RiGroupLine className="h-3.5 w-3.5 text-slate-500" />
            {tour.maxOccupancy} pax
          </span>
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              From
            </p>
            <p className="font-outfit text-2xl font-extrabold leading-none text-slate-900">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                ₹{tour.pricePerPerson.toLocaleString("en-IN")}
              </span>
              <span className="ml-1 text-[10px] font-medium text-slate-400">
                /person
              </span>
            </p>
          </div>

          <Link
            href={`/packages/${tour.slug}`}
            className="group/btn relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-slate-900 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:bg-amber-500 hover:text-slate-950 hover:shadow-amber-500/30"
            aria-label={`View ${tour.title}`}
          >
            <span className="relative z-10">View details</span>
            <RiArrowRightUpLine className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:rotate-45" />
            {/* shimmer */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
