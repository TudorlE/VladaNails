import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { OrnamentDivider } from "@/components/ui/decor";
import { SocialIcon } from "@/components/ui/social-icon";
import { navLinks } from "@/data/nav";
import { business } from "@/data/business";
import { socials } from "@/data/socials";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/20 text-ivory">
      <Image
        src="/jaguar/blana-jaguar.jpg"
        alt="Textură blană de jaguar"
        fill
        sizes="100vw"
        className="object-cover"
      />

      <Container className="relative py-10 sm:py-14">
        <div className="rounded-[2rem] border border-ivory/10 bg-ink/80 px-6 py-10 shadow-luxury-lg backdrop-blur-md sm:rounded-[2.5rem] sm:px-10 sm:py-14">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div className="flex flex-col gap-5">
              <Link href="/" className="font-display text-3xl tracking-wide text-ivory">
                {business.name.split(" ")[0]}{" "}
                <span className="text-gold">{business.name.split(" ").slice(1).join(" ")}</span>
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-ivory/60">
                {business.tagline} — o experiență de îngrijire a unghiilor unde precizia, igiena și
                arta se întâlnesc.
              </p>
              <div className="flex items-center gap-3 pt-1">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex size-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-all duration-300 hover:border-gold hover:text-gold"
                  >
                    <SocialIcon icon={social.icon} className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Navigare</h3>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-ivory/65 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Vizitează-ne</h3>
              <p className="text-sm leading-relaxed text-ivory/65">{business.address}</p>
              <a
                href={`tel:${business.phone}`}
                className="text-sm text-ivory/65 transition-colors hover:text-ivory"
              >
                {business.phoneDisplay}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="text-sm text-ivory/65 transition-colors hover:text-ivory"
              >
                {business.email}
              </a>
            </div>
          </div>

          <OrnamentDivider tone="ivory" className="my-12 opacity-30" />

          <div className="flex flex-col items-center justify-between gap-4 text-xs text-ivory/45 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {business.name}. Toate drepturile rezervate.
            </p>
            <p>Creat cu grijă pentru mâini frumoase.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
