import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-zinc-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Théo Lebarbier",
  description: "Cadreur, Monteur et Motion Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* ⚡ Pré-connexion ultra-rapide à votre bucket Cloudflare R2 */}
        <link
          rel="preconnect"
          href="https://pub-f0790ecb785044afb7436b56be8426ce.r2.dev"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://pub-f0790ecb785044afb7436b56be8426ce.r2.dev"
        />
      </head>
      <body className="h-full bg-[#18181b] text-white overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}