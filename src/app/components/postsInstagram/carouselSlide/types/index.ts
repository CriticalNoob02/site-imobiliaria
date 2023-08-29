import { StaticImageData } from "next/image";
/**
 * @param images Array com as imagens que serão usadas no carrousel;
 * @param timer Tempo da animação do carrousel;
 */
export default interface CarouselSlideProps {
  images: Array<string | StaticImageData>;
  timer: string;
}
