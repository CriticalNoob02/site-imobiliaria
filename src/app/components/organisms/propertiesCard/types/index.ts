import { StaticImageData } from "next/image";

export default interface propertiesCardProps {
    images: Array<StaticImageData>;
    imagesCod: Array<string>
    imageTitles: Array<string>;
    imageValues: Array<string>;
    imageTopics: Array<{
        bedrooms:number;
        groundSize: number;
        garages: number;
        showers: number
    }>;
}