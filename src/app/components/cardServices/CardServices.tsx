import Card3d from './card3D/Card3D'
import { PiHandshake, PiKey, PiHouse } from 'react-icons/pi'

export default function CardServices() {
    return (
        <div
            id="Services"
            className="flex h-[95vh] w-screen flex-col items-center justify-between bg-slate-100 py-14 text-center"
        >
            <h1 className="text-5xl font-bold text-red-800 drop-shadow-md">
                Serviços
            </h1>
            <div className="flex h-full w-full flex-row items-center justify-evenly">
                <Card3d color="bg-red-800">
                    <div className="relative flex h-full w-full flex-col items-center rounded transition">
                        <PiHandshake className="grow text-[10rem] text-slate-50 transition group-hover:scale-110 group-hover:drop-shadow-lg" />
                        <h1 className="z-20 m-4 select-none text-2xl font-semibold tracking-wide text-slate-50 drop-shadow-md transition">
                            Quero fazer parte da equipe de corretores!
                        </h1>
                    </div>
                </Card3d>
                <Card3d color="bg-red-800">
                    <div className="relative flex h-full w-full flex-col items-center rounded transition">
                        <PiKey className="grow text-[10rem] text-slate-50 transition group-hover:scale-110 group-hover:drop-shadow-lg" />
                        <h1 className="z-20 m-4 select-none text-2xl font-semibold tracking-wide text-slate-50 drop-shadow-md transition">
                            Quero comprar meu imovel novo com vocês!
                        </h1>
                    </div>
                </Card3d>
                <Card3d color="bg-red-800">
                    <div className="relative flex h-full w-full flex-col items-center rounded transition">
                        <PiHouse className="grow text-[10rem] text-slate-50 transition group-hover:scale-110 group-hover:drop-shadow-lg" />
                        <h1 className="z-20 m-4 select-none text-2xl font-semibold tracking-wide text-slate-50 drop-shadow-md transition">
                            Quero vender meu imovel
                        </h1>
                    </div>
                </Card3d>
            </div>
        </div>
    )
}
