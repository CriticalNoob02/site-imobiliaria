'use client';
import React, { useState } from 'react';
import { PiArrowDown, PiArrowUp, PiCheckBold } from "react-icons/pi"

export default function FormSelect() {
    const [selectStatus, setSelect] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Tipo de Imóvel");

    const toggleMode = () => {
        setSelect(!selectStatus);
    }

    const handleOptionChange = (event: { target: { value: any; }; }) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        setSelect(false); // Feche a lista após a seleção
    }

    return (
        <div className="w-full h-full">
            <div className='relative'>
                <label onClick={toggleMode}>
                    <input type='checkbox' className='input-select' onClick={toggleMode} />
                    {selectedOption}
                </label>

                <div className={`bg-slate-100/40 backdrop-blur-md drop-shadow-md flex flex-row items-center justify-between tracking-wide mt-2 p-4 rounded-lg ${selectStatus ? 'outline-1 outline-red-600' : ''}`}>
                    <div id="select-button">{selectedOption}</div>
                    <div className={`flex flex-row ${selectStatus ? 'visible' : 'hidden'}`}>
                        <PiArrowDown />
                        <PiArrowUp />
                    </div>
                </div>
            </div>

            <ul className={`bg-slate-100/40 backdrop-blur-md drop-shadow-2xl rounded-lg my-2 font-medium ${selectStatus ? 'hidden' : 'visible'}`}>
                <li className='flex flex-row items-center justify-between p-4 border-b border-black/10 hover:bg-red-800/50 relative peer-focus:border-2'>
                    <input id='house' type='radio' name='category' value="Casa" className='peer input-select' onChange={handleOptionChange} />
                    <p>Casa</p>
                    <PiCheckBold className='text-green-500 invisible peer-checked:visible' />
                </li>

                <li className='flex flex-row items-center justify-between p-4 border-b border-black/10 hover:bg-red-800/50 relative peer-focus:border-2'>
                    <input id='apartment' type='radio' name='category' value="Apartamento" className='peer input-select' onChange={handleOptionChange} />
                    <p>Apartamento</p>
                    <PiCheckBold className='text-green-500 invisible peer-checked:visible' />
                </li>

                <li className='flex flex-row items-center justify-between p-4 border-b border-black/10 hover:bg-red-800/50 relative peer-focus:border-2'>
                    <input id='terrain' type='radio' name='category' value="Terreno" className='peer input-select' onChange={handleOptionChange} />
                    <p>Terreno</p>
                    <PiCheckBold className='text-green-500 invisible peer-checked:visible' />
                </li>
            </ul>
        </div>
    )
}
