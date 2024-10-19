import { useEffect, useRef, useState } from "react";


export default function Select({
    label,
    error,
    required,
    options,
    ...props
}){

    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    return(
        <div className="">
            <div className="relative border border-neutral-400 p-1 rounded-md">

                <select 
                    className="border-none outline-none peer block w-full h-12 p-2"
                    ref={inputRef}
                    onBlur={() => setInput(inputRef.current.value)}
                    {...props}
                >
                    {options.map((option) => (
                        <option
                            key={option}
                            value={option}>
                                {option}
                        </option>
                    ))}
                </select>
                <label 
                    className={`${input ? 'top-0' : 'top-1/2'} flex items-center gap-1 absolute duration-200 peer-focus:top-0 px-2 bg-white left-2 top-0 -translate-y-1/2 text-xs font-bold`}
                    htmlFor="">
                        {label}
                        {required && <span className="text-red-600 font-bold">*</span>} 
                </label>
            </div>
            <p className="text-red-600 font-bold text-xs pt-1">{error?.includes(props.name) && 'This is required'}</p>
        </div>
    );

}