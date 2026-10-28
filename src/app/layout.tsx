import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import BootScreen from "@/components/BootScreen";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  metadataBase: new URL(siteConfig.seo.url),
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.seo.url,
    siteName: siteConfig.personal.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Apply saved theme before first paint to avoid a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var d=document.documentElement;try{var t=localStorage.getItem("theme");d.setAttribute("data-theme",t==="light"?"light":"dark")}catch(e){}try{var r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;d.setAttribute("data-boot",r||sessionStorage.getItem("booted")?"done":"running")}catch(e){d.setAttribute("data-boot","done")}`,
          }}
        />
        {/* Without JS the boot screen can never finish, so hide it */}
        <noscript>
          <style>{`.boot-screen{display:none!important}`}</style>
        </noscript>
      </head>
      <body>
        {/* Linux boot intro (plays once per session) */}
        <BootScreen />
        {/* CRT effects */}
        <div className="noise-overlay" />
        <div className="scanline" />
        {children}
      </body>
    </html>
  );
}

