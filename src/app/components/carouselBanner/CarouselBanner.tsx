import Image from "../../../../node_modules/next/image"
import pic from "../../../../public/pic.jpg"

export default function  CarouselBanner () {
    return(
        <div className="w-screen h-screen">
            <Image
            src={pic}
            alt=""
            fill/>
            <div className="Vidro backdrop-blur-sm bg-white-200/20 w-full h-full">
                <div className="card">
                    <div className="Texto">
                        <input className="botões"></input>
                        <div className="Gradiente"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}