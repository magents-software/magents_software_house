import Image from "next/image";

const metrics = [
  { value: "50+", label: "Projetos entregues" },
  { value: "30+", label: "Clientes ativos" },
  { value: "5+",  label: "Anos de mercado" },
];

const floatingCards = [
  { icon: "⚡", text: "Deploy em produção" },
  { icon: "🛡️", text: "99.9% uptime" },
  { icon: "📱", text: "Mobile-first" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-24">

      {/* Background orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-brand-600/25 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 -right-32 w-125 h-125 bg-brand-500/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-brand-700/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-16">

        {/* ── LEFT: texto ── */}
        <div className="text-center lg:text-left">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/40 bg-brand-600/10 text-brand-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            Software sob medida para o seu negócio
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            Transformamos<br />
            ideias em{" "}
            <span className="text-gradient">soluções</span>
            <br />
            <span className="text-gradient">digitais</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Do MVP à escala — entregamos aplicações web, mobile e APIs com
            código limpo, arquitetura sólida e velocidade real.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
            <a
              href="#contato"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-brand text-white font-semibold text-base transition-all hover:scale-105 hover:shadow-xl hover:shadow-brand-600/30"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-600 text-white font-semibold text-base transition-all hover:border-brand-500 hover:bg-brand-600/10"
            >
              Ver Projetos →
            </a>
          </div>

          {/* Metrics */}
          <div className="mt-14 flex items-center justify-center lg:justify-start gap-10">
            {metrics.map((m, i) => (
              <div key={m.label} className="flex items-center gap-4">
                <div>
                  <div className="text-3xl font-extrabold text-white">{m.value}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{m.label}</div>
                </div>
                {i < metrics.length - 1 && (
                  <div className="w-px h-10 bg-zinc-700" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: esfera + cards flutuantes ── */}
        <div className="relative flex items-center justify-center h-105 lg:h-130">

          {/* Anel luminoso atrás da esfera */}
          <div className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full border border-brand-500/20 animate-pulse-slow" />
          <div className="absolute w-56 h-56 lg:w-72 lg:h-72 rounded-full border border-brand-600/30 animate-pulse-slow" style={{ animationDelay: "1s" }} />

          {/* Esfera girando */}
          <div
            className="animate-spin relative z-10"
            style={{ animationDuration: "12s" }}
          >
            <Image
              src="/magents_logo.png"
              alt="Magents sphere"
              width={300}
              height={300}
              className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full drop-shadow-[0_0_60px_rgba(46,137,152,0.5)]"
              priority
            />
          </div>

          {/* Card flutuante — topo direita */}
          <div
            className="absolute top-6 right-4 lg:right-0 glass rounded-xl px-4 py-3 flex items-center gap-3 animate-float"
            style={{ animationDelay: "0s" }}
          >
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-brand-600 to-brand-400 flex items-center justify-center text-white shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.198-8.72 15.09 15.09 0 0 1 8.72 2.199 15.09 15.09 0 0 1-.06.31m-2.15 2.152-3.433 3.433" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-white font-semibold">Deploy concluído</div>
              <div className="text-xs text-brand-400">em produção • agora</div>
            </div>
          </div>

          {/* Card flutuante — esquerda meio */}
          <div
            className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 glass rounded-xl px-4 py-3 flex items-center gap-3 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-brand-600 to-brand-400 flex items-center justify-center text-white shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-white font-semibold">Uptime</div>
              <div className="text-xs text-brand-400">99.9% garantido</div>
            </div>
          </div>

          {/* Card flutuante — baixo centro */}
          <div
            className="absolute bottom-6 right-8 lg:right-4 glass rounded-xl px-4 py-3 flex items-center gap-3 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-brand-600 to-brand-400 flex items-center justify-center text-white shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-1.5 17.25h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-white font-semibold">Mobile-first</div>
              <div className="text-xs text-brand-400">iOS & Android</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
