"use client";

import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

/**
 * Digita o texto caractere a caractere quando entra na viewport,
 * com cursor piscando. Pensado para o card de código do About.
 */
export default function Typewriter({
  text,
  className,
  speed = 14,
  startDelay = 400,
}: {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}) {
  const ref = useRef<HTMLPreElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1 + Math.floor(Math.random() * 2); // cadência levemente irregular
        setCount(Math.min(i, text.length));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [inView, text.length, speed, startDelay]);

  return (
    <pre ref={ref} className={className} aria-label={text}>
      <span aria-hidden>{text.slice(0, count)}</span>
      <span
        aria-hidden
        className={`inline-block w-2 h-4 -mb-0.5 bg-brand-400 ${done ? "animate-pulse" : ""}`}
      />
    </pre>
  );
}
