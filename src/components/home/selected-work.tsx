import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import ButtonText from "../ui/button-text";
import ProjectCard from "../project-card";
import { PROJECTS } from "@/config";
import SlideAnimation from "../slide-animation";

export default function SelectedWork() {
  return (
    <section className="mx-auto flex max-w-350 flex-col gap-8 px-6 pt-16 md:px-10 md:pt-24 xl:px-12 xl:pt-32">
      <SlideAnimation className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <h2 className="text-3xl font-light md:text-4xl">Selected Work</h2>
        <ButtonText icon={<ArrowUpRightIcon className="size-4" />} asChild>
          <Link href="/work">See All</Link>
        </ButtonText>
      </SlideAnimation>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-8">
        {PROJECTS.filter((p) => p.selected).map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  );
}
