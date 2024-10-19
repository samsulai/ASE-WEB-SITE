import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

import Heading from '../../components/Heading';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
import Support from '../../components/Support';

import { team, bel_management,  ViceChancellor } from '../../data';
import parseSlug from '../../hooks/parseSlug';

export default function Home() {


  return <>
    <SEO
      title="Principal Officers"
      description="Principal Officers"
      image="/static/img/bg.png"
    />

    <Navbar />

    <Intro text="Principal Officers" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693755513/banners/History_Banner_ch1soz.png"/>
<div className='lg:pt-20   lg:px-16  px-5 mx-auto'>
  
  <div className='flex flex-wrap justify-center -mx-4'>
    {ViceChancellor.map(({ name, department, image, slug }, index) => (
      <div
        key={index}
        className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4'
      >
        <div className='bg-[#084a7f] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow'>
          <div className='relative w-full h-64'>
            <img src={image || "/static/img/bg.png"} className='object-cover object-center w-full h-full' alt={`${name}'s Profile`} />
          </div>
          <div className='text-center p-4 text-white'>
            <Link href="#">
              <p className='font-bold hover:underline cursor-pointer text-white'>{name}</p>
            </Link>
            <p className='text-base text-white'>{department || ' - '}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


   <section className=' lg:px-16  px-5 mx-auto mt-4'>
 
  <div className='flex flex-wrap justify-center -mx-4'>
    {bel_management.map(({ name, department, image, slug }, index) => (
      <div
        key={index}
        className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4'
      >
        <div className='bg-[#084a7f] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow'>
          <div className='relative w-full h-64'>
            <img src={image || "/static/img/bg.png"} className='object-cover object-center w-full h-full' alt={`${name}'s Profile`} />
          </div>
          <div className='text-center p-4 text-white'>
            <Link href="#">
              <p className='font-bold hover:underline cursor-pointer text-white'>{name}</p>
            </Link>
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
