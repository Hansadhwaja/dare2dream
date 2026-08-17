const HeroStoryCard = () => {
  const items = [
    ["Lead", "Develop the confidence to lead."],
    ["Connect", "Build meaningful community connections."],
    ["Mentor", "Learn through real-world experience."],
    ["Grow", "Create opportunity and advance together."],
  ]

  return (
    <div className="flex items-end justify-end lg:pb-4">
      <div className="w-full rounded-[1.5rem] border border-white/15 bg-white/10 p-5 backdrop-blur-xl sm:rounded-[1.75rem] sm:p-6">
        <p className="font-sans text-xs font-semibold tracking-[0.12em] text-secondary uppercase sm:text-sm">
          An ecosystem built for growth
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:mt-6 sm:gap-4">
          {items.map(([title, description]) => (
            <div
              key={title}
              className="rounded-xl bg-white/8 p-4 transition-colors hover:bg-white/12 sm:rounded-2xl sm:p-5"
            >
              <p className="font-heading text-xl font-bold text-white sm:text-2xl">
                {title}
              </p>

              <p className="mt-1.5 font-sans text-base leading-6 font-normal text-white/75 sm:mt-2 sm:text-lg sm:leading-7">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroStoryCard