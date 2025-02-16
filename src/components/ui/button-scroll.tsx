import { cn } from "@/utils/cn";
import { buttonTextIconVariants } from "./button-text";
import { ArrowDownIcon } from "lucide-react";

type ButtonScrollProps = React.ComponentProps<"button">;

export default function ButtonScroll({
  children,
  className,
  ...rest
}: ButtonScrollProps) {
  return (
    <button
      className={cn(
        "group flex items-center justify-center gap-4 text-sm tracking-wider uppercase",
        className,
      )}
      {...rest}
    >
      <div
        className={cn(buttonTextIconVariants(), "size-10 group-hover:rotate-0")}
      >
        <ArrowDownIcon className="size-4.5" />
      </div>
      {children}
    </button>
  );
}
