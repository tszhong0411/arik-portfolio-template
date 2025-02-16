import SlideAnimation from "@/components/slide-animation";
import { STATS } from "@/config";

export default function Stats() {
  return (
    <div className="px-6 pt-12 md:px-10 md:pt-16 xl:px-12 xl:pt-20">
      <div className="mx-auto grid max-w-300 grid-cols-2 gap-8 md:gap-12 xl:grid-cols-4">
        {STATS.map((stat, i) => (
          <div key={i} className="space-y-1 text-center">
            <SlideAnimation direction="down" asChild>
              <p className="text-sm tracking-wider text-muted uppercase">
                {stat.title}
              </p>
            </SlideAnimation>
            <SlideAnimation asChild>
              <p className="text-4xl font-light md:text-5xl xl:text-6xl">
                {stat.number}
              </p>
            </SlideAnimation>
          </div>
        ))}
      </div>
    </div>
  );
}
