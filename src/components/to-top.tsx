import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";

export default function ToTop() {
  return (
    <Link href="#main" className="flex items-center gap-4">
      <div className="text-meta uppercase">To top</div>
      <div className="size-10 rounded-full border bg-muted hover:bg-muted-hover transition-colors duration-300 flex justify-center items-center">
        <ArrowUpIcon className="size-4.5" />
      </div>
    </Link>
  );
}
