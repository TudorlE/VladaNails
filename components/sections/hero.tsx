"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { PaintButton } from "@/components/ui/paint-button";
import { business } from "@/data/business";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay, ease: EASE },
  }),
};

export function Hero() {
  return (
    <section className="theme-paint relative bg-background pb-16 pt-24 sm:pb-20 sm:pt-28">
      {/* Fixed-height full-bleed photo banner with the text overlaid
          bottom-left — mirrors paintnailslondon.co.uk's actual hero
          (#brxe-uleypb / #brxe-vastxj / #brxe-ssdyxa), not a stacked
          text-then-image layout. */}
      <div className="relative mx-auto h-[420px] w-[95%] overflow-hidden sm:h-[500px] lg:h-[70vh]">
        <Image
          src="/jaguar/blana-jaguar.jpg"
          alt="Model de unghii print jaguar, semnătura Vlada Nails"
          fill
          sizes="95vw"
          className="object-cover"
          priority
        />
        {/* PAINT leans on a text-shadow alone for legibility since their photo
            is calm; our jaguar-print texture is busier, so it gets a soft
            bottom scrim too. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-4 p-6 sm:p-10 lg:p-14">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-xs font-medium uppercase tracking-[0.25em] text-white/90"
          >
            {business.addressShort}
          </motion.span>

          <motion.h1
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-4xl leading-[1.08] tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-[4rem]"
          >
            Unghii de Lux, <span className="italic">Fără Compromis</span>
          </motion.h1>

          <motion.p
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-[450px] text-sm leading-relaxed text-white/85 sm:text-base"
          >
            Alungire pe cartelă lucrată manual, cu design complicat inclus gratuit la fiecare set —
            tehnică impecabilă, într-o atmosferă în care te poți relaxa complet.
          </motion.p>

          <motion.div
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-1 flex flex-wrap items-center gap-3.5"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
