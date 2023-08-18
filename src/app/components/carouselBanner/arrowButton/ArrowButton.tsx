import ArrowButtonProps from "./types";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

export default function ArrowButton ({color,onClick, size}:ArrowButtonProps) {
    return(
        <div className={`w-full h-full ${size} ${color ?? 'text-slate-100'} cursor-pointer select-none drop-shadow-lg`}>
            <HiOutlineArrowCircleRight onClick={onClick} className="transition ease-in-out delay-150 hover:scale-110"/>
        </div>
    )
}