import { STATS } from "@/config";

export default function Stats() {
  return (
    <div className="pt-12 px-6 md:pt-16 md:px-10 xl:pt-20 xl:px-12">
      <div className="grid grid-cols-2 xl:grid-cols-4 max-w-300 mx-auto gap-8 md:gap-12">
        {STATS.map((stat, i) => (
          <div key={i} className="space-y-1 text-center">
            <p className="text-muted text-sm uppercase">{stat.title}</p>
            <p className="text-4xl md:text-5xl xl:text-6xl font-light">
              {stat.number}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
