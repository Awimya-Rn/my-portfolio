import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rn@Awimya",
  description: "Mokhammad Ilham Putra Wijaya — Informatics Engineering Student & ML/AI Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="noise-overlay" />
        <div className="scanline" />
        {children}
      </body>
    </html>
  );
}
