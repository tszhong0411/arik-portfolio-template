import { cn } from "@/utils/cn";
import { cva } from "cva";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
  buttonClassName?: string;
};

export const buttonLinkVariant = cva({
  base: "size-8 rounded-full border bg-muted flex justify-center items-center group-hover:border-border-hover group-hover:bg-muted-hover transition-colors duration-300",
});

export default function ButtonLink({
  href,
  label,
  icon,
  className,
  buttonClassName,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn("flex items-center gap-3 group", className)}
    >
      <div className={cn(buttonLinkVariant(), buttonClassName)}>
        {icon ? (
          icon
        ) : (
          <ArrowUpRightIcon className="size-4 group-hover:rotate-45 transition-transform duration-300" />
        )}
      </div>
      {label && <div className="uppercase text-meta">{label}</div>}
    </Link>
  );
}
