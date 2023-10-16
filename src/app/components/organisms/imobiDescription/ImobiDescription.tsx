import { createElement } from "react"
import { IconSticker } from "../../atoms"
import ImobiDescriptionProps from "./types"


import { PiBed, PiRuler, PiShower, PiCarSimple, PiBathtub } from "react-icons/pi"

export default function ImobiDescription({
    title,
    cod, 
    description, 
    price,
    Characteristics
}: ImobiDescriptionProps) {

    return(
        <div>
            <h1 className=" border-b-2 border-x-stone-600 text-4xl font-extrabold text-red-800">
                {title}
            </h1>
            <p className="text-red-800 text-lg font-light mt-1">
                Cod: {cod}
            </p>
            <p className="text-2xl font-extralight tracking-wider leading-loose py-10 w-2/3">
                {description}
            </p>
            <div className="flex border-b-2 border-x-stone-600 py-2">
                <p className="font-semibold p-2 text-lg tracking-wider text-slate-100 rounded-lg bg-red-800/90">
                    Investimento: R$ {price}
                </p>
            </div>
            <h2 className="text-stone-600 drop-shadow-md text-2xl font-semibold flex justify-center items-center my-8">
                Características
            </h2>
            <div className="flex items-center justify-center flex-row">
                {Characteristics.area ? <IconSticker icon={createElement(PiRuler)} title={"Área"} value={`${Characteristics.area}m²`}/> : null}
                {Characteristics.dormitory ? <IconSticker icon={createElement(PiBed)} title={"Dormitórios"} value={Characteristics.dormitory}/> : null}
                {Characteristics.bathroom ? <IconSticker icon={createElement(PiShower)} title={"Banheiros"} value={Characteristics.bathroom}/> : null}
                {Characteristics.suite ? <IconSticker icon={createElement(PiBathtub)} title={"Suites"} value={Characteristics.suite}/> : null}
                {Characteristics.garage ? <IconSticker icon={createElement(PiCarSimple)} title={"Garagem"} value={Characteristics.garage}/> : null}
            </div>
        </div>
    )
}