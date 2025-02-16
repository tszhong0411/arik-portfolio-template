/**
 * marquee (MIT License)
 * Copyright (c) Erick Hartanto
 * Source: https://github.com/devnomic/marquee/blob/main/src/index.tsx
 *
 * Modified by: tszhong0411
 */
import { cn } from "@/utils/cn";

type MarqueeProps = React.ComponentProps<"div"> & {
  children: React.ReactNode;
  direction?: "left" | "up";
  pauseOnHover?: boolean;
  reverse?: boolean;
  fade?: boolean;
  innerClassName?: string;
  numberOfCopies?: number;
};

export default function Marquee({
  children,
  direction = "left",
  pauseOnHover = false,
  reverse = false,
  fade = false,
  className,
  innerClassName,
  numberOfCopies = 2,
  ...rest
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex gap-4 overflow-hidden",
        direction === "left" ? "flex-row" : "flex-col",
        className,
      )}
      style={{
        maskImage: fade
          ? `linear-gradient(${
              direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
        WebkitMaskImage: fade
          ? `linear-gradient(${
              direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
      }}
      {...rest}
    >
      {Array(numberOfCopies)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around gap-4 [--gap:16px]",
              direction === "left"
                ? "animate-marquee-left flex-row"
                : "animate-marquee-up flex-col",
              pauseOnHover && "group-hover:[animation-play-state:paused]",
              reverse && "direction-reverse",
              innerClassName,
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
