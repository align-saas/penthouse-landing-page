import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Penthouse",
  description: "Optimiza tu tiempo, reduce costos y toma las decisiones",
  icons: {
    icon: [
      { url: "/img/pent.svg", type: "image/svg+xml" },
      { url: "/img/pent.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/img/pent.png",
    apple: "/img/pent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
