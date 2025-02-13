import {
  CMS_LINKS,
  PAGE_LINKS,
  SOCIAL_LINKS,
  UTILITY_PAGE_LINKS,
} from "@/config";
import Logo from "./logo";
import { buttonLinkVariant } from "./home/button-link";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import ToTop from "./to-top";

export default function Footer() {
  return (
    <footer className="bg-muted py-12 px-6 sm:py-16 sm:px-10 md:py-24 md:px-12 flex flex-col gap-16">
      <div className="grid gap-12 sm:gap-16 sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col items-center sm:items-start gap-12 sm:gap-8">
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
                <div className={cn(buttonLinkVariant(), "size-10")}>
                  <link.icon className="size-4" />
                </div>
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-8">
          <p className="text-heading-h5-lg font-light">Pages</p>
          <div className="flex flex-col items-center sm:items-start gap-6">
            {PAGE_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-meta text-muted uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <a
            href="https://www.framer.com/marketplace/creator/pawel-gola?via=pawelgola"
            target="_blank"
            rel="noopener"
            className="py-2.5 px-4 rounded-xs inline-flex justify-center items-center gap-2 bg-primary text-inverse uppercase text-button group hover:bg-primary-hover transition-colors duration-300"
          >
            More templates{" "}
            <ArrowUpRightIcon className="size-4 group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-8">
          <p className="text-heading-h5-lg font-light">CMS</p>
          <div className="flex flex-col items-center sm:items-start gap-6">
            {CMS_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-meta text-muted uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-8">
          <p className="text-heading-h5-lg font-light">Utility Pages</p>
          <div className="flex flex-col items-center sm:items-start gap-6">
            {UTILITY_PAGE_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-meta text-muted uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="text-p-small font-chillax font-light">
          © Made by{" "}
          <a
            href="https://templates.gola.io/"
            target="_blank"
            rel="noopener"
            className="underline"
          >
            Gola Templates
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
        <ToTop />
      </div>
    </footer>
  );
}
