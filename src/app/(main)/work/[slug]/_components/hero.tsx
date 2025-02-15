import Noise from "@/components/noise";
import ButtonScroll from "@/components/ui/button-scroll";
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
    <div className="flex flex-col items-center gap-16 pt-28 px-6 md:pt-32 md:px-10 md:gap-12 xl:pt-48 xl:px-12 xl:gap-16">
      <div className="flex flex-col items-center gap-8 w-full md:gap-12">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-5xl font-light md:text-7xl xl:text-8xl">
            {title}
          </h1>
          <p className="max-w-150 text-lg font-chillax font-light text-center md:text-xl">
            {description}
          </p>
        </div>
        <div className="grid gap-4 w-full max-w-250 md:grid-cols-4">
          {meta.map((meta) => (
            <MetaCard key={meta.title} {...meta} />
          ))}
        </div>
        <Link href="/services#webdesign">
          <ButtonScroll>More details</ButtonScroll>
        </Link>
      </div>
      <div className="relative border rounded-xs">
        <Image src={image} alt={title} />
        <Noise />
      </div>
    </div>
  );
}

function MetaCard({ title, content }: Project["meta"][0]) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-muted border uppercase text-sm tracking-widest">
      <p className="text-muted">{title}</p>
      {content.href ? (
        <Link href={content.href}>{content.label}</Link>
      ) : (
        <p>{content.label}</p>
      )}
    </div>
  );
}
