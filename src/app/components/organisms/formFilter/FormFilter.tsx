import { FormSelect, FormInput ,Col } from "../../atoms"

export default function FormFilter() {

    const arrayaa = ['','algo','algo2','aldjfi','masdfff','adasdad']
    const title = 'Selecione o tipo do Imóvel'
    const placeholder = 'Tipo do Imóvel'

    const label = 'Código do Imóvel'
    return(
        <Col height="h-[80vh]" color="bg-red-800">
            <div className="flex flex-row">
                <div className="mx-10">
                    <FormSelect options={arrayaa} typeLabel={title} placeholder={placeholder}/>
                </div>
                <div className="mx-10">
                    <FormInput label={label}/>
                </div>
            </div>
        </Col>
    )
}
