import Link from "next/link";
import Image from "next/image";
import { SELECTED_WORK_CARDS, SelectedWorkCard } from "@/config";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import { cn } from "@/utils/cn";
import ButtonText, { buttonTextIconVariants } from "../ui/button-text";

export default function SelectedWork() {
  return (
    <section className="pt-16 md:pt-24 xl:pt-32 flex flex-col gap-8 max-w-350 mx-auto px-6 md:px-10 xl:px-12">
      <div className="flex flex-col gap-4 justify-center items-center md:flex-row md:justify-between">
        <h2 className="text-3xl md:text-4xl font-light">Selected Work</h2>
        {/* <ButtonLink href="/work" label="See All" /> */}
        <ButtonText icon={<ArrowUpRightIcon className="size-4" />} asChild>
          <Link href="/work">See All</Link>
        </ButtonText>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8">
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
          buttonTextIconVariants(),
          "size-10 opacity-0 transition-all group-hover:opacity-100 group-hover:-rotate-45 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        )}
      >
        <ArrowRightIcon className="size-5" />
      </div>
      <div className="bg-noise bg-repeat bg-[length:128px] absolute inset-0 z-10 opacity-10" />
      <Image src={image} alt={link.label} className="absolute inset-0" />
      <div className="p-6 absolute bottom-0 inset-x-0">
        <div className="backdrop-blur-[15px] bg-muted border py-3 px-4 rounded-xs flex justify-between items-center">
          <h3 className="text-2xl font-light">{link.label}</h3>
          <p className="text-sm">{category}</p>
        </div>
      </div>
      <div className="aspect-[1.33333] w-full" />
    </Link>
  );
}
