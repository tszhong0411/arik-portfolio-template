import { cn } from "@/utils/cn";
import { buttonLinkVariant } from "./button-link";
import { ArrowDownIcon } from "lucide-react";
import Label from "../ui/label";
import { PROCESS_STEPS, ProcessStep } from "@/config";

export default function Process() {
  return (
    <section className="pt-16 max-w-350 mx-auto flex flex-col justify-center items-center sm:pt-24 md:pt-40 px-6 sm:px-10 md:px-12">
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <div className="flex flex-col justify-center items-center gap-4">
          <Title />
          <Description />
        </div>
        <InitialLine />
      </div>
      {PROCESS_STEPS.map((step, i) => (
        <Step key={step.number} index={i} {...step} />
      ))}
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
    <div className="flex justify-start md:justify-center w-full">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className={cn(buttonLinkVariant(), "size-10")}>
          <ArrowDownIcon className="size-5" />
        </div>
        <div className="w-px h-7.5 md:h-15 bg-border" />
      </div>
    </div>
  );
}

type ListProps = React.ComponentProps<"ul">;

function List({ className, ...rest }: ListProps) {
  return <ul className={cn("space-y-2 md:space-y-4", className)} {...rest} />;
}

type ListItemProps = React.ComponentProps<"li">;

function ListItem({ className, children, ...rest }: ListItemProps) {
  return (
    <li
      className={cn(
        "flex items-center gap-4 text-p-default-sm sm:text-p-default-md font-chillax font-light",
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
    <div className="w-full flex justify-start md:justify-center gap-6 sm:gap-12 md:gap-20">
      <div
        className={cn(
          "hidden flex-1 md:block",
          isEven ? "md:order-3" : "md:order-1"
        )}
      />
      <div className="flex flex-col gap-4 items-center md:order-2">
        <div
          className={cn(
            "w-px bg-border shrink-0 md:flex-1",
            index === 0 ? "h-4 sm:h-12" : "h-8 sm:h-16"
          )}
        />
        <div className={cn(buttonLinkVariant(), "size-10 text-meta shrink-0")}>
          {number}
        </div>
        <div
          className={cn(
            "w-px h-full bg-border md:flex-1",
            lastStep && "bg-transparent"
          )}
        />
      </div>
      <div
        className={cn(
          "flex flex-1 justify-center items-center py-6 md:py-0",
          index === 0 && "pt-0",
          isEven ? "md:order-1" : "md:order-3"
        )}
      >
        <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-between gap-8 border border-card-border bg-muted relative">
          <Label className="sm:absolute sm:right-6 sm:top-6">{label}</Label>
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-meta text-muted uppercase">{subtitle}</p>
              <h3 className="text-heading-h4-sm font-light uppercase sm:text-heading-h4-lg">
                {title}
              </h3>
            </div>
            <p className="text-p-default-sm font-chillax font-light sm:text-p-default-md">
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
        </div>
      </div>
    </div>
  );
}
