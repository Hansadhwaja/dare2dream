const InfoItem = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode
  title: string
  value: string
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
        {icon}
      </div>

      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </div>
  )
}

export default InfoItem
