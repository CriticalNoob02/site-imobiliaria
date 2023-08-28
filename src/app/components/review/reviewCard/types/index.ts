import { StaticImageData } from "next/image";

/**
 * @param name user do avaliador;
 * @param img imagem do avaliador;
 * @param comment comentario do avaliador;
 * @param rating componente de exibição da nota;
 */
export default interface ReviewCardProps {
  name: Array<string>;
  img: Array<string | StaticImageData>;
  comment: Array<string>;
  rating: Array<React.ReactNode>;
}
