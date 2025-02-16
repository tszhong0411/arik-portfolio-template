import Noise from "@/components/noise";
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
    <div className="flex flex-col gap-8 pt-28 px-6 md:gap-12 md:pt-35 md:px-10 xl:gap-16 xl:pt-48 xl:px-12">
      <div className="max-w-250 mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-4xl font-light md:text-5xl xl:text-6xl">
            {title}
          </h1>
          <p className="max-w-150 text-lg font-chillax font-light md:text-xl">
            {excerpt}
          </p>
        </div>
        <Link href="#content">
          <ButtonScroll>Read More</ButtonScroll>
        </Link>
      </div>
      <div className="max-w-350 mx-auto flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-4 w-full md:flex-row">
          <MetaCard title="Date" content={date} />
          <MetaCard title="Category" content={category} />
          <MetaCard title="Reading Time" content={readingTime} />
        </div>
        <div className="relative border rounded-xs overflow-hidden">
          <Image src={image} alt={title} />
          <Noise />
        </div>
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
    <Card className="p-6 flex flex-1 justify-between items-center text-sm uppercase tracking-wider">
      <p className="text-muted">{title}</p>
      <p>{content}</p>
    </Card>
  );
}
