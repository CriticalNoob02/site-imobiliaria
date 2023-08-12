import NavItensProps from "./types/index"

export default function NavItens({ data }: NavItensProps) { 
    return ( 
        <header className="w-full h-full flex flex-col mt-14 text-center">
            {data.titles.map((title, i) => (
                <div key={data.uuid[i]} className="drop-shadow-xl backdrop-blur-sm bg-red-700/70 mb-10 py-3 px-5 hover:scale-110 transition ease-in-out delay-150">
                    <h1 className="font-semibold text-slate-100 text-lg">
                        <a href={data.links ?data.links[i]: '#'}>
                            {title}
                        </a>
                    </h1>
                </div>
            ))}
        </header>
    );
}