import { cn } from "@/utils/cn";
import { cva, VariantProps } from "cva";
import { Slot } from "@radix-ui/react-slot";

type ButtonTextProps = {
  icon: React.ReactNode;
  asChild?: boolean;
} & React.ComponentProps<"div"> &
  VariantProps<typeof buttonTextIconVariants>;

export const buttonTextVariants = cva({
  base: "inline-flex justify-center items-center gap-3 uppercase group text-sm tracking-wider",
});

export const buttonTextIconVariants = cva({
  base: "size-8 rounded-full flex justify-center items-center transition-all duration-300 group-hover:rotate-45",
  variants: {
    variant: {
      default:
        "bg-muted border group-hover:border-border-hover group-hover:bg-muted-hover",
      primary: "bg-primary text-inverse group-hover:bg-primary-hover",
      secondary: "bg-secondary group-hover:bg-secondary-hover",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default function ButtonText({
  icon,
  asChild = false,
  className,
  variant,
  children,
  ...rest
}: ButtonTextProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp {...rest}>
      <div className={buttonTextVariants()}>
        <div className={cn(buttonTextIconVariants({ variant, className }))}>
          {icon}
        </div>
        {children}
      </div>
    </Comp>
  );
}
