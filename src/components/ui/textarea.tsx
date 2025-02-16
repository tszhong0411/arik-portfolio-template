import { cn } from "@/utils/cn";

type TextareaProps = React.ComponentProps<"textarea">;

export default function Textarea({ className, ...rest }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "w-full outline-none font-light bg-muted p-3.75 placeholder:text-default placeholder:tracking-wider",
        className
      )}
      {...rest}
    ></textarea>
  );
}
