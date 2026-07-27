import type { BusinessInfo } from "./types";

/**
 * Single source of truth for salon contact details, hours, and booking link.
 * Edit this file to update information shown across the entire site.
 */
export const business: BusinessInfo = {
  name: "Vlada Nails",
  tagline: "Luxury Nail Studio",
  phone: "+40712345678",
  phoneDisplay: "+40 712 345 678",
  email: "hello@vladanails.com",
  address: "12 Calea Victoriei, Bucharest, Romania",
  addressShort: "Calea Victoriei 12, Bucharest",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.9!2d26.0963!3d44.4377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI2JzE1LjciTiAyNsKwMDUnNDYuNyJF!5e0!3m2!1sen!2sro!4v1700000000000",
  mapLinkUrl: "https://maps.google.com/?q=Calea+Victoriei+12+Bucharest",
  bookingUrl: "#contact",
  hours: [
    { day: "Monday", hours: "10:00 – 19:00" },
    { day: "Tuesday", hours: "10:00 – 19:00" },
    { day: "Wednesday", hours: "10:00 – 19:00" },
    { day: "Thursday", hours: "10:00 – 20:00" },
    { day: "Friday", hours: "10:00 – 20:00" },
    { day: "Saturday", hours: "10:00 – 18:00" },
    { day: "Sunday", hours: "Closed" },
  ],
};
