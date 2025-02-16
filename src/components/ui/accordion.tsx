"use client";

import { cn } from "@/utils/cn";
import { PlusIcon } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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
          "border bg-muted rounded-xs p-6 flex flex-col hover:bg-muted-hover hover:border-border-hover transition-colors duration-300 xl:p-8",
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

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ height: 0, marginTop: 0 }}
          animate={{ height: "auto", marginTop: 16 }}
          exit={{ height: 0, marginTop: 0 }}
          transition={{
            duration: 0.2,
            ease: [0.32, 0.72, 0, 1], // Custom easing for more natural motion
          }}
          className={cn("font-chillax font-light overflow-hidden", className)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.1 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Accordion, AccordionTrigger, AccordionContent };
