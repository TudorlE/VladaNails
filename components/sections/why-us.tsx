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
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(198,161,91,0.9)_1px,transparent_1px)] [background-size:26px_26px]"
      />
      <Container className="relative flex flex-col items-center gap-16">
        <SectionTitle
          eyebrow="Why Clients Choose Us"
          title="Excellence, in every detail"
          description="A studio built on discipline, hygiene, and genuine care — the reasons our clients keep coming back."
          className="[&_h2]:text-ivory [&_p]:text-ivory/60"
        />

        <RevealGroup className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => (
            <motion.div
              key={item.id}
              variants={revealItem}
              whileHover={{ y: -6 }}
              className="flex flex-col gap-4 rounded-3xl border border-ivory/10 bg-ivory/[0.04] p-7 transition-colors duration-500 hover:border-gold/40"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                <DynamicIcon name={item.icon} className="size-5" />
              </div>
              <h3 className="font-display text-xl text-ivory">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ivory/60">{item.description}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
