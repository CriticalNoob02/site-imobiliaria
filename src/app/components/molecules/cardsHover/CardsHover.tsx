import Image from "next/image"
import { Like } from "../../atoms"
import picture from "./../../../../../public/terreno.jpg"

export default function CardsHover() {
    return(
        <div className="w-96 h-96 rounded-lg drop-shadow-2xl border-8 border-slate-100 bg-slate-100 mx-8 relative">
            <Image
                src={picture}
                alt="Imagem de um imóvel"
                fill
            />
            <div className="w-full absolute p-3 bottom-0 flex flex-col items-end justify-center transition bg-gradient-to-t from-black/70">
                <div className="w-full flex flex-row items-center justify-between">
                    <h1 className="text-xl text-slate-100 drop-shadow-md">
                            Casa da Maria Joaquina
                    </h1>
                    <div className="w-9 h-9 drop-shadow-md">
                        <Like size="text-xl"/>
                    </div>
                </div>
                <div className="">
                    <h1>
                        R$: 100.555,00
                    </h1>
                </div>
            </div>
        </div>
    )
}

