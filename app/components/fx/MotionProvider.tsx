"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Desativa animações de transform/layout para quem prefere movimento reduzido. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
