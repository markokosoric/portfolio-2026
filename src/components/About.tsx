import ProfileImage from "./ProfileImage"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const About = () => {
  return (
    <>
      <div className="flex gap-2">
        <Card className="w-5/10 rounded-4xl bg-primary/20 bg-linear-to-b from-[#3F91D1] via-[#69B0E2] to-[#A5D3F0] p-4 text-primary-foreground ring-0">
          <CardContent className="text-lg">
            <p>
              The evening sun cast a warm golden glow across the quiet library,
              catching the dust motes dancing between shelves of ancient,
              leather-bound books. Somewhere deep within the stacks, the faint,
              rhythmic ticking of a grandfather clock was the only sound keeping
              time.
            </p>
          </CardContent>
        </Card>
        <ProfileImage />
      </div>
      <Card className="rounded-4xl bg-primary/20 bg-linear-to-b from-[#6A0032] via-[#8A1748] to-[#B83A68] p-4 ring-0">
        <CardHeader>
          <CardTitle className="flex justify-between">
            <h1>McMaster University</h1>
            <h1>Hamilton, ON</h1>
          </CardTitle>
          <CardDescription className="flex justify-between text-primary-foreground">
            <p>B.A.Sc., Honours Computer Science Co-op Level II</p>
            <p>May 2029</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>GPA: 3.49/4.00</p>
        </CardContent>
      </Card>
    </>
  )
}

export default About
