import { type ProjectCard } from "@/config";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { buttonTextIconVariants } from "./ui/button-text";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

type ProjectCardProps = ProjectCard;

export default function ProjectCard({
  link,
  category,
  image,
}: ProjectCardProps) {
  return (
    <Link href={link.href} className="relative border rounded-xs group">
      <div
        className={cn(
          buttonTextIconVariants(),
          "size-10 opacity-0 transition-all group-hover:opacity-100 group-hover:-rotate-45 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        )}
      >
        <ArrowRightIcon className="size-5" />
      </div>
      <div className="bg-noise bg-repeat bg-[length:128px] absolute inset-0 z-10 opacity-10" />
      <Image src={image} alt={link.label} className="absolute inset-0" />
      <div className="p-4 md:p-6 absolute bottom-0 inset-x-0 z-20">
        <div className="backdrop-blur-[15px] bg-muted border py-2 px-4 rounded-xs flex justify-between items-center">
          <h3 className="text-xl md:text-2xl font-light">{link.label}</h3>
          <p className="text-xs md:text-sm uppercase tracking-widest">
            {category}
          </p>
        </div>
      </div>
      <div className="aspect-[1.33333] w-full" />
    </Link>
  );
}
