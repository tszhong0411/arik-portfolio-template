"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { buttonTextIconVariants } from "./ui/button-text";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { Project } from "@/config";
import Noise from "./noise";
import { motion } from "motion/react";

type ProjectCardProps = Project;

const MotionLink = motion.create(Link);

export default function ProjectCard({
  title,
  slug,
  meta,
  image,
}: ProjectCardProps) {
  return (
    <MotionLink
      href={`/work/${slug}`}
      className="relative border rounded-xs group overflow-hidden"
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
      <div
        className={cn(
          buttonTextIconVariants(),
          "size-10 opacity-0 transition-all group-hover:opacity-100 group-hover:-rotate-45 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        )}
      >
        <ArrowRightIcon className="size-5" />
      </div>
      <Noise />
      <Image src={image} alt={title} className="absolute inset-0" />
      <div className="p-4 md:p-6 absolute bottom-0 inset-x-0 z-20">
        <div className="backdrop-blur-[15px] bg-muted border py-2 px-4 rounded-xs flex justify-between items-center">
          <h3 className="text-xl md:text-2xl font-light">{title}</h3>
          <p className="text-xs md:text-sm uppercase tracking-wider">
            {meta.find((m) => m.title === "Category")?.content.label}
          </p>
        </div>
      </div>
      <div className="aspect-[1.33333] w-full" />
    </MotionLink>
  );
}
