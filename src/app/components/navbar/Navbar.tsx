import Image from "../../../../node_modules/next/image"
import logo from "../../../../public/pic.jpg"

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
                <div>
                    <h1>
                        <a href="#">
                            Title 1
                        </a>
                    </h1>

                    <h1>
                        <a href="#">
                            Title 2
                        </a>
                    </h1>
                </div>
            </div>
        </div>
    )
}