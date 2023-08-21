import Card3dProps from "./types";

export default function Card3d ({children, color}:Card3dProps) {
    return(
        <div className={`cardService group h-3/5 w-1/5 ${color} rounded p-5 mx-10 transition duration-300`}>
            {children}
        </div>
    )
}