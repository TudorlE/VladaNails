import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { OrnamentDivider } from "@/components/ui/decor";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-beige via-peach/50 to-coral/40 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Reveal>
          <OrnamentDivider />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="max-w-2xl font-display text-4xl italic leading-[1.15] tracking-tight text-ink sm:text-5xl">
            Your best manicure yet is one visit away
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <Button href="#contact" size="lg">
            Book Appointment
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
