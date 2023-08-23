/**
 * @param link link de contato;
 * @param title Texto exibido no botão;
 * @param icon Icone para o botão
 */
export default interface ButtonContactProps {
  link: string;
  title: string;
  icon?: React.ReactNode;
}
