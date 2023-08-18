import ArrowButtonProps from "./types";

export default function ArrowButton ({color,onClick, size}:ArrowButtonProps) {
    return(
        <div className={`w-full h-full`}>
            <h1 className={`${size} ${color ?? 'text-slate-100'} cursor-pointer select-none drop-shadow-lg transition ease-in-out delay-150 hover:scale-110`} onClick={onClick}>▶</h1>
        </div>
    )
}