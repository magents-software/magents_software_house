"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Barra de progresso de leitura no topo, no gradiente da marca. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-0.75 z-90 origin-left bg-linear-to-r from-brand-600 via-brand-500 to-brand-400"
      style={{ scaleX }}
    />
  );
}
