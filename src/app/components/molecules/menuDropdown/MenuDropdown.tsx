'use client';

import { useState } from 'react';
import { ButtonMenu, Dropdown } from "../../atoms";
import MenuDropdownProps from './types';

export default function MenuDropdown ({
    right,
    left,
    link,
    title
}:MenuDropdownProps) {
    const [menuStats, setMenuStats] = useState(true);

    const ToogleMode = () => {
        setMenuStats(!menuStats);
    };

    return(
        <div className='relative'>
            <ButtonMenu status={menuStats} onClick={ToogleMode} />
            <div
                className={`${menuStats
                    ? '-top-10 invisible opacity-0'
                    : 'top-10 visible opacity-100'} ${right ? '' : 'right-0'} ${left ? '' : 'left-0'}  absolute transition-all`}
            >
                <Dropdown
                    data={{
                        titles: title,
                        links: link,
                    }}
                    color="bg-red-800/70" />
            </div>
        </div>
    )
}
