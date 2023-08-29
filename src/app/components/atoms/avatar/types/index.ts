import { StaticImageData } from "next/image";

export default interface AvatarProps {
  image: string | StaticImageData;
  color?: string;
}
