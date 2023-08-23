import Card3d from './card3D/Card3D'
import { PiHandshake, PiKey, PiHouse } from 'react-icons/pi'

export default function CardServices() {
    return (
        <div
            id="Services"
            className="w-screen h-[95vh] flex items-center justify-between flex-col bg-slate-100 text-center py-14"
        >
            <h1 className="text-5xl text-red-800 font-bold drop-shadow-md">
                Serviços
            </h1>
            <div className="w-full h-full flex items-center justify-evenly flex-row">
                <Card3d color="bg-red-800">
                    <div className="h-full w-full rounded relative flex flex-col items-center transition">
                        <PiHandshake className="transition text-[10rem] text-slate-50 grow group-hover:drop-shadow-lg group-hover:scale-110" />
                        <h1 className="text-2xl m-4 tracking-wide font-semibold text-slate-50 transition drop-shadow-md select-none z-20">
                            Quero fazer parte da equipe de corretores!
                        </h1>
                    </div>
                </Card3d>
                <Card3d color="bg-red-800">
                    <div className="h-full w-full rounded relative flex flex-col items-center transition">
                        <PiKey className="transition text-[10rem] text-slate-50 grow group-hover:drop-shadow-lg group-hover:scale-110" />
                        <h1 className="text-2xl m-4 tracking-wide font-semibold text-slate-50 transition drop-shadow-md select-none z-20">
                            Quero comprar meu imovel novo com vocês!
                        </h1>
                    </div>
                </Card3d>
                <Card3d color="bg-red-800">
                    <div className="h-full w-full rounded relative flex flex-col items-center transition">
                        <PiHouse className="transition text-[10rem] text-slate-50 grow group-hover:drop-shadow-lg group-hover:scale-110" />
                        <h1 className="text-2xl m-4 tracking-wide font-semibold text-slate-50 transition drop-shadow-md select-none z-20">
                            Quero vender meu imovel
                        </h1>
                    </div>
                </Card3d>
            </div>
        </div>
    )
}
