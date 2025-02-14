import Link from "next/link";
import macbook from "~/images/macbook.png";
import Image from "next/image";
import ButtonScroll from "@/components/ui/button-scroll";

export default function Hero() {
  return (
    <div className="pt-28 px-6 md:pt-32 md:px-10 xl:pt-48 xl:px-12 space-y-12">
      <div className="flex flex-col justify-center items-center gap-8 md:gap-12">
        <div className="text-6xl md:text-7xl xl:text-9xl font-light text-center">
          <p>Web Design</p>
          <p className="font-gambetta">& Next.js</p>
        </div>
        <p className="max-w-150 text-lg font-chillax font-light text-center md:text-xl xl:text-2xl">
          Premium Web Design, Development, and SEO services to help your
          business stand out.
        </p>
        <Link href="#webdesign">
          <ButtonScroll>My services</ButtonScroll>
        </Link>
      </div>
      <div className="max-w-350 mx-auto">
        <Image src={macbook} alt="Macbook" />
      </div>
    </div>
  );
}
