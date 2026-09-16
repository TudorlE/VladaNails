import { Hero } from "@/components/sections/hero";
import { Testimonials } from "@/components/sections/testimonials";
import { Booking } from "@/components/sections/booking";
import { Products } from "@/components/sections/products";
import { FAQ } from "@/components/sections/faq";
import { MapSection } from "@/components/sections/map";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Booking />
      <Products />
      <FAQ />
      <MapSection />
    </>
  );
}
