import Card from "@/components/ui/card";
import { LICENSING } from "@/config";

export default function Licensing() {
  return (
    <div className="pt-28 pb-16 px-6 md:pt-32 md:pb-24 md:px-10 xl:pt-48 xl:pb-40 xl:px-12">
      <div className="max-w-150 mx-auto flex flex-col items-center gap-8 md:gap-12">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-5xl font-light md:text-7xl xl:text-8xl">
            Licensing
          </h1>
          <p className="text-sm font-chillax font-light text-center md:text-base">
            All graphical assets in this template are licensed for personal and
            commercial use. If you&apos;d like to use a specific asset, please
            check the license.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {LICENSING.map((l) => (
            <Card
              key={l.title}
              className="flex flex-1 flex-col gap-8 p-8 md:p-10 xl:p-12"
            >
              <h2 className="text-2xl font-light md:text-3xl">{l.title}</h2>
              <div className="flex flex-col gap-12">
                {l.sections.map((s) => (
                  <div
                    key={s.title}
                    className="flex flex-col gap-8 text-sm uppercase tracking-wider md:grid md:grid-cols-2"
                  >
                    <p>{s.title}</p>
                    <div className="flex flex-col gap-4">
                      {s.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener"
                          className="underline max-w-max"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
