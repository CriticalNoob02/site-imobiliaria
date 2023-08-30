import NavbarProps from './types';
import Image from 'next/image';
import { MenuDropdown, ButtonZap } from '../../molecules';

export default function Navbar({titles, links, buttonTitle, buttonLink, logo}:NavbarProps) {
    return (
        <div className="fixed z-40 flex h-28 w-screen justify-around bg-white/20 p-2 px-28 drop-shadow-xl backdrop-blur-sm">
            <div className="basis-1/5 overflow-hidden">
                <Image src={logo} height={95} alt="logo da empresa" />
            </div>
            <div className="basis-4/5">
                <div className="flex h-full w-full items-center justify-end">
                    <ButtonZap link={buttonLink} title={buttonTitle}/>
                    <MenuDropdown title={titles} link={links} left/>
                </div>
            </div>
        </div>
    );
}
