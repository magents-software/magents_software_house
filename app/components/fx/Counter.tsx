"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

/**
 * Contador animado que entende valores como "98%", "50+", "15+".
 * Anima só o número e preserva o sufixo.
 */
export default function Counter({
  value,
  className,
  duration = 1.6,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!inView || !ref.current || !match) return;
    const node = ref.current;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, target, suffix, duration, match]);

  return (
    <span ref={ref} className={className}>
      {match ? `0${suffix}` : value}
    </span>
  );
}
