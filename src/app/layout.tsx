import "./globals.css";

import AIRadar from "@/components/AIRadar";
import Navbar from "@/components/Navbar";
import LivePurchases from "@/components/LivePurchases";
import LiveStats from "@/components/LiveStats";

export const metadata = {
  title: "AetherAI",
  description: "Premium AI Gaming Enhancements",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className="bg-black text-white overflow-x-hidden">

        {/* AI RADAR */}
        <AIRadar />

        {/* NAVBAR */}
        <Navbar />

        {/* LIVE PURCHASES */}
        <LivePurchases />

        {/* LIVE STATS */}
        <LiveStats />

        {/* WEBSITE */}
        <div className="relative z-10 pt-32">
          {children}
        </div>

      </body>

    </html>
  );
}