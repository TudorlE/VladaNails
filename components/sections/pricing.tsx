"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { SectionSeam } from "@/components/ui/decor";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pricing } from "@/data/pricing";
import { getCategoryColor } from "@/data/category-colors";
import { PolishSwatch } from "@/components/ui/polish-swatch";

export function Pricing() {
  const [activeId, setActiveId] = useState(pricing[0].id);
  const activeGroup = pricing.find((group) => group.id === activeId) ?? pricing[0];
  const activeColor = getCategoryColor(activeGroup.id);

  return (
    <section id="pricing" className="relative bg-surface-muted/40 py-24 sm:py-32">
      <SectionSeam color="var(--background)" />
      <Container className="flex flex-col items-center gap-14">
        <SectionTitle
          eyebrow="Lista de Prețuri"
          title="Investiție în mâini frumoase"
          description="Prețuri transparente, în lei. Designul complicat este mereu inclus gratuit — plătești doar mărimea alungirii."
        />

        <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface p-1.5 shadow-sm">
          {pricing.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveId(group.id)}
              className={cn(
                "relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium uppercase tracking-wide transition-colors duration-300",
                activeId === group.id ? "text-ink" : "text-muted hover:text-foreground",
              )}
            >
              {activeId === group.id ? (
                <motion.span
                  layoutId="pricing-pill"
                  className="absolute inset-0 rounded-full bg-gold"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              ) : null}
              <PolishSwatch hex={getCategoryColor(group.id).hex} size="xs" className="relative" />
              <span className="relative">{group.title}</span>
            </button>
          ))}
        </div>

        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[2rem] border border-border-subtle bg-surface p-8 shadow-luxury sm:p-12"
            >
              <span
                aria-hidden
                className={cn("absolute inset-x-0 top-0 h-1.5", activeColor.bgSolid)}
              />
              <p className="mb-8 text-sm text-muted">{activeGroup.description}</p>
              <ul className="flex flex-col gap-6">
                {activeGroup.items.map((item) => (
                  <li key={item.name} className="flex items-baseline gap-3">
                    <span className="whitespace-nowrap font-display text-lg text-foreground">
                      {item.name}
                    </span>
                    <span className="h-px flex-1 translate-y-[-4px] border-b border-dotted border-ink/25 dark:border-foreground/25" />
                    <span className="whitespace-nowrap text-sm text-muted">{item.duration}</span>
                    <span className={cn("whitespace-nowrap font-display text-lg", activeColor.text)}>
                      {item.displayPrice
                        ? item.displayPrice
                        : `${item.priceLabel ? `${item.priceLabel} ` : ""}${item.price} lei`}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <Button href="#contact" size="lg">
          Programează-te
        </Button>
      </Container>
    </section>
  );
}
