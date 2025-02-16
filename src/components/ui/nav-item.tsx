import Link from "next/link";

type NavItemProps = React.ComponentProps<typeof Link>;

export default function NavItem({ href, children }: NavItemProps) {
  return (
    <Link
      href={href}
      className="uppercase tracking-wider text-default text-sm relative group"
    >
      {children}
      <div className="absolute inset-x-0 -bottom-1 w-0 h-px group-hover:w-full transition-[width] bg-primary duration-300 ease-out" />
    </Link>
  );
}
