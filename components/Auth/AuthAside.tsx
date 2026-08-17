interface AuthAsideProps {
  eyebrow: string
  title: React.ReactNode
  description: string
}

const AuthAside = ({ eyebrow, title, description }: AuthAsideProps) => {
  return (
    <aside className="relative hidden overflow-hidden rounded-[2rem] bg-primary p-10 text-primary-foreground lg:flex lg:min-h-175 lg:flex-col lg:justify-between xl:p-14">
      {/* Decorative Elements */}
      <div className="absolute -top-24 -right-24 size-80 rounded-full border-52 border-secondary/12" />

      <div className="absolute -bottom-28 -left-28 size-80 rounded-full border-45 border-primary-foreground/5" />

      <div className="absolute top-1/2 right-20 size-40 -translate-y-1/2 rounded-full bg-secondary/10 blur-3xl" />

      {/* Eyebrow */}
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-2.5 font-sans text-xs font-semibold tracking-[0.12em] text-primary-foreground uppercase backdrop-blur">
          <span className="size-2 rounded-full bg-secondary" />
          {eyebrow}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-xl">
        <h1 className="font-heading text-6xl leading-[0.92] font-semibold tracking-[-0.02em] xl:text-8xl">
          {title}
        </h1>

        <p className="mt-7 max-w-lg font-sans text-base leading-8 font-light text-primary-foreground/80 xl:text-lg">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="relative flex items-center justify-between border-t border-primary-foreground/15 pt-6 font-sans text-xs font-medium tracking-widest text-primary-foreground/60 uppercase">
        <span>Connect · Learn · Grow</span>
        <span>Dare to Dream</span>
      </div>
    </aside>
  )
}

export default AuthAside