import { Col, Row, Selo } from "../../atoms"

export default function Footer() {
    return(
        <Col height="h-[24vh]" color="bg-white/20 backdrop-blur-sm rounded-t-[3rem] mt-4">
            <Row height="h-2/3" width="w-5/6" color="bg-red-200"></Row>
            <div className="h-1/3 w-5/6">
               <Selo fontColor="text-stone-950" hoverColor="hover:text-red-700" />
            </div>
        </Col>
    )
}