import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

import Heading from '../../components/Heading';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
import Support from '../../components/Support';

import { team, nigeria } from '../../data';
import parseSlug from '../../hooks/parseSlug';

export default function Home() {


  return <>
    <SEO
      title="ASE Nigeria "
      description="ASE Nigeria "
      image="/static/img/bg.png"
    />

    <Navbar />

    <Intro text="ASE Nigeria Team" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693755507/banners/School_Board_Banner_xrmqla.png"/>
   <section className='lg:py-20 lg:px-16 py-12 px-5 mx-auto'>
  
  <div className='flex flex-wrap justify-center -mx-4'>
    {nigeria.map(({ name, department, image }, index) => (
      <div
        key={index}
        className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4'
      >
        <div className='bg-[#084a7f] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow'>
          <div className='relative w-full h-64'>
           <Image
    src={image || "/static/img/bg.png"}
    alt={`${name}'s Profile`}
    layout="fill"
    objectFit="cover"
    objectPosition="center"
  />
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
