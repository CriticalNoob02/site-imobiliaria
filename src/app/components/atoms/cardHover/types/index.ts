import { StaticImageData } from "next/dist/shared/lib/image-external";

export default interface CardHoverProps{
    image: StaticImageData;
    imageTitle: string;
    imageValue: string;
    imageTopic: {
        bedrooms:number;
        groundSize: number;
        garages: number;
        showers: number
    }
}
