"use client";

import {
  CMS_LINKS,
  PAGE_LINKS,
  SOCIAL_LINKS,
  UTILITY_PAGE_LINKS,
} from "@/config";
import Logo from "./logo";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import ToTop from "./ui/to-top";
import Button from "./ui/button";
import { buttonTextIconVariants } from "./ui/button-text";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="flex flex-col gap-16 bg-muted px-6 py-12 md:px-10 md:py-16 xl:px-12 xl:py-24">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16 xl:grid-cols-4">
        <div className="flex flex-col items-center gap-12 md:items-start md:justify-between md:gap-8">
          <Logo />
          <div className="space-y-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-4"
              >
                <div className={cn(buttonTextIconVariants(), "size-10")}>
                  <link.icon className="size-4" />
                </div>
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 md:items-start">
          <p className="text-xl font-light">Pages</p>
          <div className="flex flex-col items-center gap-6 md:items-start">
            {PAGE_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm tracking-wider text-muted uppercase",
                  pathname === link.href && "text-default",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button className="group" variant="primary" asChild>
            <a
              href="https://www.framer.com/marketplace/creator/pawel-gola?via=pawelgola"
              target="_blank"
              rel="noopener"
            >
              More templates{" "}
              <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </Button>
        </div>
        <div className="flex flex-col items-center gap-8 md:items-start">
          <p className="text-xl font-light">CMS</p>
          <div className="flex flex-col items-center gap-6 md:items-start">
            {CMS_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm tracking-wider text-muted uppercase",
                  pathname === link.href && "text-default",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 md:items-start">
          <p className="text-xl font-light">Utility Pages</p>
          <div className="flex flex-col items-center gap-6 md:items-start">
            {UTILITY_PAGE_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm tracking-wider text-muted uppercase",
                  pathname === link.href && "text-default",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 md:items-start">
        <div className="font-chillax text-sm font-light">
          © Design by{" "}
          <a
            href="https://templates.gola.io/template/arik"
            target="_blank"
            rel="noopener"
            className="underline"
          >
            Pawel Gola
          </a>
          . Powered by{" "}
          <a
            href="https://github.com/tszhong0411"
            target="_blank"
            rel="noopener"
            className="underline"
          >
            tszhong0411
          </a>
          .
        </div>
        <ToTop href="#main" className="xl:hidden" />
      </div>
    </footer>
  );
}
