const ContactItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) => {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 sm:gap-4 sm:p-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary sm:size-11">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs text-white/60 sm:text-sm">{label}</p>

        <p className="truncate text-sm font-medium text-white sm:text-base">
          {value}
        </p>
      </div>
    </div>
  )
}

export default ContactItem