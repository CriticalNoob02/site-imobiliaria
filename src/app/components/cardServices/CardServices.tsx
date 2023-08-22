import Card3d from "./card3D/Card3D"
import Gradient from "./gradient/Gradient"

export default function CardServices() {
    return(
        <div id="Services" className="w-screen h-[95vh] flex items-center justify-evenly flex-col bg-slate-100 text-center">
            <h1 className="text-5xl text-red-800 font-bold py-10 drop-shadow-md">
                Serviços
            </h1>
            <div className="w-full h-full flex items-center justify-evenly flex-row">
                <Card3d color="bg-red-800">
                    <div className="h-full w-full rounded bg-ImgCard1 bg-center bg-no-repeat relative flex items-end justify-center transition group-hover:grayscale">
                        <h1 className="my-5 text-3xl tracking-wide font-bold text-slate-50 transition drop-shadow-md shadow-red-800 z-20">
                            Trabalhe conosco!
                        </h1>
                        <Gradient/>
                    </div>
                </Card3d>
                <Card3d color="bg-red-800">
                    <div className="h-full w-full rounded bg-ImgCard2 bg-center bg-no-repeat relative flex items-end justify-center transition group-hover:grayscale">
                        <h1 className="my-5 text-3xl tracking-wide font-bold text-slate-50 transition drop-shadow-md shadow-red-800 z-20">
                            Realize seu sonho!
                        </h1>
                        <Gradient/>
                    </div>
                </Card3d>
            </div>
        </div>
    )
}