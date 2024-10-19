import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import Footer from '../../components/Footer';

import Heading from '../../components/Heading';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
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

  const [video, setVideo] = useState(false);

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
      <SEO
        title="About ASE"
        description="About ASE"
        image="/static/img/bg.png"
      />

      <Navbar />

      
<Intro text="The African School of Economics" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693757416/banners/about_is79n5.png"/>

      <section className='lg:py-20 lg:px-16 py-12 px-5 space-y-8 mx-auto'>

        <div className=''>
            <h1 className='font-bold text-xl lg:text-3xl' style={{ fontFamily: 'Playfair Display' }}>
                <span className="text-app-main">Producing Cutting-Edge</span><br />
                Economic Research
            </h1>
        </div>

        <div className='space-y-4'>
            <p className='text-base lg:w-2/3' style={{ fontFamily: 'Inter' }}>
              Founded in 2014 by Princeton University Professor Leonard Wantchekon , the African School of Economics (ASE) is a Pan-African graduate university dedicated to producing cutting-edge economic research, public policy, and world-renowned social scientists and economic leaders on the continent. Headquartered in Abomey-Calavi, Benin, and with campuses in Cote d’ivoire and Nigeria, ASE hosts a number of affiliated institutes, including the Institute for Empirical Research in Political Economy (IERPE) and the Pan-African Scientific Research Council (PASRC).
            </p>
        </div>

      </section>


      {/* ASE History */}
      <section className="relative lg:py-20 lg:px-16 py-12 px-5 bg-black isolate bg-[url('/static/img/campus/campus.JPG')] bg-cover bg-center">
        <div className='absolute top-0 left-0 w-full h-full bg-[#084a7f] opacity-90 -z-10'></div>
        <h2 className="text-3xl lg:text-4xl font-bold text-left text-white mb-4 font-[500]"
  style={{ fontFamily: 'Playfair Display' }}>ASE History</h2>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8'>

          <div className='pt-4 lg:pt-8 flex flex-col justify-start'>
            <div className='relative place-self-center inline-block py-3 px-6 border-b border-white font-bold text-2xl lg:text-4xl text-white after:block after:absolute after:top-full after:left-1/2 after:right-1/2 after:bg-white after:w-px after:h-16'>2004</div>
            <div className='mt-16 p-3 text-white text-center text-base border-t border-white' style={{ fontFamily: 'Inter' }}>
              Leonard Wantchekon founds the Institute of Empirical Research in Political Economy (IERPE)
            </div>
          </div>

          <div className='pt-4 lg:pt-8 flex flex-col justify-start'>
            <div className='relative place-self-center inline-block py-3 px-6 border-b border-white font-bold text-2xl lg:text-4xl text-white after:block after:absolute after:top-full after:left-1/2 after:right-1/2 after:bg-white after:w-px after:h-16'>2014</div>
            <div className='mt-16 p-3 text-white text-center text-base border-t border-white' style={{ fontFamily: 'Inter' }}>
              The first cohort of students enrolls at the African School of Economics
            </div>
          </div>

          <div className='pt-4 lg:pt-8 flex flex-col justify-start'>
            <div className='relative place-self-center inline-block py-3 px-6 border-b border-white font-bold text-2xl lg:text-4xl text-white after:block after:absolute after:top-full after:left-1/2 after:right-1/2 after:bg-white after:w-px after:h-16'>2016</div>
            <div className='mt-16 p-3 text-white text-center text-base border-t border-white' style={{ fontFamily: 'Inter' }}>
              ASE introduces a Certificate Program in Impact Evaluation
            </div>
          </div>

          <div className='pt-4 lg:pt-8 flex flex-col justify-start'>
            <div className='relative place-self-center inline-block py-3 px-6 border-b border-white font-bold text-2xl lg:text-4xl text-white after:block after:absolute after:top-full after:left-1/2 after:right-1/2 after:bg-white after:w-px after:h-16'>2018</div>
            <div className='mt-16 p-3 text-white text-center text-base border-t border-white' style={{ fontFamily: 'Inter' }}>
              ASE hosts the Africa Meeting of the Econometric Society in Cotonou from July 12-14
            </div>
          </div>

        </div>
      </section>


      <section className='lg:py-20 lg:px-16 py-12 px-5 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-center'>

        {video && <div onClick={(e) => e.target.nodeName === 'DIV' && setVideo(false)} className='fixed bg-[#000e] top-0 left-0 w-full h-full grid place-content-center z-[9999999]'>
          <video poster='/static/img/intro-video-poster.webp' className='max-w-[800px] h-auto mx-auto' src="https://res.cloudinary.com/duczlqzws/video/upload/v1690579167/Reiterating_pc6kl2.mp4" controls></video>
        </div>}

        <div className='lg:col-span-6 relative min-h-[500px] isolate'>
          <div className='shadow-2xl absolute top-0 left-0 w-full h-full  z-10'></div>

          <Image src="https://res.cloudinary.com/duczlqzws/image/upload/v1691502741/unnamed_iwwtw4.jpg" layout='fill' objectFit='cover' className="rounded-md"/>

          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center space-y-3 z-[11]">
            <div className='relative cursor-pointer isolate'>
              <BsFillPlayCircleFill onClick={() => setVideo(true)} className="text-white text-6xl" />
              <div className='absolute top-0 left-0 w-full h-full rounded-full border border-white animate-ping -z-10'></div>
            </div>
          </div>
        </div>

        <div className='lg:col-span-6 relative space-y-5 lg:space-y-14'>
          <h1 className='text-2xl lg:text-5xl font-bold' style={{ fontFamily: 'Playfair Display' }}>Professor Leonard Wantchekon </h1>
          <p className='text-base' style={{ fontFamily: 'Inter' }}>
            Leonard Wantchekon is the Founder and President of the African School of Economics. He is also a Professor of Politics, International Affairs and Economics (affiliated faculty) at Princeton University.  Prior to joining Princeton University, he was on the faculty of New York University (2001-2011), and Yale University (1995-2001). He received his Ph.D. in Economics from Northwestern University (1995) and his M.A. in Economics from Laval University and University of British Columbia (1992).  
          </p>
          <div className='font-bold text-app-dark' style={{ fontFamily: 'Inter' }}>
            A message from our<br/>
            Founder,<br />
            Proffessor Leonard Wantchekon.<br />

            <span className="inline-block text-neutral-400 text-xs pt-4">
              <HiOutlineArrowNarrowLeft className="inline-block text-xl rotate-90 lg:rotate-0" /> Tap to play.
            </span>
          </div>
        </div>

      </section>


      {/* ASE in Numbers */}
      <section className="lg:py-20 lg:px-16 py-12 px-5 bg-[url(/static/img/aag.webp)] lg:space-y-16 space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-4 font-[500]"
  style={{ fontFamily: 'Playfair Display' }}>ASE at a Glance</h2>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
          <div className="col-span-1 space-y-3">
            
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-white font-[500]"
  style={{ fontFamily: 'Inter' }}>2000+</h2>
            <p className="text-center text-white text-base">
              Eager <strong>students</strong> driven by knowledge that improves economies globally.
            </p>
          </div>
          <div className="col-span-1 space-y-3">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-4 font-[500]"
  style={{ fontFamily: 'Inter' }}>12+</h2>
            <p className="text-center text-white text-base">
            Professional and well curated <strong>courses</strong> that gives you the fundamentals with ease.
            </p>
          </div>
          <div className="col-span-1 space-y-3">
            
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-4 font-[500]"
  style={{ fontFamily: 'Inter' }}>4</h2>
            <p className="text-center text-white text-base">
            Well equipped <strong>campuses</strong> that provides conducive learning environs.
            </p>
          </div>
        </div>
      </section>

      
      

      <section className="lg:py-20 lg:px-16 py-12 px-5 bg-zinc-200 space-y-8 overflow-hidden">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-black mb-4 font-[500]"
  style={{ fontFamily: 'Playfair Display' }}>Our Academic Partners</h2>
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
