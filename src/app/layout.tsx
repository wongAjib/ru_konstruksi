import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import FrontendShell from "@/components/FrontendShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "RU Konstruksi | Membangun Masa Depan",
    template: "%s | RU Konstruksi",
  },
  description: "Raffi Utama Konstruksi menghadirkan solusi konstruksi modern, inovatif, dan profesional untuk bangunan impian Anda. Melayani jasa kontraktor, renovasi rumah, desain interior, dan konstruksi sipil di Bogor dan sekitarnya.",
  keywords: [
    "jasa kontraktor", 
    "renovasi rumah", 
    "desain interior", 
    "konstruksi sipil", 
    "kontraktor Bogor", 
    "RU Konstruksi", 
    "bangun rumah", 
    "kontraktor terpercaya"
  ],
  authors: [{ name: "RU Konstruksi" }],
  creator: "RU Konstruksi",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "RU Konstruksi | Membangun Masa Depan",
    description: "Jasa kontraktor, renovasi rumah, desain interior, dan konstruksi sipil terpercaya di Bogor. Wujudkan bangunan impian Anda bersama kami.",
    siteName: "RU Konstruksi",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "RU Konstruksi - Membangun Masa Depan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RU Konstruksi | Membangun Masa Depan",
    description: "Jasa kontraktor profesional, renovasi rumah, dan desain interior di Bogor.",
    images: ["/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${poppins.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50 selection:bg-accent selection:text-white">
        <FrontendShell>{children}</FrontendShell>
      </body>
    </html>
  );
}
