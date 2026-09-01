"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { PulseNode } from "./motion";

/**
 * HeroVisual — wraps the Hero background photo with a subtle scroll parallax and a single
 * soft network-hub pulse accent near the Taipei skyline. The photo itself is a flat raster
 * image (no separate SVG line/node layer exists in the current asset), so the "network
 * animation" priority is delivered here as a tasteful accent rather than a fully re-drawn
 * path animation — see the final implementation report for detail.
 *
 * `children` (the existing content grid + service shortcut panel) render exactly as before,
 * unchanged, as siblings of the image inside this same relative container.
 */
export function HeroVisual({
  children,
  src = "/hero-banner-v3.png",
  alt = "Autron Group connecting global markets",
  accent = true,
  accentPosition = "left-[74%] top-[40%]",
  heightClassName = "h-[70vh] md:h-[75vh] lg:h-[78vh]"
}: {
  children: ReactNode;
  src?: string;
  alt?: string;
  accent?: boolean;
  accentPosition?: string;
  heightClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  // Mobile motion rule (spec Section 16): disable parallax below the sm breakpoint,
  // where scroll-linked background movement adds little and costs more relative to the
  // smaller viewport.
  const [parallaxEnabled, setParallaxEnabled] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setParallaxEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 26]);

  return (
    <div ref={containerRef} className={`relative w-full overflow-hidden bg-white ${heightClassName}`}>
      <motion.div className="absolute inset-0" style={reduceMotion || !parallaxEnabled ? undefined : { y }}>
        <Image src={src} alt={alt} fill priority sizes="100vw" className="h-full w-full object-cover object-center" />
      </motion.div>

      {accent && <PulseNode className={`${accentPosition} hidden sm:flex`} size={9} color="#ffffff" ringScale={2.2} />}

      {children}
    </div>
  );
}
