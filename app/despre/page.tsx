import type { Metadata } from "next";
import { MeetVlada } from "@/components/sections/meet-vlada";

export const metadata: Metadata = {
  title: "Despre Noi",
  description: "Cine e Vlada — povestea din spatele Vlada Nails.",
};

export default function DesprePage() {
  return <MeetVlada />;
}
