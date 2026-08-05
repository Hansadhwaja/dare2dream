"use client"

import Link from "next/link"
import { RefreshCw, TriangleAlert } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-2xl rounded-[2rem] border border-border bg-card p-10 text-center shadow-xl">
        <div className="mx-auto flex size-18 items-center justify-center rounded-full bg-destructive/10">
          <TriangleAlert className="size-9 text-destructive" />
        </div>

        <p className="mt-8 text-sm font-semibold tracking-[0.25em] text-secondary uppercase">
          Something went wrong
        </p>

        <h1 className="mt-4 font-heading text-4xl font-semibold text-foreground md:text-5xl">
          Unexpected Error
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
          We encountered an unexpected problem while loading this page. Please
          try again.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3 font-semibold text-secondary-foreground transition hover:brightness-95"
          >
            <RefreshCw className="size-4" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 font-semibold transition hover:bg-muted"
          >
            Go Home
          </Link>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 rounded-xl bg-muted p-4 text-left">
            <p className="mb-2 text-sm font-semibold">Development Error</p>

            <pre className="overflow-auto text-xs whitespace-pre-wrap text-muted-foreground">
              {error.message}
            </pre>
          </div>
        )}
      </div>
    </main>
  )
}
