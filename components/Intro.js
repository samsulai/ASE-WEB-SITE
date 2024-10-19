import Image from "next/image"
import Heading from "./Heading"

export default function Intro({ text, subtext, bg, cover, children }) {

    return (

        <section style={{ backgroundImage: `url(${bg || '/static/img/bg.png'})`,fontFamily: 'Playfair Display' }} className={`relative  py-12 px-6 lg:p-12 lg:h-[35vh] h-[30vh] ${bg ? "bg-cover bg-center" :"bg-black"} grid items-center  isolate`}>
            {bg && <div style={{ '--tw-gradient-from': cover ? cover : 'black' }} className={`absolute top-0 left-0 w-full h-full  -z-10`}></div>}

            <div className="space-y-5">
                <Heading className="!text-white !text-left !text-3xl lg:!text-5xl">
                    {text || children}
                </Heading>

                <p className="lg:w-1/3 text-3xl text-white">{subtext}</p>
            </div>

            <div className="w-[70px] h-[20px] absolute bottom-5 left-1/2 -translate-x-1/2">
                <Image src="/static/img/scroll-down.svg" layout="fill" objectFit="contain" />
            </div>
        </section>

    )
}