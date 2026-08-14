"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";
import { GradientBlob, CornerOrnament, SectionSeam } from "@/components/ui/decor";
import { PolishSwatch } from "@/components/ui/polish-swatch";
import { motion } from "framer-motion";
import { about } from "@/data/about";
import { categoryColors } from "@/data/category-colors";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-surface-muted/40 py-24 sm:py-32">
      <SectionSeam color="var(--background)" />
      <GradientBlob tone="amber" className="right-[-6%] top-[10%] size-80 opacity-70" />

      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="right" className="relative order-2 mx-auto aspect-[4/5] w-full max-w-md lg:order-1">
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-luxury-lg">
            {about.imageSrc ? (
              <Image
                src={about.imageSrc}
                alt="Interiorul studioului Vlada Nails"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            ) : (
              <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 bg-gradient-to-br from-beige via-ivory to-amber/30">
                <CornerOrnament className="left-6 top-6" />
                <CornerOrnament className="bottom-6 right-6 rotate-180" />
                <div className="flex items-center gap-2">
                  {Object.values(categoryColors)
                    .slice(0, 5)
                    .map((c) => (
                      <PolishSwatch key={c.hex} hex={c.hex} size="sm" />
                    ))}
                </div>
                <span className="font-display text-2xl italic text-ink/35">Studioul</span>
              </div>
            )}
          </div>
          <div className="absolute -bottom-8 -left-8 hidden rounded-2xl border border-gold/30 bg-surface px-6 py-5 shadow-luxury sm:block">
            <p className="font-display text-3xl text-gold">100%</p>
            <p className="text-xs uppercase tracking-wide text-muted">Instrumentar Steril</p>
          </div>
        </Reveal>

        <div className="order-1 flex flex-col items-start gap-6 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-8 bg-gold/60" />
              {about.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              {about.title}
            </h2>
          </Reveal>

          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 12)} delay={0.14 + index * 0.06}>
              <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <RevealGroup className="mt-2 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
            {about.points.map((point) => (
              <motion.div
                key={point}
                variants={revealItem}
                className="flex items-center gap-3 rounded-xl border border-border-subtle bg-surface/60 px-4 py-3"
              >
                <CheckCircle2 className="size-4 shrink-0 text-gold" />
                <span className="text-sm text-foreground">{point}</span>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
