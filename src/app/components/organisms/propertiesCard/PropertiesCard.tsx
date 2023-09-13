'use client';


import { useState } from "react"
import { Col, Title, ArrowButton } from "../../atoms"
import { CardsHover } from "../../molecules"
import pics from "../../../../../public/sobrado.jpg"

export default function PropertiesCard () {

    const [ count, setCount ] = useState(0)

    const increment = () => {
        count == images.length ? null : setCount(count + 1);console.log(count)
    }
    const decrement = () => {
        count == 0 ? null : setCount(count - 1);console.log(count)
    }

    const images = [pics,pics,pics,pics,pics,pics]
    const titles = ['casa','abelha', 'casa','abelha','jonas','outro']
    const values = ['1000','2000','50000','50000','100','32323']
    const topics = [{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4}]

    return(
        <Col height="h-[70vh]">
            <div className="w-full h-1/5">
                <Title title="Lançamentos"/>
            </div>
            <div className="w-full h-4/5 bg-red-800 flex flex-row items-center justify-start flex-nowrap shrink-0 overflow-hidden">
                <div className={`transition`}
                    style={{
                        transform: `translateX(-${24*count}rem)`
                    }}>
                    <CardsHover
                        images={images}
                        imageTitles={titles}
                        imageValues={values}
                        imageTopics={topics}
                    />
                </div>
                <div className="text-cente absolute right-0 z-20 px-24">
                    <ArrowButton size="text-5xl" color="text-red-800" onClick={increment}/>
                </div>
                <div className="text-cente absolute left-0 z-20 -scale-x-100 px-24">
                    <ArrowButton size="text-5xl" color="text-red-800" onClick={decrement}/>
                </div>
            </div>
        </Col>
    )
}

