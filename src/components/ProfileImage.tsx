import { AspectRatio } from "@/components/ui/aspect-ratio"
import profilePhoto from "@/assets/me.jpg"

const ProfileImage = () => {
  return (
    <AspectRatio
      ratio={1 / 1}
      className="w-full max-w-[20rem] justify-self-center rounded-lg bg-muted"
    >
      <img
        src={profilePhoto}
        alt="Photo"
        className="h-full w-full rounded-lg border border-border/20 object-cover"
      />
    </AspectRatio>
  )
}

export default ProfileImage
