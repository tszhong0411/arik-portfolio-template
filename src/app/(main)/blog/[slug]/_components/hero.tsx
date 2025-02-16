import Noise from "@/components/noise";
import SlideAnimation from "@/components/slide-animation";
import ButtonScroll from "@/components/ui/button-scroll";
import Card from "@/components/ui/card";
import { BLOG_POSTS } from "@/config";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type HeroProps = {
  slug: string;
};

export default function Hero({ slug }: HeroProps) {
  const post = BLOG_POSTS.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const { title, excerpt, date, category, readingTime, image } = post;

  return (
    <div className="flex flex-col gap-8 px-6 pt-28 md:gap-12 md:px-10 md:pt-35 xl:gap-16 xl:px-12 xl:pt-48">
      <SlideAnimation className="mx-auto flex max-w-250 flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-4xl font-light md:text-5xl xl:text-6xl">
            {title}
          </h1>
          <p className="max-w-150 font-chillax text-lg font-light md:text-xl">
            {excerpt}
          </p>
        </div>
        <Link href="#content">
          <ButtonScroll>Read More</ButtonScroll>
        </Link>
      </SlideAnimation>
      <div className="mx-auto flex w-full max-w-350 flex-col gap-4">
        <SlideAnimation className="flex w-full flex-col gap-4 md:flex-row">
          <MetaCard title="Date" content={date} />
          <MetaCard title="Category" content={category} />
          <MetaCard title="Reading Time" content={readingTime} />
        </SlideAnimation>
        <SlideAnimation className="relative overflow-hidden rounded-xs border">
          <Image src={image} alt={title} />
          <Noise />
        </SlideAnimation>
      </div>
    </div>
  );
}

type MetaCardProps = {
  title: string;
  content: string;
};

function MetaCard({ title, content }: MetaCardProps) {
  return (
    <Card className="flex flex-1 items-center justify-between p-6 text-sm tracking-wider uppercase">
      <p className="text-muted">{title}</p>
      <p>{content}</p>
    </Card>
  );
}
