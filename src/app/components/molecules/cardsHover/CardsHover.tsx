import { CardHover } from "../../atoms"
import CardsHoverProps from "./types"

export default function CardsHover({
    images,
    imagesCod,
    imageTitles,
    imageValues,
    imageTopics
}:CardsHoverProps) {

    return (
        <div className="flex flex-row items-center flex-nowrap shrink-0">
            {images.map( (image, i) => (
                <div className="w-80 h-96 mx-12 my-10" key={imageTitles[i]+i}>
                    <CardHover
                        image={image}
                        imageCod={imagesCod[i]}
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
