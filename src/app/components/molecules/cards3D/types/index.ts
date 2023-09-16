import { IconType } from "react-icons";

/**
 * @param titles Titulo do card;
 * @param links Link de navegação do card;
 * @param icons Icones do card;
 */
export default interface Cards3DProps {
    titles: Array<string>;
    links: Array<string>
    icons: Array<IconType>;
}
