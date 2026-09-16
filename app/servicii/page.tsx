import type { Metadata } from "next";
import { Services } from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Servicii",
  description: "Serviciile Vlada Nails — de la o corecție rapidă la un design complicat lucrat manual.",
};

export default function ServiciiPage() {
  return <Services />;
}
