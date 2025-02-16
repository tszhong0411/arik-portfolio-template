import SlideAnimation from "@/components/slide-animation";
import Card from "@/components/ui/card";
import { PROJECTS } from "@/config";
import { notFound } from "next/navigation";

type AboutProps = {
  slug: string;
};

export default function About({ slug }: AboutProps) {
  const project = PROJECTS.find((project) => project.slug === slug);

  if (!project) {
    return notFound();
  }

  const { details } = project;

  return (
    <div className="px-6 py-16 md:px-10 md:pb-24 xl:px-12 xl:py-32">
      <div className="mx-auto flex max-w-350 flex-col gap-8 xl:flex-row xl:items-start xl:gap-24">
        <div className="flex flex-col items-center gap-2 xl:sticky xl:top-32 xl:flex-1 xl:items-start">
          <SlideAnimation direction="down" asChild>
            <p className="text-sm tracking-wider text-muted uppercase">
              Client
            </p>
          </SlideAnimation>
          <SlideAnimation asChild>
            <p className="text-center text-3xl font-light md:text-4xl xl:text-left">
              {details.headline}
            </p>
          </SlideAnimation>
        </div>
        <div className="flex flex-col gap-4 xl:flex-1">
          <SlideAnimation asChild>
            <Card className="flex flex-col gap-2 p-12">
              <p className="text-xl font-light">Challenge</p>
              <p className="font-chillax text-sm font-light text-muted">
                {details.challenge}
              </p>
            </Card>
          </SlideAnimation>
          <SlideAnimation asChild>
            <Card className="flex flex-col gap-2 p-12">
              <p className="text-xl font-light">Goal</p>
              <p className="font-chillax text-sm font-light text-muted">
                {details.goal}
              </p>
            </Card>
          </SlideAnimation>
          <SlideAnimation asChild>
            <Card className="flex flex-col gap-2 p-12">
              <p className="text-xl font-light">Result</p>
              <p className="font-chillax text-sm font-light text-muted">
                {details.result}
              </p>
            </Card>
          </SlideAnimation>
        </div>
      </div>
    </div>
  );
}
