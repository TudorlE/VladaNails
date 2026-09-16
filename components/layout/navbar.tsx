"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PaintButton } from "@/components/ui/paint-button";
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
        "theme-paint fixed inset-x-0 top-0 z-50 border-b bg-background transition-shadow duration-500",
        scrolled ? "border-border-subtle shadow-luxury" : "border-transparent",
      )}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="font-display text-2xl italic tracking-wide text-foreground">
            {business.name.split(" ")[0]}{" "}
            <span className="not-italic text-gold">{business.name.split(" ").slice(1).join(" ")}</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <PaintButton href="/#booking" variant="solid" className="py-3">
              Programează-te
            </PaintButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Comută meniul"
              className="flex size-10 items-center justify-center border border-border-subtle text-foreground"
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
            className="border-t border-border-subtle bg-surface px-6 py-8 shadow-luxury lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl italic text-foreground transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
              <PaintButton
                href="/#booking"
                variant="solid"
                className="mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                Programează-te
              </PaintButton>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
