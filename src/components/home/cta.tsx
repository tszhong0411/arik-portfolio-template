import { Fragment } from "react";
import Marquee from "../ui/marquee";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import Button from "../ui/button";

export default function CTA() {
  return (
    <section className="bg-muted">
      <Marquee
        className="bg-muted border-y h-12 gap-8"
        innerClassName="items-center gap-8 [--gap:32px] [--duration:25s]"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <Fragment key={i}>
            <div className="uppercase text-sm">Let&apos;s Talk</div>
            <div className="text-sm">+++</div>
          </Fragment>
        ))}
      </Marquee>
      <div className="py-16 px-6 md:px-10 md:py-24 xl:px-12 xl:py-40">
        <div className="flex flex-col items-center max-w-300 gap-12 mx-auto">
          <div className="flex flex-col items-center gap-4">
            <p className="uppercase text-sm">Project in mind?</p>
            <div className="text-6xl md:text-7xl xl:text-9xl font-light text-center">
              <p>Let’s make your</p>
              <p className="font-gambetta italic">Website shine</p>
            </div>
            <p className="text-xl font-chillax font-light max-w-125 text-center">
              Premium web design, development, and SEO services to help your
              business stand out.
            </p>
          </div>
          <Button className="group" variant="primary" asChild>
            <Link href="/contact">
              Get in touch{" "}
              <ArrowUpRightIcon className="size-4 group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
