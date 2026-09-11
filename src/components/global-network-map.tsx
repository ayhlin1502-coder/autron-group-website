"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { FlagIcon } from "./brand-graphics";
import { DURATION, EASE_OUT, Reveal } from "./motion";

type Market = { name: string; code: string };

export function GlobalNetworkMap({ markets }: { markets: Market[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const mapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(mapRef, { once: true, amount: 0.35 });

  return (
    <div className="mx-auto grid max-w-content gap-lg lg:grid-cols-[2.3fr_0.8fr]">
      <div ref={mapRef} className="relative h-[400px] overflow-hidden lg:h-[480px]">
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : undefined}
          transition={{ duration: DURATION.section, ease: EASE_OUT }}
        >
          <Image
            src="/world-banner-2.png"
            alt="Global network connecting international markets"
            fill
            sizes="100vw"
            className="object-contain object-right transition-[filter] duration-300"
            style={{ filter: hovered ? "brightness(1.08) saturate(1.1)" : "none" }}
          />
        </motion.div>

        <div className="absolute left-0 top-0 z-10 max-w-[22rem] bg-gradient-to-br from-[#F9FAFD] via-[#F9FAFD]/85 to-transparent py-md pr-xl">
          <Reveal>
            <p className="mb-sm text-sm font-bold uppercase tracking-[0.18em] text-primary">GLOBAL NETWORK</p>
            <h2 id="network-heading" className="text-balance font-display text-4xl font-bold text-navy sm:text-5xl">全球市場布局</h2>
            <p className="mt-sm text-sm font-bold text-navy">深耕重點市場，連結全球商機</p>
          </Reveal>
        </div>
      </div>

      <div className="flex h-full flex-col justify-center">
        <div className="grid grid-cols-2 gap-sm">
          {markets.map((market, index) => (
            <motion.div
              key={market.name}
              onMouseEnter={() => setHovered(market.code)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(market.code)}
              onBlur={() => setHovered(null)}
              tabIndex={0}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: DURATION.reveal, ease: EASE_OUT, delay: index * 0.06 }}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              className="flex cursor-default items-center gap-sm rounded-md border border-line bg-white px-sm py-md text-navy shadow-md outline-none transition-shadow duration-200 focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 ring-line">
                <FlagIcon code={market.code} className="h-full w-full" />
              </div>
              <span className="font-display text-sm font-semibold">{market.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
