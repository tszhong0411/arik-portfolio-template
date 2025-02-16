"use client";

import { STATS } from "@/config";
import { motion } from "motion/react";

export default function Stats() {
  return (
    <div className="pt-12 px-6 md:pt-16 md:px-10 xl:pt-20 xl:px-12">
      <div className="max-w-300 mx-auto grid gap-8 grid-cols-2 md:gap-12 xl:grid-cols-4">
        {STATS.map((stat, i) => (
          <div key={i} className="space-y-1 text-center">
            <motion.p
              className="text-muted text-sm uppercase tracking-wider"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.5, 1, 0.89, 1],
              }}
              viewport={{
                once: true,
              }}
            >
              {stat.title}
            </motion.p>
            <motion.p
              className="text-4xl md:text-5xl xl:text-6xl font-light"
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
              {stat.number}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
}
