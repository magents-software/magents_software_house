"use client";

import { useActionState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { submitLead } from "../actions/contact";
import MagentsLogo from "./MagentsLogo";
import { Reveal } from "./fx/Reveal";

export default function Footer() {
  const [state, formAction, pending] = useActionState(submitLead, null);

  return (
    <footer id="contato" className="bg-zinc-900 py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left - Info */}
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <MagentsLogo height={26} />
          </div>
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
            Contato
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-white">
            Vamos conversar sobre{" "}
            <span className="text-gradient">seu projeto</span>?
          </h2>
          <p className="mt-6 text-zinc-400 leading-relaxed">
            Preencha o formulário e nosso time vai entrar em contato
            para agendar uma conversa sobre sua ideia.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-4 text-zinc-300">
              <div className="w-11 h-11 rounded-xl bg-linear-to-br from-brand-600 to-brand-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-brand-600/20">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <span className="text-sm">magents@magents.com.br</span>
            </div>

            {/* <div className="flex items-center gap-4 text-zinc-300">
              <div className="w-11 h-11 rounded-xl bg-linear-to-br from-brand-500 to-brand-400 flex items-center justify-center text-white shrink-0 shadow-md shadow-brand-600/20">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2Z" />
                </svg>
              </div>
              <span className="text-sm">(11) 99999-0000</span>
            </div> */}

            <div className="flex items-center gap-4 text-zinc-300">
              <div className="w-11 h-11 rounded-xl bg-linear-to-br from-brand-600 to-brand-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-brand-600/20">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <span className="text-sm">Igrejinha - RS, Brasil</span>
            </div>

            <a
              href="https://instagram.com/magents_software"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-linear-to-br from-brand-600 to-brand-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-brand-600/20">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <span className="text-sm">@magents_software</span>
            </a>
          </div>
        </Reveal>

        {/* Right - Form */}
        <Reveal delay={0.15}>
          <AnimatePresence mode="wait">
          {state?.success ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="glass rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full min-h-100"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.2 }}
                className="w-16 h-16 rounded-full bg-linear-to-br from-brand-600 to-brand-400 flex items-center justify-center mb-4 shadow-lg shadow-brand-600/30"
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold text-white">Mensagem enviada!</h3>
              <p className="mt-2 text-zinc-400">Obrigado pelo contato. Te respondemos em breve.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              action={formAction}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  required
                  name="name"
                  placeholder="Nome"
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                />
              </div>

              <input
                name="subject"
                placeholder="Assunto"
                className="w-full px-4 py-3.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
              />

              <textarea
                required
                name="description"
                rows={5}
                placeholder="Conte sobre seu projeto..."
                className="w-full px-4 py-3.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm resize-none"
              />

              {state && !state.success && (
                <p className="text-red-400 text-sm">{state.error}</p>
              )}

              <motion.button
                type="submit"
                disabled={pending}
                whileHover={{ scale: pending ? 1 : 1.02 }}
                whileTap={{ scale: pending ? 1 : 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-brand text-white font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {pending ? "Enviando..." : "Enviar Mensagem"}
              </motion.button>
            </motion.form>
          )}
          </AnimatePresence>
        </Reveal>
      </div>
    </footer>
  );
}
