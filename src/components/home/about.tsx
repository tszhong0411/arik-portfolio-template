"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import arik from "~/images/arik.png";
import { FaTwitter, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";
import { buttonTextIconVariants } from "../ui/button-text";
import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-16 md:gap-16 md:pb-24 xl:pt-24 xl:pb-40">
      <div
        ref={ref}
        className="flex flex-col items-center justify-center gap-4 overflow-x-hidden md:flex-row md:gap-0 xl:gap-8"
      >
        <Name position="left" scrollYProgress={scrollYProgress} />
        <Image
          src={arik}
          alt="Arik Andersson"
          className="max-w-58.5 md:max-w-75 xl:max-w-100"
        />
        <Name
          position="right"
          scrollYProgress={scrollYProgress}
          className="hidden md:block"
        />
      </div>
      <div className="px-12">
        <div className="grid gap-4 xl:max-w-300 xl:grid-cols-2 xl:gap-20">
          <div className="text-center text-3xl font-light md:text-4xl xl:text-start">
            <h2>A website that leaves</h2>
            <h2 className="font-gambetta italic">a lasting impression!</h2>
          </div>
          <div className="space-y-8">
            <p className="text-center font-chillax font-light md:text-lg xl:text-start">
              Hi, I&apos;m Arik Andersson - a freelancer specializing in premium
              web design, development, and SEO services. I&apos;m passionate
              about creating unique and effective solutions for my clients, and
              I bring a personal touch to every project. Let&apos;s work
              together to bring your vision to life!
            </p>
            <div className="flex items-center justify-center gap-2 xl:justify-start">
              <div className={cn(buttonTextIconVariants(), "size-10")}>
                <FaTwitter size={20} />
              </div>
              <div className={cn(buttonTextIconVariants(), "size-10")}>
                <FaInstagram size={20} />
              </div>
              <div className={cn(buttonTextIconVariants(), "size-10")}>
                <FaDribbble size={20} />
              </div>
              <div className={cn(buttonTextIconVariants(), "size-10")}>
                <FaBehance size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type NameProps = React.ComponentProps<"p"> & {
  position: "left" | "right";
  scrollYProgress: MotionValue<number>;
};

function Name({ position, scrollYProgress, className, ...rest }: NameProps) {
  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [position === "left" ? -100 : 100, 0],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <motion.div
      className="flex shrink-0"
      style={{
        x,
        opacity,
      }}
    >
      <p
        className={cn("text-3xl font-light md:text-5xl xl:text-9xl", className)}
        {...rest}
      >
        Arik <span className="font-gambetta font-light italic">Andersson</span>
      </p>
    </motion.div>
  );
}
