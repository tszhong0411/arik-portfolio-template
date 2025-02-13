import Image from "next/image";
import heroImage from "~/images/arik.png";
import Link from "next/link";
import ButtonScroll from "../ui/button-scroll";

export default function Hero() {
  return (
    <section className="pt-12 px-6 md:px-10 xl:px-12 flex flex-col justify-center items-center">
      <Image
        className="w-60 md:w-100 xl:w-125"
        src={heroImage}
        alt="Hero image"
      />
      <div className="space-y-12">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-center text-6xl sm:text-7xl xl:text-9xl">
            <p className="font-light">Web Designer</p>
            <p className="font-light font-gambetta">& Developer</p>
          </div>
          <p className="font-chillax text-lg md:text-2xl xl:text-lg text-center max-w-150">
            Premium Web Design, Development, and SEO services to help your
            business stand out.
          </p>
        </div>
        <div className="flex justify-center">
          <Link href="#services">
            <ButtonScroll>My services</ButtonScroll>
          </Link>
        </div>
      </div>
    </section>
  );
}
