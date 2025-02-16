import { PROJECTS } from "@/config";
import ProjectCard from "@/components/project-card";
import SlideAnimation from "@/components/slide-animation";

export default function WorkPage() {
  return (
    <div className="space-y-8 px-6 pt-28 pb-16 md:space-y-12 md:px-10 md:pt-32 md:pb-24 xl:px-12 xl:pt-40 xl:pb-32">
      <SlideAnimation className="flex flex-col items-center gap-3">
        <h1 className="text-5xl font-light md:text-7xl xl:text-8xl">Work</h1>
        <p className="max-w-125 text-center font-chillax text-lg font-light md:text-xl">
          My latest web design projects and see how we can help bring your ideas
          to life.
        </p>
      </SlideAnimation>
      <div className="mx-auto grid max-w-350 gap-4 md:grid-cols-2 xl:gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
}
