'use client';

import LikeProps from "./types"
import { PiHeart, PiHeartFill } from "react-icons/pi"
import { useState } from "react"

export default function Like ({
    size
}:LikeProps) {

    const [like, setLike] = useState(true)
    const ToogleLike = () => {
        setLike(!like);
    };

    return(
        <div
            className={`w-full h-full flex items-center justify-center ${size} text-red-800 bg-slate-100 rounded-full drop-shadow-md cursor-pointer`}
            onClick={ToogleLike}
        >
            { like ? <PiHeart/> : <PiHeartFill/> }
        </div>
    )
}
