"use client";

import Link from "next/link";
import macbook from "~/images/macbook.png";
import Image from "next/image";
import ButtonScroll from "@/components/ui/button-scroll";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.div
      className="pt-28 px-6 md:pt-32 md:px-10 xl:pt-48 xl:px-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.5, 1, 0.89, 1],
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="max-w-350 mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div className="space-y-3">
            <div className="flex flex-col items-center text-6xl font-light md:text-7xl xl:text-9xl">
              <p>Web Design</p>
              <p className="font-gambetta italic">& Next.js</p>
            </div>
            <p className="text-lg font-chillax font-light text-center max-w-150 md:text-xl">
              Premium Web Design, Development, and SEO services to help your
              business stand out.
            </p>
          </div>
          <Link href="#webdesign">
            <ButtonScroll>My services</ButtonScroll>
          </Link>
        </div>
        <div>
          <Image src={macbook} alt="Macbook" />
        </div>
      </div>
    </motion.div>
  );
}
