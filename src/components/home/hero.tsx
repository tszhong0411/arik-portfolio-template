import Image from "next/image";
import heroImage from "~/images/arik.png";
import Link from "next/link";
import ButtonScroll from "../ui/button-scroll";
import SlideAnimation from "../slide-animation";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 pt-12 md:px-10 xl:px-12">
      <Image
        className="w-60 md:w-100 xl:w-125"
        src={heroImage}
        alt="Hero image"
      />
      <SlideAnimation className="space-y-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-center text-6xl sm:text-7xl xl:text-9xl">
            <p className="font-light">Web Designer</p>
            <p className="font-gambetta font-light">& Developer</p>
          </div>
          <p className="max-w-150 text-center font-chillax text-lg md:text-2xl xl:text-lg">
            Premium Web Design, Development, and SEO services to help your
            business stand out.
          </p>
        </div>
        <div className="flex justify-center">
          <Link href="#services">
            <ButtonScroll>My services</ButtonScroll>
          </Link>
        </div>
      </SlideAnimation>
    </section>
  );
}
