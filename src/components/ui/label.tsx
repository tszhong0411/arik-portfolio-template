import { cn } from "@/utils/cn";

type LabelProps = React.ComponentProps<"div">;

export default function Label({ children, className, ...rest }: LabelProps) {
  return (
    <div
      className={cn(
        "bg-muted rounded-xs border backdrop-blur-[15px] text-meta-sm uppercase p-2 w-max",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
