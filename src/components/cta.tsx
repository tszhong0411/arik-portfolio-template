import { Fragment } from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import Marquee from "./ui/marquee";
import Button from "./ui/button";
import SlideAnimation from "./slide-animation";

export default function CTA() {
  return (
    <section className="bg-muted">
      <Marquee
        className="h-12 gap-8 border-y bg-muted"
        innerClassName="items-center gap-8 [--duration:20s] [--gap:32px]"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <Fragment key={i}>
            <div className="text-sm tracking-wider uppercase">
              Let&apos;s Talk
            </div>
            <div className="text-sm">+++</div>
          </Fragment>
        ))}
      </Marquee>
      <div className="px-6 py-16 md:px-10 md:py-24 xl:px-12 xl:py-40">
        <div className="mx-auto flex max-w-300 flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm tracking-wider uppercase">Project in mind?</p>
            <SlideAnimation className="text-center text-6xl font-light md:text-7xl xl:text-9xl">
              <p>Let’s make your</p>
              <p className="font-gambetta italic">Website shine</p>
            </SlideAnimation>
            <p className="max-w-125 text-center font-chillax text-xl font-light">
              Premium web design, development, and SEO services to help your
              business stand out.
            </p>
          </div>
          <Button className="group" variant="primary" asChild>
            <Link href="/contact">
              Get in touch{" "}
              <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
