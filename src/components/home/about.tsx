import { cn } from "@/utils/cn";
import Image from "next/image";
import arik from "~/images/arik.png";
import { FaTwitter, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";
import { buttonTextIconVariants } from "../ui/button-text";

export default function About() {
  return (
    <section className="py-16 flex flex-col justify-center items-center gap-8 md:gap-16 md:pb-24 xl:pt-24 xl:pb-40">
      <div className="flex flex-col justify-center items-center md:flex-row gap-4 md:gap-0 xl:gap-8 overflow-x-hidden">
        <Name />
        <Image
          src={arik}
          alt="Arik Andersson"
          className="max-w-58.5 md:max-w-75 xl:max-w-100"
        />
        <Name className="hidden md:block" />
      </div>
      <div className="px-12">
        <div className="grid gap-4 xl:gap-20 xl:grid-cols-2 xl:max-w-300">
          <div className="text-3xl md:text-4xl font-light text-center xl:text-start">
            <h2>A website that leaves</h2>
            <h2 className="font-gambetta italic">a lasting impression!</h2>
          </div>
          <div className="space-y-8">
            <p className="md:text-lg font-chillax font-light text-center xl:text-start">
              Hi, I&apos;m Arik Andersson - a freelancer specializing in premium
              web design, development, and SEO services. I&apos;m passionate
              about creating unique and effective solutions for my clients, and
              I bring a personal touch to every project. Let&apos;s work
              together to bring your vision to life!
            </p>
            <div className="flex justify-center items-center gap-2 xl:justify-start">
              <div className={cn(buttonTextIconVariants(), "size-10")}>
                <FaTwitter size={20} />
              </div>
              <div className={cn(buttonTextIconVariants(), "size-10")}>
                <FaInstagram size={20} />
              </div>
              <div className={cn(buttonTextIconVariants(), "size-10")}>
                <FaDribbble size={20} />
              </div>
              <div className={cn(buttonTextIconVariants(), "size-10")}>
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
        className={cn("text-3xl font-light md:text-5xl xl:text-9xl", className)}
        {...rest}
      >
        Arik <span className="font-gambetta font-light italic">Andersson</span>
      </p>
    </div>
  );
}
