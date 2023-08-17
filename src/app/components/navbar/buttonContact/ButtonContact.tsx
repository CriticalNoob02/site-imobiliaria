import ButtonContactProps from "./types";

export default function ButtonContact ({
    link,
    title,
    icon
}:ButtonContactProps) {
    return(
        <div className="px-8">
             <button className="p-3 text-lg font-semibold transition text-slate-100 rounded bg-lime-600 hover:bg-lime-500 hover:shadow-lg hover:shadow-lime-600/50 hover:-translate-y-0.5 flex items-center justify-center">
                {icon}
                <a href={link} target="_blank" className="mx-1">
                    {title}
                </a>
            </button>
        </div>
    )
}