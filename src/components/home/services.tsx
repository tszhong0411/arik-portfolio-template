import { SERVICE_CARDS, type ServiceCard } from "@/config";
import ButtonText from "../ui/button-text";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import Card from "../ui/card";

export default function Services() {
  return (
    <section
      id="services"
      className="pt-12 px-6 flex flex-col gap-4 max-w-350 mx-auto xl:flex-row xl:gap-8 md:px-10 xl:px-12 md:pt-16 xl:pt-20"
    >
      {SERVICE_CARDS.map((card) => (
        <ServiceCard key={card.number} {...card} />
      ))}
    </section>
  );
}

type ServiceCardProps = ServiceCard;

function ServiceCard({ number, title, description, link }: ServiceCardProps) {
  return (
    <Card className="p-8 md:p-10 xl:p-12 flex flex-col justify-between gap-8 flex-1">
      <div className="space-y-2">
        <div className="space-y-1">
          <div className="text-muted text-sm">{number}</div>
          <h4 className="text-xl md:text-2xl uppercase font-light tracking-wider">
            {title}
          </h4>
        </div>
        <div className="text-sm md:text-base font-chillax font-light">
          {description}
        </div>
      </div>
      <div className="w-max">
        <ButtonText icon={<ArrowUpRightIcon className="size-4" />} asChild>
          <Link href={link.href}>{link.label}</Link>
        </ButtonText>
      </div>
    </Card>
  );
}
