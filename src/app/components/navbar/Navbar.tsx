import NavbarProps from "./types/NavbarProps";

export default function Navbar ({
    logo, 
    navItens
}: NavbarProps) {
    return(
        <div className="w-screen h-20 flex justify-around fixed">
            <div className="basis-1/3">
                {logo}
            </div>
            <div className="basis-2/3">
                {navItens}
            </div>
        </div>
    )
}