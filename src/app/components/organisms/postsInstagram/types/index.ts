import { StaticImageData } from "next/image";


export default interface PostsInstagramProps {
    username?: string;
    userLogo: string | StaticImageData;
    images: Array<StaticImageData | string>;
    time: string;
}