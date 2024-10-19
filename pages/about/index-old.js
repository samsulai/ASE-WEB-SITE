import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import Button from '../../components/Button';
import Footer from '../../components/Footer';


import Heading from '../../components/Heading';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import Support from '../../components/Support';


const partners = [
  "barcelona-graduate-school-of-economics.png",
  "bordeaux-management-school.png",
  "center-for-economic-research-and-teaching.png",
  "institut-de-mathematiques-et-de-sciences-physiques.jpg",
  "navarra-center-for-international-development.png",
  "new-economic-school-russia.png",
  "princeton-university.png",
  "skema-business-school.png",
  "the-american-university-of-cairo.png",
  "the-julis-rabinowitz-center-for-public-policy-and-finance.jpg",
  "toulouse-school-of-economics1.png",
  "universidad-del-desarrollo.png",
  "university-laval.png",
  "university-of-namur.jpg",
  "university-of-ottawa.jpg"
]

const research_institutes = [
  { 
    acronym: "IERPE",
    title: "The Institute for Empirical Research in Political Economy",
  },
  { 
    acronym: "IAS",
    title: "The Institute for African Studies (IAS)",
  },
  { 
    acronym: "IFM",
    title: "The Institute for Finance and Management",
  },
  { 
    acronym: "DRL",
    title: "The Development Research Lab",
  },
  { 
    acronym: "IBAS",
    title: "The Institute of Biotechnology and Agricultural Science",
  },
  { 
    acronym: "ASE-WPS",
    title: "ASE Working Paper Series",
  }
]

const news = [
  {
    date: "6, OCT",
    title: "ASE English Camp: 2 weeks of Intense English Courses",
    body: "African School of Economic’s new cohort of master’s students just finished their two week-long rigorous English camp. The intensive course ..."
  },
  {
    date: "4, OCT",
    title: "The Princeton Connection: Graduate Opportunities in Public and International Affairs",
    body: "As a longtime partner and collaborator with Princeton University, the African School of Economics was excited to welcome Princeton University’s ..."
  }
]

const campuses = [
  { 
    campus: "Abidjan Campus",
    country: "Cote d'Ivoire",
    image: "/static/img/campus/cote-d-ivoire.png",
    courses: [
      "Bachelor of Business Administration",
      "Bachelor of Science in Mathematics, Economics & Statistics",
      "Bachelor of Science in Statistics & Computer Science",
      "Master in Business Administration (MBA)",
      "Master in Mathematics, Economics and Statistics (MMES)",
    ]
  },
  { 
    campus: "Cotonu Campus",
    country: "Benin",
    image: "/static/img/campus/benin.png",
    courses: [
      "Bachelor of Marketing & Management",
      "Bachelor of Science in Economics & Statistics",
      "Bachelor of Science in Finance & Accounting",
      "Bachelor of Science in Statistics & Computer Science",
      "Master in Business Administration (MBA)",
      "Master in Development Studies (MDS)",
      "Master in Mathematics, Economics and Statistics (MMES)",
      "Master in Public Administration (MPA)",
      "PhD Programs",
      "The Hunter College and ASE Masters in Economics"
    ]
  },
  { 
    campus: "Abuja Campus",
    country: "Nigeria",
    image: "/static/img/campus/nigeria.png",
    courses: [""]
  }
]


export default function Home() {

  useEffect(() => {
  
    require('tiny-slider/src/tiny-slider').tns({
      container: '.partners-slide',
      lazyload: true,
      autoplay: true,
      nav: false,
      mouseDrag: true,
      controls: false,
      items: 1,
      responsive: {
        400: {
          items: 2,
        },
        640: {
          items: 3,
        },
        900: {
          items: 4,
        },
        1024: {
          items: 5,
        }
      },
      autoplayButton: false,
      autoplayButtonOutput: false,
      speed: 1000,
    });
    
  }, []);


  return (
    <>
      <Head>
        <title>The African School of Economics</title>
        <meta name="description" content="The African School of Economics" />
      </Head>

      <Navbar />

      <Intro>The African School of<br />Economics</Intro>

      {/* Inroduction */}
      <section className='lg:py-20 lg:px-16 py-12 px-5 lg:w-11/12 mx-auto lg:flex space-y-4 lg:gap-0 lg:divide-x-2 divide-black'>
        <div className='lg:p-8 lg:flex justify-center items-center'>
          <Heading>Introduction</Heading>
        </div>

        <div className='lg:p-8'>
          <p className="text-sm text-center lg:text-left">
            Founded in 2014 by Princeton University Professor Leonard Wantchekon , the African School of Economics (ASE) is a Pan-African graduate niversity dedicated to producing cutting-edge economic research, public policy, and world-renowned social scientists and economic leaders on the continent. Headquartered in Abomey-Calavi, Benin, and with campuses in Cote d’ivoire and Nigeria, ASE hosts a number of affiliated institutes, including the Institute for Empirical Research in Political Economy (IERPE) and the Pan-African Scientific Research Council (PASRC).
          </p>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className='lg:py-20 lg:px-16 py-12 px-5 lg:w-11/12 mx-auto lg:flex space-y-4 lg:gap-0'>
        <div className='lg:p-8 lg:flex justify-center items-center'>
          <div className='relative w-56 h-56 mx-auto rounded-full overflow-hidden'>
            <Image src="/static/img/students-researching.jpg" objectFit='cover' layout='fill' />
          </div>
        </div>

        <div className='lg:p-8 lg:flex flex-col justify-center items-center lg:gap-8'>
          <p className='text-2xl w-full font-bold text-center lg:text-right'>Our Vision</p>
          <p className="text-sm w-full text-center lg:text-right">
            Founded in 2014 by Princeton University Professor Leonard Wantchekon , the African School of Economics (ASE) is a Pan-African graduate niversity dedicated to producing cutting-edge economic research, public policy, and world-renowned social scientists and economic leaders on the continent. Headquartered in Abomey-Calavi, Benin, and with campuses in Cote d’ivoire and Nigeria, ASE hosts a number of affiliated institutes, including the Institute for Empirical Research in Political Economy (IERPE) and the Pan-African Scientific Research Council (PASRC).
          </p>
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="lg:py-20 lg:px-16 py-12 px-5 space-y-4">
        <Heading className="">Meet our Founder</Heading>
        <div className='lg:w-3/4 mx-auto'>
          <div className='bg-[#2E4467] text-white relative flex flex-col-reverse lg:flex-row lg:p-5 lg:pl-64 border-black'>
              <div className='space-y-2 p-5 lg:p-8 lg:pb-16'>
                <h1 className='font-bold text-lg'>Professor Leonard Wantchekon</h1>
                <h2 className='font-bold text-base'>President/Founder</h2>
                <p className='text-sm'>
                  Leonard Wantchekon is the Founder and President of the African School of Economics. He is also a Professor of Politics, International Affairs and Economics (affiliated faculty) at Princeton University.  Prior to joining Princeton University, he was on the faculty of New York University (2001-2011), and Yale University (1995-2001). He received his Ph.D. in Economics from Northwestern University (1995) and his M.A. in Economics from Laval University and University of British Columbia (1992).  
                </p>
              </div>
              <div className='relative lg:absolute lg:-top-5 lg:-left-5 lg:w-64 h-80 lg:border-2 border-[#2E4467]'>
                <Image src="/static/img/slide1.jpg" layout='fill' objectFit='cover' />
              </div>
          </div>
        </div>
      </section>

      {/* ASE History */}
      <section className="relative lg:py-20 lg:px-16 py-12 px-5 bg-black isolate bg-[url('/static/img/campus/cote-d-ivoire.png')] bg-cover bg-center">
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-90 -z-10'></div>
        <Heading className="!text-white !text-left">ASE History</Heading>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8'>

          <div className='py-4 lg:py-8 flex flex-col justify-start'>
            <div className='relative place-self-center inline-block py-3 px-6 border border-white text-white after:block after:absolute after:top-full after:left-1/2 after:right-1/2 after:bg-white after:w-px after:h-12'>2004</div>
            <div className='pt-16 text-white text-center text-xs'>
              Leonard Wantchekon founds the Institute of Empirical Research in Political Economy (IERPE)
            </div>
          </div>

          <div className='py-4 lg:py-8 flex flex-col justify-start'>
            <div className='relative place-self-center inline-block py-3 px-6 border border-white text-white after:block after:absolute after:top-full after:left-1/2 after:right-1/2 after:bg-white after:w-px after:h-12'>2014</div>
            <div className='pt-16 text-white text-center text-xs'>
              The first cohort of students enrolls at the African School of Economics
            </div>
          </div>

          <div className='py-4 lg:py-8 flex flex-col justify-start'>
            <div className='relative place-self-center inline-block py-3 px-6 border border-white text-white after:block after:absolute after:top-full after:left-1/2 after:right-1/2 after:bg-white after:w-px after:h-12'>2016</div>
            <div className='pt-16 text-white text-center text-xs'>
              ASE introduces a Certificate Program in Impact Evaluation
            </div>
          </div>

          <div className='py-4 lg:py-8 flex flex-col justify-start'>
            <div className='relative place-self-center inline-block py-3 px-6 border border-white text-white after:block after:absolute after:top-full after:left-1/2 after:right-1/2 after:bg-white after:w-px after:h-12'>2018</div>
            <div className='pt-16 text-white text-center text-xs'>
              ASE hosts the Africa Meeting of the Econometric Society in Cotonou from July 12-14
            </div>
          </div>

        </div>

      </section>

      {/* Campus and Courses */}
      <section className='lg:py-20 lg:px-16 py-12 px-5 space-y-4 lg:space-y-8'>
        {campuses.map(({campus, image, country, courses}, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-3 lg:py-4 lg:px-4 gap-4 lg:gap-8 lg:w-3/4 mx-auto">
            <div className='relative w-full h-80'>
              <Image src={image} layout='fill' objectFit='cover' />
            </div>
            <div className='col-span-2 grid items-center'>
              <p className="font-bold text-xl">{campus}</p>
              <p className="font-bold text-sm text-app-main">{country}</p>

              <div className='py-3 space-y-2'>
                {courses.map((course, index) => (
                  <a href='' key={index} className='block px-2 hover:border-l-2 border-app-main duration-200 text-sm'>{course}</a>
                ))}
              </div>

              <Button className="!py-2 place-self-center lg:place-self-start" text='Apply' />
            </div>
          </div>
        ))}
      </section>

      {/* ASE in Numbers */}
      <section className="lg:py-20 lg:px-16 py-12 px-5 bg-app-main llg:space-y-16 space-y-8">
        <Heading className="!text-white">ASE in Numbers</Heading>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
          <div className="col-span-1 space-y-3">
            <Heading className="!text-white !text-5xl">2135+</Heading>
            <p className="text-center text-white text-sm">
              Eager <strong>students</strong> driven by knowledge that improves economies globally.
            </p>
          </div>
          <div className="col-span-1 space-y-3">
            <Heading className="!text-white !text-5xl">12+</Heading>
            <p className="text-center text-white text-sm">
            Professional and well curated <strong>courses</strong> that gives you the fundamentals with ease.
            </p>
          </div>
          <div className="col-span-1 space-y-3">
            <Heading className="!text-white !text-5xl">4</Heading>
            <p className="text-center text-white text-sm">
            Well equipped <strong>campuses</strong> that provides conducive learning environs.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className='lg:py-20 lg:px-16 py-12 px-5 overflow-hidden space-y-4 lg:space-y-8'>
        <Heading className="!text-left">Stories from ASE</Heading>

        <div className='flex py-8 gap-8 lg:gap-14 news'>
          {news.map(({date, title, body}, index) => (
            <div key={index} className='lg:w-[45%]'>
              <div className='bg-[#2E4467] text-white relative flex flex-col-reverse lg:flex-row lg:p-5 lg:pr-52 border-black'>
                  <div className='space-y-4 p-5 lg:p-0'>
                    <h1 className='font-bold text-lg'>{title}</h1>
                    <p className='text-sm'>{body}</p>
                    <div className='absolute top-0 lg:-top-8 left-4 font-bold text-sm text-[#2E4467] bg-white border-2 border-[#2E4467] px-3 py-1 z-10'>{date}</div>
                  </div>
                  <div className='relative lg:absolute lg:-top-5 lg:-right-5 lg:w-48 h-48 lg:border-2 border-[#2E4467]'>
                    <Image src="/static/img/slide1.jpg" layout='fill' objectFit='cover' />
                  </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Support />

      <section className="lg:py-20 lg:px-16 py-12 px-5 bg-zinc-200 space-y-8 overflow-hidden">
        <Heading className="!text-black">Our Academic Partners</Heading>

        <div className="partners-slide flex justify-center items-center">
          {/* <TinySlider setting={settings}> */}
            {partners.map((partner, index) => (
              <div key={index} className="relative p-4 grid place-content-center">
                <img className="grayscale hover:grayscale-0 w-auto h-16" src={`/static/img/partners/${partner}`}/>
              </div>
            ))}
          {/* </TinySlider> */}
        </div>
      </section>

      <Footer />
    </>
  )
}
