import type { Metadata } from "next";
import { Gallery } from "@/components/sections/gallery";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Portofoliu Vlada Nails — lucrări recente din studio.",
};

export default function GaleriePage() {
  return (
    <>
      <Gallery />
      <CTABanner />
    </>
  );
}
