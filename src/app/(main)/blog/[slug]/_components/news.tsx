import PostCard from "@/components/post-card";
import SlideAnimation from "@/components/slide-animation";
import ButtonText from "@/components/ui/button-text";
import { BLOG_POSTS } from "@/config";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function News() {
  return (
    <div className="py-12 px-6 md:py-20 md:px-10 xl:py-32 xl:px-12">
      <div className="max-w-350 mx-auto flex flex-col gap-8">
        <SlideAnimation className="flex flex-col items-center gap-4 px-8 md:flex-row md:justify-between">
          <h2 className="text-3xl font-light md:text-4xl">Related News</h2>
          <ButtonText icon={<ArrowUpRightIcon className="size-4" />} asChild>
            <Link href="/blog">See All</Link>
          </ButtonText>
        </SlideAnimation>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {BLOG_POSTS.slice(0, 2).map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
