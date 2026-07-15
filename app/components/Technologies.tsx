import Marquee from "./fx/Marquee";
import { Reveal, Stagger, StaggerItem } from "./fx/Reveal";
import TiltCard from "./fx/TiltCard";

const techRow1 = ["React", "Next.js", "TypeScript", "Node.js", "Python", "React Native", "PostgreSQL", "MongoDB"];
const techRow2 = ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Supabase", "Stripe", "Redis", "GraphQL"];

const pillars = [
  {
    title: "Frontend",
    summary: "Interfaces modernas, responsivas e acessíveis com foco em performance e experiência do usuário.",
    gradient: "from-brand-600 to-brand-500",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    title: "Backend & APIs",
    summary: "Serviços escaláveis, seguros e de alta disponibilidade. Arquitetura de microsserviços e APIs bem documentadas.",
    gradient: "from-brand-500 to-brand-400",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: "Mobile",
    summary: "Aplicativos nativos e multiplataforma com experiência fluida para iOS e Android.",
    gradient: "from-brand-600 to-brand-500",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-1.5 17.25h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Cloud & DevOps",
    summary: "Infraestrutura como código, CI/CD automatizado e deploy contínuo com monitoramento em tempo real.",
    gradient: "from-brand-500 to-brand-400",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
  },
  {
    title: "Dados & IA",
    summary: "Bancos de dados relacionais e NoSQL, pipelines de dados e integração com modelos de inteligência artificial.",
    gradient: "from-brand-600 to-brand-500",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: "Segurança",
    summary: "Boas práticas de segurança desde o código até a infraestrutura. Autenticação, criptografia e conformidade.",
    gradient: "from-brand-500 to-brand-400",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

export default function Technologies() {
  return (
    <section id="tecnologias" className="bg-zinc-950 py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <Reveal className="text-center mb-16">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-widest">Nossa Stack</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-white">Tecnologia de Ponta</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Escolhemos as melhores ferramentas para cada desafio — sempre com foco em performance, escalabilidade e manutenibilidade.
          </p>
        </Reveal>

        {/* Ticker de tecnologias */}
        <Reveal className="mb-16 space-y-4">
          <Marquee items={techRow1} duration={34} />
          <Marquee items={techRow2} duration={40} reverse />
        </Reveal>

        {/* Cards */}
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <TiltCard className="group relative h-full glass rounded-2xl p-7 border border-zinc-800/60 hover:border-brand-600/40 transition-colors duration-300">
              <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${p.gradient} flex items-center justify-center text-white mb-5 shadow-lg shadow-brand-600/20`}>
                {p.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-brand-300 transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{p.summary}</p>
              <div className="mt-5 h-px w-0 group-hover:w-full bg-linear-to-r from-brand-600 to-brand-400 transition-all duration-500" />
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Linha de confiança */}
        <Reveal delay={0.2}>
          <p className="mt-14 text-center text-zinc-500 text-sm">
            Independente da stack, entregamos código limpo, bem testado e fácil de manter.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
