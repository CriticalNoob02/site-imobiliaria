import CarouselSlideProps from "./types";
import Image from "next/image";


export default function CarouselSlide ({images,timer}:CarouselSlideProps) {
    return(
        <div className={`h-full flex flex-row items-center justify-start flex-nowrap animate-[slides_20s_linear_infinite]`}>
            {images.map((image,i) => (
                <div key={image.toString()} className="w-full h-full shrink-0">
                    <Image
                        src={image}
                        alt='Foto das redes sociais da Chaves Novas'
                        style={{
                            width: '100%',
                            height: '100%'
                        }}/>
                </div>
            ))}
            {images.map((image,i) => (
                <div key={image.toString()+i} className="w-full h-full shrink-0">
                    <Image
                        src={image}
                        alt='Foto das redes sociais da Chaves Novas'
                        style={{
                            width: '100%',
                            height: '100%'
                        }}/>
                </div>
            ))}
        </div>
    )
}


{/* <div className="w-full h-full bg-red-400 shrink-0">
                <h1>1</h1>
            </div>
            <div className="w-full h-full bg-red-300 shrink-0">
                <h1>2</h1>
            </div>
            <div className="w-full h-full bg-red-500 shrink-0">
                <h1>3</h1>
            </div>
            <div className="w-full h-full bg-red-600 shrink-0">
                <h1>4</h1>
            </div>
            <div className="w-full h-full bg-red-700 shrink-0">
                <h1>5</h1>
            </div>
            <div className="w-full h-full bg-red-900 shrink-0">
                <h1>6</h1>
            </div>

            <div className="w-full h-full bg-red-400 shrink-0">
                <h1>1</h1>
            </div>
            <div className="w-full h-full bg-red-300 shrink-0">
                <h1>2</h1>
            </div>
            <div className="w-full h-full bg-red-500 shrink-0">
                <h1>3</h1>
            </div>
            <div className="w-full h-full bg-red-600 shrink-0">
                <h1>4</h1>
            </div>
            <div className="w-full h-full bg-red-700 shrink-0">
                <h1>5</h1>
            </div>
            <div className="w-full h-full bg-red-900 shrink-0">
                <h1>6</h1>
            </div> */}
