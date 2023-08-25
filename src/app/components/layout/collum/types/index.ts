/**
 * @param children Componentes internos;
 * @param width <?> Largura do componente;
 * @param height <?> Altura do componente;
 * @param color <?> Cor de fundo do componente;
 * @param id <?> ID se do componente;
 */
export default interface ColProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  color?: string;
  id?: string;
}
