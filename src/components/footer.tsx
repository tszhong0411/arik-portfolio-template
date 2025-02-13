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
    <footer className="bg-muted py-12 px-6 md:py-16 md:px-10 xl:py-24 xl:px-12 flex flex-col gap-16">
      <div className="grid gap-12 md:gap-16 md:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col items-center md:items-start gap-12 md:gap-8">
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
        <div className="flex flex-col items-center md:items-start gap-8">
          <p className="text-xl font-light">Pages</p>
          <div className="flex flex-col items-center md:items-start gap-6">
            {PAGE_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm text-muted uppercase tracking-widest",
                  pathname === link.href && "text-default"
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
              <ArrowUpRightIcon className="size-4 group-hover:rotate-45 transition-transform duration-300" />
            </a>
          </Button>
        </div>
        <div className="flex flex-col items-center md:items-start gap-8">
          <p className="text-xl font-light">CMS</p>
          <div className="flex flex-col items-center md:items-start gap-6">
            {CMS_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm text-muted uppercase tracking-widest",
                  pathname === link.href && "text-default"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-8">
          <p className="text-xl font-light">Utility Pages</p>
          <div className="flex flex-col items-center md:items-start gap-6">
            {UTILITY_PAGE_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm text-muted uppercase tracking-widest",
                  pathname === link.href && "text-default"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="text-sm font-chillax font-light">
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
