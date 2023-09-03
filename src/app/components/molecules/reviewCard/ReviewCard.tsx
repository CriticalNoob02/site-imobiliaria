import ReviewCardProps from "./types"
import Avatar from "../../atoms/avatar/Avatar"


export default function ReviewCard({
    name, 
    img, 
    comment, 
    rating
}:ReviewCardProps) {


    return(
        <div className="w-screen h-full flex flex-row">
            {name.map((n,i) => (
                <div key={'avaliacao'+ i} className="h-full w-full flex flex-col flex-nowrap shrink-0 items-center justify-center">
                    <div className="w-3/5 h-1/4 flex flex-row items-center justify-center">
                        <div className="h-20 w-20 mx-4">
                            <Avatar image={img[i]} />
                        </div>
                        <div className="text-4xl mx-4 font-medium select-none">
                            {n}
                        </div>
                    </div>
                    <div className="w-3/5 h-auto my-14 text-center">
                        <p className="text-3xl font-extralight select-none">
                            {comment[i]}
                        </p>
                    </div>
                    <div className="w-3/5 h-auto flex items-center justify-center select-none">
                        {rating[i]}
                    </div>
                </div>
            ))}
        </div>
    )
}
