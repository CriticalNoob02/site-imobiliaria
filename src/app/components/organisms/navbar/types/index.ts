import { StaticImageData } from "next/image";

export default interface NavbarProps {
    titles: Array<string>;
    links: Array<string>;
    buttonTitle: string;
    buttonLink: string;
    logo: string | StaticImageData;
}
