/**
 * Marquee infinito em CSS puro (sem JS): conteúdo duplicado + translateX(-50%).
 * Pausa no hover. `reverse` inverte o sentido.
 */
export default function Marquee({
  items,
  reverse = false,
  duration = 30,
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
}) {
  const row = (
    <div className="flex items-center gap-4 pr-4 shrink-0">
      {items.map((item) => (
        <span
          key={item}
          className="px-5 py-2.5 rounded-full glass border border-zinc-800/60 text-sm text-zinc-300 whitespace-nowrap font-medium hover:border-brand-500/50 hover:text-brand-300 transition-colors"
        >
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="group/marquee relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div
        className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused]"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {row}
        {row}
      </div>
    </div>
  );
}
