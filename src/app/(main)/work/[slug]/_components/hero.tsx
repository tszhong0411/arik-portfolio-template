import Noise from "@/components/noise";
import SlideAnimation from "@/components/slide-animation";
import ButtonScroll from "@/components/ui/button-scroll";
import Card from "@/components/ui/card";
import { Project, PROJECTS } from "@/config";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type HeroProps = {
  slug: string;
};

export default function Hero({ slug }: HeroProps) {
  const project = PROJECTS.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const { image, title, description, meta } = project;

  return (
    <div className="px-6 pt-28 md:px-10 md:pt-32 xl:px-12 xl:pt-48">
      <div className="mx-auto flex max-w-350 flex-col items-center gap-16 md:gap-12 xl:gap-16">
        <SlideAnimation className="flex w-full flex-col items-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-2 font-light">
            <h1 className="text-5xl md:text-7xl xl:text-8xl">{title}</h1>
            <p className="max-w-150 text-center font-chillax text-lg md:text-xl">
              {description}
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            {meta.map((meta) => (
              <MetaCard key={meta.title} {...meta} />
            ))}
          </div>
          <Link href="/services#webdesign">
            <ButtonScroll>More details</ButtonScroll>
          </Link>
        </SlideAnimation>
        <SlideAnimation className="relative overflow-hidden rounded-xs border">
          <Image src={image} alt={title} />
          <Noise />
        </SlideAnimation>
      </div>
    </div>
  );
}

function MetaCard({ title, content }: Project["meta"][0]) {
  return (
    <Card className="flex flex-1 flex-col items-center gap-2 p-4 text-sm tracking-wider uppercase">
      <p className="text-muted">{title}</p>
      {content.href ? (
        <Link href={content.href}>{content.label}</Link>
      ) : (
        <p>{content.label}</p>
      )}
    </Card>
  );
}
