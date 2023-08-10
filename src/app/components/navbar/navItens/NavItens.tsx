import NavItensProps from "./types/index"

export default function NavItens({ data }: NavItensProps) { 
    return ( 
        <div className="w-full h-full flex items-center justify-evenly text-2xl text-red-950">
            {data.titles.map((title, i) => (
                <h1 key={data.uuid[i]} className="hover:scale-150 transition ease-in-out delay-150">
                    <a href={data.links[i]}>
                        {title}
                    </a>
                </h1>
            ))}
        </div>
    );
}