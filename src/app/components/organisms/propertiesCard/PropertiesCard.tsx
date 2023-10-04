/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import propertiesCardProps from "./types";
import { useRef, useState, useEffect } from "react"
import { Col, Title } from "../../atoms"
import { CardsHover } from "../../molecules"
import { motion } from "framer-motion"
import { PiArrowFatLinesRight } from "react-icons/pi";

export default function PropertiesCard ({
    images,
    imagesCod,
    imageTitles, 
    imageValues, 
    imageTopics
}:propertiesCardProps) {

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

    return(
        <Col height="h-[85vh]">
            <div className="w-full h-1/5">
                <Title title={'Lançamentos'}/>
            </div>
            <div className="w-screen h-4/5 bg-red-800 flex flex-row items-center justify-start flex-nowrap shrink-0 overflow-hidden relative">
                <motion.div ref={cardsBox} drag="x" dragConstraints={dragConstraints} className="cursor-grab active:cursor-grabbing">
                    <CardsHover
                        images={images}
                        imagesCod={imagesCod}
                        imageTitles={imageTitles}
                        imageValues={imageValues}
                        imageTopics={imageTopics}
                    />
                </motion.div>
                <div className="absolute right-0 bottom-0  px-20 pb-10 text-slate-100 text-5xl">
                    <PiArrowFatLinesRight/>
                </div>
            </div>
        </Col>
    )
}
