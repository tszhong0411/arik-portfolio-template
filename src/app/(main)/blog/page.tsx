import PostCard from "@/components/post-card";
import SlideAnimation from "@/components/slide-animation";
import { BLOG_POSTS } from "@/config";

export default function Blog() {
  return (
    <div className="space-y-8 px-4 pt-28 pb-16 md:px-10 md:pt-32 md:pb-24 xl:px-12 xl:pt-40 xl:pb-32">
      <SlideAnimation className="flex flex-col items-center gap-4">
        <h1 className="text-5xl font-light md:text-7xl xl:text-8xl">Blog</h1>
        <p className="max-w-125 text-center font-chillax text-lg font-light md:text-xl">
          Get the latest insights and tips on web design, development, and SEO
          in our blog.
        </p>
      </SlideAnimation>
      <div className="mx-auto grid max-w-350 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
