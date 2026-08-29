import ExitButton from "./ExitButton"
import MKLogo from "./MKLogo"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "./ui/sidebar"

const AppSidebar = () => {
  return (
    <Sidebar side="right">
      <SidebarHeader className="mt-2 flex-row items-center justify-between text-neutral-600 dark:text-neutral-300">
        <MKLogo className="h-10 w-auto" />
        <ExitButton />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
