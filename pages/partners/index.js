import Image from "next/image";
import Footer from "../../components/Footer"
import Intro from "../../components/Intro"
import Navbar from "../../components/Navbar"
import SEO from "../../components/SEO"
import Heading from "../../components/Heading";
import { useCallback, useEffect } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";


const endorsement = [
    {
        name: "Dr. Ibrahim Mayaki",
        image: "/static/img/dr-mayaki.jpg",
        text: "My personal association with the school emanates from ASE's vision and testament to the fact that solutions for Africa should emerge from Africa and lead the way in global narratives on knowledge and expertise for growth and development.",
        from: "Former CEO, African Union Development Agency NEPAD (2009 - 2022)"
    }
]



export default function Partnerships({ }){
  

    return(
        <>

        <SEO
            title="ASE Partnerships"
            description="ASE Partnerships"
            image="/static/img/bg.png"
        />

        <Navbar />
        
        <Intro>
            Partners
        </Intro>

        <section className='max-w-6xl mx-auto overflow-auto text-base space-y-36 lg:py-20 lg:px-16 py-12 px-5'>

            <div className="">
                At ASE it is our key goal to empower the next generation of African scholars that are capable of producing world-class research. We do so through excellence in 3 key areas namely academic training, research and policy advice from our 5 research think tanks and global networks, all informed by African perspectives. Against this background ASE has concluded over 60 strategic partnerships since its foundation. Focusing on the 3 key areas, ASE’s partners range from regional governmental cooperation with the&nbsp; 
                <a className="font-bold text-app-dark" href="https://www.nepad.org/" target="_blank" rel="noreferrer">African Union Development Agency (AUDA-NEPAD)</a> and the 
                <a className="font-bold text-app-dark" href="https://www.bceao.int/en/content/presentation-bceao" target="_blank" rel="noreferrer">Central Bank of West African States (BCEAO)</a>, 
                to a total of 72 research projects with multilateral financial institutions like the World Bank, bilaterally with development agencies like USAID, FCDO, DANIDA, AfD, GIZ and foundations such as Bill and Melinda Gates foundation, Open Society Foundation or the German Friedrich Ebert foundation.
            </div>

            {endorsement.map(({name, image, text, from}, index) => (
                <div key={index} className='px-5'>
                    <div className='flex flex-col items-center gap-4 lg:gap-16 lg:w-2/3 mx-auto lg:flex-row'>
                    <div className="w-1/4 grid place-content-center">
                        <div className="
                            relative w-56 h-56 isolate
                            -translate-x-10 -translate-y-10
                        ">
                            <div className="
                                translate-x-10 translate-y-10
                                bg-app-dark block w-full h-full
                            "></div>
                            <Image 
                                className="object-cover shadow-2xl"
                                src={image}
                                alt=""
                                fill
                            />
                        </div>
                    </div>
                    <div className=' space-y-2'>
                        <p className='text-center'>
                        <ImQuotesLeft  className="text-app-main inline -mt-2 mr-3" />
                        {text}
                        <ImQuotesRight  className="text-app-main inline -mb-2 ml-3" />
                        </p>
                        <p className='font-bold text-center'>{name}</p>
                        <p className='text-xs text-center'>{from}</p>
                    </div>
                    </div>
                </div>
            ))}

        </section>

        <section className='max-w-6xl mx-auto overflow-hidden text-base lg:py-20 lg:px-16 py-12 px-5 space-y-8'>

            <div className="items-center gap-8">
                <div className="space-y-4">

                    <p className="">
                        Academic training partnerships have been concluded globally in 11 countries ranging from collaborative degree programs with the University of Ottawa Canada, Stellenbosch University in South Africa and Universidade Federal da Bahia in Brazil to 10 exchange programs with for instance Purchase College in the US, Barcelona Graduate School of Economics (GSE) in Spain or the New Economics School in Moscow.
                    </p>
                    <p className="">
                        In addition, with Hunter College at University of New York City ASE has set up a particular degree programme targeting the expansion of representation in Economics (HASPERE). 
                    </p>

                    <p className="font-bold">Full list of partners:</p>

                    <ul className="list-disc pl-8 space-y-2">
                        <li className="">Governmental Partners </li>
                        <li className="">Multilateral & bilateral development partners </li>
                        <li className="">Foundations </li>
                        <li className="">Think Tanks</li>
                    </ul>
                </div>
            </div>

        </section>

        
        
        <Footer />
        </>
    )


}