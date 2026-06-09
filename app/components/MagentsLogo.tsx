import Image from "next/image";

// aspect ratio: 584 × 124
interface Props {
  height?: number;
  className?: string;
}

export default function MagentsLogo({ height = 28, className = "" }: Props) {
  const width = Math.round(height * (584 / 124));
  return (
    <Image
      src="/magents-logotipo-gradiente.svg"
      alt="Magents"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
