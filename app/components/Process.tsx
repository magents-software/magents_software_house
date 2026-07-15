import DrawLine from "./fx/DrawLine";
import { Reveal, Stagger, StaggerItem } from "./fx/Reveal";
import TiltCard from "./fx/TiltCard";

const steps = [
  {
    step: "01",
    title: "Briefing & Descoberta",
    description: "Entendemos seu problema, objetivos e público-alvo em sessões colaborativas.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    gradient: "from-brand-600 to-brand-500",
  },
  {
    step: "02",
    title: "Planejamento & Prototipagem",
    description: "Definimos arquitetura, escopo, timeline e entregamos protótipos navegáveis.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
    gradient: "from-brand-500 to-brand-400",
  },
  {
    step: "03",
    title: "Desenvolvimento Ágil",
    description: "Sprints curtas com entregas incrementais, feedback frequente e total transparência.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    gradient: "from-brand-600 to-brand-500",
  },
  {
    step: "04",
    title: "Testes & QA",
    description: "Testes automatizados, code reviews rigorosos e garantia de qualidade em cada entrega.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    gradient: "from-brand-500 to-brand-400",
  },
  {
    step: "05",
    title: "Deploy & Suporte",
    description: "Lançamento seguro, monitoramento contínuo e suporte dedicado pós-entrega.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.198-8.72 15.09 15.09 0 0 1 8.72 2.199 15.09 15.09 0 0 1-.06.31m-2.15 2.152-3.433 3.433" />
      </svg>
    ),
    gradient: "from-brand-600 to-brand-500",
  },
];

export default function Process() {
  return (
    <section className="bg-zinc-950 py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-brand-900/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal className="text-center mb-16">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">Como Trabalhamos</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-white">Nosso Processo</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Um fluxo testado que reduz riscos, aumenta a velocidade e garante resultados previsíveis.
          </p>
        </Reveal>

        <div className="relative">
          {/* Linha conectora que se desenha atrás dos cards (desktop) */}
          <DrawLine className="hidden lg:block absolute top-1/2 left-4 right-4 h-px bg-linear-to-r from-brand-600/0 via-brand-500/40 to-brand-400/0" />

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((s) => (
              <StaggerItem key={s.step} className="h-full">
                <TiltCard className="group relative h-full glass rounded-2xl p-6 text-center border border-zinc-800/60 hover:border-brand-600/40 transition-colors duration-300 flex flex-col items-center">
                  {/* Ícone com gradiente */}
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${s.gradient} flex items-center justify-center mb-4 shadow-lg shadow-brand-600/20 text-white`}>
                    {s.icon}
                  </div>
                  {/* Número */}
                  <div className="text-xs font-mono text-brand-400/60 font-semibold mb-1">{s.step}</div>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-brand-300 transition-colors">{s.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{s.description}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
