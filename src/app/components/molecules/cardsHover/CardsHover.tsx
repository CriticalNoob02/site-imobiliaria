import Image from "next/image"
import { Like, ImobTopics } from "../../atoms"
import picture from "./../../../../../public/terreno.jpg"

export default function CardsHover() {

    const foto = picture
    const imobTitle =  'abelha-Sc'
    const imobValue = '1.000.890,90'

    return(
        <div className="w-80 h-96 rounded-lg drop-shadow-2xl border-8 border-slate-100 bg-slate-100 mx-8 relative overflow-hidden">
            <Image
                src={foto}
                alt="Imagem de um imóvel"
                fill
            />
            <div className="w-full absolute p-3 bottom-0 flex flex-col items-end justify-center transition bg-gradient-to-t from-black/70 translate-y-14 hover:-translate-y-0">
                <div className="w-full flex flex-row items-center justify-between py-2">
                    <h1 className="text-xl text-slate-100 drop-shadow-md select-none">
                        {imobTitle}
                    </h1>
                    <div className="w-9 h-9 drop-shadow-md">
                        <Like size="text-xl"/>
                    </div>
                </div>
                <div className="w-full flex flex-row items-center justify-start">
                    <h1 className=" text-yellow-300 drop-shadow-md select-none">
                        R${imobValue}
                    </h1>
                </div>
                <div className="w-full">
                    <ImobTopics 
                    bedrooms={0} 
                    groundSize={0} 
                    garages={0} 
                    showers={0}
                    />
                </div>
            </div>
        </div>
    )
}


