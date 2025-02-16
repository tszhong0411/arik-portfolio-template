import PostCard from "@/components/post-card";
import { BLOG_POSTS } from "@/config";

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
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
