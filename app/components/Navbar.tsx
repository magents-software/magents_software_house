"use client";

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-5">
      <nav className="glass mt-4 max-w-6xl mx-auto rounded-2xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <MagentsLogo className="text-2xl" />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-white">{l.label}</a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              className="ml-4 px-5 py-2.5 rounded-full bg-gradient-brand text-white text-sm font-semibold transition-opacity hover:opacity-90"
            >
              Fale Conosco
            </a>
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

        {open && (
          <div className="absolute top-20 left-4 right-4 rounded-2xl p-6 md:hidden" style={{ background: 'rgba(15, 15, 20, 0.92)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <ul className="flex flex-col items-center gap-5 text-zinc-300">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
              <li>
                <a
                  href="#contato"
                  onClick={() => setOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-gradient-brand text-white font-semibold"
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
