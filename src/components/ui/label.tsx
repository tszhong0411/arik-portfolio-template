import { cn } from "@/utils/cn";
import { cva, VariantProps } from "cva";

const labelVariants = cva({
  base: "rounded-xs backdrop-blur-[15px] text-xs tracking-widest uppercase px-2 py-1.25 max-w-max",
  variants: {
    variant: {
      default: "bg-muted border",
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
