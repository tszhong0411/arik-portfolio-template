import Card from "@/components/ui/card";
import { SERVICES } from "@/config";
import Image from "next/image";
import { Fragment } from "react";

export default function Webdesign() {
  return (
    <div className="pt-12 pb-16 px-6 md:pt-16 md:pb-24 md:px-10 xl:pt-32 xl:pb-40 xl:px-12">
      <div className="max-w-300 mx-auto flex flex-col gap-6 md:gap-8">
        {SERVICES.map((service) => (
          <Card
            key={service.category}
            id={service.id}
            className="flex flex-col gap-12 p-8 md:p-12 xl:p-16"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wider">
                {service.category}
              </p>
              <h2 className="text-4xl font-light">{service.title}</h2>
            </div>
            <div className="relative border rounded-xs overflow-hidden">
              <Image src={service.image} alt={service.title} />
              <div className="bg-noise bg-repeat bg-[length:128px] absolute inset-0 z-10 opacity-10" />
            </div>
            <div className="space-y-8 md:space-y-10 xl:space-y-12">
              {service.items.map((item, i) => (
                <Fragment key={item.title}>
                  <div className="flex flex-col gap-4 xl:flex-row xl:gap-2">
                    <p className="text-sm uppercase w-62.5 shrink-0 tracking-wider">
                      {item.title}
                    </p>
                    <p className="text-sm md:text-base font-chillax font-light">
                      {item.description}
                    </p>
                  </div>
                  {i !== service.items.length - 1 && (
                    <div className="w-full h-px bg-border" />
                  )}
                </Fragment>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
