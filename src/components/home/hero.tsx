import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "~/images/hero.png";

export default function Hero() {
  return (
    <section className="pt-12 px-6 sm:px-10 md:px-12 flex flex-col justify-center items-center">
      <Image
        className="w-60 sm:w-100 md:w-125"
        src={heroImage}
        alt="Hero image"
      />
      <div className="space-y-12">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-center text-heading-sm sm:text-heading-md md:text-heading-lg">
            <p className="font-light">Web Designer</p>
            <p className="font-light font-gambetta">& Developer</p>
          </div>
          <p className="font-chillax text-sm sm:text-md md:text-lg text-center max-w-150">
            Premium Web Design, Development, and SEO services to help your
            business stand out.
          </p>
        </div>
        <div className="flex justify-center">
          <Link href="#services" className="flex items-center gap-4 group">
            <div className="size-10 rounded-full border bg-muted flex justify-center items-center group-hover:border-default-hover group-hover:bg-muted-hover transition-colors duration-300">
              <ArrowDownIcon className="size-4" />
            </div>
            <div className="uppercase">My services</div>
          </Link>
        </div>
      </div>
    </section>
  );
}
