'use client'

import { useState } from "react"
import ArrowButton from "./arrowButton/ArrowButton"
import Glass from "./glass/Glass"
import CardBanner from "./cardBanner/CardBanner"
import TextLink from "./textLink/TextLink"

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

    const titles = ["Apartamento","Casa","Terreno","Sobrado"]
    const links = ["#Apartamento","#Casa","#Terreno","#Sobrado"]

    return(
        <div className={`w-screen h-screen ${'card'+count} transition-all`}>
            <Glass>
                <CardBanner size="w-3/5 h-2/5">
                    <div className={`w-screen h-screen ${'card'+count} transition-all flex items-center flex-col justify-center `}>
                        <h1 className="text-start font-light text-2xl my-5 mr-40 text-stone-300 select-none">Venha conquistar seu </h1>
                        <TextLink title={titles[count]} link={links[count]}/>   
                        <h1 className="text-end font-light text-2xl my-5 ml-40 text-stone-300 select-none">com a gente!</h1> 
                    </div>
                    <div className="text-cente absolute right-0 px-10 z-20">
                        <ArrowButton size="text-5xl" onClick={SumCount}/>
                    </div>
                    <div className="text-cente absolute left-0 px-10 -scale-x-100 z-20">
                        <ArrowButton size="text-5xl" onClick={LessCount}/>
                    </div>
                    <div className="h-screen w-28 absolute left-0 px-10 bg-gradient-to-r from-black/70 z-10">
                    </div>
                    <div className="h-screen w-28 absolute right-0 px-10 bg-gradient-to-l from-black/70 z-10">
                    </div>
                </CardBanner>
            </Glass>
        </div>
    )
}