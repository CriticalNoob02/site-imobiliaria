'use client';

import { useState } from "react"
import ReviewCardProps from "./types"
import Avatar from "../../atoms/avatar/Avatar"
import ArrowButton from "../../atoms/arrowButton/ArrowButton"


export default function ReviewCard({name, img, comment, rating}:ReviewCardProps) {
    const [count,setCount] = useState(0)
    const increment = () => {
        count == name.length ? null : setCount(+1)
    }
    const decrement = () => {
        count == 0 ? null : setCount(+1)
    }

    return(
        <div className="w-full h-full flex items-center flex-row flex-nowrap shrink-0 overflow-hidden">
            {name.map((n,i) => (
                <div key={'avaliacao'+ i} className="h-full w-full flex flex-col flex-nowrap shrink-0 items-center justify-center">
                    <div className="w-3/5 h-1/4 flex flex-row items-center justify-center">
                        <div className="h-20 w-20 mx-4">
                            <Avatar image={img[i]} />
                        </div>
                        <div className="text-4xl mx-4 font-medium">
                            {n}
                        </div>
                    </div>
                    <div className="w-3/5 h-auto my-14 text-center">
                        <p className="text-3xl font-extralight">
                            {comment[i]}
                        </p>
                    </div>
                    <div className="w-3/5 h-auto flex items-center justify-center">
                        {rating[i]}
                    </div>
                </div>
            ))}
            <div className="text-cente absolute right-0 z-20 px-24">
                <ArrowButton size="text-5xl" color="text-red-800" onClick={increment}/>
            </div>
            <div className="text-cente absolute left-0 z-20 -scale-x-100 px-24">
                <ArrowButton size="text-5xl" color="text-red-800" onClick={decrement}/>
            </div>
        </div>
    )
}
