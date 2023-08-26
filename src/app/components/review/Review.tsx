import Col from "../layout/collum/Col"
import Row from "../layout/row/Row"
import Title from "../cardServices/title/Title"
import Avatar from "./avatar/Avatar"
import PostLayout from "./postLayout/PostLayout"
import CarouselSlide from "./carouselSlide/CarouselSlide"
import IconContainer from "../cardServices/iconContainer/IconContainer"
import { PiQuotes } from "react-icons/pi"

import logo2 from "../../../../public/logo.png"
import asd from "../../../../public/house.jpg"
import zzx from "../../../../public/sobrado.jpg"

export default function Review () {

    const title = 'Avaliações'
    const username = '@ChavesNovas'
    const userLogo = <Avatar image={logo2}/>
    const images = [logo2,asd,zzx]
    const time = '10s'

    return(
        <Col id="Reviews" width="w-screen" height="h-[80vh]">
            <div className="select-none">
                <Title title={title}/>
            </div>
            <Row width="w-full" height="h-full" color="bg-red-800" padding>
                <div className="w-1/4 h-full flex justify-center items-start text-slate-50 select-none">
                    <div className="-scale-x-100">
                        <IconContainer size="text-8xl">
                            <PiQuotes/>
                        </IconContainer>
                    </div>
                    <h1 className="text-3xl my-8">
                        <i>Nossa melhor <b>obra de arte</b> é ver o sorriso no rosto de um <b>cliente Satisfeito!</b></i>
                    </h1>
                </div>
                <div className="w-2/5 h-full">
                    <PostLayout
                        avatar={userLogo}
                        username={username}
                        posts={<CarouselSlide images={images} timer={time}/>}
                    />
                </div>
            </Row>
        </Col>
    )
}
