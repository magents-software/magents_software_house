"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Glow que segue o cursor (não substitui o cursor nativo).
 * Cresce sobre elementos interativos. Desativado em telas touch.
 */
export default function Cursor() {
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 300, damping: 28, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 300, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setActive(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as Element | null;
      setHovering(!!target?.closest("a, button, input, textarea, [role=button]"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!active) return null;

  return (
    <>
      {/* Aura difusa */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-100 rounded-full"
        style={{
          left: sx,
          top: sy,
          x: "-50%",
          y: "-50%",
          width: 260,
          height: 260,
          background:
            "radial-gradient(circle, rgba(70,162,198,0.10) 0%, rgba(46,137,152,0.05) 40%, transparent 70%)",
        }}
        animate={{ scale: hovering ? 1.35 : 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      />
      {/* Anel próximo */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-100 rounded-full border border-brand-400/50"
        style={{ left: sx, top: sy, x: "-50%", y: "-50%" }}
        animate={{
          width: hovering ? 44 : 24,
          height: hovering ? 44 : 24,
          opacity: hovering ? 1 : 0.55,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
      />
    </>
  );
}
