import Logo from "@/components/logo";
import NavItem from "@/components/ui/nav-item";
import { STYLEGUIDE_SECTIONS } from "@/config";
import Link from "next/link";

export default function StyleguidePage() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="py-4 bg-muted backdrop-blur-[30px] fixed top-0 inset-x-0 z-50 md:hidden">
        <Link href="/">
          <Logo className="mx-auto" />
        </Link>
      </div>
      <div className="hidden md:flex w-50 flex-col gap-12 p-8 border-r">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="flex flex-col gap-6">
          {STYLEGUIDE_SECTIONS.map((section, i) => (
            <li key={i}>
              <NavItem href={`#${section.title}`}>{section.title}</NavItem>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-12 px-6 flex-1">
        {STYLEGUIDE_SECTIONS.map((section, i) => (
          <div key={i} className="py-16 space-y-12 border-b" id={section.title}>
            <h2 className="text-2xl">{section.title}</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
              {section.variants.map((variant, i) => (
                <div key={i} className="space-y-8">
                  <p className="uppercase text-sm tracking-wider">
                    {variant.title}
                  </p>
                  {variant.component}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
