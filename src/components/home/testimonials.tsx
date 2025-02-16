import Image from "next/image";
import { type Testimonial, TESTIMONIALS } from "@/config";
import Card from "../ui/card";
import SlideAnimation from "../slide-animation";

export default function Testimonials() {
  return (
    <section className="mx-auto flex max-w-300 flex-col gap-12 px-6 pt-12 md:px-10 md:pt-16 xl:px-12 xl:pt-40">
      <SlideAnimation className="flex flex-col items-center justify-center gap-2 text-5xl font-light md:text-7xl xl:text-8xl">
        <p>What my</p>
        <p className="font-gambetta italic">clients say</p>
        <p className="max-w-125 text-center font-chillax text-lg font-light">
          See what my clients have to say about working with me and the results
          I helped them achieve.
        </p>
      </SlideAnimation>
      <div className="flex flex-col gap-4 md:flex-row md:gap-6 xl:gap-8">
        {TESTIMONIALS.map(({ list }, i) => (
          <div key={i} className="space-y-4 md:space-y-6 xl:space-y-8">
            {list.map((testimonial) => (
              <Testimonial key={testimonial.name} {...testimonial} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

type TestimonialProps = Testimonial;

function Testimonial({
  logo,
  title,
  description,
  image,
  name,
  company,
}: TestimonialProps) {
  return (
    <SlideAnimation asChild>
      <Card className="space-y-8 p-8 xl:p-12">
        <div className="space-y-8">
          {logo}
          <div className="space-y-2">
            <p className="text-xl font-light md:text-2xl">{title}</p>
            <p className="font-chillax text-sm font-light md:text-base">
              {description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image src={image} alt={name} className="size-15 rounded-full" />
          <div>
            <p className="text-sm tracking-wider uppercase">{name}</p>
            <p className="font-chillax text-sm font-light">{company}</p>
          </div>
        </div>
      </Card>
    </SlideAnimation>
  );
}
