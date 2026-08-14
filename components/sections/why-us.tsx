"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealGroup, revealItem } from "@/components/ui/reveal";
import { DynamicIcon } from "@/components/ui/icon-map";
import { whyUs } from "@/data/why-us";

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ivory sm:py-32">
      <div aria-hidden className="pattern-jaguar absolute inset-0 opacity-[0.06]" />
      <Container className="relative flex flex-col items-center gap-16">
        <SectionTitle
          eyebrow="De Ce Ne Aleg Clientele"
          title="Excelență, în fiecare detaliu"
          description="Un studio construit pe disciplină, igienă și grijă reală — motivele pentru care clientele revin."
          className="[&_h2]:text-ivory [&_p]:text-ivory/60"
        />

        <RevealGroup className="grid w-full grid-cols-1 gap-x-16 lg:grid-cols-2">
          {whyUs.map((item, index) => (
            <motion.div
              key={item.id}
              variants={revealItem}
              className="group flex items-start gap-5 border-b border-ivory/10 py-7 first:pt-0 lg:[&:nth-child(2)]:pt-0"
            >
              <span className="font-display text-2xl leading-none text-gold/35 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                <DynamicIcon name={item.icon} className="size-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-xl text-ivory">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ivory/60">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
