"use client";

import SlideAnimation from "@/components/slide-animation";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-12 pt-16 pb-24">
      <div className="mx-auto flex max-w-400 flex-col items-center gap-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <SlideAnimation direction="down" asChild>
            <p className="text-sm tracking-wider text-muted">404</p>
          </SlideAnimation>
          <SlideAnimation asChild>
            <h1 className="text-3xl font-light md:text-5xl xl:text-6xl">
              Page Not Found
            </h1>
          </SlideAnimation>
        </div>
        <SlideAnimation asChild>
          <Button variant="primary" asChild>
            <Link href="/">Back to homepage</Link>
          </Button>
        </SlideAnimation>
      </div>
    </div>
  );
}
