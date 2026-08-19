import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

const ColorModeSwitch = () => {
  const { setTheme } = useTheme()

  return (
    <div className="flex2">
      <Button
        variant="ghost"
        className="hover:bg-transparent dark:hover:bg-transparent"
        onClick={() => setTheme("light")}
      >
        <Sun className="size-5" />
      </Button>
      <Button
        variant="ghost"
        className="hover:bg-transparent dark:hover:bg-transparent"
        onClick={() => setTheme("dark")}
      >
        <Moon className="size-5" />
      </Button>
    </div>
  )
}

export default ColorModeSwitch
