import Col from "../layout/collum/Col"
import Row from "../layout/row/Row"
import Title from "../cardServices/title/Title"
import Avatar from "./avatar/Avatar"
import logo from "../../../../public/logo.png"
import asd from "../../../../public/house.jpg"
import zzx from "../../../../public/sobrado.jpg"
import PostLayout from "./postLayout/PostLayout"
import CarouselSlide from "./carouselSlide/CarouselSlide"

export default function Review () {

    const title = 'Avaliações'
    const username = '@chavesNovas'
    const userLogo = <Avatar image={logo}/>
    const images = [logo,asd,zzx]
    const time = '10s'

    return(
        <Col id="Reviews" width="w-screen" height="h-[95vh]">
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
    )
}
