import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}