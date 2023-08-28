import Col from "../layout/collum/Col"
import Row from "../layout/row/Row"
import Title from "../cardServices/title/Title"
import Avatar from "./avatar/Avatar"
import PostLayout from "./postLayout/PostLayout"
import CarouselSlide from "./carouselSlide/CarouselSlide"
import ReviewCard from "./reviewCard/ReviewCard"
import StarBar from "./startBar/StarBar"


import logo from "../../../../public/logo.png"
import asd from "../../../../public/house.jpg"
import zzx from "../../../../public/sobrado.jpg"

export default function Review () {

    const title = 'Avaliações'
    const username = '@chavesNovas'
    const userLogo = <Avatar image={logo}/>
    const images = [logo,asd,zzx]
    const time = '10s'

    const name = ['Adriel taradinho!', 'Crinha aleatório']
    const userAvatar = [asd, zzx]
    const comment = ['fgndjngnfgfngngdfngngjfgfigfgn', 'o outro cara disse tudo!']
    // eslint-disable-next-line react/jsx-key
    const rating = [<StarBar rate={4} size={""}/>, <StarBar rate={2} size={""}/>]

    return(
        <Col id="Reviews" height="v-auto">
            <Col height="h-[95vh]">
                <div>
                    <Title title={title}/>
                </div>
                <Row width="w-full" height="h-full" color="bg-red-800" padding>
                    <PostLayout
                        avatar={userLogo}
                        username={username}
                        posts={<CarouselSlide images={images} timer={time}/>}
                    />
                </Row>
            </Col>
            <Col height="h-[50vh]">
                <ReviewCard
                    name={name}
                    img={userAvatar}
                    comment={comment}
                    rating={rating}
                />
            </Col>
        </Col>
    )
}
