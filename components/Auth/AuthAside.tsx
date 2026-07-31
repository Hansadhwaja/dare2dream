interface AuthAsideProps {
  eyebrow: string
  title: React.ReactNode
  description: string
}

const AuthAside = ({ eyebrow, title, description }: AuthAsideProps) => {
  return (
    <aside className="relative hidden overflow-hidden rounded-[2rem] bg-primary p-10 text-primary-foreground lg:flex lg:min-h-175 lg:flex-col lg:justify-between xl:p-14">
      <div className="absolute -top-24 -right-24 size-80 rounded-full border-52 border-secondary/12" />

      <div className="absolute -bottom-28 -left-28 size-80 rounded-full border-45 border-primary-foreground/5" />

      <div className="absolute top-1/2 right-20 size-40 -translate-y-1/2 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/12 bg-primary-foreground/7 px-4 py-2 font-sans text-[10px] font-semibold tracking-[0.12em] text-primary-foreground/70 uppercase backdrop-blur">
          <span className="size-1.5 rounded-full bg-secondary" />
          {eyebrow}
        </div>
      </div>

      <div className="relative max-w-xl">
        <h1 className="font-heading text-6xl leading-[0.9] font-semibold tracking-[-0.02em] xl:text-7xl">
          {title}
        </h1>

        <p className="mt-6 max-w-md font-sans text-sm leading-7 font-light text-primary-foreground/60">
          {description}
        </p>
      </div>

      <div className="relative flex items-center justify-between border-t border-primary-foreground/10 pt-5 font-sans text-[10px] tracking-widest text-primary-foreground/35 uppercase">
        <span>Connect · Learn · Grow</span>
        <span>Dare to Dream</span>
      </div>
    </aside>
  )
}

export default AuthAside
