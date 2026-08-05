import React from "react"
import SectionHero from "../common/Hero/SectionHero"
import UpdatePreview from "./UpdatePreview"
import { featuredUpdate } from "@/constants"

const LatestUpdateHero = () => {
  return (
    <SectionHero
      badge="Community Updates"
      title={
        <>
          Stay informed.
          <br />
          <span className="text-secondary">Stay inspired.</span>
        </>
      }
      description="Keep up with the latest announcements, upcoming events, new webinar releases, community highlights, and everything happening at Dare to Dream."
    >
      <UpdatePreview update={featuredUpdate} />
    </SectionHero>
  )
}

export default LatestUpdateHero
