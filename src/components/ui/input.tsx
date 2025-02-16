import { cn } from "@/utils/cn";

type InputProps = React.ComponentProps<"input">;

export default function Input({ className, ...rest }: InputProps) {
  return (
    <input
      className={cn(
        "w-full bg-muted p-3.75 font-light outline-none placeholder:tracking-wider placeholder:text-default",
        className,
      )}
      {...rest}
    />
  );
}
