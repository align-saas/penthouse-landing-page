import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Penthouse Visuals - Transforma la gestión de tu negocio",
  description: "Optimiza tu tiempo, reduce costos y toma las decisiones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
