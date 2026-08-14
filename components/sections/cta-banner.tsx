import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { OrnamentDivider, SectionSeam } from "@/components/ui/decor";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Image
        src="/jaguar/blana-jaguar.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 [background:radial-gradient(55%_75%_at_50%_50%,rgba(20,14,8,0.72)_0%,rgba(20,14,8,0.4)_60%,rgba(20,14,8,0.05)_88%)]"
      />
      <SectionSeam color="var(--background)" className="h-28 sm:h-36" />
      <SectionSeam color="var(--color-ink)" position="bottom" className="h-28 sm:h-36" />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <OrnamentDivider tone="ivory" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="max-w-2xl font-display text-4xl italic leading-[1.15] tracking-tight text-ivory drop-shadow-sm sm:text-5xl">
            Cel mai frumos set al tău e la o programare distanță
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <Button href="#contact" size="lg">
            Programează-te
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
