import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { QueryProvider } from "@/providers/query-provider";
import { Navbar } from "@/components/layout/navbar/navbar";
import { Footer } from "@/components/layout/footer/footer";
import { constructMetadata } from "@/lib/seo";
import { BackgroundFallback } from "@/components/background";
import { MagicCursorTrail, ServiceWorkerCleaner } from "@/components/effects";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: "#0b0f19",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased text-foreground flex flex-col relative selection:bg-purple-500/20 selection:text-pink-300">
        <BackgroundFallback />
        <ServiceWorkerCleaner />
        <MagicCursorTrail />
        <QueryProvider>
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
