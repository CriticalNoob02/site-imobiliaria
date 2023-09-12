import { StaticImageData } from "next/dist/shared/lib/image-external";

export default interface CardsHoverProps{
    images: Array<StaticImageData>;
    imageTitles: Array<string>;
    imageValues: Array<string>;
    imageTopics: Array<{
        bedrooms:number;
        groundSize: number;
        garages: number;
        showers: number
    }>;
}
