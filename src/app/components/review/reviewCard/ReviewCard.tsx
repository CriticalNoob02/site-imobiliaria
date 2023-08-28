import ReviewCardProps from "./types"
import Col from "../../layout/collum/Col"
import Avatar from "../avatar/Avatar"
import ArrowButton from "../../carouselBanner/arrowButton/ArrowButton"

export default function ReviewCard({name, img, comment, rating}:ReviewCardProps) {
    return(
        <Col width="w-full" height="h-full">
            <div className="w-3/5 h-1/4 flex flex-row items-center justify-center">
                <div className="h-20 w-20 mx-4">
                    <Avatar image={img}/>
                </div>
                <div className="text-4xl mx-4 font-medium">
                    {name}
                </div>
            </div>
            <div className="text-cente absolute right-0 z-20 px-24">
                <ArrowButton size="text-5xl" color="text-red-800"/>
            </div>
            <div className="text-cente absolute left-0 z-20 -scale-x-100 px-24">
                <ArrowButton size="text-5xl" color="text-red-800"/>
            </div>
            <div className="w-3/5 h-auto my-14 text-center">
                <p className="text-3xl font-extralight">
                    {comment}
                </p>
            </div>
            <div className="w-3/5 h-auto flex items-center justify-center">
                {rating}
            </div>
        </Col>
    )
}
