import { PROJECTS } from "@/config";
import Hero from "./_components/hero";
import About from "./_components/about";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;

  return (
    <>
      <Hero slug={slug} />
      <About slug={slug} />
    </>
  );
}
