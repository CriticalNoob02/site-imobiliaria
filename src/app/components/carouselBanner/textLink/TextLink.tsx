import TextLinkProps from './types'

export default function TextLink({ title, link }: TextLinkProps) {
    return (
        <a href={link}>
            <div>
                <h1 className="cursor-pointer select-none text-5xl font-bold tracking-wider text-slate-100 underline decoration-red-700/60 drop-shadow-md">
                    {title}
                </h1>
            </div>
        </a>
    )
}
