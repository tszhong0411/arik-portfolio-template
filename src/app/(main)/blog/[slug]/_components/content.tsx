import SlideAnimation from "@/components/slide-animation";
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
      className="px-6 pt-8 md:px-10 md:pt-10 xl:px-12 xl:pt-20 xl:pr-4"
    >
      <div className="mx-auto flex max-w-200 flex-col gap-8">
        <SlideAnimation asChild>
          <article className="prose prose-invert md:prose-lg prose-headings:font-light prose-headings:text-default prose-p:font-chillax prose-p:font-light prose-p:text-default prose-a:text-default prose-strong:text-default prose-code:text-default prose-li:text-default">
            <Markdown>{content}</Markdown>
          </article>
        </SlideAnimation>
        <div className="flex flex-col gap-4">
          <SlideAnimation asChild>
            <Card className="flex flex-col gap-8 p-8 md:p-10 xl:p-12">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-light md:text-3xl">Conclusion</h3>
                <p className="font-chillax text-sm font-light md:text-base">
                  {conclusion}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={author}
                  alt="Arik Andersson"
                  className="size-15 rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-xl font-light">Arik Andersson</p>
                  <p className="text-sm tracking-wider text-muted uppercase">
                    Next.js Expert
                  </p>
                </div>
              </div>
            </Card>
          </SlideAnimation>
          <SocialCards />
        </div>
      </div>
    </div>
  );
}
