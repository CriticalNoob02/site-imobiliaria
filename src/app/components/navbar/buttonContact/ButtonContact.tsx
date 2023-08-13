import ButtonContactProps from "./types";

export default function ButtonContact ({
    link,
    title
}:ButtonContactProps) {
    return(
        <div>
             <button className="p-3 text-lg font-semibold transition text-slate-100 rounded bg-lime-600 hover:bg-lime-500 hover:shadow-lg hover:shadow-lime-600/50 hover:-translate-y-0.5 ">
                <a href={link} target="_blank">
                    {title}
                </a>
            </button>
        </div>
    )
}