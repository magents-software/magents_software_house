"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import MagentsSimbol from "./MagentsSimbol";
import Magnetic from "./fx/Magnetic";

const HeroScene = dynamic(() => import("./fx/HeroScene"), { ssr: false });

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 2.2 } },
};

const item = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

// Headline palavra a palavra, com flip 3D + blur saindo
const headline: { text: string; gradient?: boolean; br?: boolean }[] = [
  { text: "Transformamos", br: true },
  { text: "ideias" },
  { text: "em" },
  { text: "soluções", gradient: true, br: true },
  { text: "digitais", gradient: true },
];

const headlineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const word = {
  hidden: { opacity: 0, y: 30, rotateX: -70, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

const floatingCards = [
  {
    position: "top-6 right-4 lg:right-0",
    delay: 0,
    title: "Deploy concluído",
    subtitle: "em produção • agora",
    icon: (
      <path d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.198-8.72 15.09 15.09 0 0 1 8.72 2.199 15.09 15.09 0 0 1-.06.31m-2.15 2.152-3.433 3.433" />
    ),
  },
  {
    position: "left-0 lg:-left-6 top-1/2 -translate-y-1/2",
    delay: 1.2,
    title: "Uptime",
    subtitle: "99.9% garantido",
    icon: (
      <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    ),
  },
  {
    position: "bottom-6 right-8 lg:right-4",
    delay: 0.6,
    title: "Mobile-first",
    subtitle: "iOS & Android",
    icon: (
      <path d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-1.5 17.25h.008v.008H12v-.008Z" />
    ),
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax de saída: o conteúdo sobe e esmaece conforme o scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const symbolY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-24"
    >
      {/* Rede de nós 3D interativa (three.js) */}
      <div className="absolute inset-0 opacity-70">
        <HeroScene />
      </div>

      {/* Background orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-brand-600/25 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-125 h-125 bg-brand-500/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      {/* Vinheta para manter o texto legível sobre a cena */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,15,28,0.55)_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-16">
        {/* ── LEFT: texto ── */}
        <motion.div
          className="text-center lg:text-left"
          variants={container}
          initial="hidden"
          animate="show"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/40 bg-brand-600/10 text-brand-400 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            Software sob medida para o seu negócio
          </motion.span>

          <motion.h1
            variants={headlineContainer}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
            style={{ perspective: 800 }}
          >
            {headline.map((w, i) => (
              <span key={i} className="whitespace-nowrap">
                <motion.span
                  variants={word}
                  className={`inline-block ${w.gradient ? "text-shimmer" : ""}`}
                  style={{ transformOrigin: "bottom" }}
                >
                  {w.text}
                </motion.span>
                {w.br ? <br /> : " "}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            Entregamos aplicações web, mobile e APIs com
            código limpo, arquitetura sólida e velocidade real.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
          >
            <Magnetic className="w-full sm:w-auto">
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="block text-center w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-brand text-white font-semibold text-base hover:shadow-xl hover:shadow-brand-600/30 transition-shadow"
              >
                Solicitar Orçamento
              </motion.a>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="block text-center w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-600 text-white font-semibold text-base hover:border-brand-500 hover:bg-brand-600/10 transition-colors backdrop-blur-sm"
              >
                Ver Projetos →
              </motion.a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: símbolo + cards flutuantes ── */}
        <motion.div
          className="relative flex items-center justify-center h-105 lg:h-130"
          style={{ y: symbolY }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 2.4, ease }}
        >
          {/* Glow blob atrás do símbolo */}
          <div className="absolute w-56 h-56 lg:w-64 lg:h-64 rounded-full bg-brand-500/10 blur-3xl" />

          {/* Anéis orbitais girando lentamente */}
          <motion.div
            className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full border border-brand-500/25"
            animate={{ rotate: 360, scale: [1, 1.04, 1] }}
            transition={{
              rotate: { duration: 40, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ borderStyle: "dashed" }}
          />
          <motion.div
            className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full border border-brand-500/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            style={{ borderStyle: "dashed" }}
          />
          <div className="absolute w-96 h-96 lg:w-md lg:h-md rounded-full border border-brand-600/10 animate-pulse-slow" />

          {/* Partículas orbitais */}
          {[
            { radius: 158, duration: 20, size: "w-2 h-2", color: "bg-brand-400/80" },
            { radius: 178, duration: 32, size: "w-1.5 h-1.5", color: "bg-brand-300/60", reverse: true },
            { radius: 168, duration: 26, size: "w-2 h-2", color: "bg-brand-500/70", offset: -9 },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: p.reverse ? -360 : 360 }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "linear",
                delay: p.offset ?? 0,
              }}
            >
              <div
                className={`absolute ${p.size} rounded-full ${p.color} blur-[1px]`}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%,-50%) translateX(${p.radius}px)`,
                }}
              />
            </motion.div>
          ))}

          {/* Símbolo animado */}
          <div className="relative z-10">
            <MagentsSimbol className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 drop-shadow-[0_0_80px_rgba(36,150,184,0.4)]" />
          </div>

          {/* Cards flutuantes */}
          {floatingCards.map((card, i) => (
            <motion.div
              key={card.title}
              className={`absolute ${card.position} glass rounded-xl px-4 py-3 flex items-center gap-3`}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: [0, -14, 0], scale: 1 }}
              transition={{
                opacity: { duration: 0.6, delay: 2.8 + i * 0.15 },
                scale: { duration: 0.6, delay: 2.8 + i * 0.15 },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: card.delay,
                },
              }}
              whileHover={{ scale: 1.08 }}
            >
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-brand-600 to-brand-400 flex items-center justify-center text-white shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {card.icon}
                </svg>
              </div>
              <div>
                <div className="text-xs text-white font-semibold">{card.title}</div>
                <div className="text-xs text-brand-400">{card.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 0.8 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-brand-400 rounded-full"
            animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
