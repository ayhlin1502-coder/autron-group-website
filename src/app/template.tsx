"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT } from "@/components/motion";

/**
 * Next.js re-mounts `template.tsx` on every navigation (unlike layout.tsx, which persists),
 * making it the right place for a subtle, corporate-appropriate page-entry transition.
 * Header and footer live in layout.tsx and are unaffected.
 */
export default function Template({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
