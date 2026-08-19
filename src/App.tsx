import AppSidebar from "./components/AppSidebar"
import { MeshGradientBackground } from "./components/MeshGradientBackground"
import NavBar from "./components/NavBar"
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar"

export function App() {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <SidebarInset>
          <MeshGradientBackground className="hidden dark:flex" />
          <MeshGradientBackground
            backgroundColor="#fafaf9"
            colors={["#a78bfa", "#60a5fa", "#22d3ee", "#e879f9"]}
            className="dark:hidden"
          />
          <NavBar />
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}

export default App
