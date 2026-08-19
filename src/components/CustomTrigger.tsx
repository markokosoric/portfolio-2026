import { useSidebar } from "@/components/ui/sidebar"
import { Menu } from "lucide-react"

const CustomTrigger = () => {
  const { toggleSidebar } = useSidebar()
  return (
    <button onClick={toggleSidebar} className="md:hidden">
      <Menu className="size-6" />
    </button>
  )
}

export default CustomTrigger
