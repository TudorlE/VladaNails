"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { GalleryTile } from "@/components/gallery/gallery-tile";
import { Lightbox } from "@/components/gallery/lightbox";
import { cn } from "@/lib/utils";
import { gallery, galleryCategories } from "@/data/gallery";
import { getCategoryColor } from "@/data/category-colors";
import { PolishSwatch } from "@/components/ui/polish-swatch";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Toate");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "Toate"
        ? gallery
        : gallery.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="gallery" className="relative bg-background py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-14">
        <SectionTitle
          eyebrow="Portofoliu"
          title="Un showroom cu seturi reale"
          description="Lucrări recente din studio — poze noi se adaugă constant. Atinge orice imagine pentru a o vedea în detaliu."
        />

        <div className="flex flex-wrap items-center justify-center gap-2">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "flex items-center gap-2 rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300",
                activeCategory === category
                  ? "border-gold bg-gold text-ink"
                  : "border-border-subtle text-muted hover:border-gold/60 hover:text-gold",
              )}
            >
              {category !== "Toate" ? (
                <PolishSwatch hex={getCategoryColor(category).hex} size="xs" />
              ) : null}
              {category}
            </button>
          ))}
        </div>

        <div className="w-full columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filtered.map((image, index) => (
            <GalleryTile
              key={image.id}
              image={image}
              index={index}
              onOpen={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </Container>

      <Lightbox
        images={filtered}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
