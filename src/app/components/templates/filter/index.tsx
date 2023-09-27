import { FilterCards } from "../../molecules"
import { FormFilter } from "../../organisms"
import image from "../../../../../public/terreno.jpg"

export default function FilterItems () {

    const imagea = [image,image]
    const cods = ['#321','#1255']
    const titlesd = ['abelhas','olho gordo']
    const abelfh = ['100000','323232323']
    const topics = [{bedrooms:2,groundSize: 10,garages: 2,showers: 4},{bedrooms:2,groundSize: 10,garages: 2,showers: 4}]

    return(
        <div className="h-auto w-screen">
            <FormFilter/>
            <FilterCards images={imagea} imagesCod={cods} imageTitles={titlesd} imageValues={abelfh} imageTopics={topics}/>
        </div>
    )
}