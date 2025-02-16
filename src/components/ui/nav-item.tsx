import Link from "next/link";

type NavItemProps = React.ComponentProps<typeof Link>;

export default function NavItem({ href, children }: NavItemProps) {
  return (
    <Link
      href={href}
      className="group relative text-sm tracking-wider text-default uppercase"
    >
      {children}
      <div className="absolute inset-x-0 -bottom-1 h-px w-0 bg-primary transition-[width] duration-300 ease-out group-hover:w-full" />
    </Link>
  );
}
