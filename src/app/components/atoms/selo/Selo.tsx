import SeloProps from "./types";
import Image from "next/image";
import selo from "../../../../../public/Selo.png"

export default function Selo({
    fontColor,
    hoverColor
}:SeloProps){
    return(
        <div className="h-full w-full flex flex-row items-center justify-center">
            <h1 className="select-none text-lg tracking-wide font-medium drop-shadow-md">
                Criado por <a target="_blank" href="https://github.com/CriticalNoob02" className={`${fontColor} font-bold cursor-pointer ${hoverColor}`}>
                        CriticalNoob
                </a>
            </h1>
            <Image
                src={selo}
                alt="Selo"
                style={{
                    height:'80%',
                    width:'auto'
                }}/>
        </div>
    )
}
