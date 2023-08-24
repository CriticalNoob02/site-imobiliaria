import Image from "next/image";
import AvatarProps from "./types";


export default function Avatar ({image, color}:AvatarProps) {
    return(
        <div className={`w-full h-full rounded-full ${color ?? 'border-slate-50'} bg-slate-50 flex items-center justify-center`}>
            <Image
                src={image}
                alt={"Avatar"}
                style={{
                    width: 'auto',
                    height: 'auto'
                }}/>
        </div>
    )
}
