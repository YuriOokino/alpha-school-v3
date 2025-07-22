import Image from "next/image";
import { pressLogos } from "@/content/press-logos";

export default function FeaturedLogos() {
  // Duplicate the logos multiple times for seamless infinite scroll
  const logos = [...pressLogos, ...pressLogos, ...pressLogos, ...pressLogos];
  return (
    <div className="relative w-[100%] mx-auto overflow-hidden">
      <div className="flex md:gap-[4rem] gap-[2rem] w-fit animate-scroll">
        {logos.map((logo, i) => (
          <a
            key={i}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
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
              className="filter invert opacity-50 transition-all duration-200 hover:opacity-80"
            />
          </a>
        ))}
      </div>

    </div>
  );
} 