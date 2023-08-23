import ButtonContactProps from './types'

export default function ButtonContact({
    link,
    title,
    icon,
}: ButtonContactProps) {
    return (
        <div className="px-8">
            <button className="flex select-none items-center justify-center rounded bg-lime-600 p-3 text-lg font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:bg-lime-500 hover:shadow-lg hover:shadow-lime-600/50">
                {icon}
                <a href={link} target="_blank" className="mx-1 select-none">
                    {title}
                </a>
            </button>
        </div>
    )
}
