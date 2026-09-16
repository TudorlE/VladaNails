"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { SectionSeam } from "@/components/ui/decor";
import { Reveal } from "@/components/ui/reveal";
import { business } from "@/data/business";

export function MapSection() {
  return (
    <section className="relative bg-surface-muted/40 py-24 sm:py-32">
      <SectionSeam color="var(--surface-muted-blend)" />
      <Container className="flex flex-col items-center gap-14">
        <SectionTitle
          eyebrow="Locație"
          title="Cum Ne Găsești"
          description={business.address}
        />

        <Reveal className="relative aspect-[21/9] w-full overflow-hidden rounded-[2rem] border border-border-subtle shadow-luxury sm:aspect-[3/1]">
          <iframe
            title={`Locația ${business.name}`}
            src={business.mapEmbedUrl}
            className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <motion.a
            href={business.mapLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass-panel absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 rounded-2xl px-5 py-4 shadow-luxury sm:right-auto sm:w-auto"
          >
            <div className="flex items-center gap-3">
              <MapPin className="size-4 text-gold" />
              <span className="text-sm font-medium text-foreground">{business.addressShort}</span>
            </div>
            <span className="text-xs font-medium uppercase tracking-wide text-gold">Direcții</span>
          </motion.a>
        </Reveal>
      </Container>
    </section>
  );
}
