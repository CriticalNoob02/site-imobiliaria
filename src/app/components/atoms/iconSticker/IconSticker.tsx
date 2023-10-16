import IconStickerProps from "./types"
import IconContainer from "../iconContainer/IconContainer"

export default function IconSticker({
    icon, 
    title, 
    value
}: IconStickerProps) {
    return(
        <div className="bg-red-800 border-4 border-white rounded-lg flex items-center justify-center p-2 text-slate-100 shadow-sticker m-4">
            <IconContainer size="text-2xl">
                {icon}
            </IconContainer>
            <p className="pl-2">{title}: {value}</p>
        </div>
    )
}