import Image from "next/image";
import { type Testimonial, TESTIMONIALS } from "@/config";

export default function Testimonials() {
  return (
    <section className="pt-12 sm:pt-16 md:pt-40 flex flex-col gap-12 max-w-300 mx-auto px-6 sm:px-10 md:px-12">
      <div className="flex flex-col justify-center items-center gap-2">
        <Title />
        <Description />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 md:gap-8">
        {TESTIMONIALS.map(({ list }, i) => (
          <div key={i} className="space-y-4 sm:space-y-6 md:space-y-8">
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
      <p className="text-heading-xs sm:text-heading-md md:text-heading-lg font-light">
        What my
      </p>
      <p className="text-heading-sm sm:text-heading-md md:text-heading-lg font-light font-gambetta italic">
        clients say
      </p>
    </>
  );
}

function Description() {
  return (
    <p className="text-p-medium-md sm:text-p-medium-md max-w-125 text-center font-chillax font-light">
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
    <div className="p-8 md:p-12 border bg-muted rounded-xs space-y-8">
      <div className="space-y-8">
        {logo}
        <div className="space-y-2">
          <p className="text-heading-h4-sm sm:text-heading-h4-lg font-light">
            {title}
          </p>
          <p className="text-p-default-sm sm:text-p-default-md font-chillax font-light">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Image src={image} alt={name} className="size-15 rounded-full" />
        <div>
          <p className="text-meta uppercase">{name}</p>
          <p className="text-p-small font-chillax font-light">{company}</p>
        </div>
      </div>
    </div>
  );
}
