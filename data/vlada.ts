import type { Certification } from "./types";

/**
 * Conținutul secțiunii „Despre Vlada". Editează liber — doar text simplu.
 */
export const vladaProfile = {
  name: "Vlada",
  role: "Fondatoare & Nail Artist",
  portraitSrc: "/vlada/portret.jpg" as string | undefined,
  intro:
    "Un ochi meticulos, o mână sigură și o pasiune constantă pentru arta unghiilor frumoase.",
  paragraphs: [
    "Vlada a pornit acest studio de la o convingere simplă: îngrijirea unghiilor trebuie să fie un ritual de lux, nu o grabă. Ceea ce a început ca o pasiune a devenit o destinație pentru clientele care nu fac compromisuri la calitate.",
    "Fiecare set este lucrat manual, cu atenție la formă, lungime și detalii — de la alungiri pe cartelă la design complicat, inclus gratuit la fiecare comandă, pentru că un set frumos nu ar trebui să coste în plus.",
    "Misiunea Vladei este simplă — unghii sănătoase, finisaj impecabil și o experiență în care fiecare clientă se simte îngrijită. Viziunea ei este un standard nou pentru ce poate fi un studio de unghii: elegant, precis și personal.",
  ],
  philosophy: "\"Fiecare set spune o poveste. Treaba mea e ca a ta să fie spusă frumos.\"",
};

export const certifications: Certification[] = [
  { id: "c1", title: "Specializare Alungire pe Cartelă Tips" },
  { id: "c2", title: "Design & Nail Art Avansat" },
  { id: "c3", title: "Standarde de Igienă & Sterilizare" },
];

export const stats = [
  { id: "s1", value: "2+", label: "Ani Experiență" },
  { id: "s2", value: "1.500+", label: "Cliente Fericite" },
  { id: "s3", value: "100%", label: "Design Inclus Gratuit" },
  { id: "s4", value: "5.0", label: "Rating Mediu" },
];
