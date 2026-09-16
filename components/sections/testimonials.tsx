"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { SectionSeam } from "@/components/ui/decor";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    // Page by the scroller's own visible width (which is sized to show
    // exactly 3 cards on sm+) rather than one card at a time, so "next"
    // reveals a whole new set of 3 instead of shifting by one.
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="relative bg-background py-24 sm:py-32">
      {/* Literal cream, not var(--background): the preceding Hero is
          .theme-paint-scoped and stays fixed cream regardless of light/dark mode. */}
      <SectionSeam color="#fef9ed" />
      <Container className="flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            align="left"
            eyebrow="Recenzii"
            title="Ce spun clientele noastre"
            description="Experiențe reale de la femeile care ne încredințează mâinile lor, săptămână de săptămână."
            className="max-w-xl"
          />

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Recenzia anterioară"
              className="flex size-11 items-center justify-center rounded-full border border-ink/15 text-foreground transition-colors hover:border-gold hover:text-gold dark:border-foreground/15"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Recenzia următoare"
              className="flex size-11 items-center justify-center rounded-full border border-ink/15 text-foreground transition-colors hover:border-gold hover:text-gold dark:border-foreground/15"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex w-[85%] shrink-0 snap-start flex-col gap-5 rounded-[2rem] border border-border-subtle bg-surface p-7 shadow-luxury sm:w-[calc((100%-3rem)/3)] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <Quote className="size-7 text-gold/40" strokeWidth={1.2} />
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-gold text-gold" />
                  ))}
                </div>
              </div>

              <p className="font-display text-lg leading-relaxed text-foreground sm:text-xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-auto flex items-center gap-3 border-t border-border-subtle pt-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/15 font-display text-sm text-gold">
                  {testimonial.initials}
                </div>
                <div className="text-left leading-tight">
                  <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                  {testimonial.service ? (
                    <p className="text-xs text-muted">{testimonial.service}</p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
