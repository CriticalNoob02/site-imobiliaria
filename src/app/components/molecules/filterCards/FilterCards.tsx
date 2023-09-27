import CardsHoverProps from "../cardsHover/types"
import { CardHover } from "../../atoms"

export default function FilterCards ({
    images,
    imagesCod,
    imageTitles,
    imageValues,
    imageTopics
}:CardsHoverProps) {

    return(
        <div className="h-full w-full justify-center flex flex-row flex-wrap overflow-hidden">
            { images.map((image,i) => (
            <div key={'imovel'+i} className=" w-96 h-96 m-5 mb-20">
                <CardHover image={image} imageCod={imagesCod[i]} imageTitle={imageTitles[i]} imageValue={imageValues[i]} imageTopic={{
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