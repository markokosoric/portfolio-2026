import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

const Hero = () => {
  const name = "Marko Kosoric."
  const [isVisible, setIsVisible] = useState(true)

  const listenToScroll = () => {
    let heightToHideFrom = 10
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
    return () => window.removeEventListener("scroll", listenToScroll)
  }, [])

  return (
    <div className="relative z-10 min-h-screen w-full">
      <div className="absolute inset-0 flex items-center justify-center px-5 lg:px-14">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
          <h1 className="font-regular animate-char-in text-left text-5xl tracking-tighter max-xs:text-4xl md:text-7xl lg:text-8xl">
            Hey, I'm
          </h1>
          <h1 className="font-regular text-left text-5xl tracking-tighter text-blue-800 max-xs:text-4xl md:text-7xl lg:text-8xl">
            {name.split("").map((c, i) => (
              <span
                key={i}
                className="inline-block animate-char-in"
                style={{
                  animationDelay: `${0.4 + i * 0.07}s`,
                }}
              >
                {c === " " ? "\u00A0" : c}
              </span>
            ))}
          </h1>
        </div>
      </div>
      <div
        className={`absolute bottom-10 w-full transition-opacity duration-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div
          className="flex animate-fade-bounce flex-col items-center text-primary-foreground"
          style={{ animationDelay: "3s" }}
        >
          <h1>Scroll Down</h1>
          <ChevronDown />
        </div>
      </div>
    </div>
  )
}

export default Hero
