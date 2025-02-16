import { cn } from "@/utils/cn";

type CardProps = React.ComponentProps<"div">;

export default function Card({ children, className, ...rest }: CardProps) {
  return (
    <div className={cn("rounded-xs border bg-muted", className)} {...rest}>
      {children}
    </div>
  );
}
