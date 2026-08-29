import { AspectRatio } from "@/components/ui/aspect-ratio"

const ProfileImage = () => {
  return (
    <AspectRatio
      ratio={1 / 1}
      className="w-full max-w-[20rem] justify-self-center rounded-lg bg-muted"
    >
      <img
        src="/me.jpg"
        alt="Photo"
        className="h-full w-full rounded-lg border border-border/20 object-cover"
      />
    </AspectRatio>
  )
}

export default ProfileImage
