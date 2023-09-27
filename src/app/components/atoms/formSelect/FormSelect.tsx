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

    const arrayaa = ['','algo','algo2']

    return (
        <div className="w-full h-full">
            <div className='relative'>
                <label onClick={toggleMode}>
                    <input type='checkbox' className='selectCuston' onClick={toggleMode} />
                    Selecione o tipo do Imóvel
                </label>

                <div className={`bg-slate-100 relative backdrop-blur-md drop-shadow-md flex flex-row items-center justify-between tracking-wide mt-2 p-4 rounded-lg ${selectStatus ? 'outline-1 outline-red-600' : ''}`}>
                    <div id="select-button">{selectedOption}</div>
                    <div className={`flex flex-row`}>
                        <PiArrowDown className={`${selectStatus ? 'visible' : 'hidden'}`} />
                        <PiArrowUp className={`${selectStatus ? 'hidden' : 'visible'}`}/>
                    </div>
                </div>
            </div>

            <ul className={`bg-slate-100 absolute backdrop-blur-md drop-shadow-2xl rounded-lg my-2 font-medium ${selectStatus ? 'hidden' : 'visible'}`}>
                {arrayaa.map( (option,i) => (
                    <li className='flex flex-row items-center justify-between p-4 border-b border-black/10 hover:bg-red-800/50 relative peer-focus:border-2'>
                        <input id={option} type='radio' name='category' value={option} className='peer selectCuston' onChange={handleOptionChange} />
                        <p>{option}</p>
                        <PiCheckBold className='text-green-500 invisible peer-checked:visible' />
                    </li>
                ))}
            </ul>
        </div>
    )
}
