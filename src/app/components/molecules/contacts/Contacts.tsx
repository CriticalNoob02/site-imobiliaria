import ContactsProps from "./types";
import { PiEnvelopeSimple, PiMapPin, PiPhone } from "react-icons/pi";

export default function Contacts({
    email, 
    localization, 
    phone
}:ContactsProps) {
    return(
        <div className="w-full h-full flex flex-col items-start justify-center">
            <h1 className="text-3xl font-bold text-white drop-shadow-md select-none my-2 decoration-2 underline underline-offset-4">
                Fale conosco
            </h1>
            <div className="text-start font-extralight text-slate-100 tracking-wide leading-loose drop-shadow-md text-lg">
                <p className="cursor-pointer hover:text-black flex flex-row items-center">
                    <PiEnvelopeSimple/> 
                    <a href={email[1]} target="_blank">
                        &nbsp;{email[0]}
                    </a>
                </p>
                <p className="cursor-pointer hover:text-black flex flex-row items-center">
                    <PiMapPin/>
                    <a href={localization[1]} target="_blank">
                    &nbsp;{localization[0]}
                    </a>
                </p>
                <p className="cursor-pointer hover:text-black flex flex-row items-center">
                    <PiPhone/>
                    <a href={phone[1]} target="_blank">
                    &nbsp;{phone[0]}
                    </a>
                </p>
            </div>
        </div>
    )
}