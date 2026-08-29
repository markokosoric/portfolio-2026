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
    <NavigationMenu className="fixed top-0 right-0 left-0 z-50 m-4 max-w-full justify-between rounded-full border border-border/20 bg-primary/20 p-4 text-primary-foreground backdrop-blur-[1px]">
      <Avatar size="lg" className="after:border-none">
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
