import Image from '../../../../node_modules/next/image';
import logo from '../../../../public/logo.png';
import { MenuDropdown, ButtonZap } from '../molecules';

export default function Navbar() {
    const title = ['Home', 'Serviços', 'Avaliações', 'Jabiraca'];
    const link = ['#Home', '#Services', '#Reviews', '#AAcc'];
    const buttonTitle = 'Contato';
    const buttonLink ='https://api.whatsapp.com/send?phone=5548991539040&text=Ol%C3%A1,%20estou%20visitando%20o%20site,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es';

    return (
        <div className="fixed z-40 flex h-28 w-screen justify-around bg-white/20 p-2 px-28 drop-shadow-xl backdrop-blur-sm">
            <div className="basis-1/5 overflow-hidden">
                <Image src={logo} height={95} alt="logo da empresa" />
            </div>
            <div className="basis-4/5">
                <div className="flex h-full w-full items-center justify-end">
                    <ButtonZap link={buttonLink} title={buttonTitle}/>
                    <MenuDropdown title={title} link={link} left/>
                </div>
            </div>
        </div>
    );
}
