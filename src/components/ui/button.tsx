import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";

export const buttonVariants = cva({
  base: "flex items-center justify-center gap-2 rounded-xs px-4 py-2.5 text-xs tracking-wider uppercase transition-colors duration-300",
  variants: {
    variant: {
      default: "border bg-muted hover:border-border-hover hover:bg-muted-hover",
      primary: "bg-primary text-inverse hover:bg-primary-hover",
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
