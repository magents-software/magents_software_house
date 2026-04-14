import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Intro from "./components/Intro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://magents.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Magents | Software House",
    template: "%s | Magents",
  },
  description:
    "Magents é uma software house especializada em desenvolvimento web, mobile e APIs. Transformamos ideias em soluções digitais de alto impacto.",
  keywords: [
    "software house",
    "desenvolvimento web",
    "aplicativo mobile",
    "desenvolvimento de software",
    "API",
    "Next.js",
    "React",
    "Magents",
  ],
  authors: [{ name: "Magents", url: BASE_URL }],
  creator: "Magents",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Magents Software House",
    title: "Magents | Software House",
    description:
      "Software house especializada em desenvolvimento web, mobile e APIs. Transformamos ideias em soluções digitais de alto impacto.",
    images: [
      {
        url: "/assets/logo.png",
        width: 400,
        height: 400,
        alt: "Magents Software House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magents | Software House",
    description:
      "Software house especializada em desenvolvimento web, mobile e APIs.",
    images: ["/assets/logo.png"],
    creator: "@magents_software",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Intro />
        {children}
      </body>
    </html>
  );
}
