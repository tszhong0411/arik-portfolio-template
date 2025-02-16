import { cn } from "@/utils/cn";
import { buttonTextIconVariants } from "./ui/button-text";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { Project } from "@/config";
import Noise from "./noise";
import Link from "next/link";
import SlideAnimation from "./slide-animation";

type ProjectCardProps = Project;

export default function ProjectCard({
  title,
  slug,
  meta,
  image,
}: ProjectCardProps) {
  return (
    <SlideAnimation asChild>
      <Link
        href={`/work/${slug}`}
        className="group relative overflow-hidden rounded-xs border"
      >
        <div
          className={cn(
            buttonTextIconVariants(),
            "absolute top-1/2 left-1/2 z-20 size-10 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all group-hover:-rotate-45 group-hover:opacity-100",
          )}
        >
          <ArrowRightIcon className="size-5" />
        </div>
        <Noise />
        <Image src={image} alt={title} className="absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 z-20 p-4 md:p-6">
          <div className="flex items-center justify-between rounded-xs border bg-muted px-4 py-2 backdrop-blur-[15px]">
            <h3 className="text-xl font-light md:text-2xl">{title}</h3>
            <p className="text-xs tracking-wider uppercase md:text-sm">
              {meta.find((m) => m.title === "Category")?.content.label}
            </p>
          </div>
        </div>
        <div className="aspect-[1.33333] w-full" />
      </Link>
    </SlideAnimation>
  );
}
