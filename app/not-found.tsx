import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-2xl rounded-[2rem] border border-border bg-card p-10 text-center shadow-xl">
        <div className="mx-auto flex size-18 items-center justify-center rounded-full bg-secondary/10">
          <Compass className="size-9 text-secondary" />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
          404 Error
        </p>

        <h1 className="mt-4 font-heading text-4xl font-semibold text-foreground md:text-5xl">
          Page not found
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist, may have been moved,
          or is no longer available.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3 font-semibold text-secondary-foreground transition hover:brightness-95"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>

          <Link
            href="/updates"
            className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 font-semibold transition hover:bg-muted"
          >
            Browse Updates
          </Link>
        </div>
      </div>
    </main>
  );
}