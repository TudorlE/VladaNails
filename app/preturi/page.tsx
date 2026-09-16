import type { Metadata } from "next";
import { Pricing } from "@/components/sections/pricing";

export const metadata: Metadata = {
  title: "Prețuri",
  description: "Lista completă de prețuri Vlada Nails — transparente, în lei.",
};

export default function PreturiPage() {
  return <Pricing />;
}
