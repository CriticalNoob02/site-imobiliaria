import { StarBar, Col, Row } from "../atoms"
import { ReviewCarousel } from "../molecules"

import asd from "../../../../public/house.jpg"
import zzx from "../../../../public/sobrado.jpg"

export default function Review () {

    const name = ['Adriel taradinho!', 'Crinha aleatório']
    const userAvatar = [asd, zzx]
    const comment = ['fgndjngnfgfngngdfngngjfgfigfgn', 'o outro cara disse tudo!']
    // eslint-disable-next-line react/jsx-key
    const rating = [<StarBar rate={4} size={""}/>, <StarBar rate={2} size={""}/>]

    return(
        <ReviewCarousel
            names={name}
            imgs={userAvatar}
            comments={comment}
            ratings={rating} />
    )
}
