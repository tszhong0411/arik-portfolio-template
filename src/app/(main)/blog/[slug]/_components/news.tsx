import PostCard from "@/components/post-card";
import SlideAnimation from "@/components/slide-animation";
import ButtonText from "@/components/ui/button-text";
import { BLOG_POSTS } from "@/config";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function News() {
  return (
    <div className="px-6 py-12 md:px-10 md:py-20 xl:px-12 xl:py-32">
      <div className="mx-auto flex max-w-350 flex-col gap-8">
        <SlideAnimation className="flex flex-col items-center gap-4 px-8 md:flex-row md:justify-between">
          <h2 className="text-3xl font-light md:text-4xl">Related News</h2>
          <ButtonText icon={<ArrowUpRightIcon className="size-4" />} asChild>
            <Link href="/blog">See All</Link>
          </ButtonText>
        </SlideAnimation>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8">
          {BLOG_POSTS.slice(0, 2).map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
