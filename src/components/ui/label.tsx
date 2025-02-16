import { cn } from "@/utils/cn";
import { cva, VariantProps } from "cva";

const labelVariants = cva({
  base: "max-w-max rounded-xs px-2 py-1.25 text-xs tracking-wider uppercase backdrop-blur-[15px]",
  variants: {
    variant: {
      default: "border bg-muted",
      primary: "bg-primary text-inverse",
      secondary: "bg-secondary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type LabelProps = React.ComponentProps<"div"> &
  VariantProps<typeof labelVariants>;

export default function Label({
  children,
  className,
  variant,
  ...rest
}: LabelProps) {
  return (
    <div className={cn(labelVariants({ variant, className }))} {...rest}>
      {children}
    </div>
  );
}
