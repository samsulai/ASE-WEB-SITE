import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

import Heading from '../../components/Heading';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
import Support from '../../components/Support';

import { team, faculty, cnp, dean } from '../../data';
import parseSlug from '../../hooks/parseSlug';

export default function Home() {


  return <>

    <SEO
        title="Academic Team"
        description="ASE's Academic board"
        image="/static/img/bg.png"
    />

    <Navbar />

    <Intro text="Meet Our Academic Team" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693946558/banners/Academic_Team_Banner_jiuuu5.png"/>

    <section className='lg:py-20 lg:px-16 py-12 px-5 mx-auto'>
  <div className='text-center mb-8'>
    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 font-[500]" style={{ fontFamily: 'Playfair Display' }}>
       Faculty
      </h2>
  </div>
  <div className='flex flex-wrap justify-center -mx-4'>
    {faculty.map(({ name, department, image }, index) => (
      <div
        key={index}
        className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4'
      >
        <div className='bg-[#084a7f] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow'>
          <div className='relative w-full h-64'>
            <img src={image || "/static/img/bg.png"} className='object-cover object-center w-full h-64' alt={`${name}'s Profile`} />
          </div>
          <div className='text-center p-4 text-white'>
            <p className='font-bold hover:underline cursor-pointer text-white'>{name}</p>
            <p className='text-base text-white'>{department || ' - '}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
<section className='lg:px-16  px-5 mx-auto mt-4'>
  <div className='text-center mb-8'>
    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 font-[500]" style={{ fontFamily: 'Playfair Display' }}>
      Current And Past Affiliated Faculty
      </h2>
  </div>
  <div className='flex flex-wrap justify-center -mx-4'>
    {cnp.map(({ name, department, image }, index) => (
      <div
        key={index}
        className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4'
      >
        <div className='bg-[#084a7f] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow'>
          <div className='relative w-full h-64'>
            <img src={image || "/static/img/bg.png"} className='object-cover object-center w-full h-64' alt={`${name}'s Profile`} />
          </div>
          <div className='text-center p-4 text-white'>
            <p className='font-bold hover:underline cursor-pointer text-white'>{name}</p>
            <p className='text-base text-white'>{department || ' - '}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
<section className='lg:px-16  px-5 mx-auto mt-4'>
  <div className='text-center mb-8'>
    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 font-[500]" style={{ fontFamily: 'Playfair Display' }}>
      Office Of The Dean
      </h2>
  </div>
  <div className='flex flex-wrap justify-center -mx-4'>
    {dean.map(({ name, department, image }, index) => (
      <div
        key={index}
        className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4'
      >
        <div className='bg-[#084a7f] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow'>
          <div className='relative w-full h-64'>
            <img src={image || "/static/img/bg.png"} className='object-cover object-center w-full h-64' alt={`${name}'s Profile`} />
          </div>
          <div className='text-center p-4 text-white'>
            <p className='font-bold hover:underline cursor-pointer text-white'>{name}</p>
            <p className='text-base text-white'>{department || ' - '}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

    
   

    <Footer />
  </>;
}
