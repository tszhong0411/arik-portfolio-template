import { cn } from "@/utils/cn";

type InputProps = React.ComponentProps<"input">;

export default function Input({ className, ...rest }: InputProps) {
  return (
    <input
      className={cn(
        "w-full outline-none font-light bg-muted p-3.75 placeholder:text-default placeholder:tracking-wider",
        className
      )}
      {...rest}
    />
  );
}
