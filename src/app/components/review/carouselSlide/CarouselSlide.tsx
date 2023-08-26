import CarouselSlideProps from "./types";
import Image from "next/image";


export default function CarouselSlide ({images,timer}:CarouselSlideProps) {
    return(
        <div className={`h-full flex flex-row items-center justify-start flex-nowrap animate-[slides_20s_linear_infinite] select-none`}>
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
