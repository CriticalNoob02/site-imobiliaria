import Card3d from "./card3D/Card3D"
import Gradient from "./gradient/Gradient"
import { PiHandshake, PiKey, PiHouse } from "react-icons/pi";

export default function CardServices() {
    return(
        <div id="Services" className="w-screen h-[95vh] flex items-center justify-evenly flex-col bg-slate-100 text-center">
            <h1 className="text-6xl text-red-800 font-bold py-20 drop-shadow-md">
                Serviços
            </h1>
            <div className="w-full h-full flex items-center justify-evenly flex-row">
                <Card3d color="bg-red-800">
                    <div className="h-full w-full rounded texture relative flex flex-col items-center transition">
                        <PiHandshake className="transition text-[10rem] text-red-800 grow group-hover:drop-shadow-lg group-hover:scale-110"/>
                        <h1 className="text-3xl my-4 tracking-wide font-bold text-slate-50 transition drop-shadow-md shadow-red-800 select-none z-20">
                            Trabalhe conosco!
                        </h1>
                        <Gradient/>
                    </div>
                </Card3d>
                <Card3d color="bg-red-800">
                    <div className="h-full w-full rounded texture relative flex flex-col items-center transition">
                        <PiKey className="transition text-[10rem] text-red-800 grow group-hover:drop-shadow-lg group-hover:scale-110"/>
                        <h1 className="text-3xl my-4 tracking-wide font-bold text-slate-50 transition drop-shadow-md shadow-red-800 select-none z-20">
                            Conquiste seu imovel!
                        </h1>
                        <Gradient/>
                    </div>
                </Card3d>
                <Card3d color="bg-red-800">
                    <div className="h-full w-full rounded texture relative flex flex-col items-center transition">
                        <PiHouse className="transition text-[10rem] text-red-800 grow group-hover:drop-shadow-lg group-hover:scale-110"/>
                        <h1 className="text-3xl my-4 tracking-wide font-bold text-slate-50 transition drop-shadow-md shadow-red-800 select-none z-20">
                            Venda seu Imóvel!
                        </h1>
                        <Gradient/>
                    </div>
                </Card3d>
            </div>
        </div>
    )
}