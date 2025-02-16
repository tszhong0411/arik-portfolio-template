import SlideAnimation from "@/components/slide-animation";

export default function Hero() {
  return (
    <div className="px-6 pt-28 md:px-10 md:pt-32 xl:px-12 xl:pt-48">
      <div className="mx-auto flex max-w-350 flex-col items-center gap-2">
        <SlideAnimation direction="down" asChild>
          <p className="text-sm text-muted">Pricing</p>
        </SlideAnimation>
        <SlideAnimation>
          <div className="text-center text-4xl font-light md:text-5xl xl:text-7xl">
            <p>Experience the Power of</p>
            <p className="font-gambetta italic">Premium Web Design</p>
          </div>
        </SlideAnimation>
        <SlideAnimation>
          <p className="text-center font-chillax text-sm font-light md:text-base">
            Choose a package that suits your needs and budget. Transparent
            pricing with no hidden fees.
          </p>
        </SlideAnimation>
      </div>
    </div>
  );
}
