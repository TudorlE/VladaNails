"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { faqs } from "@/data/faq";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className="relative bg-surface-muted/40 py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-14">
        <SectionTitle
          eyebrow="Bine de Știut"
          title="Întrebări frecvente"
          description="Tot ce ai vrea să știi înainte de vizită. Nu găsești răspunsul? Scrie-ne direct."
        />

        <div className="w-full max-w-2xl divide-y divide-border-subtle rounded-[2rem] border border-border-subtle bg-surface shadow-luxury">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <Reveal key={faq.id} delay={index * 0.04} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-9"
                >
                  <span className="font-display text-lg text-foreground sm:text-xl">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform duration-400",
                      isOpen && "rotate-45 bg-gold text-ink",
                    )}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-7 text-sm leading-relaxed text-muted sm:px-9">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
