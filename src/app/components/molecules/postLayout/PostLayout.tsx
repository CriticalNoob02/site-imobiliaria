import PostLayoutProps from "./types"
import { IconContainer } from "../../atoms"
import { PiHeart, PiChatCircle, PiNavigationArrow, PiBookmarkSimple } from "react-icons/pi"


export default function PostLayout ({
    avatar,
    username,
    posts
}:PostLayoutProps) {
    return(
        <div className="w-full h-full rounded-3xl border-4 border-slate-50 overflow-hidden">
            <div className="w-full h-1/5 border-b-4 border-slate-50 p-2 flex items-center flex-row">
                <div className="h-12 w-12 mx-5 select-none">
                    {avatar}
                </div>
                <div className="h-full flex items-center justify-start">
                    <h1 className="text-slate-50 text-2xl font-light select-none">
                        {username}
                    </h1>
                </div>
            </div>
            <div className="h-3/5">
                {posts}
            </div>
            <div className="w-full h-1/5 border-t-4 border-slate-50 p-2 flex items-center justify-between flex-row">
                <div className="h-full w-2/5 flex justify-evenly">
                    <IconContainer size="text-4xl" hover="hover:text-red-500 hover:drop-shadow-md">
                        <PiHeart/>
                    </IconContainer>
                    <IconContainer size="text-4xl">
                        <PiChatCircle/>
                    </IconContainer>
                    <IconContainer size="text-4xl">
                        <PiNavigationArrow/>
                    </IconContainer>
                </div>
                <div className=" h-full w-1/5 flex justify-center items-center">
                    <IconContainer size="text-4xl" hover="hover:text-yellow-500 hover:drop-shadow-md">
                        <PiBookmarkSimple/>
                    </IconContainer>
                </div>
            </div>
        </div>
    )
}

