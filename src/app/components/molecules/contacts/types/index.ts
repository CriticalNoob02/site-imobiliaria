/**
 * @param email Array com titulo e link do email;
 * @param localization Array com titulo e link da localização;
 * @param phone Array com titulo e link do telefone;  
 */
export default interface ContactsProps{
    email: Array<string>;
    localization: Array<string>;
    phone: Array<string>
}