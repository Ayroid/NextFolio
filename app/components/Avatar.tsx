import ProfilePic from "@/public/images/profile/profile.jpg";
import { Avatar as RadixAvatar } from "@radix-ui/themes";

const Avatar = () => {
  return (
    <RadixAvatar
      src={ProfilePic.src}
      fallback="A"
      radius="full"
      size="7"
      className="shadow-[0_0_90px_-20px] shadow-radix-accent"
    />
  );
};

export default Avatar;
