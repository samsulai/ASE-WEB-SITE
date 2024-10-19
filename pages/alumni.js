import moment from 'moment';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FiClock } from 'react-icons/fi';
import { GiGraduateCap } from 'react-icons/gi';
import { SiGooglemaps } from 'react-icons/si';

import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import Support from '../components/Support';

import SEO from '../components/SEO';

import 'animate.css';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import parseSlug from '../hooks/parseSlug';
import { useEffect, useState } from 'react';

import { alumnis, studentProfiles } from '../data';


const past_events = [
  {
    title: "Skype Conference: Launch of the Pan-African Scientific Research Network",
    body: "On June 6th, African School of Economics, Institut Pasteur of Côte d’Ivoire and collaborating Africa-focused researchers from around the world will converge for the formal",
    location: "Zoom Meeting",
    date: "17 OCT 2022",
    time: "12:00 PM (WAT)"
  },
  {
    title: "Zoom Conference: Launch of the Pan-African Scientific Research Network",
    body: "On June 6th, African School of Economics, Institut Pasteur of Côte d’Ivoire and collaborating Africa-focused researchers from around the world will converge for the formal",
    location: "Zoom Meeting",
    date: "21 OCT 2022",
    time: "12:00 PM (WAT)"
  },
]

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

const testimonialData = [
    {
      id: 1,
      name: 'Christelle Zozoungbo',
     
      videoUrl: 'https://www.youtube.com/embed/y9Z4AKcFko4',
    },
    {
      id: 2,
      name: 'Dieudonne Metiki',
      
      videoUrl: 'https://www.youtube.com/embed/Uxdol7Jv5A0',
    },
    {
      id: 3,
      name: 'Jovitah Namutebi',
      
      videoUrl: 'https://www.youtube.com/embed/DhHd5Eh-7yU',
    },
    {
      id: 4,
      name: 'Ezechias Djima',
      
      videoUrl: 'https://www.youtube.com/embed/HGfIFhhCIn4',
    },
  ];

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
    TNS.tns({...settings, container: '#alumni-slide-1',});
    TNS.tns({...settings, container: '#alumni-slide-2',});
    TNS.tns({...settings, container: '#alumni-slide-3',});
    // TNS.tns({...settings, container: '#alumni-slide-4',});
    
  }, []);


  return <>

    <SEO
      title="Meets ASE's Aluimni"
      description="ASE aims to produce pioneers in the economic and research space and here are some of our great minds, our alumnis"
      image="/static/img/alumni.jpg"
    />

    <Navbar />

    <Intro text="Alumni" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693939523/banners/alumni_banner_dpsrzp.png"/>

    {/* point 1 */}
    <section className='max-w-6xl mx-auto overflow-hidden text-base' style={{ fontFamily: 'Inter' }}>

      <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8 max-w-6xl mx-auto'>
        <div className='lg:py-20 lg:px-16 lg:pr-5 py-8 px-5 lg:col-span-7 space-y-8'>
          <h3 className="!text-left !text-black !text-base">ASE’s alumni of different nationalities have gone forward and exemplified our hallmark of excellence in various fields, across the globe:</h3>

          <Heading className="!text-left !text-black !text-2xl">Excellence in research</Heading>
          <p className="text-base" style={{ fontFamily: 'Inter' }}>
            Cutting-edge applied research is our hallmark. We demonstrate excellence in publishing in top-tier journals, and in disseminating our findings at global conferences
          </p>
        </div>
      </div>

      <div id="alumni-slide-1" className='flex gap-2'>
        {alumnis
          .filter(({name}) => [
            "gaetan-nandong",
            "moses-ogenyi",
            "emeka-nweke",
            "hassane-meite",
          ].includes(parseSlug(name)))
          .map(({ image, name, about }, index) => (
          <div key={index} className="max-w-5xl w-full mx-auto px-4 lg:grid grid-cols-1 lg:grid-cols-12 lg:gap-5 items-center">
            <div className='lg:col-span-5 relative h-[300px] lg:min-h-[400px] isolate wow animate__animated animate__fadeInUp shadow-2xl'>
              <Image src={image} layout='fill' objectPosition='top' objectFit='cover' />
            </div>

            <div className='lg:col-span-6 relative space-y-5 lg:space-y-8 pt-5'>
              <div className='text-base lg:text-base space-y-4'>
                <div className='space-y-8 p-4'>
                  <Heading className="!text-left !text-black !capitalize">{name}</Heading>
                  <p className='text-base nborder-l-2 npl-4'
                    dangerouslySetInnerHTML={{
                      __html: about
                    }}
                  >
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


    {/* point 2 */}
    <section className='max-w-6xl mx-auto overflow-hidden text-base'>

      <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8 max-w-6xl mx-auto'>
        <div className='lg:py-20 lg:px-16 lg:pr-5 py-8 px-5 lg:col-span-7 space-y-8'>
          <Heading className="!text-left !text-black !text-2xl">Pan-African & International Connections</Heading>
          <p className="text-base">
            Faculty, staff, and students come from all over Africa and include members of the global African diaspora. The ASE community is committed to developing a strong pan-African identity by embracing international connections
          </p>
        </div>
      </div>

      <div id="alumni-slide-2" className='flex gap-2'>
        {alumnis
          .filter(({name}) => 
            [
              "marina-marina-senami-monkoun",
              "jilmar-robledo",
              // "tiffany-firmin",
            ].includes(parseSlug(name))
          )
          .map(({ image, name, about }, index) => (
          <div key={index} className="max-w-5xl w-full mx-auto px-4 lg:grid grid-cols-1 lg:grid-cols-12 lg:gap-5 items-center">
            <div className='lg:col-span-5 relative h-[300px] lg:min-h-[400px] isolate wow animate__animated animate__fadeInUp shadow-2xl'>
              <Image src={image} layout='fill' objectPosition='top' objectFit='cover' />
            </div>

            <div className='lg:col-span-6 relative space-y-5 lg:space-y-8 pt-5'>
              <div className='text-base lg:text-base space-y-4'>
                <div className='space-y-8 p-4'>
                  <Heading className="!text-left !text-black !capitalize">{name}</Heading>
                  <p className='text-base nborder-l-2 npl-4'
                    dangerouslySetInnerHTML={{
                      __html: about
                    }}
                  >
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>


    {/* point 3 */}
    <section className='max-w-6xl mx-auto overflow-hidden text-base'>

      <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8 max-w-6xl mx-auto'>
        <div className='lg:py-20 lg:px-16 lg:pr-5 py-8 px-5 lg:col-span-7 space-y-8'>
          <Heading className="!text-left !text-black !text-2xl">Entrepreneurship</Heading>
          <p className="text-base">
            We foster socially conscious, innovative entrepreneurs who contribute to African prosperity by taking an active role in it.
          </p>
        </div>
      </div>

      <div id="alumni-slide-3" className='flex gap-2'>
        {alumnis
          .filter(({name}) => 
            [
              "joseph-kamara",
              "marius-chabi",
            ].includes(parseSlug(name))
          )
          .map(({ image, name, about }, index) => (
          <div key={index} className="max-w-5xl w-full mx-auto px-4 lg:grid grid-cols-1 lg:grid-cols-12 lg:gap-5 items-center">
            <div className='lg:col-span-5 relative h-[300px] lg:min-h-[400px] isolate wow animate__animated animate__fadeInUp shadow-2xl'>
              <Image src={image} layout='fill' objectPosition='top' objectFit='cover' />
            </div>

            <div className='lg:col-span-6 relative space-y-5 lg:space-y-8 pt-5'>
              <div className='text-base lg:text-base space-y-4'>
                <div className='space-y-8 p-4'>
                  <Heading className="!text-left !text-black !capitalize">{name}</Heading>
                  <p className='text-base nborder-l-2 npl-4'
                    dangerouslySetInnerHTML={{
                      __html: about
                    }}
                  >
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>

    {/* point 4 */}
    <section className='max-w-6xl mx-auto overflow-hidden text-base pb-12'>

      <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8 max-w-6xl mx-auto'>
        <div className='lg:py-20 lg:px-16 lg:pr-5 py-8 px-5 lg:col-span-7 space-y-8'>
          <Heading className="!text-left !text-black !text-2xl">Service to Society</Heading>
          <p className="text-base">
            ASE faculty, students, and alumni wish to give back to African societies by engaging in policy debate and policy making.
          </p>
        </div>
      </div>

      <div id="alumni-slide-4" className='flex gap-2'>
        {alumnis
          .filter(({name}) => 
            [
              "marietou-sanogo",
            ].includes(parseSlug(name))
          )
          .map(({ image, name, about }, index) => (
          <div key={index} className="max-w-5xl w-full mx-auto px-4 lg:grid grid-cols-1 lg:grid-cols-12 lg:gap-5 items-center">
            <div className='lg:col-span-5 relative h-[300px] lg:min-h-[400px] isolate wow animate__animated animate__fadeInUp shadow-2xl'>
              <Image src={image} layout='fill' objectPosition='top' objectFit='cover' />
            </div>

            <div className='lg:col-span-6 relative space-y-5 lg:space-y-8 pt-5'>
              <div className='text-base lg:text-base space-y-4'>
                <div className='space-y-8 p-4'>
                  <Heading className="!text-left !text-black !capitalize">{name}</Heading>
                  <p className='text-base nborder-l-2 npl-4'
                    dangerouslySetInnerHTML={{
                      __html: about
                    }}
                  >
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>

















    <section className='hidden lg:py-20 lg:px-16 py-12 px-5 mx-auto space-y-8'>

    <Heading className="!text-black">Meet some of our Alumni</Heading>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6'>
        {alumnis.map(({quote, name, course, image, grad_year, position, position_logo}, index) => (
          <div key={index} className=''>
            <div className='relative'>
              <div className='relative isolate w-full h-72 overflow-hidden mx-auto'>
                <Image src={image} layout="fill" objectFit="cover" />
              </div>

            </div>
            <div className="space-y-1 bg-app-dark p-4 min-h-[180px]">
              {position_logo && <div className='relative bg-white rounded-sm isolate w-16 h-8 overflow-hidden mx-auto'>
                <Image src={position_logo} layout="fill" objectFit="contain" />
              </div>}
              <Link
                href={`/people/${parseSlug(name)}`}
                className='flex text-white font-bold gap-3 text-xs lg:text-base hover:underline'>

                <span className='space-x-2 items-center'>
                  <GiGraduateCap className='inline-block text-base' />
                  <span className=''>
                    {name}
                  </span>
                </span>

              </Link>
              {position && <p className='text-white gap-3 text-xs'>
                <strong>Current Position:</strong> {position}
              </p>}
              <p className='text-white gap-3 text-xs'>
                <span className='space-x-2 items-center'>
                  {course} (Grad. {grad_year})
                </span>
              </p>

              {quote && <p className="text-white text-xs italic">
                <ImQuotesLeft className="text-white inline -mt-2 mr-2" />
                {quote}
                <ImQuotesRight className="text-white inline -mb-2 ml-2" />
              </p>}
              {/* <Link href="">
              </Link> */}
            </div>
          </div>
        ))}
      </div>

    </section>

    <section className='lg:py-20 lg:px-16 py-12 px-5 mx-auto space-y-8'>

      <Heading className="!text-black">Alumni Testimonials</Heading>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6'>
        {studentProfiles.map(({quote, name, course, image, grad_year}, index) => (
          <div key={index} className='shadow-2xl'>
            <div className=''>
              <div className='relative isolate w-full h-72 overflow-hidden mx-auto'>
                <Image src={image || '/static/img/bg.png'} layout="fill" objectFit="cover" />
                <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent z-10'></div>
              </div>
            </div>
            <div className="space-y-2 bg-white p-4 min-h-[180px]">
              <Link
                href={`/people/${parseSlug(name)}`}
                className='flex text-black font-bold gap-3 text-xs lg:text-base hover:underline'>

                <span className='space-x-2 items-center'>
                  <GiGraduateCap className='inline-block text-base' />
                  <span className=''>
                    {name}
                  </span>
                </span>

              </Link>
              <p className='text-black gap-3 text-xs'>
                <span className='space-x-2 items-center'>
                  {course} (Grad. {grad_year})
                </span>
              </p>

              <p className="text-black text-xs italic">
                <ImQuotesLeft className="text-black inline -mt-2 mr-2" />
                {quote}
                <ImQuotesRight className="text-black inline -mb-2 ml-2" />
              </p>
              {/* <Link href="">
              </Link> */}
            </div>
          </div>
        ))}
      </div>

    </section>
 
     <section className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-8">Student Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative pb-9/16">
                 <iframe width="560" height="315" src={testimonial.videoUrl}
                  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                   allowfullscreen></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Support />

    <Footer />
  </>;
}
