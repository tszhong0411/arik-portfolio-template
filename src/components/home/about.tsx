import { cn } from "@/utils/cn";
import Image from "next/image";
import arik from "~/images/arik.png";
import { buttonLinkVariant } from "./button-link";
import { FaTwitter, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-16 flex flex-col justify-center items-center gap-8 sm:gap-16 sm:pb-24 md:pt-24 md:pb-40">
      <div className="flex flex-col justify-center items-center sm:flex-row gap-4 sm:gap-0 md:gap-8 overflow-x-hidden">
        <Name />
        <Image
          src={arik}
          alt="Arik Andersson"
          className="max-w-58.5 sm:max-w-75 md:max-w-100"
        />
        <Name className="hidden sm:block" />
      </div>
      <div className="px-12">
        <div className="grid gap-4 md:gap-20 md:grid-cols-2 md:max-w-300">
          <div className="text-heading-h2-sm sm:text-heading-h2-md font-light text-center md:text-start">
            <h2>A website that leaves</h2>
            <h2 className="font-gambetta italic">a lasting impression!</h2>
          </div>
          <div className="space-y-8">
            <p className="text-p-medium-sm sm:text-p-medium-md font-chillax font-light text-center md:text-start">
              Hi, I&apos;m Arik Andersson - a freelancer specializing in premium
              web design, development, and SEO services. I&apos;m passionate
              about creating unique and effective solutions for my clients, and
              I bring a personal touch to every project. Let&apos;s work
              together to bring your vision to life!
            </p>
            <div className="flex justify-center items-center gap-2 md:justify-start">
              <div className={cn(buttonLinkVariant(), "size-10")}>
                <FaTwitter size={20} />
              </div>
              <div className={cn(buttonLinkVariant(), "size-10")}>
                <FaInstagram size={20} />
              </div>
              <div className={cn(buttonLinkVariant(), "size-10")}>
                <FaDribbble size={20} />
              </div>
              <div className={cn(buttonLinkVariant(), "size-10")}>
                <FaBehance size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type NameProps = React.ComponentProps<"p">;

function Name({ className, ...rest }: NameProps) {
  return (
    <div className="flex shrink-0">
      <p
        className={cn(
          "text-[32px] leading-[95%] font-light sm:text-5xl md:text-[144px] md:tracking-[-1px]",
          className
        )}
        {...rest}
      >
        Arik <span className="font-gambetta font-light italic">Andersson</span>
      </p>
    </div>
  );
}
