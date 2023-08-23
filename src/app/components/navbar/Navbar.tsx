'use client';

import { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import Image from '../../../../node_modules/next/image';
import logo from '../../../../public/logo.png';
import ButtonContact from './buttonContact/ButtonContact';
import ButtonMenu from './buttonMenu/ButtonMenu';
import MenuDropdown from './menuDropdown/MenuDropdown';

export default function Navbar() {
  const title = ['Home', 'Serviços', 'CCC', 'Jabiraca'];
  const link = ['#Home', '#Services', '#CCC', '#AAcc'];
  const buttonTitle = 'Contato';
  const buttonLink =
    'https://api.whatsapp.com/send?phone=5548991539040&text=Ol%C3%A1,%20estou%20visitando%20o%20site,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es';

  const [menuStats, setMenuStats] = useState(true);

  const ToogleMode = () => {
    setMenuStats(!menuStats);
  };
  return (
    <div className="fixed z-40 flex h-28 w-screen justify-around bg-white/20 p-2 px-28 drop-shadow-xl backdrop-blur-sm">
      <div className="basis-1/5 overflow-hidden">
        <Image src={logo} height={95} alt="logo da empresa" />
      </div>
      <div className="basis-4/5">
        <div className="flex h-full w-full items-center justify-end">
          <ButtonContact
            link={buttonLink}
            title={buttonTitle}
            icon={<BsWhatsapp />}
          />
          <ButtonMenu status={menuStats} onClick={ToogleMode} />
          <div
            className={`${
              menuStats
                ? 'invisible top-10 opacity-0'
                : 'visible top-20 opacity-100'
            } absolute right-auto transition-all`}
          >
            <MenuDropdown
              data={{
                titles: title,
                links: link,
              }}
              color="bg-red-800/70"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
