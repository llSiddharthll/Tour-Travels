"use client";

import { useState } from "react";
import {
  RiShieldCheckLine,
  RiGroupLine,
  RiTrophyLine,
  RiCompass3Line,
  RiCarLine,
  RiCheckboxCircleLine,
  RiNavigationLine,
  RiStarSFill,
} from "react-icons/ri";

export interface Feature {
  title: string;
  desc: string;
  image: string;
  icon?: string;
}

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  RiShieldCheckLine,
  RiGroupLine,
  RiTrophyLine,
  RiCompass3Line,
  RiCarLine,
  RiCheckboxCircleLine,
  RiNavigationLine,
  RiStarSFill,
};

interface Props {
  features: Feature[];
}

export function WhyChooseUs({ features }: Props) {
  const [active, setActive] = useState(0);

  if (!features?.length) return null;

  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-[500px] gap-6 md:gap-4">
      {features.map((f, i) => {
        const Icon = ICONS[f.icon || ""] || RiCompass3Line;
        const isActive = i === active;
        return (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            tabIndex={0}
            role="button"
            aria-expanded={isActive}
            className={[
              "relative h-[300px] md:h-full overflow-hidden rounded-3xl",
              "cursor-pointer shadow-lg border border-slate-200",
              "transition-all duration-700 ease-in-out",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange",
              isActive ? "md:flex-[3]" : "md:flex-[1]",
            ].join(" ")}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={f.image}
              alt={f.title}
              className={[
                "absolute inset-0 w-full h-full object-cover",
                "transition-transform duration-700",
                isActive ? "md:scale-105" : "",
              ].join(" ")}
            />
            <div
              className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-all duration-500"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,60,93,0.95) 0%, rgba(10,60,93,0.4) 50%, rgba(10,60,93,0.1) 100%)",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={[
                    "w-12 h-12 rounded-full flex items-center justify-center shrink-0",
                    "border shadow-xl transition-colors duration-500",
                    isActive
                      ? "bg-brand-orange text-white border-brand-orange"
                      : "bg-white/20 text-brand-orange border-white/10",
                  ].join(" ")}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3
                  className={[
                    "hidden md:block text-2xl font-bold text-white font-outfit",
                    "whitespace-nowrap overflow-hidden transition-all duration-500",
                    isActive ? "w-auto opacity-100" : "w-0 opacity-0",
                  ].join(" ")}
                >
                  {f.title}
                </h3>
                {/* Mobile / always-visible title */}
                <h3 className="text-xl font-bold text-white font-outfit md:hidden">
                  {f.title}
                </h3>
              </div>
              <div
                className={[
                  "hidden md:block overflow-hidden transition-all duration-500",
                  isActive ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0",
                ].join(" ")}
              >
                <p className="text-slate-100 font-medium leading-relaxed font-inter">
                  {f.desc}
                </p>
              </div>
              {/* Mobile description */}
              <p className="text-slate-200 font-medium leading-relaxed font-inter text-sm md:hidden mt-2">
                {f.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
