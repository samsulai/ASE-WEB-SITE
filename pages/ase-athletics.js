import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BsCheckCircleFill } from 'react-icons/bs';
import Button from '../components/Button';

import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import Support from '../components/Support';

import 'animate.css';
import { useEffect } from 'react';
import SEO from '../components/SEO';


const information = [
  {
      "image": "/static/img/athletics/certificate-program.jpg",
      "title": "The ASE Athletics Academic Certificate Programme",
      "text1": "ASE Athletics has designed an intensive, fast-tracked tertiary certificate programme for athletes, that will provide them the thorough academic grounding to meaningfully improve their employment prospects, and supplement their sports placement prospects.",
      "text2": "The programme covers Computing and Data Analytics, Finance and Management, Languages and Communication, and African History, and it will be preceded by a foundational course in Languages and Mathematics where needed."
  },
  {
      "image": "/static/img/athletics/sports-program.jpg",
      "title": "the ASE athletics sports programme",
      "text1": "ASE Athletics will comprise of sports teams in Soccer and Basketball, and athletes in all areas of Track and Field. Athletes will be camped and trained at the ASE Athletics locations within our regional campuses in Nigeria, Cote d'Ïvoire and Benin Republic.",
      "text2": "ASE Athletics teams will compete in local Basketball and Soccer leagues, and our Track and Field athletes will compete in local and international championships, to gain exposure."
  },
  {
      "image": "/static/img/athletics/equal-access.jpg",
      "title": "equal opportunity access",
      "text1": "ASE Athletics, in keeping with our guiding values at the African School of Economics, will ensure equal opportunity access to its programmes and benefits, across gender, economic backgrounds, religion and nationalities. Much like our academic campuses, ASE Athletics’ communities will personify the exemplary, rich diversity that is the ideal which Africa's unity and development must be founded on."
  },
  {
      "image": "/static/img/athletics/sports-computation.jpg",
      "title": "sports data and computation",
      "text1": "In concert with the ASE academic arm, ASE Athletics will develop original, bespoke systems and metrics for gauging, analyzing and categorizing athlete- potential, compatibility of athletes to different sporting systems and environments, and athlete- performance; and will collect, process and archive vital sporting data around local talent for sharing with partners of interest (scouts, sports teams, universities).",
      "text2": "In large part, sports data collation at ASE Athletics will be enabled through novel and rigorous academic studies."
  },
  {
      "image": "/static/img/athletics/sports-heros.jpg",
      "title": "memorializing africa's sports heroes",
      "text1": "The Communications component of ASE Athletics, in addition to producing compelling written and audiovisual content on contemporary sporting affairs and talent, will also, importantly, explore the history of sports in Africa in documentaries, and immortalize the lives, accomplishments and legacies of sporting champions from the past.",
      "text2": "We will introduce present generations of young Africans to past sporting heroes, and inspire them with their stories. "
  },
  {
      "image": "/static/img/athletics/fitness-centre.jpg",
      "title": "ASE fitness centres",
      "text1": "Fitness Centers will be located at every ASE Athletics hub (our Nigeria, Benin and Cote dÏvoire campuses, for starters), and will house top-notch fitness and training equipment and front-line fitness, medical and nutrition professionals. The centers will be open to the public to promote fitness and healthy living, while also catering to the ASE Athletes."
  },
  {
      "image": "/static/img/athletics/success-mindset.jpg",
      "title": "engendering the success mindset",
      "text1": "Succeeding at the highest levels of sports requires extreme extents of mental strength. Athletes who have distinguished themselves on this stage and better yet, those who have sustained their success here for prolonged periods have a great deal of experience-based knowledge to impart to young people, about the mental tools required for the sort of distinction they achieved, which knowledge cuts across every discipline.",
      "text2": "At ASE Athletics, we believe that there is tremendous value in infusing the top-athlete mindset of Desire, Discipline and Determination into the general education of young people to catalyze their success in different areas.    We provide this important orientation through the interactions we facilitate between our students and our global athlete partners."
  },
  {
      "image": "/static/img/athletics/life-coach.jpg",
      "title": "life coaching",
      "text1": "We recognize that most successes are driven by inspiration acquired in youth, and that there is generally a dearth of proper life and career guidance for a lot of young Africans. We therefore place a high premium on our life coaching program, where our global athlete partners offer mentoring and life coaching to athletes, to inspire and guide them.",
      "text2": "This life coaching will help athletes to navigate their lives and career prospects in the best possible ways, and provide a crucial, emotional support system for them amidst the immensely challenging world of competitive sports."
  }
]


export default function Home() {

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
      index: 0,
      autoplayButton: false,
      autoplayButtonOutput: false,
      autoplayTimeout: 10000,
      speed: 2000,
    }

    const TNS = require('tiny-slider/src/tiny-slider');
    let slider = TNS.tns({...settings, container: '#infoSlide',});
    
  }, []);

  return <>

    <SEO
      title="ASE Athletics"
      description="At the African School of Economics (ASE), one of our core values is the provision of equal-opportunity access to global standards of learning to young people across the continent."
      image="/static/img/man-outdoors.jpg"
    />

    <Navbar />

    <Intro bg="/static/img/man-outdoors.jpg">ASE Athletics</Intro>

    <section className='max-w-6xl mx-auto overflow-auto text-base'>

      <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8 max-w-6xl mx-auto'>

        <div className='lg:py-20 lg:px-16 lg:pr-5 py-8 px-5 lg:col-span-7 space-y-8'>
          
          <h2 className="text-3xl lg:text-4xl font-bold  text-app-dark text-left mb-4 font-[500]"
  style={{ fontFamily: 'Playfair Display' }}>Who We Are</h2>
  
          <p className="text-base text-justify">
            At the African School of Economics (ASE), one of our core values is the provision of equal-opportunity access to global standards of learning to young people across the continent. We have achieved tremendous success in training young Africans from every part of the region in economics and related fields, who have proceeded to the top universities in the world such as Harvard and NYU for doctoral programs, and also to top positions in such globally pre-eminent institutions as the World Bank and Innovations for Poverty Action (IPA).
            <br /><br />
            With our new department, ASE Athletics, we are applying our tradition of excellence in providing a nexus for undiscovered athletic talent, as well as the academic and sports training to enable them subsist at the very minimum. ASE also offers global opportunities and liaisons that will allow our students to function and thrive at the highest levels of their craft, anywhere in the world.
          </p>

        </div>

        {/* <div className='hidden lg:block lg:col-span-5'>
          <div className='relative min-h-[500px] isolate'>
            <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
            <Image src="/static/img/vector.svg" layout='fill' objectFit='cover' />
          </div>
        </div> */}

      </div>

    </section>

    <section className='bg-app-dark text-white lg:py-20 lg:px-16 py-12 px-5'>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-14">
        <div className='lg:col-span-6 relative min-h-[200px] lg:min-h-[400px] isolate'>
          <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
          <Image src="/static/img/athletics.jpg" layout='fill' objectFit='cover' />
        </div>

        <div className='lg:col-span-6 relative space-y-5 lg:space-y-8'>
          <div className='text-base lg:text-base space-y-4'>
            <div className='space-y-8 p-4'>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-left text-white mb-4 font-[500]"
  style={{ fontFamily: 'Playfair Display' }}>Core Services</h2>
  
              <p className='text-base'>ASE Athletics is a service provider in 5 key areas:</p>
              <ul className="text-base list-disc marker:font-bold space-y-8">
                <li>
                  Intensive, accelerated academic certificate programs for athletes at a University level, to provide essential educational foundation and employability
                </li>

                <li>
                  Recruitment of top athletic talent for college and other sporting opportunities in the US, and for the ASE sports teams
                </li>

                <li>
                  Helping find future opportunities for our students in sports business, management, and analysis
                </li>

                <li>
                  Enlisting top athletes from around the world to provide scholarships and mentoring to fledgling talents
                </li>

                <li>
                  Through our radio and television programs, podcasts, newsletters and blogs, providing premium sports communications features and analyses from the experts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>


    <section style={{'--tw-bg-opacity': 0}} className='bg-app-main text-black lg:py-20 lg:px-16 py-12 px-5 overflow-hidden'>
      
      <h1 className='text-2xl lg:text-3xl text-center text-app-dark font-bold pb-8' style={{ fontFamily: 'Playfair Display' }}>What We Do</h1>

      <div id="infoSlide" className='flex gap-2'>
        {information.map(({ image, title, text1, text2 }, index) => (
          <div key={index} className="max-w-5xl w-full mx-auto px-4 lg:grid grid-cols-1 lg:grid-cols-12 lg:gap-5 items-center">
            <div className='lg:col-span-5 relative h-[300px] lg:min-h-[400px] isolate wow animate__animated animate__fadeInUp'>
              {/* <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-[#2E4467] z-10'></div> */}
              <Image src={image} layout='fill' objectPosition='top' objectFit='cover' />
            </div>

            <div className='lg:col-span-6 relative space-y-5 lg:space-y-8 pt-5'>
              <div className='text-base lg:text-base space-y-4'>
                <div className='space-y-8 p-4'>
                  <Heading className="!text-left !text-black !capitalize">{title.toLowerCase().replace(/(ase)|(Ase)/ig,' ASE')}</Heading>
                  <p className='text-base nborder-l-2 npl-4 border-black'>
                    {text1}
                  </p>
                  {text2 && <p className='text-base np-4 nbg-black !ntext-white border-2 border-none border-black text-black'>
                    {text2}
                  </p>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>

    <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto space-y-8 overflow-hidden text-base'>

      {/* <Heading className="!text-app-dark !text-center pb-5"></Heading> */}

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='col-start-2 flex flex-col justify-center items-center gap-5'>
          <div className=''>
            <div className='relative w-[200px] min-h-[200px] isolate rounded-full overflow-hidden'>
              {/* <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div> */}
              <Image src="/static/img/artists/travis.jpg" layout='fill' objectFit='cover' />
            </div>
          </div>

          <div className='text-center space-y-4 w-auto overflow-hidden'>
            <p className='font-bold capitalize text-xl text-app-dark'>Travis Martial Wantchekon</p>
            <p className='font-bold text-base capitalize'>Director</p>
            <p className='text-base'>Travis is the Director of ASE Athletics. He is a project manager, scout, and an ex-New York Red Bulls academy & college athlete, with a Master’s Degree in Sports Management at the Real Madrid Graduate School.</p>
          </div>
        </div>
      </div>

      {/* <div className='flex justify-center items-center'>
        <Link href={`/exhibition`}>
          <a className='group inline-flex gap-2 bg-app-dark text-white text-xs font-bold py-2 px-4 rounded-full overflow-hidden'>
            <span className="">Go to Art Exhibition</span>
            <BsFillBrushFill className="text-white text-base group-hover:animate-pulse"  />
          </a>
        </Link>
      </div> */}

    </section>

    <section className='max-w-6xl mx-auto overflow-auto text-base'>

      <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8 max-w-6xl mx-auto'>

        <div className='lg:py-20 lg:px-16 lg:pr-5 py-8 px-5 lg:col-span-7 space-y-8'>
          
          <h2 className="!text-left !text-app-dark !text-4xl !uppercase"
  style={{ fontFamily: 'Playfair Display' }}>ASE Athletics Partners</h2>
          <p className="text-base">
            ASE Athletics has established partnerships with
            universities in the US, renowned professional athletes on
            the world stage, and prominent stakeholders in African
            and global sports. We are at advanced levels of talks
            with many other potential partners, and will continually
            forge these critical liaisons.
          </p>

        </div>

        {/* <div className='hidden lg:block lg:col-span-5'>
          <div className='relative min-h-[500px] isolate'>
            <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
            <Image src="/static/img/vector.svg" layout='fill' objectFit='cover' />
          </div>
        </div> */}

      </div>

    </section>

    <Support />

    <Footer />
  </>;
}
