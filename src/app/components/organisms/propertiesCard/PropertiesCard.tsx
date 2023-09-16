/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useRef, useState, useEffect } from "react"
import { Col, Title } from "../../atoms"
import { CardsHover } from "../../molecules"
import { motion } from "framer-motion"
import { PiArrowFatLinesRight } from "react-icons/pi";
import pics from "../../../../../public/sobrado.jpg"

export default function PropertiesCard () {

    const cardsBox = useRef<HTMLDivElement>(null);

    const [dragConstraints, setDrag] = useState(Object)

    useEffect(() =>{
        const newsDrag = {
            right: 0,
            left: cardsBox.current
                ? -cardsBox.current.offsetWidth + window.innerWidth
                : 0
        };
        setDrag(newsDrag)
    },[])


    const images = [pics,pics,pics,pics,pics,pics]
    const cod = ['#22','#33','#erd','#345','#5467','#3434']
    const titles = ['casa','abelha', 'casa','abelha','jonas','outro']
    const values = ['1000','2000','50000','50000','100','32323']
    const topics = [{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4}]

    return(
        <Col height="h-[85vh]">
            <div className="w-full h-1/5">
                <Title title={'Lançamentos'}/>
            </div>
            <div className="w-screen h-4/5 bg-red-800 flex flex-row items-center justify-start flex-nowrap shrink-0 overflow-hidden relative">
                <motion.div ref={cardsBox} drag="x" dragConstraints={dragConstraints} className="cursor-grab active:cursor-grabbing">
                    <CardsHover
                        images={images}
                        imagesCod={cod}
                        imageTitles={titles}
                        imageValues={values}
                        imageTopics={topics}
                    />
                </motion.div>
                <div className="absolute right-0 bottom-0  px-20 pb-10 text-slate-100 text-5xl">
                    <PiArrowFatLinesRight/>
                </div>
                <div className="absolute left-0 bottom-0 px-20 pb-10 text-slate-100 text-lg">
                    <h1>Arraste para ver mais...</h1>
                </div>
            </div>
        </Col>
    )
}
