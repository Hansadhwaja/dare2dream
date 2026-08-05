import React from "react"
import { Button } from "../ui/button"
import { Update } from "@/types/update.types"
import UpdateCard from "./UpdateCard"

interface Props {
  updates: Update[]
}

const RecentUpdates = ({ updates }: Props) => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold tracking-widest text-secondary uppercase">
            Latest Updates
          </p>

          <h2 className="mt-2 font-heading text-4xl font-semibold">
            Stay up to date
          </h2>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            Discover the latest announcements, upcoming events, new webinar
            releases and community highlights.
          </p>
        </div>

        <Button variant="outline">View All</Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {updates.map((update) => (
          <UpdateCard key={update.id} update={update} />
        ))}
      </div>
    </section>
  )
}

export default RecentUpdates
