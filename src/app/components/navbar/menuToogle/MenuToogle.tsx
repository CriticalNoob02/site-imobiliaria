'use client'

import ButtonMenu from "../buttonMenu/ButtonMenu";
import { BsWhatsapp } from "react-icons/bs";
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
                <ButtonMenu 
                status={menuStats} 
                click={<input type="checkbox" className="hidden" onClick={ToogleMode}></input>}
                />
                <div className={`${menuStats ? "hidden" : "visible"} absolute right-auto`}>
                    <NavItens 
                    data={{
                        titles: title,
                        links: link,
                        uuid: uuids
                    }}
                    color='bg-red-700/70'
                    />
                </div>
            </div>
            <div>
                <ButtonContact 
                link={buttonLink}
                title={buttonTitle}
                icon={<BsWhatsapp/>}
                />
            </div>
        </div>
    )
}