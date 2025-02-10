import { NAV_LINKS } from "@/config";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <div className="pt-4 px-6 sm:pt-6 sm:px-8 md:pt-8 md:px-10 flex justify-center fixed inset-x-0 top-0">
      <header className="py-2.5 pr-3 pl-5 border flex justify-between items-center gap-8 bg-muted">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex justify-between items-center gap-6">
          <nav className="flex items-center gap-5">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="uppercase text-default text-[13px] tracking-[1.5px]"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="px-4 py-2.5 bg-primary rounded-xs flex">
            <Link
              href="/contact"
              className="uppercase text-xs tracking-[1.5px] leading-[18px]"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
