import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AETHER AI",
  description: "Premium AI Gaming Enhancement Platform",
  
  openGraph: {
    title: "AETHER AI",
    description: "Premium AI Gaming Enhancement Platform",
    url: "https://aether-ai-hazel.vercel.app",
    siteName: "AETHER AI",
    images: [
      {
        url: "https://aether-ai-hazel.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "AETHER AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AETHER AI",
    description: "Premium AI Gaming Enhancement Platform",
    images: ["https://aether-ai-hazel.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}