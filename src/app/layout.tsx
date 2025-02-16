import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/utils/cn";

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

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          satoshi.variable,
          gambetta.variable,
          chillax.variable,
          "scroll-smooth bg-default font-satoshi text-default antialiased",
        )}
      >
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
