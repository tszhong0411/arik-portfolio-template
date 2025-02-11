import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  label: string;
};

export default function ButtonLink({ href, label }: ButtonLinkProps) {
  return (
    <Link href={href} className="flex items-center gap-3 group">
      <div className="size-8 rounded-full border bg-muted flex justify-center items-center group-hover:border-default-hover group-hover:bg-muted-hover transition-colors duration-300">
        <ArrowUpRightIcon className="size-4 group-hover:rotate-45 transition-transform duration-300" />
      </div>
      <div className="uppercase text-meta">{label}</div>
    </Link>
  );
}
