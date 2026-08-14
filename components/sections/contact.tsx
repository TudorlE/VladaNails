"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { SectionSeam } from "@/components/ui/decor";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/social-icon";
import { BookingCalendar } from "@/components/booking/booking-calendar";
import { business } from "@/data/business";
import { socials } from "@/data/socials";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <SectionSeam color="var(--surface-muted-blend)" />
      <Container className="flex flex-col items-center gap-14">
        <SectionTitle
          eyebrow="Contactează-ne"
          title="Rezervă-ți programarea"
          description="Alege data și ora direct din calendar, sau scrie-ne printr-una din metodele de mai jos."
        />

        <Reveal className="w-full">
          <BookingCalendar />
        </Reveal>

        <div className="grid w-full gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal direction="right" className="flex flex-col gap-6">
            <div className="flex flex-col gap-5 rounded-[2rem] border border-border-subtle bg-surface p-8 shadow-luxury sm:p-10">
              <ContactRow icon={Phone} label="Telefon" value={business.phoneDisplay} href={`tel:${business.phone}`} />
              <ContactRow icon={Mail} label="Email" value={business.email} href={`mailto:${business.email}`} />
              <ContactRow
                icon={MapPin}
                label="Adresa Studioului"
                value={business.address}
                href={business.mapLinkUrl}
                external
              />

              <div className="flex items-center gap-3 border-t border-border-subtle pt-5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex size-10 items-center justify-center rounded-full border border-ink/15 text-foreground transition-colors duration-300 hover:border-gold hover:text-gold dark:border-foreground/15"
                  >
                    <SocialIcon icon={social.icon} className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <Button href={`tel:${business.phone}`} size="lg" className="w-full">
              Programează-te Acum
            </Button>
          </Reveal>

          <Reveal delay={0.1} className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-border-subtle shadow-luxury">
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
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-panel absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 rounded-2xl px-5 py-4 shadow-luxury sm:left-6 sm:right-auto sm:w-auto"
            >
              <div className="flex items-center gap-3">
                <MapPin className="size-4 text-gold" />
                <span className="text-sm font-medium text-foreground">
                  {business.addressShort}
                </span>
              </div>
            </motion.a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4"
    >
      <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
        <Icon className="size-4" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-medium uppercase tracking-wide text-muted">{label}</span>
        <span className="text-sm text-foreground transition-colors group-hover:text-gold">
          {value}
        </span>
      </div>
    </a>
  );
}
