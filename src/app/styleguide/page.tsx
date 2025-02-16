import Logo from "@/components/logo";
import NavItem from "@/components/ui/nav-item";
import { STYLEGUIDE_SECTIONS } from "@/config";
import Link from "next/link";

export default function StyleguidePage() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="fixed inset-x-0 top-0 z-50 bg-muted py-4 backdrop-blur-[30px] md:hidden">
        <Link href="/">
          <Logo className="mx-auto" />
        </Link>
      </div>
      <div className="hidden w-50 flex-col gap-12 border-r p-8 md:flex">
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
      <div className="flex-1 px-6 py-12">
        {STYLEGUIDE_SECTIONS.map((section, i) => (
          <div key={i} className="space-y-12 border-b py-16" id={section.title}>
            <h2 className="text-2xl">{section.title}</h2>
            <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
              {section.variants.map((variant, i) => (
                <div key={i} className="space-y-8">
                  <p className="text-sm tracking-wider uppercase">
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
