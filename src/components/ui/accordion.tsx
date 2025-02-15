"use client";

import { cn } from "@/utils/cn";
import { PlusIcon } from "lucide-react";
import { createContext, useContext, useState } from "react";

type Context = {
  isOpen: boolean;
  toggleAccordion: () => void;
};

const AccordionContext = createContext<Context | undefined>(undefined);

function useAccordion() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("useAccordion must be used within an Accordion");
  }

  return context;
}

type AccordionProps = React.ComponentProps<"div">;

function Accordion({ children, className }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccordion() {
    setIsOpen((prev) => !prev);
  }

  return (
    <AccordionContext.Provider value={{ isOpen, toggleAccordion }}>
      <div
        onClick={toggleAccordion}
        className={cn(
          "border bg-muted rounded-xs p-6 flex flex-col gap-4 hover:bg-muted-hover hover:border-border-hover transition-colors duration-300 xl:p-8",
          className
        )}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

type AccordionTriggerProps = React.ComponentProps<"div">;

function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { isOpen } = useAccordion();

  return (
    <div className={cn("w-full flex items-center gap-2", className)}>
      <span className="text-lg font-light flex-1">{children}</span>
      <div
        className={cn(
          "size-10 transform transition-transform duration-300 border bg-muted rounded-full flex justify-center items-center",
          isOpen && "rotate-135"
        )}
      >
        <PlusIcon className="size-5" />
      </div>
    </div>
  );
}

type AccordionContentProps = React.ComponentProps<"div">;

function AccordionContent({ children, className }: AccordionContentProps) {
  const { isOpen } = useAccordion();

  if (!isOpen) return null;

  return (
    <div className={cn("font-chillax font-light", className)}>{children}</div>
  );
}

export { Accordion, AccordionTrigger, AccordionContent };
