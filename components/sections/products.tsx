"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";
import { PaintButton } from "@/components/ui/paint-button";

export function Products() {
  return (
    <section className="theme-paint relative bg-background py-24 sm:py-32">
      <Container>
        <Reveal className="relative h-[520px] w-full overflow-hidden sm:h-[600px]">
          <Image
            src="/jaguar/blana-jaguar.jpg"
            alt="Print jaguar, semnătura vizuală Vlada Nails"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
            <h2 className="font-display text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl">
              Produsele <span className="italic">Noastre</span>
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
              Lucrăm cu o selecție atent aleasă de geluri și lacuri premium, potrivite pentru orice
              nuanță pe care ți-o dorești.
              <br />
              <br />
              Igiena nu e negociabilă: fiecare instrument este sterilizat între utilizări.
            </p>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-3.5">
              <PaintButton href="#booking" variant="solid">
                Programează-te
              </PaintButton>
              <PaintButton
                href="/servicii"
                variant="ghost"
                className="border-white/55 text-white hover:text-[#6c3231] before:bg-white"
              >
                Vezi Serviciile
              </PaintButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
