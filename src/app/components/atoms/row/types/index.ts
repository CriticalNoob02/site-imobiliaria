/**
 * @param children Componentes internos;
 * @param width <?> Largura do componente;
 * @param height <?> Altura do componente;
 * @param padding <?> Espaçamento no componente interno;
 * @param color <?> Cor de fundo do componente;
 */
export default interface RowProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  padding?: boolean;
  color?: string;
}
