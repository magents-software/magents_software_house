"use client";

import { useEffect, useState } from "react";
import MagentsLogo from "./MagentsLogo";
import MagentsSimbol from "./MagentsSimbol";

export default function Intro() {
  const [phase, setPhase] = useState<"visible" | "fading" | "done">("visible");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fading"), 3000);
    const t2 = setTimeout(() => setPhase("done"), 3800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0a0f1c 0%, #0d1529 50%, #0b1024 100%)",
        transition: "opacity 0.8s ease",
        opacity: phase === "fading" ? 0 : 1,
        pointerEvents: phase === "fading" ? "none" : "auto",
      }}
    >
      {/* Orbs de fundo */}
      <div style={{
        position: "absolute",
        top: "25%", left: "25%",
        width: 300, height: 300,
        background: "radial-gradient(circle, rgba(27,101,99,0.25) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      <div style={{
        position: "absolute",
        bottom: "25%", right: "25%",
        width: 300, height: 300,
        background: "radial-gradient(circle, rgba(70,162,198,0.15) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />

      {/* Símbolo animado */}
      <MagentsSimbol style={{ width: 260, height: 260 }} />

      {/* Logo fixo abaixo */}
      <div style={{ marginTop: 40 }}>
        <MagentsLogo height={44} />
      </div>
    </div>
  );
}
