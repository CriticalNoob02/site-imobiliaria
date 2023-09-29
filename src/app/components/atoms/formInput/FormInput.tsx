import FormInputProps from "./types"

export default function FormInput({label}:FormInputProps) {
    return(
        <div className="text-start">
            <label className="text-slate-100 text-2xl font-semibold drop-shadow-md">
                {label}
            </label>
            <input type="text" className="bg-slate-100 hover:bg-blue-800 relative focus:outline-none caret-red-800 backdrop-blur-md drop-shadow-md flex flex-row items-center justify-between tracking-wide mt-2 p-4 rounded-lg"/>
        </div>
    )
}
