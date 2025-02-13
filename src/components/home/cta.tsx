import { Fragment } from "react";
import Marquee from "../ui/marquee";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-muted">
      <Marquee
        className="bg-muted border-y h-12 gap-8"
        innerClassName="items-center gap-8 [--gap:32px] [--duration:25s]"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <Fragment key={i}>
            <div className="uppercase text-meta">Let&apos;s Talk</div>
            <div className="text-meta">+++</div>
          </Fragment>
        ))}
      </Marquee>
      <div className="py-16 px-6 sm:px-10 sm:py-24 md:px-12 md:py-40">
        <div className="flex flex-col items-center max-w-300 gap-12 mx-auto">
          <div className="flex flex-col items-center gap-4">
            <p className="uppercase text-meta">Project in mind?</p>
            <div className="text-heading-sm sm:text-heading-md md:text-heading-xl font-light text-center">
              <p>Let’s make your</p>
              <p className="font-gambetta italic">Website shine</p>
            </div>
            <p className="text-p-large-lg font-chillax font-light max-w-125 text-center">
              Premium web design, development, and SEO services to help your
              business stand out.
            </p>
          </div>
          <Link
            href="/contact"
            className="py-2.5 px-4 rounded-xs inline-flex justify-center items-center gap-2 bg-primary text-inverse uppercase text-button group hover:bg-primary-hover transition-colors duration-300"
          >
            Get in touch{" "}
            <ArrowUpRightIcon className="size-4 group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
