import Image from "next/image";
import Footer from "../../components/Footer"
import Intro from "../../components/Intro"
import Navbar from "../../components/Navbar"
import SEO from "../../components/SEO"
import Heading from "../../components/Heading";
import { useCallback, useEffect } from "react";


const countries = [
    { name: "Brazil", flag: "https://flagcdn.com/w2560/br.png" },
    { name: "Canada", flag: "https://flagcdn.com/w2560/ca.png" },
    { name: "Chile", flag: "https://flagcdn.com/w2560/cl.png" },
    { name: "France", flag: "https://flagcdn.com/w2560/fr.png" },
    { name: "Ghana", flag: "https://flagcdn.com/w2560/gh.png" },
    { name: "Russia", flag: "https://flagcdn.com/w2560/ru.png" },
    { name: "Morocco", flag: "https://flagcdn.com/w2560/ma.png" },
    { name: "Spain", flag: "https://flagcdn.com/w2560/es.png" },
    { name: "South Africa", flag: "https://flagcdn.com/w2560/za.png" },
    { name: "USA", flag: "https://flagcdn.com/w2560/us.png" },
   
]


const information = [
    
    {
        country: "Canada",
        logo: "/static/img/partners/university-of-ottawa.png",
        university: "University of Ottawa",
        description: "The University of Ottawa is a bilingual public research university in Ottawa, Ontario, Canada. Signed partnership in 2022, Both parties agree to work on a collaborative academic training program to be established between the two parties, to be known as the “2 + 2 collaborative training program”."
    },
    {
        country: "Canada",
        logo: "/static/img/partners/university-laval.png",
        university: "Laval University",
        description: "Université Laval is a prestigious public research university located in Quebec City, Quebec, Canada. Signed partnership contract with Université Laval in 2022 to collaborate on various academic activities. As part of this partnership, we will engage in joint research activities that will enable us to pool our resources and expertise to tackle complex global challenges. Our partnership will also facilitate the exchange of faculty members, allowing for the sharing of knowledge and expertise in various academic disciplines."
    },
    {
        country: "South Africa",
        logo: "/static/img/partners/stellenbosch-university.png",
        university: "Stellenbosch University",
        description: "Stellenbosch University, located in Stellenbosch, South Africa, is a renowned public research university. As of 2022, the university has signed a partnership contract to collaborate on a joint Master's program with the ASE's Master in Mathematics, Economics and Statistics (MMES) and the Faculty of Economic and Management Sciences' Master of Commerce (MCom) in Economics. This collaboration will involve offering a collaborative Master's program that draws on the strengths of both institutions, providing students with a unique and comprehensive academic experience. The partnership represents an exciting opportunity to expand academic opportunities and further advance the fields of economics and statistics."
    },
    {
        country: "USA",
        logo: "/static/img/partners/university-of-pittsburgh.png",
        university: "University of Pittsburgh",
        description: "The University of Pittsburgh is a public state-related research university in Pittsburgh, Pennsylvania. ASE and UPB will collaborate in a student exchange program at the undergraduate level where each institution, conforming to the admission requirements of the host institution, shall assume full responsibility in the assessment and nomination of qualified candidates from that institution."
    },
    {
        country: "USA",
        logo: "/static/img/partners/stanford-university.png",
        university: "Stanford University",
        description: "Stanford University, officially Leland Stanford Junior University, is a private research university in Stanford, California. Contract signed in 2022."
    },
    {
        country: "USA",
        logo: "/static/img/partners/hunter-college.png",
        university: "University of New York (CUNY), Hunter College",
        description: "The collaboration between the African School of Economics (ASE) and Hunter College, a public university in New York City, is an important partnership that has the potential to advance economic education and research in both Africa and the United States. The two institutions signed a contract in 2022, paving the way for a joint effort to offer master's programs as dual-degrees. This collaboration can provide students with an opportunity to gain a global perspective on economic issues and equip them with the skills and knowledge necessary to address complex economic challenges facing their respective communities. Moreover, this partnership can foster academic exchange, research collaborations, and ultimately contribute to the development of a stronger, more diverse and equitable global economic community."
    },
    {
        country: "USA",
        logo: "/static/img/partners/purchase-college.png",
        university: "State University of New York, Purchase College",
        description: "The collaboration between the African School of Economics and The State University of New York at Purchase College is of great importance as it brings together two institutions with a shared vision of advancing knowledge and research in the fields of economics and financial research. By signing the contract in 2022, the two institutions have committed to engaging in joint research activities, exchanging information, techniques, and experiences, and visiting other institutions for conferences, seminars, lectures, and discussions. This collaboration will not only provide opportunities for faculty members and researchers to expand their knowledge and expertise but also promote cultural exchange and diversity. Ultimately, this partnership has the potential to produce groundbreaking research that will contribute to solving economic and financial challenges facing African countries and the world at large."
    },
    {
        country: "USA",
        logo: "/static/img/partners/princeton-university.png",
        university: "Princeton University",
        description: "Princeton University, an Ivy League research institution located in Princeton, is a private university. In 2022, a contract was signed with Princeton in Africa (PIAF), which aims to connect future leaders with African countries and their people for life. PIAF provides highly competitive, year-long fellowships to recent college graduates, placing them in various organizations throughout the African continent. This allows fellows to make significant contributions to Africa's well-being through their work. PIAF sends two fellows to the African School of Economics (ASE) each academic year."
    },
    {
        country: "Spain",
        logo: "/static/img/partners/barcelona-school-of-economics.png",
        university: "Barcelona school of Economics",
        description: "The Barcelona School of Economics is a research and graduate education institution focused on economics. In 2021, the ASE and the Barcelona Graduate School of Economics (BGSE) signed a contract to collaborate on faculty exchange programs for research and teaching, as well as the creation of academic exchange programs that involve sharing university publications, treaties, and research materials."
    },
    {
        country: "Morocco",
        logo: "/static/img/partners/mohammed-vi-polytechnic-university.png",
        university: "Mohamed VI Polytechnic University",
        description: "ASE and UM6P have agreed to collaborate on: creating academic exchange programs that will involve sharing university publications, treaties, and research materials, exploring the potential for short-term or long-term student exchange programs between UM6P and ASE."
    },
    {
        country: "Russia",
        logo: "/static/img/partners/new-economic-school-russia.png",
        university: "New Economic School",
        description: "In 2021, a contract was signed between New Economic School (NES) and ASE, with the goal of promoting academic, research, and educational exchange. The agreement sets forth several initiatives to achieve this objective, including the exchange of scholars and students between the two schools, as well as the development of joint degree programs and co-diplomas. The partnership will begin with an exchange program."
    },
    {
        country: "Ghana",
        logo: "/static/img/partners/gimpa.png",
        university: "Ghana Instiute of Management and Public Administration",
        description: "The Ghana Institute of Management and Public Administration is a public co-educational university, signed a contract with ASE in 2018"
    },
    {
        country: "France",
        logo: "/static/img/partners/ens-de-lyon.png",
        university: "Ecole Normale Superieure de Lyon",
        description: "The École normale supérieure de Lyon, situated in the city of Lyon, is a prestigious French higher education institution. A contract was signed in 2022 to facilitate collaborative efforts, which may encompass a variety of initiatives such as joint research undertakings, co-organization of conferences, workshops, and brief visits, as well as exchange of academic resources and knowledge outputs."
    },
    {
        country: "Chile",
        logo: "/static/img/partners/universidad-del-desarrollo.png",
        university: "Universidad del Desarrollo",
        description: "The collaboration between Universidad del Desarrollo and ASE through the signing of a contract in 2021 to facilitate student exchange programs is of great significance. This partnership provides an opportunity for students to experience new learning environments, cultures, and academic systems, which will broaden their horizons and improve their education. Additionally, by granting transfer credit for courses taken at the other university, students can ensure that their academic progress is not affected by the exchange program."
    },
    {
        country: "Brazil",
        logo: "/static/img/partners/universidade-federal-da-bahia.png",
        university: "Universidade Federal da Bahia",
        description: "The collaboration between the Federal University of Bahia (UFBA) and ASE is of utmost importance for both institutions as it provides a platform for joint efforts in promoting academic and research excellence. The signing of the contract in 2022 between UFBA and ASE marked the beginning of a partnership that seeks to foster the development of double degree programs in Mathematics-Statistics-Economics and Statistics-Computer Science at the undergraduate level. This collaboration is set to benefit students from both institutions as it provides an opportunity for them to receive a more diverse and comprehensive education, as well as exposure to different cultures and approaches to learning."
    },
]



export default function AcademicPartnership({ }){

    useEffect(() => {
        const settings = {
        loop: true,
        lazyload: true,
        autoplay: true,
        nav: true,
        navPosition: "bottom",
        mouseDrag: true,
        controls: false,
        items: 1,
        autoplayButton: false,
        autoplayButtonOutput: false,
        autoplayTimeout: 10000,
        speed: 2000,
        }
    
        const TNS = require('tiny-slider/src/tiny-slider');
        let slider = TNS.tns({...settings, container: '#universities-slide',});
    
        return () => null;
    }, []);
    


    return(
        <>

        <SEO
            title="Academic Training Partnerships"
            description="Academic Training Partnerships"
            image="/static/img/bg.png"
        />

        <Navbar />
        
        <Intro>
            Academic Training<br />
            Partnerships
        </Intro>

        <section className='max-w-6xl mx-auto overflow-auto text-base lg:py-20 lg:px-16 py-12 px-5'>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                <div className="space-y-8">
                    <p className="">
                        ASE’s international academic partnerships enable the program to provide students with global exposure in both professional training and working experience. Academic training partnerships have been concluded globally in 10 countries through official Memoranda of Understanding (MoU):
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {countries.map(({name, flag}, index) => (
                            <div key={index} className="flex items-center p-2 px-3 gap-3 rounded-full hover:bg-app-light">
                                <div className="relative w-8 h-6 rounded-full overflow-hidden">
                                    <Image 
                                        className="object-cover"
                                        src={flag}
                                        alt=""
                                        fill
                                    />
                                </div>
                                <div className="">
                                    <p className="font-bold">{name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative w-full h-[300px]">
                    <Image
                        className="object-contain"
                        src="/static/img/nations.png"
                        alt=""
                        fill
                    />
                </div>
            </div>

        </section>

        <section className='max-w-6xl mx-auto overflow-hidden text-base lg:py-20 lg:px-16 py-12 px-5 space-y-8'>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                <div className="space-y-4">
                    <p className="font-bold">The partnerships modalities include:</p>
                    <ul className="list-disc pl-8 space-y-2">
                        <li className="">Double degrees</li>
                        <li className="">Faculty exchange for the purpose of research, and teaching.</li>
                        <li className="">Student exchange programs for long or short-term visiting programs.</li>
                        <li className="">Exchange of university publications, treaties, and research materials</li>
                        <li className="">Joint conferences, workshops, and seminars where faculty and students contribute to designing yearly research projects</li>
                        <li className="">Exchanges for the purposes of research, development, and training. ASE and partners explore participating in joint research in all fields of economics and Finance</li>
                    </ul>
                </div>
            </div>


            <div id="universities-slide" className='lg:flex gap-8 overflow-hidden'>
                {information.map(({ country, logo, university, description }, index) => (
                <div key={index} className="max-w-5xl w-full mx-auto lg:flex items-center shrink-0">
                    <div className="relative">
                        <div className='relative w-40 h-40'>
                            <Image 
                                className="object-contain"
                                src={logo}
                                alt=""
                                fill
                            />
                        </div>
                    </div>

                    <div className='lg:col-span-6 relative space-y-5 lg:space-y-8 pt-5'>
                        <div className='text-base space-y-4'>
                            <div className='space-y-8 py-4 lg:px-4 px-0'>
                                <div className="flex items-center gap-4">
                                    <Heading className="!text-left !text-black !capitalize">{university}</Heading>
                                    <div className="relative w-8 h-6 shrink-0">
                                        <Image 
                                            className="object-cover"
                                            src={countries.find(c => c.name === country).flag}
                                            alt=""
                                            fill
                                        />
                                    </div>
                                </div>
                                <p className='text-base nborder-l-2 npl-4 border-black'>
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>

        </section>

        
        
        <Footer />
        </>
    )


}