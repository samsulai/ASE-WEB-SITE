import Image from "next/image";
import Link from "next/link";


export default function PopupLink({ text, href, image }){
    return (
        <div className="group relative">
            <div className={`
                group-hover:opacity-100 group-hover:-top-28 group-hover:visible
                opacity-0 duration-500 invisible
                bg-white absolute -top-20 w-[320px]
                inline-flex justify-center items-center shadow-xl 
                rounded-md border overflow-hidden
            `}>
                <div className="inline-flex h-full">
                    {image && <div className="relative w-24 h-24">
                        <Image 
                            src={image}
                            layout="fill"
                            objectFit="cover"
                            alt=""
                        />
                    </div>}
                </div>
                <p className="p-3 text-xs text-black">{text}</p>
            </div>
            <Link href={href} className="font-bold text-xs">
                "{text}"
            </Link>
        </div>
    );
}