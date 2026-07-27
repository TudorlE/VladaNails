import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SvgDefs } from "@/components/ui/svg-defs";
import { business } from "@/data/business";
import { siteMeta } from "@/data/about";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: siteMeta.title,
    template: siteMeta.titleTemplate,
  },
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  authors: [{ name: business.name }],
  creator: business.name,
  openGraph: {
    type: "website",
    locale: siteMeta.locale,
    url: siteMeta.url,
    siteName: siteMeta.siteName,
    title: siteMeta.title,
    description: siteMeta.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteMeta.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: siteMeta.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: business.name,
  description: siteMeta.description,
  image: `${siteMeta.url}/og-image.jpg`,
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address,
  },
  url: siteMeta.url,
  priceRange: "$$$",
  openingHoursSpecification: business.hours
    .filter((entry) => entry.hours !== "Closed")
    .map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.day,
      opens: entry.hours.split(" – ")[0],
      closes: entry.hours.split(" – ")[1],
    })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SvgDefs />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="grain-overlay" aria-hidden />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
