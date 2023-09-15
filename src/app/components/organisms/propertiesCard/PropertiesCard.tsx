/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useRef } from "react"
import { Col, Title } from "../../atoms"
import { CardsHover } from "../../molecules"
import { motion } from "framer-motion"
import pics from "../../../../../public/sobrado.jpg"

export default function PropertiesCard () {

    const cardsBox = useRef<HTMLDivElement>(null);


    const images = [pics,pics,pics,pics,pics,pics]
    const titles = ['casa','abelha', 'casa','abelha','jonas','outro']
    const values = ['1000','2000','50000','50000','100','32323']
    const topics = [{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4}]

    return(
        <Col height="h-[85vh]">
            <div className="w-full h-1/5">
                <Title title={'Lançamentos'}/>
            </div>
            <div className="w-screen h-4/5 bg-red-800 flex flex-row items-center justify-start flex-nowrap shrink-0 overflow-hidden">
                <motion.div ref={cardsBox} drag="x" dragConstraints={{right: 0, left: -cardsBox.current?.offsetWidth + window.innerWidth}} className="cursor-grab active:cursor-grabbing">
                    <CardsHover
                        images={images}
                        imageTitles={titles}
                        imageValues={values}
                        imageTopics={topics}
                    />
                </motion.div>
            </div>
        </Col>
    )
}
