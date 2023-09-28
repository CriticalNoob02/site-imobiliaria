import { FormSelect, Col } from "../../atoms"

export default function FormFilter() {

    const arrayaa = ['','algo','algo2']
    const title = 'Selecione o tipo do Imóvel'

    return(
        <Col height="h-[80vh]" color="bg-red-800">
            <div className="flex flex-row">
                <FormSelect options={arrayaa} typeLabel={title}/>
            </div>
        </Col>
    )
}
