import About from "./components/About"
import AppSidebar from "./components/AppSidebar"
import Hero from "./components/Hero"
import { MeshGradientBackground } from "./components/MeshGradientBackground"
import NavBar from "./components/NavBar"
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar"

export function App() {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <SidebarInset className="flex min-h-screen flex-col">
          <MeshGradientBackground className="opacity-0 dark:opacity-100" />
          <MeshGradientBackground
            backgroundColor="#fafaf9"
            colors={["#a78bfa", "#60a5fa", "#22d3ee", "#e879f9"]}
            className="opacity-100 dark:opacity-0"
          />
          <NavBar />
          <Hero />
          <div className="pb-12 lg:pb-15">
            <About />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}

export default App
