import { AspectRatio } from "@/components/ui/aspect-ratio"
import profilePhoto from "@/assets/me.jpg"

const ProfileImage = () => {
  return (
    <AspectRatio
      ratio={1 / 1}
      className="w-5/10 overflow-hidden rounded-2xl bg-muted"
    >
      <img
        src={profilePhoto}
        alt="Photo"
        className="h-full w-full object-cover"
      />
    </AspectRatio>
  )
}

export default ProfileImage
