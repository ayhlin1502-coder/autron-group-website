"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import type { SVGMotionProps } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * Motion system tokens (spec Section 21).
 * Keep every duration/easing/movement value site-wide consistent with these constants.
 */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DURATION = {
  micro: 0.22, // micro interactions: 180-250ms
  card: 0.28, // card hover: 220-320ms
  reveal: 0.6, // content reveal: 500-700ms
  section: 0.85, // section transition: 700-1000ms
  story: 1.1 // large scroll storytelling: 800-1200ms
};

export const MOVE = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24
};

/** Motion-enabled Next.js Link, used by primitives below that need hover + keyboard focus parity. */
export const MotionLink = motion.create(Link);

/**
 * Reveal — fade + translateY, triggered once when scrolled into view.
 * Use for section headings, cards, and any content that appears below the fold.
 */
export function Reveal({
  children,
  className = "",
  y = MOVE.md,
  delay = 0,
  duration = DURATION.reveal,
  amount = 0.2
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  amount?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * FadeUp — fade + translateY, triggered immediately on mount.
 * Use for above-the-fold content (Hero) where entrance should not wait for scroll.
 */
export function FadeUp({
  children,
  className = "",
  y = MOVE.md,
  delay = 0,
  duration = DURATION.reveal
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Inline (span-level) variant of FadeUp — for animating individual lines inside a heading. */
export function FadeUpSpan({
  children,
  className = "",
  y = MOVE.md,
  delay = 0,
  duration = DURATION.reveal
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.span
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.span>
  );
}

/**
 * StaggerContainer / StaggerItem — orchestrate a staggered reveal of children.
 * Wrap a list (e.g. business cards, capability steps) with StaggerContainer,
 * and each child with StaggerItem.
 */
export function StaggerContainer({
  children,
  className = "",
  stagger = 0.1,
  delayChildren = 0,
  amount = 0.15,
  once = true
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
  once?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: reduceMotion ? undefined : { staggerChildren: stagger, delayChildren } }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  y = MOVE.md,
  duration = DURATION.reveal,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  duration?: number;
} & Record<string, unknown>) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduceMotion ? {} : { opacity: 0, y },
        show: reduceMotion ? {} : { opacity: 1, y: 0, transition: { duration, ease: EASE_OUT } }
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * HoverLift — wraps a Next.js Link and animates it identically on hover, keyboard focus,
 * and tap. Use for simple single-element hover interactions (e.g. shortcut rows, buttons).
 */
export function HoverLift({
  href,
  children,
  className = "",
  liftX = 0,
  liftY = -MOVE.sm,
  scale = 1,
  ariaLabel
}: {
  href: string;
  children: ReactNode;
  className?: string;
  liftX?: number;
  liftY?: number;
  scale?: number;
  ariaLabel?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <MotionLink
      href={href}
      aria-label={ariaLabel}
      className={className}
      whileHover={reduceMotion ? undefined : { x: liftX, y: liftY, scale }}
      whileFocus={reduceMotion ? undefined : { x: liftX, y: liftY, scale }}
      whileTap={reduceMotion ? undefined : { scale: scale * 0.97 }}
      transition={{ duration: DURATION.card, ease: EASE_OUT }}
    >
      {children}
    </MotionLink>
  );
}

/**
 * AnimatedCounter — counts up from 0 to the numeric portion of `value` once, when scrolled
 * into view. Non-numeric values (e.g. "∞") fade + scale in instead of counting.
 */
export function AnimatedCounter({
  value,
  className = "",
  duration = 0.8
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const match = value.match(/^(\d+)(\D*)$/);
  const numeric = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(numeric === null || reduceMotion ? value : "0");

  useEffect(() => {
    if (!inView || numeric === null) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * numeric) + suffix);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (numeric === null) {
    return (
      <motion.span
        ref={ref}
        className={className}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration, ease: EASE_OUT }}
      >
        {value}
      </motion.span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/**
 * PulseNode — a small dot with a soft looping concentric pulse ring.
 * Used to mark hub locations on the network map / hero visual.
 */
export function PulseNode({
  className = "",
  size = 10,
  color = "#236FD9",
  active = true,
  ringScale = 2.4
}: {
  className?: string;
  size?: number;
  color?: string;
  active?: boolean;
  ringScale?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <span className={`pointer-events-none absolute flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <span className="absolute inline-block rounded-full" style={{ width: size, height: size, backgroundColor: color }} />
      {!reduceMotion && (
        <motion.span
          className="absolute inline-block rounded-full"
          style={{ width: size, height: size, backgroundColor: color }}
          animate={active ? { scale: [1, ringScale], opacity: [0.45, 0] } : { scale: 1, opacity: 0 }}
          transition={{ duration: active ? 2.8 : 0.3, repeat: active ? Infinity : 0, ease: "easeOut" }}
        />
      )}
    </span>
  );
}

/**
 * AnimatedPath — an SVG <path> that draws itself in via pathLength once scrolled into view.
 */
export function AnimatedPath({
  delay = 0,
  duration = DURATION.story,
  ...rest
}: SVGMotionProps<SVGPathElement> & { delay?: number; duration?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.path
      {...rest}
      initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
      whileInView={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration, ease: EASE_OUT, delay }}
    />
  );
}
