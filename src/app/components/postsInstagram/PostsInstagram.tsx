import { Avatar, IconContainer, Row } from "../atoms";
import { PiQuotes } from "react-icons/pi";
import CarouselSlide from "./carouselSlide/CarouselSlide";
import PostLayout from "./postLayout/PostLayout";

import logo from "../../../../public/logo.png"
import asd from "../../../../public/apartament.jpeg"
import zzx from "../../../../public/terreno.jpg"

export default function PostsInstagram() {

    const title = 'Avaliações'
    const username = '@ChavesNovas'
    const userLogo = <Avatar image={logo}/>
    const images = [logo,asd,zzx]
    const time = '10s'

    return(
        <Row height="h-[80vh]" color="bg-red-800" padding>
            <div className="w-2/6 h-full flex justify-center items-center text-slate-50 select-none">
                <div className="-scale-x-100">
                    <IconContainer size="text-8xl">
                        <PiQuotes />
                    </IconContainer>
                </div>
                <h1 className="text-3xl my-8">
                    <i>Nossa melhor <b>obra de arte</b> é ver o sorriso no rosto de um <b>cliente Satisfeito!</b></i>
                </h1>
            </div>
            <div className="w-2/6 h-full p-8">
                <PostLayout
                    avatar={userLogo}
                    username={username}
                    posts={<CarouselSlide images={images} timer={time} />}/>
            </div>
        </Row>
    )
}
