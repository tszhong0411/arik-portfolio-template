"use client";

import { PROJECTS } from "@/config";
import ProjectCard from "@/components/project-card";
import { motion } from "motion/react";

export default function WorkPage() {
  return (
    <div className="pt-28 pb-16 px-6 space-y-8 md:space-y-12 md:pt-32 md:pb-24 md:px-10 xl:pt-40 xl:pb-32 xl:px-12">
      <motion.div
        className="flex flex-col items-center gap-3"
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
        <h1 className="text-5xl font-light md:text-7xl xl:text-8xl">Work</h1>
        <p className="text-lg font-light font-chillax text-center max-w-125 md:text-xl">
          My latest web design projects and see how we can help bring your ideas
          to life.
        </p>
      </motion.div>
      <div className="max-w-350 mx-auto grid gap-4 md:grid-cols-2 xl:gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
}
