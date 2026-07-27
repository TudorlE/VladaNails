import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Pricing } from "@/components/sections/pricing";
import { Gallery } from "@/components/sections/gallery";
import { CTABanner } from "@/components/sections/cta-banner";
import { WhyUs } from "@/components/sections/why-us";
import { MeetVlada } from "@/components/sections/meet-vlada";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Gallery />
      <CTABanner />
      <WhyUs />
      <MeetVlada />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
