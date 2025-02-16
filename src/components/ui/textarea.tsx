import { cn } from "@/utils/cn";

type TextareaProps = React.ComponentProps<"textarea">;

export default function Textarea({ className, ...rest }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "w-full bg-muted p-3.75 font-light outline-none placeholder:tracking-wider placeholder:text-default",
        className,
      )}
      {...rest}
    ></textarea>
  );
}
