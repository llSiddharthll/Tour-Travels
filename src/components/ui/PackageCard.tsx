"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  RiTimeLine,
  RiMapPinLine,
  RiGroupLine,
  RiCarLine,
  RiArrowRightUpLine,
  RiStarSFill,
  RiCheckLine,
  RiImageLine,
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
  const [imgError, setImgError] = useState(false);
  const category = tour.categories?.[0];
  const categoryLabel = category
    ? categoryLabelMap[category] ?? category
    : null;
  const topInclusions = (tour.inclusions ?? []).slice(0, 3);
  const imageUrl = tour.imageUrls?.[0];
  const showImage = imageUrl && !imgError;

  return (
    <motion.article
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_-6px_rgba(15,23,42,0.08)] ring-1 ring-slate-200 transition-all duration-300 hover:shadow-[0_20px_50px_-16px_rgba(15,23,42,0.22)] hover:ring-slate-300"
    >
      {/* Image header */}
      <Link
        href={`/packages/${tour.slug}`}
        className="relative block h-56 w-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300"
      >
        {showImage ? (
          <Image
            src={imageUrl}
            alt={tour.title}
            fill
            unoptimized
            onError={() => setImgError(true)}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-400">
            <RiImageLine className="h-12 w-12" />
          </div>
        )}

        {/* Bottom-up gradient for legibility of badges only */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/30" />

        {/* Top row: category + duration */}
        <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
          {categoryLabel ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm backdrop-blur">
              <RiStarSFill className="h-2.5 w-2.5 text-amber-500" />
              {categoryLabel}
            </span>
          ) : (
            <span />
          )}
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ring-1 ring-white/15 backdrop-blur">
            <RiTimeLine className="h-2.5 w-2.5" />
            {tour.durationDays}D / {tour.durationNights}N
          </span>
        </div>

        {/* Location pill at bottom-left of image */}
        <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-slate-900 shadow-sm backdrop-blur">
            <RiMapPinLine className="h-3 w-3 text-brand-orange" />
            {tour.location}
          </span>
        </div>

        {/* Hover-revealed inclusions strip (sm+) */}
        {topInclusions.length > 0 && (
          <motion.div
            variants={{
              rest: { y: "100%", opacity: 0 },
              hover: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden border-t border-white/10 bg-slate-950/80 px-3 py-2 backdrop-blur-md sm:block"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-medium text-white/90">
              {topInclusions.map((inc, i) => (
                <span key={i} className="inline-flex items-center gap-1">
                  <RiCheckLine className="h-3 w-3 text-emerald-400" />
                  <span className="line-clamp-1 max-w-[10rem]">{inc}</span>
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <Link href={`/packages/${tour.slug}`} className="block">
          <h3 className="font-outfit text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-blue line-clamp-2 sm:text-xl">
            {tour.title}
          </h3>
        </Link>

        {tour.description && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">
            {tour.description}
          </p>
        )}

        {/* Specs row */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-600">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1">
            <RiCarLine className="h-3.5 w-3.5 text-slate-500" />
            <span className="truncate max-w-[8rem]">{tour.vehicleType}</span>
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
              ₹{tour.pricePerPerson.toLocaleString("en-IN")}
              <span className="ml-1 text-[10px] font-medium text-slate-400">
                /person
              </span>
            </p>
          </div>

          <Link
            href={`/packages/${tour.slug}`}
            className="group/btn relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-slate-900 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:bg-brand-orange hover:shadow-brand-orange/30"
            aria-label={`View ${tour.title}`}
          >
            <span className="relative z-10">View details</span>
            <RiArrowRightUpLine className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:rotate-45" />
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
