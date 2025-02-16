import { STATS } from "@/config";

export default function Stats() {
  return (
    <div className="pt-12 px-6 md:pt-16 md:px-10 xl:pt-20 xl:px-12">
      <div className="max-w-300 mx-auto grid gap-8 grid-cols-2 md:gap-12 xl:grid-cols-4">
        {STATS.map((stat, i) => (
          <div key={i} className="space-y-1 text-center">
            <p className="text-muted text-sm uppercase tracking-wider">
              {stat.title}
            </p>
            <p className="text-4xl md:text-5xl xl:text-6xl font-light">
              {stat.number}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
