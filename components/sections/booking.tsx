"use client";

import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { SectionSeam } from "@/components/ui/decor";
import { PaintButton } from "@/components/ui/paint-button";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/social-icon";
import { BookingCalendar } from "@/components/booking/booking-calendar";
import { business } from "@/data/business";
import { socials } from "@/data/socials";

export function Booking() {
  return (
    <section id="booking" className="theme-paint relative bg-background py-24 sm:py-32">
      {/* Literal light background, not var(--background): this section is
          .theme-paint-scoped, so a var() reference here would resolve against
          its own cream override rather than the preceding Testimonials section. */}
      <SectionSeam color="#f8f4ee" />
      <Container className="flex flex-col items-center gap-14">
        <SectionTitle
          eyebrow="Rezervări"
          title="Rezervă-ți Programarea"
          description="Alege data și ora direct din calendar, sau scrie-ne printr-una din metodele de mai jos."
        />

        <Reveal className="w-full">
          <BookingCalendar />
        </Reveal>

        <Reveal
          direction="up"
          delay={0.1}
          className="flex w-full flex-col items-center gap-6 border-t border-border-subtle pt-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <ContactRow icon={Phone} value={business.phoneDisplay} href={`tel:${business.phone}`} />
            <ContactRow icon={Mail} value={business.email} href={`mailto:${business.email}`} />
          </div>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex size-10 items-center justify-center border border-border-subtle text-foreground transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <SocialIcon icon={social.icon} className="size-4" />
              </a>
            ))}
          </div>

          <PaintButton href={`tel:${business.phone}`} variant="ghost">
            Sună Acum
          </PaintButton>
        </Reveal>
      </Container>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  href: string;
}) {
  return (
    <a href={href} className="group flex items-center gap-3">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
        <Icon className="size-4" />
      </div>
      <span className="text-sm text-foreground transition-colors group-hover:text-gold">
        {value}
      </span>
    </a>
  );
}
