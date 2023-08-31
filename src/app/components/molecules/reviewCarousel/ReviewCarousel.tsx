'use client';

import ReviewCarouselProps from "./types";
import { useState } from "react";
import { ArrowButton, Col } from "../../atoms";
import ReviewCard from "../reviewCard/ReviewCard";

export default function ReviewCarousel({
    names, 
    imgs, 
    comments, 
    ratings 
}:ReviewCarouselProps) {

    const [ count, setCount ] = useState(0)
    const [ translate, setTranslate ] = useState(0)

    const increment = () => {
        count == names.length ? null : setCount(+1);setTranslate(+100)
    }
    const decrement = () => {
        count == 0 ? null : setCount(+1);setTranslate(-100)
    }

    return(
        <Col id="Reviews" width="w-screen" height="h-[70vh]">
            <div className="w-full h-full flex items-center justify-center flex-row flex-nowrap shrink-0 overflow-hidden">
                <div className={`-translate-x-[${translate}%] transition`}>
                    <ReviewCard 
                        name={names} 
                        img={imgs}
                        comment={comments} 
                        rating={ratings}
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