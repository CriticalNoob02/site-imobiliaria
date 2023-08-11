/**
 * @param titles Titulo do item;
 * @param links Link de referencia;
 * @param uuid Key, usar a função "randomUUID";
 * @param status
 */
export default interface NavItensProps {
    data:{
        titles:Array<string>
        links?:Array<string>
        uuid:Array<string>
    }
    status?: boolean
}
