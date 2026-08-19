import { useSidebar } from "./ui/sidebar"
import { X } from "lucide-react"

const ExitButton = () => {
  const { toggleSidebar } = useSidebar()
  return (
    <button onClick={toggleSidebar} className="mr-2">
      <X className="size-7" />
    </button>
  )
}

export default ExitButton
