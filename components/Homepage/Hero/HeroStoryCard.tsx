const HeroStoryCard = () => {
  const items = [
    ["Lead", "Develop the confidence to lead."],
    ["Connect", "Build meaningful community connections."],
    ["Mentor", "Learn through real-world experience."],
    ["Grow", "Create opportunity and advance together."],
  ]

  return (
    <div className="flex items-end justify-end lg:pb-4">
      <div className="w-full max-w-sm rounded-[1.75rem] border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
        <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary uppercase">
          An ecosystem built for growth
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {items.map(([title, description]) => (
            <div
              key={title}
              className="rounded-2xl bg-white/8 p-4 transition-colors hover:bg-white/12"
            >
              <p className="font-heading text-xl font-semibold text-white">
                {title}
              </p>

              <p className="mt-1 font-sans text-[11px] leading-5 font-light text-white/55">
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