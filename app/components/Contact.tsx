"use client";

import { useState, FormEvent } from "react";

const contactInfo = [
  {
    label: "contato@magents.dev",
    gradient: "from-brand-600 to-brand-500",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "(11) 99999-0000",
    gradient: "from-brand-500 to-brand-400",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2Z" />
      </svg>
    ),
  },
  {
    label: "São Paulo, Brasil",
    gradient: "from-brand-600 to-brand-500",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contato" className="bg-zinc-900 py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left - Info */}
        <div>
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
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4 text-zinc-300">
                <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${item.gradient} flex items-center justify-center text-white shrink-0 shadow-md shadow-brand-600/20`}>
                  {item.icon}
                </div>
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div>
          {sent ? (
            <div className="glass rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-brand-600 to-brand-400 flex items-center justify-center mb-4 shadow-lg shadow-brand-600/30">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Mensagem enviada!</h3>
              <p className="mt-2 text-zinc-400">Obrigado pelo contato. Te respondemos em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  required
                  placeholder="Nome"
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                />
              </div>
              <input
                placeholder="Assunto"
                className="w-full px-4 py-3.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
              />
              <textarea
                required
                rows={5}
                placeholder="Conte sobre seu projeto..."
                className="w-full px-4 py-3.5 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-brand text-white font-semibold text-sm transition-all hover:opacity-90 hover:scale-[1.01]"
              >
                Enviar Mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
