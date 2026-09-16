import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { OrnamentDivider, SectionSeam } from "@/components/ui/decor";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      {/* Subtle jaguar-print motif instead of the actual fur photo — the
          Footer right below already uses that photo, so repeating it here
          read as two duplicate leopard images back to back. */}
      <div aria-hidden className="pattern-jaguar absolute inset-0 opacity-[0.06]" />
      <SectionSeam color="var(--background)" className="h-28 sm:h-36" />
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
          <Button href="/#booking" size="lg">
            Programează-te
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
