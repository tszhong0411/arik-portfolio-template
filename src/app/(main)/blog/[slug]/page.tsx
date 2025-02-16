import { BLOG_POSTS } from "@/config";
import Hero from "./_components/hero";
import Content from "./_components/content";
import News from "./_components/news";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((post) => post.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <>
      <Hero slug={slug} />
      <Content slug={slug} />
      <News />
    </>
  );
}
