const projects = [
  {
    title: "Bless Eventos",
    category: "Plataforma Web",
    description: "Plataforma completa para gestão de eventos corporativos com check-in, palestras e networking em tempo real.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    color: "from-brand-600 to-brand-400",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
      </svg>
    ),
    highlight: true,
  },
  {
    title: "Controle Finanças",
    category: "Fintech",
    description: "App de gestão financeira pessoal com dashboards interativos, categorização automática e metas de economia.",
    tags: ["React Native", "Python", "AWS"],
    color: "from-emerald-600 to-teal-500",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    highlight: false,
  },
  {
    title: "Sombras do Oriente",
    category: "E-commerce",
    description: "Loja virtual com catálogo dinâmico, carrinho inteligente e integração com múltiplos gateways de pagamento.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    color: "from-orange-500 to-rose-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    ),
    highlight: false,
  },
  {
    title: "Magents Social",
    category: "Rede Social",
    description: "Aplicativo de rede social com feed em tempo real, stories, sistema de chat e notificações push.",
    tags: ["React Native", "Socket.io", "Redis"],
    color: "from-violet-600 to-purple-500",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    highlight: true,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-zinc-900 py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">Projetos</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-white">Portfólio Selecionado</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Soluções reais entregues para clientes reais. Do MVP à escala.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group card-hover rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-brand-600/50 bg-zinc-800/40 transition-all duration-300"
            >
              {/* Topo com gradiente + ícone */}
              <div className={`relative h-44 bg-linear-to-br ${p.color} p-6 flex flex-col justify-between overflow-hidden`}>
                {/* Padrão de fundo decorativo */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-32 h-32 rounded-full border-2 border-white/40" />
                  <div className="absolute top-8 right-8 w-20 h-20 rounded-full border border-white/30" />
                  <div className="absolute -bottom-4 -left-4 w-28 h-28 rounded-full border border-white/20" />
                </div>

                {/* Badge categoria */}
                <span className="self-start px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-sm border border-white/20">
                  {p.category}
                </span>

                {/* Ícone */}
                <div className="text-white/90">
                  {p.icon}
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{p.description}</p>

                {/* Tags de tecnologia */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-zinc-700/60 text-zinc-300 text-xs font-medium border border-zinc-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Linha decorativa hover */}
                <div className="mt-5 h-px w-0 group-hover:w-full bg-linear-to-r from-brand-600 to-brand-400 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-brand-600/50 text-brand-400 font-semibold text-sm hover:bg-brand-600/10 hover:border-brand-500 transition-all duration-300"
          >
            Tem um projeto em mente? Vamos conversar
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
