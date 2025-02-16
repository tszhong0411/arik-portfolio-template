"use client";

import { NAV_LINKS } from "@/config";
import Link from "next/link";
import Logo from "./logo";
import { motion } from "motion/react";
import { useState } from "react";
import NavItem from "./ui/nav-item";
import { buttonVariants } from "./ui/button";

export default function Header() {
  return (
    <div className="fixed top-0 z-50 flex w-full justify-center px-6 pt-4 md:px-8 md:pt-6 xl:px-10 xl:pt-8">
      <header className="relative flex w-full items-center justify-between gap-8 border bg-muted py-2.5 pr-3 pl-5 backdrop-blur-[30px] md:w-auto">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center justify-between gap-3 md:gap-6">
          <nav className="hidden items-center gap-5 md:flex">
            {NAV_LINKS.filter((link) => !link.mobileOnly).map(
              ({ label, href }) => (
                <NavItem key={href} href={href}>
                  {label}
                </NavItem>
              ),
            )}
          </nav>
          <LetsTalkLink />
          <MenuIcon />
        </div>
      </header>
    </div>
  );
}

function LetsTalkLink() {
  return (
    <Link href="/contact" className={buttonVariants({ variant: "primary" })}>
      Let&apos;s talk
    </Link>
  );
}

function MenuIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        className="relative flex h-7.5 w-10 flex-col gap-2 md:hidden"
        type="button"
        aria-label="Open Menu"
        onClick={() => setIsOpen((prev) => !prev)}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          className="absolute inset-x-1.25 top-1/4 h-px w-7.5 origin-right bg-primary"
          variants={{
            open: { rotate: "-30deg" },
          }}
          transition={{
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute inset-x-1.25 top-1/2 h-px w-7.5 origin-center bg-primary"
          variants={{
            open: { opacity: 0, scaleX: 0.4 },
            closed: { opacity: 1, scaleX: 1 },
          }}
          transition={{
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute inset-x-1.25 top-3/4 h-px w-7.5 origin-right bg-primary"
          variants={{
            open: { rotate: "30deg" },
          }}
          transition={{
            ease: "easeOut",
          }}
        />
      </motion.button>
      {isOpen && (
        <nav className="absolute inset-x-0 top-17.5 flex flex-col gap-6 border bg-[#181716] p-6">
          <div className="flex flex-col items-center gap-5">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm tracking-wider uppercase"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
          <LetsTalkLink />
        </nav>
      )}
    </>
  );
}
