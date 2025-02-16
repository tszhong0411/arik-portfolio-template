import { BlogPost } from "@/config";
import Link from "next/link";
import Card from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import Noise from "./noise";
import { buttonTextIconVariants } from "./ui/button-text";
import { cn } from "@/utils/cn";
import { ArrowRightIcon } from "lucide-react";
import Label from "./ui/label";

type PostCardProps = BlogPost;

export default function PostCard({
  slug,
  title,
  image,
  date,
  category,
  excerpt,
}: PostCardProps) {
  return (
    <Link key={slug} href={`/blog/${slug}`}>
      <Card className="flex flex-col gap-8 p-8 hover:bg-muted-hover hover:border-border-hover transition-colors duration-300 group md:p-10">
        <div className="relative border rounded-xs overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={image}
              alt={title}
              fill
              className="h-full w-full object-cover"
            />
            <Noise />
            <div
              className={cn(
                buttonTextIconVariants(),
                "size-10 opacity-0 transition-all group-hover:opacity-100 group-hover:-rotate-45 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              )}
            >
              <ArrowRightIcon className="size-5" />
            </div>
          </AspectRatio>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted uppercase tracking-wider">{date}</p>
          <h2 className="text-2xl font-light">{title}</h2>
          <p className="font-chillax font-light">{excerpt}</p>
        </div>
        <Label>{category}</Label>
      </Card>
    </Link>
  );
}
