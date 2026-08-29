import ProfileImage from "./ProfileImage"

const About = () => {
  return (
    <div className="relative z-10 w-full flex-col justify-center px-5 lg:px-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 justify-self-center md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div></div>
            <div className="flex flex-col gap-4">
              <h1 className="font-regular max-w-lg text-left text-5xl tracking-tighter md:text-7xl">
                Hey, I'm
              </h1>
              <h1 className="font-regular max-w-lg text-left text-5xl tracking-tighter text-blue-800 md:text-7xl">
                Marko Kosoric
              </h1>
              <p className="max-w-md text-left text-xl leading-relaxed tracking-tight text-muted-foreground">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>
          <ProfileImage />
        </div>
      </div>
    </div>
  )
}

export default About
