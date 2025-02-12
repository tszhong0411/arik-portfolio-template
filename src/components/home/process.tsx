import { cn } from "@/utils/cn";
import { buttonLinkVariant } from "./button-link";
import { ArrowDownIcon } from "lucide-react";

export default function Process() {
  return (
    <section className="pt-16 max-w-350 mx-auto flex flex-col justify-center items-center sm:pt-24 md:pt-40">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <Title />
          <Description />
        </div>
        <InitialLine />
      </div>
    </section>
  );
}

function Title() {
  return (
    <>
      <p className="text-meta uppercase">The process</p>
      <p className="text-heading-sm sm:text-heading-md md:text-heading-lg font-light">
        Your Website
      </p>
      <p className="text-heading-sm sm:text-heading-md md:text-heading-lg font-light font-gambetta italic">
        in 5 steps
      </p>
    </>
  );
}

function Description() {
  return (
    <p className="text-p-large-sm sm:text-p-large-md md:text-p-large-lg max-w-125 text-center font-chillax font-light">
      Our process ensures that we create a website tailored to your business
      needs.
    </p>
  );
}

function InitialLine() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className={cn(buttonLinkVariant(), "size-10")}>
        <ArrowDownIcon className="size-5" />
      </div>
      <div className="w-px h-15 bg-border" />
    </div>
  );
}
