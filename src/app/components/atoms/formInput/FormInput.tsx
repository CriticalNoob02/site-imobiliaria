import FormInputProps from "./types"

export default function FormInput({
    label,
    onChange
}:FormInputProps) {
    return(
        <div className="text-start w-full h-full">
            <label className="text-slate-100 text-2xl font-semibold drop-shadow-md">
                {label}
            </label>
            <input onChange={onChange} type="text" className=" w-auto h-auto bg-slate-100 relative outline-none caret-red-800 backdrop-blur-md drop-shadow-md flex flex-row items-center justify-between tracking-wide mt-2 p-4 rounded-lg"/>
        </div>
    )
}
