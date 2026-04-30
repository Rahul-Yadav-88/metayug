import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import RoutePreloader from "../components/RoutePreloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ FIXED METADATA
export const metadata: Metadata = {
  title: {
    default: "Facade Solutions Provider",
    template: "%s | Facadewala",
  },
  description:
    "Trusted facade solutions provider delivering end-to-end facade design, engineering, installation, and maintenance services for projects.",
  verification: {
    google: "VogexH_UtPC3sL7yilxPIMXR3BL6YipnjurPW3Uixwc",
  },
  openGraph: {
    title: "Facade Solutions Provider",
    description:
      "Trusted facade solutions provider delivering end-to-end facade services.",
    url: "https://facadewala.com",
    siteName: "Facadewala",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PWK8KB5Q');
            `,
          }}
        />

        {/* ✅ GTM (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PWK8KB5Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <RoutePreloader />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}