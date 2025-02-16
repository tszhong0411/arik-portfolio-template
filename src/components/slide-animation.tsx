"use client";

import { Slot } from "@radix-ui/react-slot";
import { motion } from "motion/react";

type SlideAnimationProps = {
  direction?: "up" | "down";
  asChild?: boolean;
} & React.ComponentProps<typeof motion.div>;

export default function SlideAnimation({
  direction = "up",
  asChild = false,
  ...rest
}: SlideAnimationProps) {
  const Comp = asChild ? motion.create(Slot) : motion.div;

  return (
    <Comp
      initial={{ opacity: 0, y: direction === "up" ? 20 : -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.5, 1, 0.89, 1],
      }}
      viewport={{
        once: true,
      }}
      {...rest}
    />
  );
}
