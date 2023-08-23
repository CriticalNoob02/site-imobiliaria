/**
 * @param children Componentes internos;
 * @param width <?> Largura do componente;
 * @param height <?> Altura do componente;
 * @param color <?> Cor de fundo do componente;
 */
export default interface RowProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  color?: string;
}