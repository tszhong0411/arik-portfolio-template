import SlideAnimation from "@/components/slide-animation";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Label from "@/components/ui/label";
import { PRICING_CARDS } from "@/config";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

export default function Pricing() {
  return (
    <div className="pt-8 px-6 md:pt-12 md:px-10 xl:pt-16 xl:px-12">
      <div className="max-w-350 mx-auto flex flex-col items-center gap-4 md:gap-6 md:flex-row md:items-start xl:gap-8">
        {PRICING_CARDS.map((card) => (
          <SlideAnimation key={card.plan} asChild>
            <Card className="flex flex-col gap-8 p-8 relative xl:p-12">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <p className="text-sm uppercase tracking-wider">
                    {card.plan}
                  </p>
                  <h3 className="text-2xl font-light md:text-3xl">
                    {card.price}
                  </h3>
                  <p className="text-sm font-chillax font-light md:text-base">
                    {card.description}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {card.features.map((feature, i) => (
                    <Fragment key={`${card.plan}-${feature}`}>
                      <p className="text-sm uppercase tracking-wider">
                        {feature}
                      </p>
                      {i !== card.features.length - 1 && (
                        <div className="w-full h-px bg-border" />
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">
                  Get Started <ArrowUpRightIcon className="size-4" />
                </Link>
              </Button>
              {card.isPopular && (
                <Label className="absolute top-6 right-6 md:top-4 md:right-4 xl:top-6 xl:right-6">
                  Popular
                </Label>
              )}
            </Card>
          </SlideAnimation>
        ))}
      </div>
    </div>
  );
}
