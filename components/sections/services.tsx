"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { SectionSeam } from "@/components/ui/decor";
import { RevealGroup, revealItem } from "@/components/ui/reveal";
import { DynamicIcon } from "@/components/ui/icon-map";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { getCategoryColor } from "@/data/category-colors";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24 sm:py-32">
      <SectionSeam color="var(--surface-muted-blend)" />
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle
          eyebrow="Servicii Semnătură"
          title="Lucrate pentru fiecare ocazie"
          description="De la o corecție rapidă la un design complicat lucrat manual, fiecare serviciu primește aceeași precizie."
        />

        <RevealGroup className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const color = getCategoryColor(service.category);
            return (
              <motion.div
                key={service.id}
                variants={revealItem}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-border-subtle bg-surface p-7 pt-8 shadow-luxury transition-shadow duration-500 hover:shadow-luxury-lg"
              >
                <span
                  aria-hidden
                  className={cn("absolute inset-x-0 top-0 h-1", color.bgSolid)}
                />

                {service.featured ? (
                  <span className="absolute right-5 top-6 rounded-full bg-gold/15 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-gold">
                    Popular
                  </span>
                ) : service.displayPrice === "Gratis" ? (
                  <span className="absolute right-5 top-6 rounded-full bg-wine/12 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-wine">
                    Inclus
                  </span>
                ) : null}

                <div
                  className={cn(
                    "flex size-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110",
                    color.bgSoft,
                    color.text,
                  )}
                >
                  <DynamicIcon name={service.icon} className="size-6" />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-2xl text-foreground">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{service.description}</p>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-border-subtle pt-5">
                  <span className="text-xs uppercase tracking-wide text-muted">
                    {service.duration}
                  </span>
                  <span className={cn("font-display text-xl", color.text)}>
                    {service.displayPrice
                      ? service.displayPrice
                      : `${service.priceLabel ? `${service.priceLabel} ` : ""}${service.price} lei`}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>

        <Button href="#pricing" variant="secondary" size="lg">
          Vezi Lista Completă de Prețuri
        </Button>
      </Container>
    </section>
  );
}
