import SocialBoxProps from "./types";
import { PiInstagramLogo, PiFacebookLogo } from "react-icons/pi";
import { IconContainer } from "../../atoms";

export default function SocialBox ({
    instagram,
    facebook
}:SocialBoxProps) {
    return(
        <div className="w-full h-full flex flex-row items-center justify-center">
            <IconContainer size="text-4xl" hover="hover:scale-125">
                <a href={facebook} target="_blank">
                    <PiFacebookLogo/>
                </a>
            </IconContainer>
            <IconContainer size="text-4xl" hover="hover:scale-125">
                <a href={instagram} target="_blank">
                    <PiInstagramLogo/>
                </a>
            </IconContainer>
        </div>
    )
}
