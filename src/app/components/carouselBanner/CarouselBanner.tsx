'use client'

import { useState } from "react"
import ArrowButton from "./arrowButton/ArrowButton"
import Glass from "./glass/Glass"
import CardBanner from "./cardBanner/CardBanner"

export default function  CarouselBanner () {
    const [count, setCount] = useState(0)

    const SumCount = () => {
        if(count == 3){
            setCount(0)
        }
        else{
            setCount(count + 1)
        }
    }
    const LessCount = () => {
        if(count == 0){
            setCount(3)
        }
        else{
            setCount(count - 1)
        }
    }

    return(
        <div className={`w-screen h-screen ${'card'+count} transition-all`}>
            <Glass>
                <CardBanner size="w-3/5 h-2/5">
                    <div className={`w-screen h-screen ${'card'+count} transition-all`}>
                    </div>
                    <div className="text-cente absolute right-0 px-10">
                        <ArrowButton size="text-5xl" onClick={SumCount}/>
                    </div>
                    <div className="text-cente absolute left-0 px-10 -scale-x-100">
                        <ArrowButton size="text-5xl" onClick={LessCount}/>
                    </div>
                </CardBanner>
            </Glass>
        </div>
    )
}