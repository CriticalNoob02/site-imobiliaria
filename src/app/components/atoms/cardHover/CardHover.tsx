import CardHoverProps from "./types"
import Image from "next/image"
import { Like, ImobTopics } from "../../atoms"

export default function CardHover({
    image,
    imageCod,
    imageTitle,
    imageValue,
    imageTopic
}:CardHoverProps) {
    return(
        <div className="w-full h-full rounded-lg drop-shadow-2xl border-8 border-slate-100 bg-slate-100 mx-8 relative overflow-hidden">
            <a className="cursor-pointer" href={`${imageCod}`}>
                <Image
                    src={image}
                    alt="Imagem de um imóvel"
                    fill
                />
            </a>
            <div className="w-full absolute p-3 bottom-0 flex flex-col items-end justify-center transition bg-gradient-to-t from-black/70 translate-y-14 hover:-translate-y-0">
                <div className="w-full flex flex-row items-center justify-between py-2">
                    <h1 className="text-xl text-slate-100 font-semibold drop-shadow-md select-none">
                        {imageTitle}
                    </h1>
                    <div className="w-9 h-9 drop-shadow-md">
                        <Like size="text-xl"/>
                    </div>
                </div>
                <div className="w-full flex flex-row items-center justify-start">
                    <h1 className=" text-yellow-300 drop-shadow-md select-none">
                        R${imageValue}
                    </h1>
                </div>
                <div className="w-full">
                    <ImobTopics
                        bedrooms={imageTopic.bedrooms}
                        groundSize={imageTopic.groundSize}
                        garages={imageTopic.garages}
                        showers={imageTopic.showers}
                    />
                </div>
            </div>
        </div>
    )
}


