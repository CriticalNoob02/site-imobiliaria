import ColProps from "./types";

/**
 * Componente de layout para descrever uma coluna;
 * @param children Componentes internos;
 * @param id <?> Valor do id;
 * @param width <?> Valor de largura;
 * @param height <?> Valor de altura;
 * @param color <?> Cor de fundo;
 */
export default function Col ({
    children,
    id,
    width = 'w-screen',
    height = 'h-screen',
    color = "bg-slate-100",
    ...rest
}:ColProps) {
    return(
        <div id={id ?? ''} className={`${width} ${height} ${color} flex justify-center items-center flex-col text-center py-5${{...rest}}`}>
            {children}
        </div>
    )
}
