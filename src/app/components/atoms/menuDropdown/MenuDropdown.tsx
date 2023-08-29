import MenuDropdownProps from './types/index';

export default function MenuDropdown({ data, color }: MenuDropdownProps) {
    return (
        <div className="mt-14 flex h-full w-full flex-col scroll-smooth text-center">
            {data.titles.map((title, i) => (
                <a key={title} href={data.links ? data.links[i] : '#'}>
                    <div
                        className={`rounded drop-shadow-xl backdrop-blur-sm ${color} mb-10 px-5 py-3 transition delay-150 ease-in-out hover:scale-110`}
                    >
                        <h1 className="select-none text-lg font-semibold text-slate-100">
                            {title}
                        </h1>
                    </div>
                </a>
            ))}
        </div>
    );
}
