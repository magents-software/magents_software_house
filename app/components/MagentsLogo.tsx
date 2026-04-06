export default function MagentsLogo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-black tracking-tight text-gradient ${className}`}
      style={{ fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif" }}
    >
      MAGENTS
    </span>
  );
}
