import { Col, Title } from "../../atoms"
import { CardsHover } from "../../molecules"

export default function PropertiesCard () {
    return(
        <Col height="h-[70vh]">
            <div className="w-full h-1/5">
                <Title title="Lançamentos"/>
            </div>
            <div className="w-full h-4/5 bg-red-800 flex items-center justify-around flex-nowrap shrink-0">
                <CardsHover/>
            </div>
        </Col>
    )
}
