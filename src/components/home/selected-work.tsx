import Link from "next/link";
import ButtonLink, { buttonLinkVariant } from "./button-link";
import Image from "next/image";
import { SELECTED_WORK_CARDS, SelectedWorkCard } from "@/config";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import { cn } from "@/utils/cn";

export default function SelectedWork() {
  return (
    <section className="pt-16 sm:pt-24 md:pt-32 flex flex-col gap-8 max-w-350 mx-auto">
      <div className="flex flex-col gap-4 justify-center items-center sm:flex-row sm:justify-between">
        <h2 className="text-heading-h2-sm sm:text-heading-h2-md font-light">
          Selected Work
        </h2>
        <ButtonLink href="/work" label="See All" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
        {SELECTED_WORK_CARDS.map((card) => (
          <Card key={card.link.href} {...card} />
        ))}
      </div>
    </section>
  );
}

type CardProps = SelectedWorkCard;

function Card({ link, category, image }: CardProps) {
  return (
    <Link href={link.href} className="relative border rounded-xs group">
      <div
        className={cn(
          buttonLinkVariant(),
          "size-10 opacity-0 transition-opacity group-hover:opacity-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        )}
      >
        <ArrowRightIcon className="size-5 group-hover:-rotate-45 transition-transform duration-300" />
      </div>
      <div className="bg-noise bg-repeat bg-[length:128px] absolute inset-0 z-10 opacity-10" />
      <Image src={image} alt={link.label} className="absolute inset-0" />
      <div className="p-6 absolute bottom-0 inset-x-0">
        <div className="backdrop-blur-[15px] bg-muted border py-3 px-4 rounded-xs flex justify-between items-center">
          <h3 className="text-heading-h4-lg font-light">{link.label}</h3>
          <p className="text-meta">{category}</p>
        </div>
      </div>
      <div className="aspect-[1.33333] w-full" />
    </Link>
  );
}
