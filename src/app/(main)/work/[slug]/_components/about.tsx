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
    <div className="py-16 px-6 md:pb-24 md:px-10 xl:py-32 xl:px-12">
      <div className="max-w-350 mx-auto flex flex-col gap-8 xl:gap-24 xl:flex-row xl:items-start">
        <div className="flex flex-col items-center gap-2 xl:items-start xl:flex-1 xl:sticky xl:top-32">
          <p className="text-sm text-muted uppercase tracking-wider">Client</p>
          <p className="text-3xl font-light text-center md:text-4xl xl:text-left">
            {details.headline}
          </p>
        </div>
        <div className="flex flex-col gap-4 xl:flex-1">
          <Card className="flex flex-col gap-2 p-12">
            <p className="text-xl font-light">Challenge</p>
            <p className="text-sm font-chillax font-light text-muted">
              {details.challenge}
            </p>
          </Card>
          <Card className="flex flex-col gap-2 p-12">
            <p className="text-xl font-light">Goal</p>
            <p className="text-sm font-chillax font-light text-muted">
              {details.goal}
            </p>
          </Card>
          <Card className="flex flex-col gap-2 p-12">
            <p className="text-xl font-light">Result</p>
            <p className="text-sm font-chillax font-light text-muted">
              {details.result}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
