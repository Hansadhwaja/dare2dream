import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface Props {
  size?: string
}

const Loader = ({ size = "w-4 h-4" }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className={cn("animate-spin", size)} />
    </div>
  )
}

export default Loader
