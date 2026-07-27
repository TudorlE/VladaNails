"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GradientBlob } from "@/components/ui/decor";
import { PolishSwatch } from "@/components/ui/polish-swatch";
import { stats } from "@/data/vlada";
import { categoryColors } from "@/data/category-colors";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay, ease: EASE },
  }),
};

const swatchOrder = ["manicure", "pedicure", "nail art", "design", "extensions"] as const;

export function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [8, -8]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-8, 8]), { stiffness: 150, damping: 18 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = visualRef.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <section className="relative isolate overflow-hidden bg-background pb-20 pt-36 sm:pb-28 sm:pt-44">
      <GradientBlob tone="peach" className="left-[-10%] top-[8%] size-[28rem]" />
      <GradientBlob tone="gold" className="right-[-8%] top-[35%] size-[24rem]" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.4] [background-image:radial-gradient(rgba(198,161,91,0.18)_1px,transparent_1px)] [background-size:28px_28px]"
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="flex flex-col items-start gap-8">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-3 rounded-full border border-gold/30 bg-surface/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-gold shadow-sm"
          >
            <Sparkles className="size-3.5" />
            Luxury Nail Studio
          </motion.span>

          <motion.h1
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-6xl leading-[1.02] tracking-tight text-foreground sm:text-7xl lg:text-[5.5rem]"
          >
            Luxury Nails
            <br />
            <span className="italic text-gradient-gold">&amp; Pedicure</span>
          </motion.h1>

          <motion.p
            custom={0.22}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-md text-base leading-relaxed text-muted sm:text-lg"
          >
            An elevated nail care ritual — meticulous technique, premium products, and an
            atmosphere designed for you to simply unwind.
          </motion.p>

          <motion.div
            custom={0.34}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#contact" size="lg">
              Book Appointment
            </Button>
            <Button href="#gallery" size="lg" variant="secondary" icon={false}>
              View Gallery
            </Button>
          </motion.div>

          <motion.div
            custom={0.46}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="grid w-full grid-cols-3 gap-6 border-t border-border-subtle pt-8 sm:max-w-md"
          >
            {stats.slice(0, 3).map((stat) => (
              <div key={stat.id} className="flex flex-col gap-1">
                <span className="font-display text-3xl text-foreground">{stat.value}</span>
                <span className="text-xs uppercase tracking-wide text-muted">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          ref={visualRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 1200 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative h-full w-full"
          >
            <div className="clip-nail absolute inset-0 bg-gradient-to-br from-beige via-peach/70 to-coral/50 shadow-luxury-lg" />
            <div className="clip-nail absolute inset-[10px] shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.55)]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <div className="flex items-center gap-2.5">
                {swatchOrder.map((key, index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.08, duration: 0.5 }}
                  >
                    <PolishSwatch hex={categoryColors[key].hex} size="md" />
                  </motion.div>
                ))}
              </div>
              <span className="font-display text-xl italic text-ink/45">Your shade, perfected</span>
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateZ(40px)" }}
              className="glass-panel absolute -left-8 top-10 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-luxury"
            >
              <div className="flex size-9 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Star className="size-4 fill-gold" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-medium text-foreground">5.0 Rating</p>
                <p className="text-xs text-muted">3,000+ clients</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              style={{ transform: "translateZ(40px)" }}
              className="glass-panel absolute -right-6 bottom-16 flex flex-col gap-1 rounded-2xl px-5 py-4 shadow-luxury"
            >
              <p className="font-display text-xl text-foreground">8+ Years</p>
              <p className="text-xs uppercase tracking-wide text-muted">of Craftsmanship</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
