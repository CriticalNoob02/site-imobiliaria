import ButtonMenuProps from "./types"

export default function ButtonMenu({status, onClick}:ButtonMenuProps) {
    return(
        <label className="cursor-pointer">
            <input type="checkbox" className="hidden" onClick={onClick}></input>
            <svg viewBox="0 5 32 22" className={`h-12 transition-transform duration-500 ease-in-out ${status ? "" : "rotate-45"}`}>
                <path className={`line--top-bottom  fill-none stroke-white stroke-2 transitionPath  ${status ? "" : "dasharray-icon"}`} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path className="fill-none stroke-white stroke-2 transitionPath" d="M7 16 27 16"></path>
            </svg>
        </label>
    )
} 