import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { MdAlternateEmail, MdLocalPhone } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
import Button from '../../components/Button';

import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
import Support from '../../components/Support';

import { all_courses } from '../../data';
import parseSlug from '../../hooks/parseSlug';



export default function Home() {

  const handleShowValues = (e) => {
    let parent = e.target;
    if(e.target.nodeName !== "DIV") parent = e.target.parentElement;
    if(e.target.nodeName == "path") parent = e.target.parentElement.parentElement;

    if(parent.nextElementSibling.style.maxHeight !== "0px"){
      return parent.nextElementSibling.style.maxHeight = '0px';
    }

    return parent.nextElementSibling.style.maxHeight = "10000px"; 
  }

  const router = useRouter();

  const [ course, setCourse ] = useState(all_courses.find((t) => parseSlug(t.title) === router.query.course));


  return <>
    <SEO
      title={course?.title}
      description={course?.title}
      image="/static/img/students-together.jpg"
    />

    <Navbar />

    {/* <Intro bg="/static/img/accepted-students-1600-1024x576.jpg" cover="#5f259f55">
      The Hunter College and <br /> ASE Masters in Economics
    </Intro> */}

    <section className='relative bg-[url(/static/img/students-together.jpg)] bg-cover bg-center px-5 py-8 flex items-center max-w-5xl h-[70vh] lg:my-16 mx-auto shadow-2xl isolate'>
    <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-t from-app-dark to-transparent -z-10`}></div>
      <div className='lg:absolute -bottom-20 lg:right-20 bg-white w-full lg:w-[450px] px-8 py-16 border-l-4 border-b-4 border-white shadow-xl space-y-2'>
          <p className='text-xs text-dark font-bold'>Course:</p>
          <Heading className="!text-app-dark !text-left">{course?.title}</Heading>
      </div>
    </section>

    <section className='lg:py-20 lg:pt-28 lg:px-0 py-8 px-5'>
      <div className='max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-start'>

        {/* <div className='relative col-span-5'>
          <div className='relative w-full h-44'>
            <Image src="/static/img/campus/hunter-logo.png" layout="fill" objectFit="contain"/>
          </div>
        </div> */}

        <div className='col-span-8 space-y-8 lg:space-y-20 text-xs'>

          <div className='space-y-4'>
              <p className='font-bold text-2xl after:block after:mt-4 after:w-1/3 lg:after:w-1/12 after:h-[2px] after:bg-app-main'>About this course</p>

              <div className='text-sm text-justify' dangerouslySetInnerHTML={{
                  __html: course?.description
              }}></div>
          </div>

          <div className='space-y-8'>
              <p className='font-bold text-2xl after:block after:mt-4 after:w-1/3 lg:after:w-1/12 after:h-[2px] after:bg-app-main'>Course Details</p>

              <div className='flex justify-between items-start divide-x divide-[#0003]'>
                  <div className='px-4 py-2'>
                      <p className='text-xs font-bold'>Duration</p>
                      <p className='text-lg lg:text-2xl'>{course?.details?.duration}</p>
                  </div>
                  <div className='px-4 py-2'>
                      <p className='text-xs font-bold'>Starts</p>
                      <p className='text-lg lg:text-2xl'>{
                          course.type === "postgraduate" ? "January / September" : "December"
                      }</p>
                  </div>
                  <div className='px-4 py-2'>
                      <p className='text-xs font-bold'>Application Ends</p>
                      <p className='text-lg lg:text-2xl'>{course?.details?.applicationEnds}</p>
                  </div>
              </div> 

              <div className='space-y-8'>
                  {course?.outline?.map(({semester}, index) => (
                      <div key={index} className=''>
                          <div className='flex gap-4 items-center p-4 text-white rounded-md bg-app-dark' onClick={handleShowValues}>
                              <p className='font-bold'>Year {index+1}</p>
                              <GoChevronDown className='ml-auto text-lg' />
                          </div>
                          <div className='max-h-[0px] overflow-hidden duration-200'>
                              <div className=' bg-gray-50 p-4'>
                                  {semester?.map(({type, details}, index) => (
                                      <div key={index} className='block py-4'>
                                          <p className='text-xs text-app-dark font-bold pb-4'>{type}</p>

                                          {details?.map(({title, duration}, index) => (
                                              <div key={index} className='flex justify-between items-center border-b border-zinc-200 p-3'>
                                                  <p className='text-xs font-bold'>{title}</p>
                                                  <p className='text-xs'>({duration})</p>
                                              </div>
                                          ))}
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </div>
                  ))}
              </div>

          </div>    


          {course?.requirements && <div className='space-y-4'>
              <p className='font-bold text-2xl after:block after:mt-4 after:w-1/3 lg:after:w-1/12 after:h-[2px] after:bg-app-main'>Requirements</p>

              <div className='text-sm space-y-4 text-justify' dangerouslySetInnerHTML={{
                  __html: course?.requirements
              }}></div>
          </div>}

          {/* <div className='space-y-4 mx-auto text-center'>
              <Heading className="!text-app-dark !text-center">Apply for the HASPERE Programme</Heading>
              <div className=''>
                  <p className="text-xs">
                      All applicants are automatically considered for a merit scholarship when they submit their admission application.
                  </p>
                  <p className="text-xs">
                      If you have any questions regarding admissions process, please do not hesitate to contact ASE at: <a className="text-app-dark font-bold hover:underline" href="mailto:admissions@africanschoolofeconomics.com">admissions@africanschoolofeconomics.com</a>
                  </p>
              </div>

              <Link href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2018/03/ASE_Financial_Aid_Form_2018-Website1.pdf">
                  <a className='inline-block'>
                      <Button className="!bg-app-dark !text-xs lg:!py-2 lg:!px-4" text="Begin Application"></Button>
                  </a>
              </Link>

          </div> */}

          {/* <Link href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/06/New-ASE-CI-Brochure-Final-2020.pdf">
              <a target="_blank" className='inline-block'>
                  <Button className="!bg-app-main border-2 border-[#5f259f] !text-white !text-xs lg:!py-2 lg:!px-4 hover:!bg-transparent hover:!text-[#5f259f]" text="Download Program Flyer"></Button>
              </a>
          </Link> */}
        </div>

        <div className='col-span-4 space-y-8 lg:space-y-20 text-xs'>
          <div className='space-y-4'>
              <Link href="/application-guidelines" className='inline-block'>

                  <Button className="!bg-app-dark border-2 border-app-dark !text-white !text-xs lg:!py-2 lg:!px-4 hover:!bg-transparent hover:!text-app-dark" text="Apply for this Course"></Button>

              </Link>

              <Link
                  href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/06/New-ASE-CI-Brochure-Final-2020.pdf"
                  className='inline-block'>

                  <Button className="!bg-transparent border-2 border-app-dark !text-app-dark !text-xs lg:!py-2 lg:!px-4 hover:!bg-app-dark hover:!text-white" text="Download ASE Brochure"></Button>

              </Link>

              <Link href="/admission/academic-calendar" className='inline-block'>

                  <Button className="!bg-transparent border-2 border-app-dark !text-app-dark !text-xs lg:!py-2 lg:!px-4 hover:!bg-app-dark hover:!text-white" text="View Academic Calendar"></Button>

              </Link>
          </div>

          <div className="space-y-8">
              <p className='font-bold text-2xl'>ASE Campuses</p>
              <Link href="/campuses/benin" className='flex gap-2 font-bold text-app-dark'>

                  <div className='relative w-10 h-8 rounded-sm overflow-hidden'>
                      <Image layout='fill' src="/static/img/campus/benin.jpeg" objectFit='cover' />
                  </div>
                  <div className=''>
                      <span className='block'>
                          Benin Campus                        
                      </span>
                      <span className='font-normal'>
                          More about ASE's Cotonu campus                       
                      </span>
                  </div>

              </Link>
              <Link
                  href="/campuses/cote-d-ivoire"
                  className='flex gap-2 font-bold text-app-dark'>

                  <div className='relative w-10 h-8 rounded-sm overflow-hidden'>
                      <Image layout='fill' src="/static/img/campus/cote-d-ivoire.jpeg" objectFit='cover' />
                  </div>
                  <div className=''>
                      <span className='block'>
                          Cote d’Ivoire Campus                        
                      </span>
                      <span className='font-normal'>
                          More about ASE's Adidjan campus                       
                      </span>
                  </div>

              </Link>
              <Link href="/campuses/nigeria" className='flex gap-2 font-bold text-app-dark'>

                  <div className='relative w-10 h-8 rounded-sm overflow-hidden'>
                      <Image layout='fill' src="/static/img/campus/nigeria.png" objectFit='cover' />
                  </div>
                  <div className=''>
                      <span className='block'>
                          Nigeria Campus                        
                      </span>
                      <span className='font-normal'>
                          More about ASE's Abuja campus                       
                      </span>
                  </div>

              </Link>
          </div>
        </div>

      </div>
    </section>


    <Footer />
  </>;
}
