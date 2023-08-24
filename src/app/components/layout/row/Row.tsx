import RowProps from "./types";

export default function Row ({
    children,
    width = 'w-screen',
    height = 'h-screen',
    padding,
    color = "bg-slate-100"
}:RowProps) {
    return(
        <div className={`${width} ${height} ${color} ${padding ? 'py-10' : ''} flex justify-evenly items-center flex-row`}>
            {children}
        </div>
    )
}
