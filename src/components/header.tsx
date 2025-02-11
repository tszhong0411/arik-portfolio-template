"use client";

import { NAV_LINKS } from "@/config";
import Link from "next/link";
import Logo from "./logo";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Header() {
  return (
    <div className="pt-4 px-6 sm:pt-6 sm:px-8 md:pt-8 md:px-10 flex justify-center fixed top-0 w-full z-10">
      <header className="py-2.5 pr-3 pl-5 border flex justify-between items-center w-full sm:w-auto gap-8 bg-muted relative backdrop-blur-[30px]">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex justify-between items-center gap-3 sm:gap-6">
          <nav className="sm:flex items-center gap-5 hidden">
            {NAV_LINKS.filter((link) => !link.mobileOnly).map(
              ({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="uppercase text-default text-meta relative group"
                >
                  {label}
                  <div className="absolute inset-x-0 -bottom-1 w-0 h-px group-hover:w-full transition-[width] bg-primary duration-300 ease-out" />
                </Link>
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
    <Link
      href="/contact"
      className="uppercase text-meta px-4 py-2.5 bg-primary hover:bg-primary-hover text-inverse transition-colors duration-300 rounded-xs flex justify-center"
    >
      Let&apos;s talk
    </Link>
  );
}

function MenuIcon() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <>
      <motion.button
        className="w-10 h-7.5 flex flex-col gap-2 sm:hidden relative"
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
        <nav className="bg-muted absolute top-17.5 inset-x-0 border p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-5 items-center">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="uppercase text-default text-meta"
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
