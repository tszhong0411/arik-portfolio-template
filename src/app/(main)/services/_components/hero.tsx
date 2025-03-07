import Link from "next/link";
import macbook from "~/images/macbook.png";
import Image from "next/image";
import ButtonScroll from "@/components/ui/button-scroll";
import SlideAnimation from "@/components/slide-animation";

export default function Hero() {
  return (
    <SlideAnimation className="px-6 pt-28 md:px-10 md:pt-32 xl:px-12 xl:pt-48">
      <div className="mx-auto flex max-w-350 flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div className="space-y-3">
            <div className="flex flex-col items-center text-6xl font-light md:text-7xl xl:text-9xl">
              <p>Web Design</p>
              <p className="font-gambetta italic">& Next.js</p>
            </div>
            <p className="max-w-150 text-center font-chillax text-lg font-light md:text-xl">
              Premium Web Design, Development, and SEO services to help your
              business stand out.
            </p>
          </div>
          <Link href="#webdesign">
            <ButtonScroll>My services</ButtonScroll>
          </Link>
        </div>
        <div>
          <Image src={macbook} alt="Macbook" />
        </div>
      </div>
    </SlideAnimation>
  );
}
