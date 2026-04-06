const stats = [
  {
    value: "98%",
    label: "Satisfação dos clientes",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  {
    value: "50+",
    label: "Projetos entregues",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    value: "15+",
    label: "Engenheiros no time",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    value: "5+",
    label: "Anos de mercado",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-zinc-900 py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">Sobre nós</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-white">
            Código limpo. Resultados reais.
          </h2>
          <p className="mt-6 text-zinc-400 leading-relaxed text-base">
            A Magents nasceu da paixão por transformar problemas complexos em software simples e eficiente.
            Nosso time senior combina experiência técnica com entendimento de negócios para entregar
            soluções que realmente fazem a diferença.
          </p>
          <p className="mt-4 text-zinc-400 leading-relaxed text-base">
            Trabalhamos com metodologias ágeis, comunicação transparente e entregas incrementais.
            Cada projeto recebe dedicação total da nossa equipe, do planejamento ao deploy e além.
          </p>

          {/* Stats com ícones */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3 glass rounded-xl p-4 border border-zinc-800/60">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-brand-600 to-brand-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-brand-600/20">
                  {s.icon}
                </div>
                <div>
                  <div className="text-xl font-bold text-white leading-none">{s.value}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual - code snippet card */}
        <div className="relative">
          <div className="glass rounded-2xl overflow-hidden border border-zinc-700/40">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-zinc-700/50 bg-zinc-800/30">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-zinc-500 font-mono">app.ts</span>
            </div>
            <pre className="p-6 text-xs sm:text-sm font-mono text-zinc-300 leading-relaxed overflow-x-auto">
{`// Construímos software com propósito

const project = await Magents.create({
  name: "Seu Próximo Projeto",
  stack: ["React", "Node.js", "AWS"],
  methodology: "Agile",
});

const result = await project.deploy();
// → Success! 98% satisfaction rate`}
            </pre>
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-600 rounded-2xl opacity-20 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
