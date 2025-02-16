"use client";

import { cn } from "@/utils/cn";
import { ArrowDownIcon } from "lucide-react";
import Label from "../ui/label";
import { PROCESS_STEPS, ProcessStep } from "@/config";
import { buttonTextIconVariants } from "../ui/button-text";
import Card from "../ui/card";
import { motion } from "motion/react";

export default function Process() {
  return (
    <section className="pt-16 max-w-350 mx-auto flex flex-col justify-center items-center md:pt-24 xl:pt-40 px-6 md:px-10 xl:px-12">
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <div className="flex flex-col justify-center items-center gap-4">
          <motion.p
            className="text-sm uppercase tracking-wider"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.5, 1, 0.89, 1],
            }}
            viewport={{
              once: true,
            }}
          >
            The process
          </motion.p>
          <motion.div
            className="flex flex-col gap-3 items-center text-6xl font-light text-center md:text-7xl xl:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.5, 1, 0.89, 1],
            }}
            viewport={{
              once: true,
            }}
          >
            <p>Your Website</p>
            <p className="font-gambetta italic">in 5 steps</p>
            <p className="text-lg md:text-xl max-w-125 text-center font-chillax font-light">
              Our process ensures that we create a website tailored to your
              business needs.
            </p>
          </motion.div>
        </div>
        <InitialLine />
      </div>
      {PROCESS_STEPS.map((step, i) => (
        <Step key={step.number} index={i} {...step} />
      ))}
    </section>
  );
}

function InitialLine() {
  return (
    <div className="flex justify-start xl:justify-center w-full">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className={cn(buttonTextIconVariants(), "size-10")}>
          <ArrowDownIcon className="size-5" />
        </div>
        <div className="w-px h-7.5 xl:h-15 bg-border" />
      </div>
    </div>
  );
}

type ListProps = React.ComponentProps<"ul">;

function List({ className, ...rest }: ListProps) {
  return <ul className={cn("space-y-2 xl:space-y-4", className)} {...rest} />;
}

type ListItemProps = React.ComponentProps<"li">;

function ListItem({ className, children, ...rest }: ListItemProps) {
  return (
    <li
      className={cn(
        "flex items-center gap-4 text-sm md:text-base font-chillax font-light",
        className
      )}
      {...rest}
    >
      <div className="size-1 bg-primary rounded-full" />
      {children}
    </li>
  );
}

type StepProps = ProcessStep;

function Step({
  number,
  label,
  title,
  subtitle,
  description,
  items,
  index,
}: StepProps & { index: number }) {
  const isEven = index % 2 === 0;
  const lastStep = index === PROCESS_STEPS.length - 1;

  return (
    <div className="w-full flex justify-start xl:justify-center gap-6 md:gap-12 xl:gap-20">
      <div
        className={cn(
          "hidden flex-1 xl:block",
          isEven ? "xl:order-1" : "xl:order-3"
        )}
      />
      <div className="flex flex-col gap-4 items-center xl:order-2">
        <div
          className={cn(
            "w-px bg-border shrink-0 xl:flex-1",
            index === 0 ? "h-4 md:h-12" : "h-8 md:h-16"
          )}
        />
        <div
          className={cn(buttonTextIconVariants(), "size-10 text-sm shrink-0")}
        >
          {number}
        </div>
        <div
          className={cn(
            "w-px h-full bg-border xl:flex-1",
            lastStep && "bg-transparent"
          )}
        />
      </div>
      <motion.div
        className={cn(
          "flex flex-1 justify-center items-center py-6 xl:py-0",
          index === 0 && "pt-0",
          isEven ? "xl:order-3" : "xl:order-1"
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.5, 1, 0.89, 1],
        }}
        viewport={{
          once: true,
        }}
      >
        <Card className="p-8 md:p-10 xl:p-12 flex flex-col justify-between gap-8 relative">
          <Label className="md:absolute md:right-6 md:top-6">{label}</Label>
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm text-muted uppercase tracking-wider">
                {subtitle}
              </p>
              <h3 className="text-xl font-light uppercase tracking-wider md:text-2xl">
                {title}
              </h3>
            </div>
            <p className="text-sm font-chillax font-light md:text-base">
              {description}
            </p>
          </div>
          {items && (
            <List>
              {items.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
          )}
        </Card>
      </motion.div>
    </div>
  );
}
