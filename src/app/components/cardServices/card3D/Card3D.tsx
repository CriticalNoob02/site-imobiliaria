import Card3dProps from "./types";

export default function Card3d ({children, color}:Card3dProps) {
    return(
        <div className={`group h-3/5 w-1/5 ${color} rounded p-3 transition duration-300 hover:drop-shadow-xl`}>
            {children}
        </div>
    )
}