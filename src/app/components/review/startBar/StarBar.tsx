import StarBarProps from "./types"
import { PiStarFill, PiStar } from "react-icons/pi"

export default function StarBar ({
    rate,
    size
}:StarBarProps){
    const starsLoop = [1,2,3,4,5]
    const generateStars = () => {
        return starsLoop.map((i) => {
            return i <= rate ? (
                <PiStarFill key={i+'star'}/>
            ) : (
                <PiStar key={i+'star'}/>
            );
        });
    };

    return(
        <div className={`w-auto h-auto bg-white shadow-md rounded-md p-2 mx-4 flex flex-row text-yellow-400 ${size}`}>
            {generateStars()}
        </div>
    )
}
