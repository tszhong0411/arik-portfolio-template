import { SOCIAL_CARDS } from "@/config";
import Card from "./ui/card";
import { ArrowRightIcon } from "lucide-react";
import SlideAnimation from "./slide-animation";

type SocialCardsProps = {
  all?: boolean;
};

export default function SocialCards({ all = false }: SocialCardsProps) {
  return (
    <SlideAnimation className="grid gap-4 md:grid-cols-3">
      {SOCIAL_CARDS.filter((card) => (all ? true : card.selected)).map(
        (card) => (
          <a key={card.title} href={card.href} target="_blank" rel="noopener">
            <Card className="group flex items-center justify-between p-4 transition-colors duration-300 hover:border-border-hover hover:bg-muted-hover">
              <div className="flex items-center gap-2 text-sm tracking-wider uppercase">
                <card.icon className="size-5" />
                {card.title}
              </div>
              <ArrowRightIcon className="size-4.5 transition-transform duration-300 group-hover:-rotate-45" />
            </Card>
          </a>
        ),
      )}
    </SlideAnimation>
  );
}
