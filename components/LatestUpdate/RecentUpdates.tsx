import { Update } from "@/types/update.types"
import UpdateCard from "./UpdateCard"

interface Props {
  updates: Update[]
}

const RecentUpdates = ({ updates }: Props) => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
      {/* Heading */}
      <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-bold tracking-[0.1em] text-secondary uppercase sm:text-base">
            Latest Updates
          </p>

          <h2 className="mt-3 font-heading text-4xl leading-tight font-semibold sm:text-5xl">
            Stay up to date
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Discover the latest announcements, upcoming events, new webinar
            releases and community highlights.
          </p>
        </div>
      </div>

      {/* Updates */}
      <div className="grid gap-7 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
        {updates.map((update) => (
          <UpdateCard key={update.id} update={update} />
        ))}
      </div>
    </section>
  )
}

export default RecentUpdates