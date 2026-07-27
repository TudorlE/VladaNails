"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/data/types";
import { getCategoryColor } from "@/data/category-colors";
import { NailIcon } from "@/components/ui/nail-icon";

export function Lightbox({
  images,
  activeIndex,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const isOpen = activeIndex !== null;
  const image = isOpen ? images[activeIndex] : null;

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, goNext, goPrev, onClose]);

  return (
    <AnimatePresence>
      {isOpen && image ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-md sm:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
          >
            <X className="size-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold sm:left-6"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold sm:right-6"
          >
            <ChevronRight className="size-5" />
          </button>

          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[85vh] w-full max-w-3xl flex-col items-center gap-4"
          >
            <div className="relative aspect-[4/5] w-full max-h-[75vh] overflow-hidden rounded-2xl shadow-luxury-lg">
              {image.src ? (
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="90vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div
                  className="flex h-full w-full flex-col items-center justify-center gap-4"
                  style={{
                    background: `linear-gradient(155deg, ${getCategoryColor(image.category).hex}18, var(--surface-muted) 55%, ${getCategoryColor(image.category).hex}2a)`,
                  }}
                >
                  <NailIcon fill={getCategoryColor(image.category).hex} className="h-24 w-[4.5rem] drop-shadow" />
                  <span className="font-display text-lg italic text-ink/40">{image.title}</span>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gold">
                {image.category}
              </span>
              <span className="font-display text-xl text-white">{image.title}</span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
