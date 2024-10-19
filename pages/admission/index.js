import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { MdAlternateEmail, MdLocalPhone } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
import Button from '../../components/Button';

import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
import Support from '../../components/Support';


export default function Home() {

  return <>
    <SEO
      title="Admission"
      description="Admission"
      image="/static/img/students-together.jpg"
    />

    <Navbar />

    <Intro bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693940422/banners/Admission_Banner_lotaad.png">Get into ASE</Intro>

    <section className='lg:py-20 lg:px-16 py-12 px-5'>
      <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-start'>
          <div className='col-span-8 space-y-8'>
              <p className='text-3xl font-bold' style={{ fontFamily: 'Inter' }}>Become a pioneer</p>

              <p className='leading-5 text-base text-zinc-800' style={{ fontFamily: 'Inter' }}>
                  The African School of Economics is one of the leading graduate institutions in Africa. We offer students a distinctive educational approach that balances theory with professional practice. This balance is reflected in our curriculum, which varies widely among degree programmes. ASE educates Africa’s future generation of business and economic leaders by integrating coursework in the social science and the humanities. Our students not only develop analytical skills, but also acquire substantive knowledge in the fields of economics, history and statistics. All ASE courses reflect the multidisciplinary nature of our graduate programmes. Renowned scholars and practitioners who have served in leadership positions across four continents present lectures, workshops, academic development seminars, and professional development colloquiums to further enrich our academic community.
              </p>
          </div>

          <div className='col-span-4 space-y-8 lg:space-y-20 text-xs'>
          <div className='space-y-4'>
              <Link href="/application-guidelines" className='inline-block'>

                  <Button className="!flex !bg-app-dark border-2 border-app-dark !text-white !text-xs lg:!py-2 lg:!px-4 hover:!bg-transparent hover:!text-app-dark" text="Apply into ASE"></Button>

              </Link>

              <Link
                  href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/06/New-ASE-CI-Brochure-Final-2020.pdf"
                  className='inline-block'>

                  <Button className="!flex !bg-transparent border-2 border-app-dark !text-app-dark !text-xs lg:!py-2 lg:!px-4 hover:!bg-app-dark hover:!text-white" text="Download ASE Brochure"></Button>

              </Link>

              <Link href="/admission/academic-calendar" className='inline-block'>

                  <Button className="!flex !bg-transparent border-2 border-app-dark !text-app-dark !text-xs lg:!py-2 lg:!px-4 hover:!bg-app-dark hover:!text-white" text="View Academic Calendar"></Button>

              </Link>
          </div>
        </div>
      </div>
    </section>


    <section className='lg:py-20 lg:px-16 py-12 px-5 bg-app-dark text-white'>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          <div className='space-y-4'>
              <p className='font-bold text-xl'>ASE Benin</p>

              <p className='text-sm'>
                  Learn more about ASE's campus in Cotonu
              </p>

              <div className='pt-2 gap-2'>
                  <div className=''>    
                      <Link
                          href="/campuses/benin"
                          className='flex gap-2 bg- text-white text-xs border-white p-1 hover:underline font-bold'>

                          <span>Course Outline</span>
                          <HiOutlineArrowNarrowRight className="text-white"/>

                      </Link>
                  </div>
                  <div className=''>    
                      <Link
                          href="/application-guidelines/benin"
                          className='flex gap-2 bg- text-white text-xs border-white p-1 hover:underline font-bold'>

                          <span>Application Guidelines</span>
                          <HiOutlineArrowNarrowRight className="text-white"/>

                      </Link>
                  </div>
                  <div className=''>    
                      <Link
                          href="/admission/academic-calendar"
                          className='flex gap-2 bg- text-white text-xs border-white p-1 hover:underline font-bold'>

                          <span>Academic Calendar</span>
                          <HiOutlineArrowNarrowRight className="text-white"/>

                      </Link>
                  </div>
              </div>
          </div>
          <div className='space-y-4'>
              <p className='font-bold text-xl'>ASE Cote d'Ivoire</p>

              <p className='text-sm'>
                  Learn more about ASE's Abidjan campus
              </p>

              <div className='pt-2 gap-2'>
                  <div className=''>    
                      <Link
                          href="/campuses/cote-d-ivoire"
                          className='flex gap-2 bg- text-white text-xs border-white p-1 hover:underline font-bold'>

                          <span>Course Outline</span>
                          <HiOutlineArrowNarrowRight className="text-white"/>

                      </Link>
                  </div>
                  <div className=''>    
                      <Link
                          href="/application-guidelines/cote-d-ivoire"
                          className='flex gap-2 bg- text-white text-xs border-white p-1 hover:underline font-bold'>

                          <span>Application Guidelines</span>
                          <HiOutlineArrowNarrowRight className="text-white"/>

                      </Link>
                  </div>
                  <div className=''>    
                      <Link
                          href="/admission/academic-calendar"
                          className='flex gap-2 bg- text-white text-xs border-white p-1 hover:underline font-bold'>

                          <span>Academic Calendar</span>
                          <HiOutlineArrowNarrowRight className="text-white"/>

                      </Link>
                  </div>
              </div>
          </div>
          <div className='space-y-4'>
              <p className='font-bold text-xl'>ASE Nigeria</p>

              <p className='text-sm'>
                  Learn more about ASE's Abuja campus
              </p>

              <div className='pt-2 gap-2'>
                  <div className=''>    
                      <Link
                          href="/campuses/cote-d-ivoire"
                          className='flex gap-2 bg- text-white text-xs border-white p-1 hover:underline font-bold'>

                          <span>Course Outline</span>
                          <HiOutlineArrowNarrowRight className="text-white"/>

                      </Link>
                  </div>
                  <div className=''>    
                      <Link
                          href="/application-guidelines/cote-d-ivoire"
                          className='flex gap-2 bg- text-white text-xs border-white p-1 hover:underline font-bold'>

                          <span>Application Guidelines</span>
                          <HiOutlineArrowNarrowRight className="text-white"/>

                      </Link>
                  </div>
                  <div className=''>    
                      <Link
                          href="/admission/academic-calendar"
                          className='flex gap-2 bg- text-white text-xs border-white p-1 hover:underline font-bold'>

                          <span>Academic Calendar</span>
                          <HiOutlineArrowNarrowRight className="text-white"/>

                      </Link>
                  </div>
              </div>
          </div>
      </div>

      <div className='flex place-content-center pt-8 lg:pt-16'>
          <Link href="/campuses" className='inline-block'>

              <Button className="!bg-white border-2 border-white !text-app-dark !text-xs lg:!py-2 lg:!px-4 hover:!bg-transparent hover:!text-white" text="Learn More About ASE's Campus"></Button>

          </Link>
      </div>

    </section>


    {/* <section className='lg:py-20 lg:px-16 py-12 px-5 bg-[#4778C811]'>
      <div className='text-center space-y-8 max-w-5xl mx-auto'>
          <p className='font-bold text-3xl'>Our Campuses</p>

          <div className='grid grid-cols-1 lg:grid-cols-4 justify-center items-start gap-6'>
              <div className='relative bg-[url(/static/img/campus/benin.jpeg)] bg-cover bg-center text-white p-10 text-left space-y-4 min-h-[250px] isolate'>
                  <div className='absolute top-0 left-0 w-full h-full bg-app-dark opacity-80 -z-10'></div>

              <Link href="/campuses/benin">
                  <a className='inline-block'>
                      <p className='font-bold text-xl hover:underline'>Benin <br /> Campus</p>
                  </a>
              </Link>
                  <p className='text-sm'>Learn more about ASE's campus at Cotonu</p>
              </div>
              
              <div className='relative bg-[url(/static/img/campus/cote-d-ivoire.jpeg)] bg-cover bg-center text-white p-10 text-left space-y-4 min-h-[250px] isolate'>
                  <div className='absolute top-0 left-0 w-full h-full bg-app-dark opacity-80 -z-10'></div>

              <Link href="/campuses/cote-d-ivoire">
                  <a className='inline-block'>
                      <p className='font-bold text-xl hover:underline'>Cote d'Ivoire <br /> Campus</p>
                  </a>
              </Link>
                  <p className='text-sm'>Learn more about ASE's campus at Abidjan</p>
              </div>
              <div className='relative bg-[url(/static/img/campus/nigeria.png)] bg-cover bg-center text-white p-10 text-left space-y-4 min-h-[250px] isolate'>
                  <div className='absolute top-0 left-0 w-full h-full bg-app-dark opacity-80 -z-10'></div>

              <Link href="/campuses/nigeria">
                  <a className='inline-block'>
                      <p className='font-bold text-xl hover:underline'>Nigeria <br /> Campus</p>
                  </a>
              </Link>
                  <p className='text-sm'>Learn more about ASE's campus at Abuja</p>
              </div>
              <div className='relative bg-[url(/static/img/campus/haspere.png)] bg-cover bg-center text-white p-10 text-left space-y-4 min-h-[250px] isolate'>
                  <div className='absolute top-0 left-0 w-full h-full bg-app-dark opacity-80 -z-10'></div>

              <Link href="/campuses/hunter-college">
                  <a className='inline-block'>
                      <p className='font-bold text-xl hover:underline'>HASPERE <br /> Programme</p>
                  </a>
              </Link>
                  <p className='text-sm'>Learn more about the Hunter College Masters in Economics programmes</p>
              </div>

          </div>

      </div>
    </section> */}

    <section className='lg:py-20 lg:px-16 py-12 px-5 bg-[#4778C811]'>
      <div className='text-center space-y-8 max-w-4xl mx-auto'>
          <p className='font-bold text-3xl'>Our Courses</p>

          <p className=''>
              For more detailed information on our courses,<br/> please visit our courses schedule section
          </p>

          <div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-start gap-8'>
              <div className='bg-app-dark text-white p-10 text-left space-y-4 min-h-[250px]'>

              <Link href="/admission/programmes?type=undergraduate" className='inline-block'>

                  <p className='font-bold text-xl hover:underline'>Undergraduate <br /> Programmes</p>

              </Link>
                  <p className='text-sm'>Our undergraduate programs</p>
              </div>
              
              <div className='bg-app-dark text-white p-10 text-left space-y-4 min-h-[250px]'>

              <Link href="/admission/programmes?type=postgraduate" className='inline-block'>

                  <p className='font-bold text-xl hover:underline'>PostGraduate <br /> Programmes</p>

              </Link>
                  <p className='text-sm'>Our postgraduate programmes</p>
              </div>
              <div className='bg-app-dark text-white p-10 text-left space-y-4 min-h-[250px]'>

              <Link href="/courses/haspere" className='inline-block'>

                  <p className='font-bold text-xl hover:underline'>HASPERE <br /> Programme</p>

              </Link>
                  <p className='text-sm'>Our undergraduate programmes</p>
              </div>

          </div>

          <Link href="/admission/programmes" className='inline-block'>

              <Button className="!bg-app-dark border-2 border-app-dark !text-white !text-xs lg:!py-2 lg:!px-4 hover:!bg-transparent hover:!text-app-dark" text="Get Full Course List"></Button>

          </Link>
      </div>
    </section>


    <Footer />
  </>;
}
