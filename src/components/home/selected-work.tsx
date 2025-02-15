import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import ButtonText from "../ui/button-text";
import ProjectCard from "../project-card";
import { PROJECTS } from "@/config";

export default function SelectedWork() {
  return (
    <section className="pt-16 md:pt-24 xl:pt-32 flex flex-col gap-8 max-w-350 mx-auto px-6 md:px-10 xl:px-12">
      <div className="flex flex-col gap-4 justify-center items-center md:flex-row md:justify-between">
        <h2 className="text-3xl md:text-4xl font-light">Selected Work</h2>
        <ButtonText icon={<ArrowUpRightIcon className="size-4" />} asChild>
          <Link href="/work">See All</Link>
        </ButtonText>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8">
        {PROJECTS.filter((p) => p.selected).map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  );
}
