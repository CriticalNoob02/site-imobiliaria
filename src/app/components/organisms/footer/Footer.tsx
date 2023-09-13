import { Col, Row, Selo } from "../../atoms"
import { Contacts, SocialBox } from "../../molecules"

export default function Footer() {

    const email = ['contato@chavesnovas.com.br','mailto:contato@chavesnovas.com.br']
    const localization = ['Avenida Atilio Pedro Pagani nº425 Pagani','https://goo.gl/maps/41GXnhrbNTU1RuCv8']
    const phone = ['(48) 3093.9040','tel:(48) 3093.9040']
    const instagram = "https://www.instagram.com/chavesnovas/"
    const facebook = "https://www.facebook.com/chavesNovas/"
    const razaoSocial = "GERSON CHAVES NEGÓCIOS IMOBILIÁRIOS LTDA"
    const creci = "5852J"
    const cnpj = "37.768.802/0001.56"

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
                    <div className="h-full w-1/3 flex flex-col items-end justify-center my-2">
                        <div className="w-1/4 h-1/4 flex items-end">
                            <SocialBox instagram={instagram} facebook={facebook}/>
                        </div>
                        <div className="w-full h-3/4 pl-28 pt-4 text-slate-100 flex flex-col items-end text-sm text-end font-extralight ">
                            <h1 className="py-1"><b className="select-none">RAZÃO SOCIAL:</b> {razaoSocial}</h1>
                            <h1 className="py-1"><b className="select-none">CRECI:</b> {creci}</h1>
                            <h1 className="py-1"><b className="select-none">CNPJ:</b> {cnpj}</h1>
                        </div>
                    </div>
                </div>
                <div className="h-[20%] w-2/4 bg-slate-100 rounded-t-[3rem]">
                    <Selo fontColor="text-stone-950" hoverColor="hover:text-red-700" />
                </div>
            </div>
        </Col>
    )
}
