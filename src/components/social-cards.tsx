import { SOCIAL_CARDS } from "@/config";
import Card from "./ui/card";
import { ArrowRightIcon } from "lucide-react";

type SocialCardsProps = {
  all?: boolean;
};

export default function SocialCards({ all = false }: SocialCardsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {SOCIAL_CARDS.filter((card) => (all ? true : card.selected)).map(
        (card) => (
          <Card
            key={card.title}
            className="p-4 flex justify-between items-center group hover:bg-muted-hover hover:border-border-hover transition-colors duration-300"
          >
            <div className="flex gap-2 items-center uppercase tracking-wider text-sm">
              <card.icon className="size-5" />
              {card.title}
            </div>
            <ArrowRightIcon className="size-4.5 group-hover:-rotate-45 transition-transform duration-300" />
          </Card>
        )
      )}
    </div>
  );
}
