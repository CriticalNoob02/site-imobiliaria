import ArrowButtonProps from "./types";

export default function ArrowButton ({color,onClick}:ArrowButtonProps) {
    return(
        <div className={`w-full h-full${color ?? 'bg-red-100'} `}>
            <h1 onClick={onClick}>▶</h1>
        </div>
    )
}