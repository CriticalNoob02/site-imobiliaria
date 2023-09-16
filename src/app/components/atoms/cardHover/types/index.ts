import { StaticImageData } from "next/dist/shared/lib/image-external";

/**
 * @param imagem Imagem do imovel;
 * @param imagemCod Codigo do imovel;
 * @param imageTitle Titulo da imovel;
 * @param imageValue Valo do imovel;
 * @param imageTopics Topicos do imovel;
 */
export default interface CardHoverProps{
    image: StaticImageData;
    imageCod: string;
    imageTitle: string;
    imageValue: string;
    imageTopic: {
        bedrooms:number;
        groundSize: number;
        garages: number;
        showers: number
    }
}
