"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks } from "@/data/nav";
import { business } from "@/data/business";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6",
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500",
            scrolled ? "glass-panel shadow-luxury" : "bg-transparent",
          )}
        >
          <Link href="/" className="font-display text-2xl tracking-wide text-foreground">
            {business.name.split(" ")[0]}{" "}
            <span className="text-gold">{business.name.split(" ").slice(1).join(" ")}</span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-[0.12em] text-foreground/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button href="#contact" size="md" icon={false}>
              Book Appointment
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex size-10 items-center justify-center rounded-full border border-ink/15 text-foreground dark:border-foreground/15"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-6 mt-3 rounded-3xl border border-border-subtle bg-surface px-6 py-8 shadow-luxury-lg lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-foreground transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <Button href="#contact" size="lg" className="mt-2 w-full" onClick={() => setOpen(false)}>
                Book Appointment
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
