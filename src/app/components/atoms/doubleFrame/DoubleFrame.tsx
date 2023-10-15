import Image from "next/image"
import DoubleFrameProps from "./types"

export default function DoubleFrame({images}: DoubleFrameProps) {
    return(
        <div className="h-full w-full flex items-center justify-center flex-col">
            <div className=" h-1/2 w-full mb-1">
                <Image 
                src={images[0]} 
                alt={"Imagem do imóvel 1"}
                style={{
                    width: '100%',
                    height: '100%'
                }}
                />
            </div>

            <div className=" h-1/2 w-full mb-1">
                <Image 
                src={images[1]} 
                alt={"Imagem do imóvel 1"}
                style={{
                    width: '100%',
                    height: '100%'
                }}
                />
            </div>
        </div>
    )
}