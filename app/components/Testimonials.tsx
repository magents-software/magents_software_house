import { Reveal, Stagger, StaggerItem } from "./fx/Reveal";
import TiltCard from "./fx/TiltCard";

const testimonials = [
  {
    name: "Ana Silva",
    role: "CTO, TechCorp",
    quote: "A Magents entregou nossa solução em 4 semanas com qualidade impressionante. Hoje o produto gera mais de R$2M por ano em receita.",
    gradient: "from-brand-600 to-brand-500",
  },
  {
    name: "Ricardo Mendes",
    role: "CEO, FinApp",
    quote: "Comunicação clara, entregas pontuais e código de qualidade. A parceria com a Magents acelerou nosso roadmap em meses.",
    gradient: "from-brand-500 to-brand-400",
  },
  {
    name: "Juliana Costa",
    role: "CMO, EventPlus",
    quote: "Profissionais dedicados que entendem tanto de tecnologia quanto de negócio. Nosso sistema de eventos ficou impecável.",
    gradient: "from-brand-600 to-brand-500",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-zinc-950 py-28 px-6 relative overflow-hidden">
      {/* Auroras de fundo */}
      <div className="aurora w-110 h-110 -top-30 -right-30 bg-brand-600/15" />
      <div className="aurora w-90 h-90 -bottom-20 -left-20 bg-brand-400/8" style={{ animationDelay: "-6s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal className="text-center mb-16">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">Depoimentos</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-white">O que dizem sobre nós</h2>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <TiltCard className="group relative h-full glass rounded-2xl p-7 border border-zinc-800/60 hover:border-brand-600/40 transition-colors duration-300 flex flex-col">

              {/* Aspas decorativas */}
              <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${t.gradient} flex items-center justify-center mb-5 shadow-md shadow-brand-600/20`}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z"/>
                </svg>
              </div>

              {/* Estrelas */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>

              {/* Linha divisória */}
              <div className="my-5 h-px bg-zinc-700/50" />

              {/* Avatar */}
              <div className="flex items-center gap-3">
                <div className="p-0.5 rounded-full bg-linear-to-br from-brand-600 to-brand-400">
                  <div className={`w-10 h-10 rounded-full bg-linear-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                    {t.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-zinc-500">{t.role}</div>
                </div>
              </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
