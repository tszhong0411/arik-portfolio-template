import { cn } from "@/utils/cn";

type CardProps = React.ComponentProps<"div">;

export default function Card({ children, className, ...rest }: CardProps) {
  return (
    <div className={cn("bg-muted border rounded-xs", className)} {...rest}>
      {children}
    </div>
  );
}
