import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GoCalendar } from 'react-icons/go';
import { HiArrowLeft, HiArrowRight, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Button from '../../../components/Button';

import Footer from '../../../components/Footer';
import Heading from '../../../components/Heading';
import Intro from '../../../components/Intro';
import Navbar from '../../../components/Navbar';
import Support from '../../../components/Support';


import { news } from '../../../data';
import { all_courses } from '../../../data';
import parseSlug from '../../../hooks/parseSlug';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import 'tiny-slider/dist/tiny-slider.css';
import SEO from '../../../components/SEO';

const speak = [
  { 
    thought: "The African School of Economics is one of the leading graduate institutions in Africa. We offer students a distinctive educational approach that balances theory with professional practice. This balance is reflected in our curriculum, which varies widely among degree programs.",
    author: "Harrirt Maguugdf",
    image: "/static/img/people/financial-aid-student.jpg",
  },
  { 
    thought: "The African School of Economics is one of the leading graduate institutions in Africa. We offer students a distinctive educational approach that balances theory with professional practice. This balance is reflected in our curriculum, which varies widely among degree programs.",
    author: "Harrirt Maguugdf",
    image: "/static/img/financial-aid.jpg",
  },
  { 
    thought: "The African School of Economics is one of the leading graduate institutions in Africa. We offer students a distinctive educational approach that balances theory with professional practice. This balance is reflected in our curriculum, which varies widely among degree programs.",
    author: "Harrirt Maguugdf",
    image: "/static/img/study-in-cote-d-ivoire.jpg",
  },
  { 
    thought: "The African School of Economics is one of the leading graduate institutions in Africa. We offer students a distinctive educational approach that balances theory with professional practice. This balance is reflected in our curriculum, which varies widely among degree programs.",
    author: "Harrirt Maguugdf",
    image: "/static/img/people/financial-aid-student.jpg",
  },
]

export default function Home() {

  const router = useRouter();
  const { campus } = router.query;

  const [courses, setCourses] = useState([]);


  useEffect(() => {

    if(campus) setCourses(all_courses.filter(c => {
      let country = 
        campus === "abidjan" ? "Cote d\'Ivoire" 
        : campus === "cotonou" ? "Benin"
        : "Nigeria";

      return (c.type === "undergraduate") && (c.campus.includes(country));
    }));

  }, [campus]);


  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    const settings = {
      loop: false,
      lazyload: true,
      autoplay: false,
      nav: false,
      mouseDrag: false,
      controls: false,
      items: 1,
      autoplayButton: false,
      autoplayButtonOutput: false,
      speed: 1000,
    }

    // const TNS = require('tiny-slider/src/tiny-slider');

    // let slider1 = TNS.tns({...settings, container: '#wordsSlide',});
    // let slider2 = TNS.tns({...settings, container: '#imageSlide',});

    // setSlider1(slider1);
    // setSlider2(slider2);
    
  }, []);


  return <>
    <SEO
      title="Undergraduate Courses"
      description="Undergraduate Courses"
      image={
        campus === "abidjan" ? "/static/img/campus/cote-d-ivoire.jpeg" 
        : campus === "cotonou" 
        ? "/static/img/campus/benin.jpeg" 
        :"/static/img/campus/nigeria.png"
      }
    />

    <Navbar />

    {campus === "abidjan" ? 
      <Intro bg="/static/img/campus/cote-d-ivoire.jpeg">
        Start your educational experience <br />
        right here at Abidjan
      </Intro> 
    : campus === "cotonou" ? 
      <Intro bg="/static/img/campus/benin.jpeg">
        Begin your journey into economics and research <br/>
        here in Cotonou
      </Intro>
    : 
      <Intro bg="/static/img/campus/nigeria.png">
        Start a solid foundation in economics <br />
        at Abuja
      </Intro>
    }

    <section className='lg:py-20 lg:px-16 py-12 px-5'>

      <div className='max-w-5xl mx-auto'>

        <div className='space-y-8'>
          <Heading className="!text-left !text-app-dark">ASE {
            campus === "abidjan" ? "Cote d\'Ivoire" 
            : campus === "cotonou" ? "Benin"
            : "Nigeria"
          } <br/> Undergraduate Courses</Heading>

          <div className='grid grid-cols-1 lg:grid-cols-3 items-start lg:py-8 gap-8'>
            {courses.map(({ title, details }, index) => (
              <div key={index} className='space-y-4'>
                <Link href={`/courses/${parseSlug(title)}`} className='block font-bold'>
                  {title}
                </Link>
                <div className='w-2/3 h-[2px] bg-black'></div>
                <div className='flex gap-2 items-center'>
                  <p className='text-xs font-bold uppercase'>DURATION:</p>
                  <p className='text-sm'>{details?.duration}</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <p className='text-xs font-bold uppercase'>LANGUAGES:</p>
                  <p className='text-sm'>ENG, FR</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <p className='text-xs font-bold uppercase'>STARTS:</p>
                  <p className='text-sm'>{details?.starts}</p>
                </div>
                <Link href={`/courses/${parseSlug(title)}`} className='inline-block'>

                  <Button className="!bg-transparent !text-app-main !text-xs !py-0 !px-0 hover:!bg-transparent hover:underline" text="Course Details"></Button>

                </Link>
              </div>
            ))}

          </div>


          {/* <div className='flex place-content-center'>
              <Link href="/application-guidelines">
                  <a className='inline-block'>
                      <Button className="!bg-app-dark border-2 border-app-dark !textwhite !text-xs lg:!py-2 lg:!px-4 hover:!bg-transparent hover:!text-app-dark" text="Begin Application"></Button>
                  </a>
              </Link>
          </div> */}
        </div>

        {/* <div className='hidden lg:block lg:col-span-5'>
          <div className='relative min-h-[500px] isolate'>
            <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
            <Image src="/static/img/vector.svg" layout='fill' objectFit='cover' />
          </div>
        </div> */}

      </div>

    </section>

    <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto overflow-auto text-sm'>

      <div className='gap-8 max-w-5xl mx-auto'>

        <div className='space-y-4 lg:w-2/3 mx-auto text-center'>
          <Heading className="!text-app-dark !text-center">Begin your admission process</Heading>
          <div className=''>
            <p className="text-sm">
              We would love you to join the ASE community
            </p>
            <p className="text-sm">
              If you have any questions regarding admission, please do not hesitate to contact ASE at: <a className="text-app-dark font-bold hover:underline" href="mailto:admissions@africanschoolofeconomics.com">admissions@africanschoolofeconomics.com</a>
            </p>
          </div>

          <Link href="/application-guidelines" target="_blank" className='inline-block'>

            <Button className="!bg-app-dark !text-sm lg:!py-2 lg:!px-4" text="Begin Application"></Button>

          </Link>

        </div>

      </div>

    </section>

    {/* <section className='lg:py-20 lg:px-16 py-12 px-5 bg-app-light'>
      <Heading className="!text-black !text-center">Student Speaks</Heading>

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 py-8 lg:py-20 max-w-5xl mx-auto'>

        <div className='space-y-4'>
          <div id='wordsSlide' className='flex justify-center gap-2'>
            {speak.map(({thought, author}, index) => (
              <div key={index} className='space-y-4'>
                <p className='text-sm italic text-right'>
                  "{index} {thought}"</p>

                <p className='text-sm font-bold text-right'>{author}</p>
              </div>
            ))}
          </div>

          <div className='flex gap-2 justify-end'>
            <div onClick={() => {slider1.goTo('prev'); slider2.goTo('prev')}} className='border-2 w-20 p-2 grid place-content-center border-app-dark cursor-pointer'><HiArrowLeft className="text-app-dark text-xl x-auto" /></div>
            <div onClick={() => {slider1.goTo('next'); slider2.goTo('next')}} className='border-2 w-20 p-2 grid place-content-center border-app-dark cursor-pointer'><HiArrowRight className="text-app-dark text-xl x-auto" /></div>
          </div>
        </div>

        <div className='lg:w-2/3 lg:translate-y-20 isolate'>
          <div id='imageSlide' className='flex justify-center'>
            {speak.map(({image}, index) => (
              <div key={index} className='relative w-full min-h-[200px] lg:min-h-[300px]'>
                <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
                <Image src={image} layout='fill' objectFit='cover' />
              </div>
            ))}
            </div>
        </div>


      </div>

    </section>

    <section className='lg:py-20 lg:px-12 py-8 px-5 overflow-hidden flex flex-col lg:flex-row gap-8 bg-neutral-200'>
      

      <div className='space-y-8'>
        <Heading className="!text-black w-full flex-none mx-auto">News from inside ASE</Heading>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto'>  
          {news.slice(0,4).map(({date, image, title, body}, index) => (
            <div key={index} className='cursor-pointer '>
              <div className='relative w-full h-40 isolate'>
                <Image src={image} layout='fill' objectFit='cover' />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-app-dark to-transparent opacity-50"></div>
                <div className='absolute top-2 right-2 p-2 bg-app-dark text-white text-xs font-bold'>{date}</div>
              </div>
              <div className='relative flex bg-white p-4'>
                  <div className='space-y-2 py-2'>
                    <Link href="/news/test">
                      <a className='block font-bold text-sm'>{title}</a>
                    </Link>
                    <p className='text-xs'>{body}</p>
                    <Link href="/news/test">
                      <a className='inline-block font-bold text-xs text-app-dark hover:border-b border-app-dark'>Read More</a>
                    </Link>
                  </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>

    
    <Support /> */}

    <Footer />
  </>;
}


export async function getStaticPaths(context) {

  return {
    paths: [
      '/courses/undergraduate/abuja',
      '/courses/undergraduate/abidjan',
      '/courses/undergraduate/cotonou',
    ],
    fallback: false,
  }
}