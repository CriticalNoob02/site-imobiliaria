import Col from "../layout/collum/Col"
import ReviewCard from "./reviewCard/ReviewCard"
import StarBar from "./startBar/StarBar"

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
