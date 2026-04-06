const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
      </svg>
    ),
    title: "Desenvolvimento Web",
    description: "Aplicações modernas com React, Next.js e Angular. Dashboards, plataformas e sistemas web robustos e responsivos.",
    gradient: "from-brand-600 to-brand-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-1.5 17.25h.008v.008H12v-.008Z"/>
      </svg>
    ),
    title: "Apps Mobile",
    description: "Aplicativos nativos e cross-platform com React Native e Flutter para iOS e Android com excelente experiência.",
    gradient: "from-brand-500 to-brand-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"/>
      </svg>
    ),
    title: "APIs & Backend",
    description: "APIs RESTful e GraphQL com Node.js, Python e Go. Arquitetura escalável, microsserviços e integrações.",
    gradient: "from-brand-600 to-brand-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"/>
      </svg>
    ),
    title: "UI/UX Design",
    description: "Interfaces centradas no usuário, prototipagem, design systems e testes de usabilidade para melhor conversão.",
    gradient: "from-brand-500 to-brand-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"/>
      </svg>
    ),
    title: "DevOps & Cloud",
    description: "CI/CD, containers, serverless e infraestrutura na nuvem com AWS, GCP e Azure. Deploy seguro e automatizado.",
    gradient: "from-brand-600 to-brand-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/>
      </svg>
    ),
    title: "Consultoria Técnica",
    description: "Análise de código, arquitetura, code review e mentoria. Levamos seu time ao próximo nível técnico.",
    gradient: "from-brand-500 to-brand-400",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-zinc-950 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">O que fazemos</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-white">Nossos Serviços</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Do conceito à produção, cobrimos toda a cadeia de desenvolvimento de software.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group card-hover glass rounded-2xl p-7 border border-zinc-800/60 hover:border-brand-600/40 transition-all duration-300"
            >
              {/* Icon com gradiente */}
              <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${s.gradient} flex items-center justify-center mb-6 shadow-lg shadow-brand-600/20 group-hover:shadow-brand-500/30 transition-shadow duration-300`}>
                <div className="text-white">
                  {s.icon}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-300 transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{s.description}</p>

              {/* Linha decorativa no hover */}
              <div className="mt-5 h-px w-0 group-hover:w-full bg-linear-to-r from-brand-600 to-brand-400 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
