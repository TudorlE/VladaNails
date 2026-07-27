import { Sparkle } from "lucide-react";
import { marqueeItems } from "@/data/marquee";

export function MarqueeStrip() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden border-y border-gold/25 bg-ink py-4">
      <div className="flex w-max animate-marquee items-center gap-10 will-change-transform">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-10 pr-10">
            {items.map((item, index) => (
              <span
                key={`${copy}-${item}-${index}`}
                className="flex items-center gap-10 whitespace-nowrap"
              >
                <span className="font-display text-lg italic tracking-wide text-ivory/85 sm:text-xl">
                  {item}
                </span>
                <Sparkle className="size-3 shrink-0 text-gold" aria-hidden />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
