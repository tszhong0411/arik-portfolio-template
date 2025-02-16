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
      <div className="text-sm tracking-wider uppercase">To top</div>
      <div className="flex size-10 items-center justify-center rounded-full border bg-muted transition-colors duration-300 hover:bg-muted-hover">
        <ArrowUpIcon className="size-4.5" />
      </div>
    </Link>
  );
}
