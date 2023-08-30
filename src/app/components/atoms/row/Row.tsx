import RowProps from "./types";

/**
 * Componente de layout para descrever uma linha;
 * @param children
 * @param padding
 * @param width
 * @param height
 * @param color
 */
export default function Row ({
    children,
    padding,
    width = 'w-screen',
    height = 'h-screen',
    color = "bg-slate-100",
    ...rest
}:RowProps) {
    return(
        <div className={`${width} ${height} ${color} ${padding ? 'py-10' : ''} flex justify-evenly items-center flex-row ${{...rest}}`}>
            {children}
        </div>
    )
}
