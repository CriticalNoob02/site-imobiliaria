import ImobTopicsProps from "./types"
import { PiRulerDuotone, PiBedDuotone, PiGarageDuotone, PiShowerDuotone } from "react-icons/pi"

export default function ImobTopics({
    bedrooms, 
    groundSize, 
    garages, 
    showers
}:ImobTopicsProps) {
    return(
        <div className="h-full w-full flex flex-row text-slate-100 font-light text-sm">
            <div className="flex flex-row items-center justify-center mr-4">
                <PiBedDuotone/>
                <h1>&nbsp;{bedrooms}</h1>
            </div>
            <div className="flex flex-row items-center justify-center mr-4">
                <PiRulerDuotone/>
                <h1>&nbsp;{groundSize}m²</h1>
            </div>
            <div className="flex flex-row items-center justify-center mr-4">
                <PiGarageDuotone/>
                <h1>&nbsp;{garages}</h1>
            </div>
            <div className="flex flex-row items-center justify-center mr-4">
                <PiShowerDuotone/>
                <h1>&nbsp;{showers}</h1>
            </div>
        </div> 
    )
}