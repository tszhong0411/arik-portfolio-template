import SlideAnimation from "@/components/slide-animation";

export default function Hero() {
  return (
    <div className="pt-28 px-6 md:pt-32 md:px-10 xl:pt-48 xl:px-12">
      <div className="max-w-350 mx-auto flex flex-col items-center gap-2">
        <SlideAnimation direction="down" asChild>
          <p className="text-sm text-muted">Pricing</p>
        </SlideAnimation>
        <SlideAnimation>
          <div className="text-4xl font-light text-center md:text-5xl xl:text-7xl">
            <p>Experience the Power of</p>
            <p className="font-gambetta italic">Premium Web Design</p>
          </div>
        </SlideAnimation>
        <SlideAnimation>
          <p className="text-sm font-chillax font-light text-center md:text-base">
            Choose a package that suits your needs and budget. Transparent
            pricing with no hidden fees.
          </p>
        </SlideAnimation>
      </div>
    </div>
  );
}
