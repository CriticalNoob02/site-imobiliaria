import Card3dProps from "./types";

export default function Card3d ({children, color}:Card3dProps) {
    return(
        <div className={`card3D group h-3/5 w-1/5 ${color} rounded p-3 transition duration-300`}>
            {children}
        </div>
    )
}