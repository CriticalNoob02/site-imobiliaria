import { randomUUID } from "crypto"
import Image from "../../../../node_modules/next/image"
import logo from "../../../../public/pic.jpg"
import MenuToogle from "./menuToogle/MenuToogle"

export default function Navbar () {
    const title = [
        'AAA',
        'BBB',
        'CCC'
    ]
    const link = [
        '#AAA',
        '#BBB',
        '#CCC'
    ]
    const uuids = [
        randomUUID(),
        randomUUID(),
        randomUUID()
    ]

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
                    <MenuToogle title={title} link={link} uuids={uuids}/>
                </div>
            </div>
        </div>
    )
}