/**
 * @param titles Titulo do item;
 * @param links  <?> Link de referencia;
 * @param status <?> Status do elemento pai;
 * @param color <?> Background color para os itens;
 */
export default interface DropdownProps {
  data: {
    titles: Array<string>;
    links?: Array<string>;
  };
  status?: boolean;
  color: string;
}
