"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import type { GalleryImage } from "@/data/types";
import { cn } from "@/lib/utils";
import { getCategoryColor } from "@/data/category-colors";
import { NailIcon } from "@/components/ui/nail-icon";

const spanClasses: Record<NonNullable<GalleryImage["span"]>, string> = {
  tall: "aspect-[3/4.4]",
  wide: "aspect-[4/3]",
  normal: "aspect-[3/3.6]",
};

export function GalleryTile({
  image,
  index,
  onOpen,
}: {
  image: GalleryImage;
  index: number;
  onOpen: () => void;
}) {
  const color = getCategoryColor(image.category);

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative mb-6 block w-full cursor-zoom-in overflow-hidden rounded-3xl border border-border-subtle bg-surface shadow-luxury",
        spanClasses[image.span ?? "normal"],
      )}
    >
      {image.src ? (
        <Image
          src={image.src}
          alt={image.title}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      ) : (
        <div
          className="relative flex h-full w-full flex-col items-center justify-center gap-4 transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            background: `linear-gradient(155deg, ${color.hex}14, var(--surface-muted) 55%, ${color.hex}22)`,
          }}
        >
          <NailIcon fill={color.hex} className="h-16 w-12 drop-shadow-sm" />
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: color.hex }}>
            {image.category}
          </span>
        </div>
      )}

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gold">
          {image.category}
        </span>
        <span className="font-display text-lg text-white">{image.title}</span>
      </div>

      <div className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-md backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
        <Maximize2 className="size-4" />
      </div>
    </motion.button>
  );
}
