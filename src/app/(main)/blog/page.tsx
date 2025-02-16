import Noise from "@/components/noise";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonTextIconVariants } from "@/components/ui/button-text";
import Card from "@/components/ui/card";
import Label from "@/components/ui/label";
import { BLOG_POSTS } from "@/config";
import { cn } from "@/utils/cn";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="pt-28 pb-16 px-4 space-y-8 md:pt-32 md:pb-24 md:px-10 xl:pt-40 xl:pb-32 xl:px-12">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-5xl font-light md:text-7xl xl:text-8xl">Blog</h1>
        <p className="text-lg font-chillax font-light max-w-125 text-center md:text-xl">
          Get the latest insights and tips on web design, development, and SEO
          in our blog.
        </p>
      </div>
      <div className="max-w-350 mx-auto grid gap-4 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="flex flex-col gap-8 p-8 hover:bg-muted-hover hover:border-border-hover transition-colors duration-300 group md:p-10">
              <div className="relative border rounded-xs overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={post.image}
                    alt={post.title}
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
                <p className="text-sm text-muted uppercase tracking-wider">
                  {post.date}
                </p>
                <h2 className="text-2xl font-light">{post.title}</h2>
                <p className="font-chillax font-light">{post.excerpt}</p>
              </div>
              <Label>{post.category}</Label>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
