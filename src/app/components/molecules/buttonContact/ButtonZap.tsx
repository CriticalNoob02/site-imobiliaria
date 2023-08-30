import ButtonZapProps from "./types"
import { ButtonContact } from "../../atoms"
import { BsWhatsapp } from "react-icons/bs"

export default function ButtonZap ({link,title}:ButtonZapProps) {
    return(
        <div className="text-lg font-semibold text-slate-100">
            <a href={link} target="_blank" className="mx-1 select-none cursor-pointer">
                <ButtonContact color="lime">
                    <BsWhatsapp/>
                    <div className="px-2">
                        {title}
                    </div>
                </ButtonContact>
            </a>
        </div>
    )
}
