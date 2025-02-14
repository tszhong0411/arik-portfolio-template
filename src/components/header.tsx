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
    <div className="pt-4 px-6 md:pt-6 md:px-8 xl:pt-8 xl:px-10 flex justify-center fixed top-0 w-full z-50">
      <header className="py-2.5 pr-3 pl-5 border flex justify-between items-center w-full md:w-auto gap-8 bg-muted relative backdrop-blur-[30px]">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex justify-between items-center gap-3 md:gap-6">
          <nav className="md:flex items-center gap-5 hidden">
            {NAV_LINKS.filter((link) => !link.mobileOnly).map(
              ({ label, href }) => (
                <NavItem key={href} href={href}>
                  {label}
                </NavItem>
              )
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
        className="w-10 h-7.5 flex flex-col gap-2 md:hidden relative"
        type="button"
        aria-label="Open Menu"
        onClick={() => setIsOpen((prev) => !prev)}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          className="bg-primary w-7.5 h-px absolute top-1/4 inset-x-1.25 origin-right"
          variants={{
            open: { rotate: "-30deg" },
          }}
          transition={{
            ease: "easeOut",
          }}
        />
        <motion.div
          className="bg-primary w-7.5 h-px absolute top-1/2 inset-x-1.25 origin-center"
          variants={{
            open: { opacity: 0, scaleX: 0.4 },
            closed: { opacity: 1, scaleX: 1 },
          }}
          transition={{
            ease: "easeOut",
          }}
        />
        <motion.div
          className="bg-primary w-7.5 h-px absolute top-3/4 inset-x-1.25 origin-right"
          variants={{
            open: { rotate: "30deg" },
          }}
          transition={{
            ease: "easeOut",
          }}
        />
      </motion.button>
      {isOpen && (
        <nav className="absolute top-17.5 inset-x-0 border p-6 flex flex-col gap-6 bg-[#181716]">
          <div className="flex flex-col gap-5 items-center">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="uppercase text-default text-sm"
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
