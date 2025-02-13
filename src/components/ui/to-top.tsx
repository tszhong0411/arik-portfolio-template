import { cn } from "@/utils/cn";
import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";

type ToTopProps = React.ComponentProps<typeof Link>;

export default function ToTop({ href, className, ...rest }: ToTopProps) {
  return (
    <Link
      href={href}
      className={cn("flex items-center gap-4", className)}
      {...rest}
    >
      <div className="text-sm uppercase">To top</div>
      <div className="size-10 rounded-full border bg-muted hover:bg-muted-hover transition-colors duration-300 flex justify-center items-center">
        <ArrowUpIcon className="size-4.5" />
      </div>
    </Link>
  );
}
