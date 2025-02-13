import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import { cn } from "@/utils/cn";
import Footer from "@/components/footer";

const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    {
      path: "../../public/fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

const gambetta = localFont({
  variable: "--font-gambetta",
  src: [
    {
      path: "../../public/fonts/Gambetta-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
  ],
  display: "swap",
});

const chillax = localFont({
  variable: "--font-chillax",
  src: [
    {
      path: "../../public/fonts/Chillax-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Portfolio Next.js Template",
    default: "Arik - Portfolio Next.js Template",
  },
  description:
    "Arik is a minimal & modern Portfolio Next.js Template perfectly suited for freelancers, designers, agencies or your personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          satoshi.variable,
          gambetta.variable,
          chillax.variable,
          "antialiased bg-default font-satoshi text-default scroll-smooth"
        )}
      >
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
