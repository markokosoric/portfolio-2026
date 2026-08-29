import { Download, MoveRight, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProfileImage from "./ProfileImage"

const Hero = () => {
  const im = " I'm"
  const name = "Marko Kosoric."

  return (
    <div className="">
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-5 lg:px-14">
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
    </div>
  )
}

export default Hero
