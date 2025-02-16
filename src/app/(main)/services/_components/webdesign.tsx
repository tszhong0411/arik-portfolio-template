import SlideAnimation from "@/components/slide-animation";
import Card from "@/components/ui/card";
import { SERVICES } from "@/config";
import Image from "next/image";
import { Fragment } from "react";

export default function Webdesign() {
  return (
    <div className="px-6 pt-12 pb-16 md:px-10 md:pt-16 md:pb-24 xl:px-12 xl:pt-32 xl:pb-40">
      <div className="mx-auto flex max-w-300 flex-col gap-6 md:gap-8">
        {SERVICES.map((service) => (
          <SlideAnimation key={service.category} asChild>
            <Card
              id={service.id}
              className="flex flex-col gap-12 p-8 md:p-12 xl:p-16"
            >
              <div className="space-y-4">
                <p className="text-sm tracking-wider uppercase">
                  {service.category}
                </p>
                <h2 className="text-4xl font-light">{service.title}</h2>
              </div>
              <div className="relative overflow-hidden rounded-xs border">
                <Image src={service.image} alt={service.title} />
                <div className="absolute inset-0 z-10 bg-noise bg-[length:128px] bg-repeat opacity-10" />
              </div>
              <div className="space-y-8 md:space-y-10 xl:space-y-12">
                {service.items.map((item, i) => (
                  <Fragment key={item.title}>
                    <div className="flex flex-col gap-4 xl:flex-row xl:gap-2">
                      <p className="w-62.5 shrink-0 text-sm tracking-wider uppercase">
                        {item.title}
                      </p>
                      <p className="font-chillax text-sm font-light md:text-base">
                        {item.description}
                      </p>
                    </div>
                    {i !== service.items.length - 1 && (
                      <div className="h-px w-full bg-border" />
                    )}
                  </Fragment>
                ))}
              </div>
            </Card>
          </SlideAnimation>
        ))}
      </div>
    </div>
  );
}
