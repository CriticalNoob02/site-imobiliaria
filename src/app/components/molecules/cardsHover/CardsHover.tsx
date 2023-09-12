import { CardHover } from "../../atoms"
import CardsHoverProps from "./types"

export default function CardsHover({
    images,
    imageTitles,
    imageValues,
    imageTopics
}:CardsHoverProps) {

    return (
        <div className="flex flex-row items-center flex-nowrap shrink-0">
            {images.map( (image, i) => (
                <div className="w-80 h-96 mx-12" key={imageTitles[i]+i}>
                    <CardHover
                        image={image}
                        imageTitle={imageTitles[i]}
                        imageValue={imageValues[i]}
                        imageTopic={{
                            bedrooms: imageTopics[i].bedrooms,
                            groundSize: imageTopics[i].groundSize,
                            garages: imageTopics[i].garages,
                            showers: imageTopics[i].showers
                        }}/>
                </div>
            ))}
        </div>
    )
}
