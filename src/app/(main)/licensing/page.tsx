import SlideAnimation from "@/components/slide-animation";
import Card from "@/components/ui/card";
import { LICENSING } from "@/config";

export default function Licensing() {
  return (
    <div className="px-6 pt-28 pb-16 md:px-10 md:pt-32 md:pb-24 xl:px-12 xl:pt-48 xl:pb-40">
      <div className="mx-auto flex max-w-150 flex-col items-center gap-8 md:gap-12">
        <SlideAnimation className="flex flex-col items-center gap-3">
          <h1 className="text-5xl font-light md:text-7xl xl:text-8xl">
            Licensing
          </h1>
          <p className="text-center font-chillax text-sm font-light md:text-base">
            All graphical assets in this template are licensed for personal and
            commercial use. If you&apos;d like to use a specific asset, please
            check the license.
          </p>
        </SlideAnimation>
        <div className="flex w-full flex-col gap-4">
          {LICENSING.map((l) => (
            <SlideAnimation key={l.title} asChild>
              <Card className="flex flex-1 flex-col gap-8 p-8 md:p-10 xl:p-12">
                <h2 className="text-2xl font-light md:text-3xl">{l.title}</h2>
                <div className="flex flex-col gap-12">
                  {l.sections.map((s) => (
                    <div
                      key={s.title}
                      className="flex flex-col gap-8 text-sm tracking-wider uppercase md:grid md:grid-cols-2"
                    >
                      <p>{s.title}</p>
                      <div className="flex flex-col gap-4">
                        {s.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener"
                            className="max-w-max underline"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </SlideAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
