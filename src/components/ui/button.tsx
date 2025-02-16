import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";

export const buttonVariants = cva({
  base: "rounded-xs px-4 py-2.5 text-xs tracking-wider transition-colors duration-300 flex items-center justify-center gap-2 uppercase",
  variants: {
    variant: {
      default: "bg-muted hover:bg-muted-hover border hover:border-border-hover",
      primary: "bg-primary hover:bg-primary-hover text-inverse",
      secondary: "bg-secondary hover:bg-secondary-hover",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type ButtonProps = { asChild?: boolean } & React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export default function Button({
  asChild = false,
  className,
  variant,
  type = "button",
  ...rest
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, className }))}
      type={type}
      {...rest}
    />
  );
}
