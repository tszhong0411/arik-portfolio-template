import { SERVICE_CARDS, type ServiceCard } from "@/config";
import ButtonText from "../ui/button-text";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import Card from "../ui/card";
import SlideAnimation from "../slide-animation";

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto flex max-w-350 flex-col gap-4 px-6 pt-12 md:px-10 md:pt-16 xl:flex-row xl:gap-8 xl:px-12 xl:pt-20"
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
    <SlideAnimation asChild>
      <Card className="flex flex-1 flex-col justify-between gap-8 p-8 md:p-10 xl:p-12">
        <div className="space-y-2">
          <div className="space-y-1">
            <div className="text-sm text-muted">{number}</div>
            <h4 className="text-xl font-light tracking-wider uppercase md:text-2xl">
              {title}
            </h4>
          </div>
          <div className="font-chillax text-sm font-light md:text-base">
            {description}
          </div>
        </div>
        <div className="w-max">
          <ButtonText icon={<ArrowUpRightIcon className="size-4" />} asChild>
            <Link href={link.href}>{link.label}</Link>
          </ButtonText>
        </div>
      </Card>
    </SlideAnimation>
  );
}
