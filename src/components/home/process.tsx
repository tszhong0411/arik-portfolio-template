import { cn } from "@/utils/cn";
import { ArrowDownIcon } from "lucide-react";
import Label from "../ui/label";
import { PROCESS_STEPS, ProcessStep } from "@/config";
import { buttonTextIconVariants } from "../ui/button-text";
import Card from "../ui/card";
import SlideAnimation from "../slide-animation";

export default function Process() {
  return (
    <section className="mx-auto flex max-w-350 flex-col items-center justify-center px-6 pt-16 md:px-10 md:pt-24 xl:px-12 xl:pt-40">
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <SlideAnimation direction="down" asChild>
            <p className="text-sm tracking-wider uppercase">The process</p>
          </SlideAnimation>
          <SlideAnimation className="flex flex-col items-center gap-3 text-center text-6xl font-light md:text-7xl xl:text-8xl">
            <p>Your Website</p>
            <p className="font-gambetta italic">in 5 steps</p>
            <p className="max-w-125 text-center font-chillax text-lg font-light md:text-xl">
              Our process ensures that we create a website tailored to your
              business needs.
            </p>
          </SlideAnimation>
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
    <div className="flex w-full justify-start xl:justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className={cn(buttonTextIconVariants(), "size-10")}>
          <ArrowDownIcon className="size-5" />
        </div>
        <div className="h-7.5 w-px bg-border xl:h-15" />
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
        "flex items-center gap-4 font-chillax text-sm font-light md:text-base",
        className,
      )}
      {...rest}
    >
      <div className="size-1 rounded-full bg-primary" />
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
    <div className="flex w-full justify-start gap-6 md:gap-12 xl:justify-center xl:gap-20">
      <div
        className={cn(
          "hidden flex-1 xl:block",
          isEven ? "xl:order-1" : "xl:order-3",
        )}
      />
      <div className="flex flex-col items-center gap-4 xl:order-2">
        <div
          className={cn(
            "w-px shrink-0 bg-border xl:flex-1",
            index === 0 ? "h-4 md:h-12" : "h-8 md:h-16",
          )}
        />
        <div
          className={cn(buttonTextIconVariants(), "size-10 shrink-0 text-sm")}
        >
          {number}
        </div>
        <div
          className={cn(
            "h-full w-px bg-border xl:flex-1",
            lastStep && "bg-transparent",
          )}
        />
      </div>
      <SlideAnimation
        className={cn(
          "flex flex-1 items-center justify-center py-6 xl:py-0",
          index === 0 && "pt-0",
          isEven ? "xl:order-3" : "xl:order-1",
        )}
      >
        <Card className="relative flex flex-col justify-between gap-8 p-8 md:p-10 xl:p-12">
          <Label className="md:absolute md:top-6 md:right-6">{label}</Label>
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm tracking-wider text-muted uppercase">
                {subtitle}
              </p>
              <h3 className="text-xl font-light tracking-wider uppercase md:text-2xl">
                {title}
              </h3>
            </div>
            <p className="font-chillax text-sm font-light md:text-base">
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
      </SlideAnimation>
    </div>
  );
}
