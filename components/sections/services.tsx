"use client";

import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { SectionSeam } from "@/components/ui/decor";
import { Reveal } from "@/components/ui/reveal";
import { PaintButton } from "@/components/ui/paint-button";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="theme-paint relative bg-background py-24 sm:py-32">
      <SectionSeam color="var(--background)" />
      <Container className="flex flex-col items-center gap-14">
        <SectionTitle
          eyebrow="Servicii Semnătură"
          title="Lucrate pentru fiecare ocazie"
          description="De la o corecție rapidă la un design complicat lucrat manual, fiecare serviciu primește aceeași precizie."
        />

        {/* "Menu card" inspired by paintnailslondon.co.uk's price list: a solid
            maroon card with a thin sage inner frame, each service as a
            name/price row on one baseline, divided by a hairline rule. */}
        <Reveal className="w-full max-w-xl">
          <div className="relative overflow-hidden bg-[#6c3231] p-6 shadow-luxury sm:p-8">
            <div className="flex flex-col border border-[#B4BFB4]/70 p-6 sm:p-8">
              {services.map((service, index) => (
                <div key={service.id} className="flex flex-col gap-2">
                  {index > 0 ? <hr className="mb-5 mt-1 border-t border-[#B4BFB4]/40" /> : null}
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl text-[#fef9ed] sm:text-2xl">
                      {service.title}
                      {service.featured ? (
                        <span className="ml-2.5 align-middle text-[10px] font-sans font-medium uppercase tracking-[0.14em] text-[#B4BFB4]">
                          Popular
                        </span>
                      ) : null}
                    </h3>
                    <span className="whitespace-nowrap font-display text-xl text-[#fef9ed] sm:text-2xl">
                      {service.displayPrice
                        ? service.displayPrice
                        : `${service.priceLabel ? `${service.priceLabel} ` : ""}${service.price} lei`}
                    </span>
                  </div>
                  <p className="text-sm font-light leading-relaxed text-[#efe4d3]">
                    {service.description} — {service.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <PaintButton href="/preturi" variant="ghost">
          Vezi Lista Completă de Prețuri
        </PaintButton>
      </Container>
    </section>
  );
}
