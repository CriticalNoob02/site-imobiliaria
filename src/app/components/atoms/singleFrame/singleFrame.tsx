import Image from "next/image"
import SingleFrameProps from "./types"

export default function SingleFrame({
    image
}: SingleFrameProps) {
    return(
        <div className="h-full w-full flex items-center justify-center mx-1">
            <Image 
            src={image} 
            alt={"Imagem grande do Imóvel"}
            style={{
                width: '100%',
                height: '100%'
            }}
            />
        </div>
    )
}