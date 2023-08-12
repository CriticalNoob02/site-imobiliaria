'use client'

import MenuToogleProps from "./types/index"
import NavItens from "../navItens/NavItens"
import ButtonContact from "../buttonContact/ButtonContact"
import { useState } from "react"

export default function MenuToogle({title,link,uuids}:MenuToogleProps) {
    const buttonTitle = "Contato"
    const buttonLink = "https://api.whatsapp.com/send?phone=5548991539040&text=Ol%C3%A1,%20estou%20visitando%20o%20site,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es"

    const [menuStats, setMenuStats] = useState(true)

    const ToogleMode = () => {
        setMenuStats(!menuStats)
    }
    return (
        <div className="w-full h-full flex flex-row-reverse pr-10 items-center select-none">
            <div className=" ml-10">
                <label className="cursor-pointer">
                    <input type="checkbox" onClick={ToogleMode} className="hidden"></input>
                    <svg viewBox="0 5 32 22" className={`h-12 transition-transform duration-500 ease-in-out ${menuStats ? "" : "rotate-45"}`}>
                        <path className={`line--top-bottom  fill-none stroke-white stroke-2 transitionPath  ${menuStats ? "" : "dasharray-icon"}`} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="fill-none stroke-white stroke-2 transitionPath" d="M7 16 27 16"></path>
                    </svg>
                </label>
                <div className={`${menuStats ? "hidden" : "visible"} absolute right-14`}>
                    <NavItens 
                    data={{
                        titles: title,
                        links: link,
                        uuid: uuids
                    }}
                    />
                </div>
            </div>
            <div>
                <ButtonContact 
                link={buttonLink}
                title={buttonTitle}
                />
            </div>
        </div>
    )
}