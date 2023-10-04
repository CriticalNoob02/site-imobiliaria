import CardsHoverProps from "../cardsHover/types"
import { CardHover } from "../../atoms"

export default function FilterCards ({
    images,
    imagesCod,
    imageTitles,
    imageValues,
    imageTopics
}:CardsHoverProps) {

    const total = images.length
    const case1 = `Apenas ${total} imóvel foi encontrado para você ;)`
    const case2 = `${total} imóveis encontrados para você ;)`
    const case0 = 'Nenhum imóvel foi encontrado :('
    const cases = total > 1 ? case2 : case1

    return(
        <div className="h-full w-full">
            <div className="mt-8 px-8 ">
                <p className="border-b-2 border-x-stone-600 text-stone-600">
                    {total ? cases : case0}
                </p>
            </div>
            <div className="justify-center flex flex-row flex-wrap overflow-hidden">
                {images.map((image,i) => (
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
        </div>
    )
}