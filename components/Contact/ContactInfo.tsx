import InfoItem from "./InfoItem"
import { Clock3, Mail, MapPin, Phone } from "lucide-react"

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border bg-card p-8">
        <h3 className="font-heading text-2xl font-semibold">
          Contact Information
        </h3>

        <p className="mt-3 text-muted-foreground">
          Prefer to reach us directly? We&apos;d love to hear from you.
        </p>

        <div className="mt-8 space-y-6">
          <InfoItem
            icon={<MapPin className="size-5" />}
            title="Office"
            value="Arizona, USA"
          />

          <InfoItem
            icon={<Clock3 className="size-5" />}
            title="Office Hours"
            value="Mon – Fri • 9:00 AM – 5:00 PM"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
