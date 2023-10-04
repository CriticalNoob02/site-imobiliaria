'use client';

import { useState } from "react";
import { FormSelect, FormInput ,Col } from "../../atoms"

export default function FormFilter() {

    const arrayaa = ['','algo','algo2','aldjfi','masdfff','adasdad']
    const title = 'Selecione o tipo'
    const placeholder = 'dfg'

    const arrayaa2 = ['','algo','algo2','aldjfi','masdfff','adasdad']
    const title2 = 'Selecione a cidade'
    const placeholder2 = 'asdasd'

    const arrayaa3 = ['','algo','algo2','aldjfi','masdfff','adasdad']
    const title3 = 'Selecione o bairro'
    const placeholder3 = 'asd'

    const label = 'Código do Imóvel'

    const [inputText, setValueText] = useState('')
    const [optionValue, setOptionValue] = useState('')
    const [optionValue2, setOptionValue2] = useState('')
    const [optionValue3, setOptionValue3] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueText(event.target.value);
        console.log(inputText)
      };

      const handleOption = (selectedValue: string) => {
        setOptionValue(selectedValue)
        console.log(optionValue)
      }
      const handleOption2 = (selectedValue: string) => {
        setOptionValue2(selectedValue)
        console.log(optionValue2)
      }
      const handleOption3 = (selectedValue: string) => {
        setOptionValue3(selectedValue)
        console.log(optionValue3)
      }

    return(
        <Col height="h-[70vh]" color="bg-red-800">
                <div className="flex flex-row items-end justify-center flex-wrap">
                    <div className="m-8 flex-grow select-none">
                        <FormInput label={label} onChange={handleChange}/>
                    </div>
                    <div className="m-8 flex-grow select-none">
                        <FormSelect options={arrayaa} typeLabel={title} placeholder={placeholder} onChange={handleOption}/>
                    </div>
                    <div className="m-8 flex-grow select-none">
                        <FormSelect options={arrayaa2} typeLabel={title2} placeholder={placeholder2} onChange={handleOption2}/>
                    </div>
                    <div className="m-8 flex-grow select-none">
                        <FormSelect options={arrayaa3} typeLabel={title3} placeholder={placeholder3} onChange={handleOption3}/>
                    </div>
                    <div className="m-8 flex-grow select-none">
                        <button type="submit" className="flex font-bold text-lg drop-shadow-md select-none items-center justify-center rounded-lg text-slate-100 bg-red-600 py-4 px-10 ring-red-600 ring-2 hover:bg-slate-100 hover:text-red-600 transition hover:-translate-y-0.5 ">
                            Buscar
                        </button>
                    </div>
                </div>
        </Col>
    )
}

