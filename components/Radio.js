import { useEffect, useRef, useState } from "react";


export default function Radio({
    label,
    error,
    dir,
    required,
    radioOpts,
    onChange,
    ...props
}){

    
    
    const [input, setInput] = useState('');

    useEffect(() => {
        onChange({ target: { name: props.name, value: input } });
    }, [input])

    return(
        <div className="">
            <div className="relative p-1 rounded-sm">

                <label 
                    className={`flex items-center gap-1 absolute duration-200 peer-focus:top-0 px-2 bg-white left-2 top-0 -translate-y-1/2 text-xs font-bold`}
                    htmlFor="">
                        {label}
                        {required && <span className="text-red-600 font-bold">*</span>} 
                </label>

                <div className={`flex items-center ${dir === "col" && 'flex-col !items-start !h-auto'} gap-x-8 gap-y-2 h-12 px-2 py-4`}>
                    {radioOpts.map(opt => (
                        <div key={opt} className="flex gap-2">
                            <div onClick={() => setInput(opt)} className={`${input === opt && 'bg-app-dark after:bg-white'} relative after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:rounded-full w-5 h-5 border border-neutral-400 rounded-full`}></div>
                            <div className="font-bold">{opt}</div>
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-red-600 font-bold text-xs pt-1">{error?.includes(props.name) && 'This is required'}</p>
        </div>
    );

}