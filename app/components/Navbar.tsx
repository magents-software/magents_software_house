"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useState } from "react";
import MagentsLogo from "./MagentsLogo";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 300 && !open);
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-5"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -110 : 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98], delay: hidden ? 0 : undefined }}
    >
      <motion.nav
        className="glass mt-4 max-w-6xl mx-auto rounded-2xl px-6 flex items-center justify-between"
        animate={{
          paddingTop: scrolled ? 12 : 16,
          paddingBottom: scrolled ? 12 : 16,
          backgroundColor: scrolled
            ? "rgba(10, 15, 28, 0.75)"
            : "rgba(255, 255, 255, 0.05)",
        }}
        transition={{ duration: 0.3 }}
      >
        <a href="#" className="flex items-center">
          <MagentsLogo height={26} />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative group transition-colors hover:text-white">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-linear-to-r from-brand-500 to-brand-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="ml-4 px-5 py-2.5 rounded-full bg-gradient-brand text-white text-sm font-semibold inline-block"
            >
              Fale Conosco
            </motion.a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-1"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-20 left-4 right-4 rounded-2xl p-6 md:hidden"
              style={{
                background: "rgba(15, 15, 20, 0.92)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <ul className="flex flex-col items-center gap-5 text-zinc-300">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <a href={l.href} onClick={() => setOpen(false)} className="hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <a
                    href="#contato"
                    onClick={() => setOpen(false)}
                    className="px-5 py-2.5 rounded-full bg-gradient-brand text-white font-semibold"
                  >
                    Fale Conosco
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}
