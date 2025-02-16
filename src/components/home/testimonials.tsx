import Image from "next/image";
import { type Testimonial, TESTIMONIALS } from "@/config";
import Card from "../ui/card";

export default function Testimonials() {
  return (
    <section className="pt-12 md:pt-16 xl:pt-40 flex flex-col gap-12 max-w-300 mx-auto px-6 md:px-10 xl:px-12">
      <div className="flex flex-col justify-center items-center gap-2">
        <Title />
        <Description />
      </div>
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

function Title() {
  return (
    <>
      <p className="text-5xl md:text-7xl xl:text-8xl font-light">What my</p>
      <p className="text-5xl md:text-7xl xl:text-8xl font-light font-gambetta italic">
        clients say
      </p>
    </>
  );
}

function Description() {
  return (
    <p className="text-lg max-w-125 text-center font-chillax font-light">
      See what my clients have to say about working with me and the results I
      helped them achieve.
    </p>
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
    <Card className="p-8 xl:p-12 space-y-8">
      <div className="space-y-8">
        {logo}
        <div className="space-y-2">
          <p className="text-xl md:text-2xl font-light">{title}</p>
          <p className="text-sm md:text-base font-chillax font-light">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Image src={image} alt={name} className="size-15 rounded-full" />
        <div>
          <p className="text-sm uppercase tracking-wider">{name}</p>
          <p className="text-sm font-chillax font-light">{company}</p>
        </div>
      </div>
    </Card>
  );
}
