import Link from 'next/link';

import Button from '../components/Button';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';

import 'animate.css';
import { MdAssessment, MdMarkEmailRead, MdWork } from 'react-icons/md';
import SEO from '../components/SEO';


export default function WorkAtASE() {

  return <>

      <SEO
          title="Work at ASE"
          description="We offer great job oppurtunities to people of every demography right here at ASE"
          image="/static/img/ase.jpg"
      />

    <Navbar />

    <Intro text="Work at ASE" bg="/static/img/ase.jpg"/>

    <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto'>

      <div className='space-y-4'>
          <p className='lg:text-xl font-semibold'>
              To see which teams are currently hiring,<br />visit our Job Openings.
          </p>
          <Link href="/job-openings" className='inline-block'>

              <Button className="lg:!py-2 lg:!px-4" text="Job Openings"></Button>

          </Link>
      </div>

    </section>

    {/* <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-7xl mx-auto'>

      <div className='grid grid-cols-1 lg:grid-cols-4 items-center gap-8'>
          <div className=' space-y-3'>
              <h1 className='font-bold text-xl lg:text-3xl'>Why Work with Us?</h1>
              <p className='text-xs'>
                  This is a dummy text. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </p>
          </div>
          <div className='min-h-[350px] relative isolate bg-app-main flex items-end p-4 text-white bg-[url("/static/img/ase.jpg")] bg-center bg-cover'>
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-app-main z-[-1]'></div>
              <h1 className='font-bold text-xl'>Faculty Position</h1>
          </div>
          <div className='min-h-[350px] relative isolate bg-app-main flex items-end p-4 text-white bg-[url("/static/img/students-researching.jpg")] bg-center bg-cover'>
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-app-main z-[-1]'></div>
              <h1 className='font-bold text-xl'>Research Assistant</h1>
          </div>
          <div className='min-h-[350px] relative isolate bg-app-main flex items-end p-4 text-white bg-[url("/static/img/slide2.jpg")] bg-center bg-cover'>
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-app-main z-[-1]'></div>
              <h1 className='font-bold text-xl'>Research Partners</h1>
          </div>
      </div>

    </section> */}

    <section className='lg:py-20 lg:px-16 py-12 px-5 bg-[#2E4467] text-white space-y-8 max-w-6xl mx-auto'>

      <div className=''>
          <h1 className='font-bold text-xl lg:text-3xl text-center'>Our Application Process</h1>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-3 divide-y lg:divide-y-0 lg:divide-x divide-white text-center'>
          <div className='space-y-4 relative isolate p-4'>
              <MdMarkEmailRead className='block mx-auto text-4xl' />
              <h1 className='text-sm'>Mail in your application and neccessary document</h1>
          </div>
          <div className='space-y-4 relative isolate p-4'>
              <MdAssessment className='block mx-auto text-4xl' />
              <h1 className='text-sm'>Review and assessment</h1>
          </div>
          <div className='space-y-4 relative isolate p-4'>
              <MdWork className='block mx-auto text-4xl' />
              <h1 className='text-sm'>Job Offering</h1>
          </div>
      </div>

      <div className='space-y-4 text-center'>
          <p className='lg:text-xl font-semibold'>
              Check out job openings at ASE.
          </p>
          <Link href="/job-openings" className='flex justify-center'>

              <Button className="lg:!py-2 lg:!px-4 !text-app-main !bg-white" text="Job Openings"></Button>

          </Link>
      </div>

    </section>

    {/* <Support /> */}

    <Footer />
  </>;
}
