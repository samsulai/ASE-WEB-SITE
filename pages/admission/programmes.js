import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import Button from '../../components/Button';

import Footer from '../../components/Footer';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
import Support from '../../components/Support';

import { all_courses } from '../../data';
import parseSlug from '../../hooks/parseSlug';


const sortFn = (a, b) => {
    const nameA = a.title.toUpperCase(); // ignore upper and lowercase
    const nameB = b.title.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
}

export default function Home() {

  const { query: { type } } = useRouter();
  const [courses, setCourses] = useState(type ? all_courses.filter(c => c.type === type) : all_courses);

  useEffect(() => {
    if(type) setCourses(all_courses.filter(c => c.type === type));
  }, [type]);

  return <>
    <SEO
    title="Programmes"
    description="Programmes"
      image={
        type === "undergraduate" ? "" 
        : type === "postgraduate" 
        ? "/static/img/postgraduate.jpg" 
        :"/static/img/courses.jpg"
      }
    />

    <Navbar />

    <Intro bg={type === "undergraduate" ? "" : type === "postgraduate" ? "https://res.cloudinary.com/duczlqzws/image/upload/v1693940046/banners/Programes_Banner_kt0p8y.png" :"https://res.cloudinary.com/duczlqzws/image/upload/v1693940046/banners/Programes_Banner_kt0p8y.png"}>
      <span className='capitalize'>
        { type ? type : 'All' }
        &nbsp;Programmes
      </span>
    </Intro>

    <section className='lg:py-20 lg:px-16 py-12 px-5 overflow-auto text-sm'>

      <div className='min-w-[42rem] max-w-4xl mx-auto rounded-lg overflow-hidden'>
          <div className='grid grid-cols-12 p-2 border-b border-neutral-200 font-bold bg-app-dark text-white'>
              <div className='col-span-5 p-2 text-base' >Courses</div>
              <div className='col-span-2 text-center text-base p-2' >Benin</div>
              <div className='col-span-2 text-center text-base p-2' >Cote d'Ivoire</div>
              <div className='col-span-2 text-center text-base p-2' >Nigeria</div>
              <div className='col-span-1 p-2'></div>
          </div>
          {courses.sort(sortFn).map(({title, campus, duration}, index) => (
              <div key={index} className='grid grid-cols-12 p-2 border-b border-neutral-200 odd:bg-[#4778C812]'>
                  <Link
                    href={`/courses/${parseSlug(title)}`}
                    className='col-span-5 text-base p-2 hover:underline hover:text-app-main cursor-pointer'>
                    {title}
                  </Link>
                  <div className='col-span-2 p-2 flex place-content-center'>{campus.includes('Benin') && <BsCheckCircleFill className="text-app-main" />}</div>
                  <div className='col-span-2 p-2 flex place-content-center'>{campus.includes('Cote d\'Ivoire') && <BsCheckCircleFill className="text-app-main" />}</div>
                  <div className='col-span-2 p-2 flex place-content-center'>{campus.includes('Nigeria') && <BsCheckCircleFill className="text-app-main" />}</div>
                  <div className='col-span-1 p-2 flex items-center'>{duration}</div>
              </div>
          ))}
          {/* <div className='grid grid-cols-12 p-2 border-b border-neutral-200 odd:bg-[#4778C812]'>
              <div className='col-span-5 p-2 hover:underline hover:text-app-main cursor-pointer'>HASPERE</div>
              <div className='col-span-2 p-2 flex place-content-center'><BsCheckCircleFill className="text-app-main" /></div>
              <div className='col-span-2 p-2 flex place-content-center'><BsCheckCircleFill className="text-app-main" /></div>
              <div className='col-span-2 p-2 flex place-content-center'><BsCheckCircleFill className="text-app-main" /></div>
              <div className='col-span-1 p-2 flex items-center'>2 Years</div>
          </div> */}
      </div>

    </section>

    

    <Footer />
  </>;
}
