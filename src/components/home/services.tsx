import { SERVICE_CARDS, type ServiceCard } from "@/config";
import ButtonLink from "./button-link";

export default function Services() {
  return (
    <section
      id="services"
      className="pt-12 sm:pt-16 md:pt-20 flex flex-col gap-4 md:flex-row md:gap-8"
    >
      {SERVICE_CARDS.map((card) => (
        <Card key={card.number} {...card} />
      ))}
    </section>
  );
}

type CardProps = ServiceCard;

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
        <ButtonLink href={link.href} label={link.label} />
      </div>
    </div>
  );
}
