import { StaticImageData } from "next/image";

export default interface ReviewCarouselProps {
    names: Array<string>;
    imgs: Array<string | StaticImageData>;
    comments: Array<string>;
    ratings: Array<number>;
}