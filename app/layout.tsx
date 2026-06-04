import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-zinc-mono", // Optionnel : harmonisé
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Théo Lebarbier ",
  description: "Cadreur, Monteur et Motion Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr" // Passé en français ;)
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning // Empêche les extensions comme LanguageTool de bloquer React
    >
      {/* Remplacement de min-h-full par h-full pour stabiliser le scroll snap */}
      <body className="h-full bg-[#18181b] text-white overflow-hidden">
        {children}
      </body>
    </html>
  );
}