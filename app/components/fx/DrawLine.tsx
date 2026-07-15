"use client";

import { motion } from "motion/react";

/** Linha horizontal que se "desenha" quando entra na viewport. */
export default function DrawLine({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.4, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.3 }}
      style={{ transformOrigin: "left" }}
    />
  );
}
