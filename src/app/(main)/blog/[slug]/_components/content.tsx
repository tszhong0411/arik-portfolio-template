import SocialCards from "@/components/social-cards";
import Card from "@/components/ui/card";
import { BLOG_POSTS } from "@/config";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import { notFound } from "next/navigation";
import author from "~/images/author.png";

type ContentProps = {
  slug: string;
};

export default function Content({ slug }: ContentProps) {
  const post = BLOG_POSTS.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const { content, conclusion } = post;

  return (
    <div
      id="content"
      className="pt-8 px-6 md:pt-10 md:px-10 xl:pt-20 xl:pr-4 xl:px-12"
    >
      <div className="max-w-200 mx-auto flex flex-col gap-8">
        <article className="prose prose-invert prose-p:font-chillax prose-p:font-light prose-headings:font-light prose-headings:text-default prose-p:text-default md:prose-lg prose-li:text-default prose-strong:text-default prose-a:text-default prose-code:text-default">
          <Markdown>{content}</Markdown>
        </article>
        <div className="flex flex-col gap-4">
          <Card className="flex flex-col gap-8 p-8 md:p-10 xl:p-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-light md:text-3xl">Conclusion</h3>
              <p className="text-sm md:text-base font-chillax font-light">
                {conclusion}
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Image
                src={author}
                alt="Arik Andersson"
                className="size-15 rounded-full"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xl font-light">Arik Andersson</p>
                <p className="text-sm text-muted uppercase tracking-wider">
                  Next.js Expert
                </p>
              </div>
            </div>
          </Card>
          <SocialCards />
        </div>
      </div>
    </div>
  );
}
