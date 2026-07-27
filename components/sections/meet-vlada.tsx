"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Quote, User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";
import { GradientBlob } from "@/components/ui/decor";
import { vladaProfile, certifications, stats } from "@/data/vlada";

export function MeetVlada() {
  return (
    <section id="vlada" className="relative overflow-hidden bg-surface-muted/40 py-24 sm:py-32">
      <GradientBlob tone="coral" className="left-[-8%] top-[15%] size-96 opacity-60" />

      <Container className="grid items-start gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal direction="right" className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="clip-nail relative aspect-[4/5] w-full shadow-luxury-lg">
            {vladaProfile.portraitSrc ? (
              <Image
                src={vladaProfile.portraitSrc}
                alt={vladaProfile.name}
                fill
                sizes="(max-width: 1024px) 90vw, 35vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-beige via-peach/40 to-coral/30">
                <User className="size-10 text-ink/25" strokeWidth={1.2} />
                <span className="font-display text-xl italic text-ink/30">Vlada</span>
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel absolute -bottom-6 left-1/2 flex w-[90%] -translate-x-1/2 items-center gap-3 rounded-2xl px-5 py-4 shadow-luxury"
          >
            <Quote className="size-5 shrink-0 text-gold" />
            <p className="font-display text-sm italic leading-snug text-foreground">
              {vladaProfile.philosophy}
            </p>
          </motion.div>
        </Reveal>

        <div className="flex flex-col gap-6 pt-4">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-8 bg-gold/60" />
              Meet the Artist
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              {vladaProfile.name}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-sm font-medium uppercase tracking-wide text-gold">
              {vladaProfile.role}
            </p>
          </Reveal>

          {vladaProfile.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 12)} delay={0.16 + index * 0.06}>
              <p className="max-w-xl text-base leading-relaxed text-muted">{paragraph}</p>
            </Reveal>
          ))}

          <RevealGroup className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <motion.div key={stat.id} variants={revealItem} className="flex flex-col gap-1">
                <span className="font-display text-2xl text-foreground sm:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-wide text-muted">{stat.label}</span>
              </motion.div>
            ))}
          </RevealGroup>

          <RevealGroup className="mt-4 flex flex-col gap-3">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={revealItem}
                className="flex items-center gap-3 rounded-xl border border-border-subtle bg-surface/70 px-4 py-3"
              >
                <Award className="size-4 shrink-0 text-gold" />
                <span className="flex-1 text-sm text-foreground">{cert.title}</span>
                {cert.year ? <span className="text-xs text-muted">{cert.year}</span> : null}
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
