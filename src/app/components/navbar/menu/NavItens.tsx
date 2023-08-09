import NavItensProps from "./types/index"

export default function NavItens({data}:NavItensProps) {
    return Object.keys(data).map( (k:String) => {
        <h1><a href={data[k]}>{k}</a></h1>
    })
}