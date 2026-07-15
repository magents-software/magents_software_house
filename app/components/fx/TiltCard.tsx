"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";
import type { ReactNode, MouseEvent } from "react";

/**
 * Card com tilt 3D sutil + spotlight que segue o mouse.
 * Mantém o estilo glass da identidade — só adiciona profundidade.
 */
export default function TiltCard({
  children,
  className,
  maxTilt = 6,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const rotateX = useSpring(0, { stiffness: 220, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 22 });
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);
  const spotOpacity = useSpring(0, { stiffness: 200, damping: 30 });

  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${spotX}% ${spotY}%, rgba(70,162,198,0.14), transparent 70%)`;

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * maxTilt * 2);
    rotateX.set((0.5 - py) * maxTilt * 2);
    spotX.set(px * 100);
    spotY.set(py * 100);
  }

  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    spotOpacity.set(0);
  }

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => spotOpacity.set(1)}
      onMouseLeave={onMouseLeave}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl z-10"
        style={{ background: spotlight, opacity: spotOpacity }}
      />
      {children}
    </motion.div>
  );
}
