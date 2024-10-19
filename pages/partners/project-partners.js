import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';

import 'animate.css';
import { useState } from 'react';

import { research_institutes, project_partnerships } from '../../data';
import SEO from '../../components/SEO';


export default function Researches() {

    const [flippingCard, setFlippingCard] = useState('');

  return <>
    <SEO
      title="ASE Project Partnerships"
      description="ASE Project Partnerships"
      image="https://res.cloudinary.com/duczlqzws/image/upload/v1693755507/banners/Research_Banner_ziskzk.png"
    />

    <Navbar />

    <Intro text="Projet Partnerships" bg="/static/img/atm.webp"/>

    <section className='lg:pt-20 lg:px-16 pt-8 px-5 space-y-8'>

     

    </section>

    {project_partnerships.map(({acronym, title, description, image}, index) => (
      <section key={index} className='lg:py-20 lg:px-16 py-12 px-5 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-center'>
      
        <div className='lg:col-span-6 relative min-h-[300px] lg:min-h-[500px] isolate'>
          <div className='shadow-2xl absolute top-0 left-0 w-full h-full  z-10'></div>
          <Image src={image} layout='fill' objectFit='cover' className="rounded-md"/>
        </div>

        <div className='lg:col-span-6 relative space-y-5 lg:space-y-14'>
          <h1 className='text-xl lg:text-4xl font-bold' style={{ fontFamily: 'Playfair Display' }}>{title}</h1>
          <p className='text-base' style={{ fontFamily: 'Inter' }}>
            {description}
          </p>
          <Link href={acronym} className='flex'>

            <Button text="Learn More"/>

          </Link>
        </div>

    </section>
    ))}



    {/* <Support /> */}

    <Footer />
  </>;
}
