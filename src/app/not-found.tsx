import Button from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="pt-16 px-12 pb-24 flex justify-center items-center min-h-screen">
      <div className="max-w-400 mx-auto flex flex-col items-center gap-8">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-sm text-muted tracking-wider">404</p>
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-light">
            Page Not Found
          </h1>
        </div>
        <Button variant="primary" asChild>
          <Link href="/">Back to homepage</Link>
        </Button>
      </div>
    </div>
  );
}
