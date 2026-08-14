"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { SectionSeam } from "@/components/ui/decor";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const goTo = (next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  };

  const active = testimonials[index];

  return (
    <section id="testimonials" className="relative bg-background py-24 sm:py-32">
      <SectionSeam color="var(--surface-muted-blend)" />
      <Container className="flex flex-col items-center gap-14">
        <SectionTitle
          eyebrow="Recenzii"
          title="Ce spun clientele noastre"
          description="Experiențe reale de la femeile care ne încredințează mâinile lor, săptămână de săptămână."
        />

        <div
          className="relative w-full max-w-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="mx-auto mb-4 size-10 text-gold/40" strokeWidth={1.2} />

          <div className="relative min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-6 rounded-[2rem] border border-border-subtle bg-surface px-8 py-10 text-center shadow-luxury sm:px-14 sm:py-12"
              >
                <div className="flex gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-gold/15 font-display text-sm text-gold">
                    {active.initials}
                  </div>
                  <div className="text-left leading-tight">
                    <p className="text-sm font-medium text-foreground">{active.name}</p>
                    {active.service ? (
                      <p className="text-xs text-muted">{active.service}</p>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Recenzia anterioară"
              className="flex size-10 items-center justify-center rounded-full border border-ink/15 text-foreground transition-colors hover:border-gold hover:text-gold dark:border-foreground/15"
            >
              <ChevronLeft className="size-4" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, i) => (
                <button
                  key={testimonial.id}
                  onClick={() => goTo(i)}
                  aria-label={`Vezi recenzia ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    i === index ? "w-6 bg-gold" : "w-1.5 bg-ink/15 dark:bg-foreground/20",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Recenzia următoare"
              className="flex size-10 items-center justify-center rounded-full border border-ink/15 text-foreground transition-colors hover:border-gold hover:text-gold dark:border-foreground/15"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
