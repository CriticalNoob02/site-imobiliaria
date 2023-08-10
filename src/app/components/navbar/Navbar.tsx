import { randomUUID } from "crypto"
import Image from "../../../../node_modules/next/image"
import logo from "../../../../public/pic.jpg"
import NavItens from "./navItens/NavItens"

export default function Navbar () {
    return(
        <div className="w-screen h-28 flex justify-around fixed p-2 drop-shadow-xl backdrop-blur-sm bg-red-200/60">
            <div className="basis-1/3 overflow-hidden">
                <Image
                src={logo}
                height={110}
                alt='logo da empresa'
                />
            </div>
            <div className="basis-2/3">
                <div className="w-full h-full">
                  <NavItens data={{
                        titles: ["Ab","aee","eef"],
                        links: ["#12","#15","#20"],
                        uuid: [randomUUID(), randomUUID(), randomUUID()]
                    }}/>
                </div>
            </div>
        </div>
    )
}