import { CARDS, type Card } from "@/config";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <section
      id="services"
      className="pt-12 sm:pt-16 md:pt-20 flex flex-col gap-4 md:flex-row md:gap-8"
    >
      {CARDS.map((card) => (
        <Card key={card.number} {...card} />
      ))}
    </section>
  );
}

type CardProps = Card;

function Card({ number, title, description, link }: CardProps) {
  return (
    <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-between gap-8 border border-[#343230] bg-muted flex-1">
      <div className="space-y-2">
        <div className="space-y-1">
          <div className="text-muted text-meta">{number}</div>
          <h4 className="text-heading-h4-sm sm:text-heading-h4-lg uppercase font-light">
            {title}
          </h4>
        </div>
        <div className="text-p-default-sm sm:text-p-default-md font-chillax font-light">
          {description}
        </div>
      </div>
      <div className="w-max">
        <Link href={link.href} className="flex items-center gap-3 group">
          <div className="size-8 rounded-full border bg-muted flex justify-center items-center group-hover:border-default-hover group-hover:bg-muted-hover transition-colors duration-300">
            <ArrowRightIcon className="size-4" />
          </div>
          <div className="uppercase text-meta">{link.label}</div>
        </Link>
      </div>
    </div>
  );
}
