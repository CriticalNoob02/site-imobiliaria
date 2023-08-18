import MenuDropdownProps from "./types/index"
import { randomUUID } from "crypto"

 export default function MenuDropdown({ data,color }: MenuDropdownProps) {
    const uuid = () => {
        return randomUUID()
    } 

    return ( 
        <div className="w-full h-full flex flex-col mt-14 text-center">
            {data.titles.map((title, i) => (
                <a key={uuid} href={data.links ?data.links[i]: '#'}>
                    <div className={`rounded drop-shadow-xl backdrop-blur-sm ${color} mb-10 py-3 px-5 hover:scale-110 transition ease-in-out delay-150`}>
                        <h1 className="font-semibold text-slate-100 text-lg select-none">
                                {title}  
                        </h1>
                    </div>
                </a>
            ))}
        </div>
    );
}