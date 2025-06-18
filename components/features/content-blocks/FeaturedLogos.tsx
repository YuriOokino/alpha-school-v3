import Image from "next/image";
import { pressLogos } from "@/content/press-logos";

export default function FeaturedLogos() {
  // Duplicate the logos for seamless infinite scroll
  const logos = pressLogos.concat(pressLogos);
  return (
    <div className="relative w-[60%] mx-auto overflow-hidden">
      <div className="flex animate-scroll-infinite gap-[4rem] w-fit" style={{ animation: 'scroll 30s linear infinite' }}>
        {logos.map((logo, i) => (
          <a
            key={i}
            href={logo.href}
            aria-label={logo.aria}
            style={{ minWidth: logo.minWidth }}
            className="flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.minWidth}
              height={40}
              style={{ height: 40, width: 'auto', objectFit: 'contain' }}
            />
          </a>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
} 