/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useRef, useEffect } from "react"
import { Col, Title, ArrowButton } from "../../atoms"
import { CardsHover } from "../../molecules"
import pics from "../../../../../public/sobrado.jpg"

export default function PropertiesCard () {

    const cardsBox = useRef<HTMLDivElement>(null)
    const boxcontainer = useRef<HTMLDivElement>(null)

    const [ count, setCount ] = useState(0)
    const [ width, setWidth ] = useState(0)

    const increment = () => {
        if (boxcontainer.current) {
            const boxWidth: number = boxcontainer.current.clientWidth;
            width <= boxWidth ? null : setCount(count + 1)
        }
    }
    const decrement = () => {
        count == 0 ? null : setCount(count - 1)
    }

    useEffect(() => {
        if (cardsBox.current) {
            const cardsWidth: number = cardsBox.current.getBoundingClientRect().right
            setWidth(cardsWidth)
        }
    }, [cardsBox,boxcontainer,increment,decrement])


    const images = [pics,pics,pics,pics,pics,pics]
    const titles = ['casa','abelha', 'casa','abelha','jonas','outro']
    const values = ['1000','2000','50000','50000','100','32323']
    const topics = [{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4}]

    return(
        <Col height="h-[70vh]">
            <div className="w-full h-1/5">
                <Title title={width.toString()}/>
            </div>
            <div className="w-screen h-4/5 bg-red-800 flex flex-row items-center justify-start flex-nowrap shrink-0 overflow-hidden" ref={boxcontainer}>
                <div className={`transition select-none`} style={{transform: `translateX(-${25*count}rem)`}} ref={cardsBox}>
                    <CardsHover
                        images={images}
                        imageTitles={titles}
                        imageValues={values}
                        imageTopics={topics}
                    />
                </div>
                <div className="text-cente absolute right-0 z-20 px-10">
                    <ArrowButton size="text-5xl" color="text-slate-100" onClick={increment}/>
                </div>
                <div className="text-cente absolute left-0 z-20 -scale-x-100 px-10">
                    <ArrowButton size="text-5xl" color="text-slate-100" onClick={decrement}/>
                </div>
            </div>
        </Col>
    )
}
