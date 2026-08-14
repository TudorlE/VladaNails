import type { BusinessInfo } from "./types";

/**
 * Single source of truth for salon contact details, hours, and booking link.
 * Edit this file to update information shown across the entire site.
 *
 * Adresa exactă (stradă, număr) e un placeholder — actualizeaz-o cu locația
 * reală a studioului pentru ca harta din secțiunea de contact să fie corectă.
 */
export const business: BusinessInfo = {
  name: "Vlada Nails",
  tagline: "Studio Premium de Unghii",
  phone: "+37361028397",
  phoneDisplay: "+373 610 28 397",
  email: "vlada.tturcanu@gmail.com",
  address: "Chișinău, Republica Moldova",
  addressShort: "Chișinău, Moldova",
  mapEmbedUrl: "https://www.google.com/maps?q=47.055519,28.850413&z=16&output=embed",
  mapLinkUrl: "https://maps.app.goo.gl/CWgCbiYQYyn3YSHK7",
  bookingUrl: "#contact",
  hours: [
    { day: "Luni", hours: "10:00 – 19:00" },
    { day: "Marți", hours: "10:00 – 19:00" },
    { day: "Miercuri", hours: "10:00 – 19:00" },
    { day: "Joi", hours: "10:00 – 20:00" },
    { day: "Vineri", hours: "10:00 – 20:00" },
    { day: "Sâmbătă", hours: "10:00 – 18:00" },
    { day: "Duminică", hours: "Închis" },
  ],
};
