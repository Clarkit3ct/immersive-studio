import type { Metadata } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { brand } from "@/lib/brand";
import { HOME_TITLE, OG_IMAGE, SITE_DESCRIPTION, SITE_URL } from "@/lib/seo";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["200", "400"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: brand.name,
    template: `%s | ${brand.name}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: brand.name,
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image" },
};

// Google Analytics loads only when NEXT_PUBLIC_GA_ID is set in Vercel
// (Project → Settings → Environment Variables, then redeploy). Until then
// the site ships no analytics tag at all.
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${instrumentSerif.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-off-white text-onyx font-sans">
        {children}
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
