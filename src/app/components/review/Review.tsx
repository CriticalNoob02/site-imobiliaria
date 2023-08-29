import Col from "../layout/collum/Col"
import Row from "../layout/row/Row"
import Title from "../cardServices/title/Title"
import PostLayout from "../postsInstagram/postLayout/PostLayout"
import CarouselSlide from "../postsInstagram/carouselSlide/CarouselSlide"
import ReviewCard from "./reviewCard/ReviewCard"
import StarBar from "./startBar/StarBar"
import IconContainer from "../cardServices/iconContainer/IconContainer"
import { PiQuotes } from "react-icons/pi"


import asd from "../../../../public/house.jpg"
import zzx from "../../../../public/sobrado.jpg"

export default function Review () {

    const name = ['Adriel taradinho!', 'Crinha aleatório']
    const userAvatar = [asd, zzx]
    const comment = ['fgndjngnfgfngngdfngngjfgfigfgn', 'o outro cara disse tudo!']
    // eslint-disable-next-line react/jsx-key
    const rating = [<StarBar rate={4} size={""}/>, <StarBar rate={2} size={""}/>]

    return(
        <Col id="Reviews" width="w-screen" height="h-[70vh]">

            <ReviewCard
                name={name}
                img={userAvatar}
                comment={comment}
                rating={rating} />
        </Col>
    )
}
