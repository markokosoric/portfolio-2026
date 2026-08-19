import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ColorModeSwitch from "./ColorModeSwitch"
import CustomTrigger from "./CustomTrigger"

const NavBar = () => {
  return (
    <NavigationMenu className="m-4 max-w-full justify-between rounded-full border border-neutral-400/20 bg-neutral-300/20 p-4 text-neutral-600 backdrop-blur-[1px] dark:bg-neutral-400/20 dark:text-neutral-300">
      <Avatar size="lg">
        <AvatarImage src="/me.jpg" alt="profile" />
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>
      <NavigationMenuList className="hidden gap-10 md:flex">
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:border-neutral-400/20 hover:bg-neutral-300/30 hover:backdrop-blur-[1px] dark:hover:bg-neutral-400/30">
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:border-neutral-400/20 hover:bg-neutral-400/30 hover:backdrop-blur-[1px]">
            Resume
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:border-neutral-400/20 hover:bg-neutral-400/30 hover:backdrop-blur-[1px]">
            Projects
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:border-neutral-400/20 hover:bg-neutral-400/30 hover:backdrop-blur-[1px]">
            Experience
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div className="flex gap-2">
        <ColorModeSwitch />
        <CustomTrigger />
      </div>
    </NavigationMenu>
  )
}

export default NavBar
