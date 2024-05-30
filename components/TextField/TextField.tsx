import { ChangeEvent } from "react";
import { TextFieldProps } from "./TextField.type";

const TextField = ({label, value, onChange}: TextFieldProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value);

    return (
        <div className="flex flex-row gap-x-2 items-center">
            <p>{label}</p>
            <input type="number" className="w-[72px] h-[35px] border border-black bg-white rounded-xl p-2 outline-none" value={value} onChange={handleChange}/>
        </div>
    )
}

export default TextField;