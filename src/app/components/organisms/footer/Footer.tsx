import { Col, Row, Selo } from "../../atoms"
import { Contacts } from "../../molecules"

export default function Footer() {

    const email = ['contato@chavesnovas.com.br','mailto:contato@chavesnovas.com.br']
    const localization = ['Avenida Atilio Pedro Pagani nº425 Pagani','https://goo.gl/maps/41GXnhrbNTU1RuCv8']
    const phone = ['(48) 3093.9040','tel:(48) 3093.9040']

    return(
        <Col  height="h-[30vh]" color="bg-slate-100 ">
            <div className="h-full w-full flex flex-col items-center bg-red-700 rounded-t-[3rem] mt-10">
                <div className="h-[80%] w-full flex flex-row justify-around">
                    <div className="h-full w-1/3">
                        <Contacts 
                        email={email} 
                        localization={localization} 
                        phone={phone}
                        />
                    </div>
                    <div className="h-full w-1/3">
                    </div>
                </div>
                <div className="h-[20%] w-2/4 bg-slate-100 rounded-t-[3rem]">
                    <Selo fontColor="text-stone-950" hoverColor="hover:text-red-700" />
                </div>
            </div>
        </Col>
    )
}


{/* <Col height="h-[24vh]" color="bg-red-700 backdrop-blur-sm rounded-t-[3rem] mt-4">
<Row height="h-2/3" width="w-full" color="">
    <div className="h-full w-1/2">
        <Contacts/>
    </div>
    <div className="h-full w-1/2">
    </div>
</Row>
<div className="h-1/3 w-5/6 bg-slate-100  rounded-t-[3rem]">
   <Selo fontColor="text-stone-950" hoverColor="hover:text-red-700" />
</div>
</Col> */}