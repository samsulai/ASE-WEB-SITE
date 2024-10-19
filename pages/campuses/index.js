import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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
      title="Campus"
      description="Campus"
      image="/static/img/bg.png"
    />

    <Navbar />

   
<Intro text="Our Citadels of Learning" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1694163065/banners/our_campuses_banner_mf1l7b.png"/>
    <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-center'>
      
      <div className='lg:col-span-6 relative min-h-[500px] isolate'>
        <div className='shadow-2xl absolute top-0 left-0 w-full h-full  z-10'></div>
        <Image src="https://res.cloudinary.com/duczlqzws/image/upload/v1690728018/campus_li15sa.webp" layout='fill' objectFit='cover' className="rounded-md" />
      </div>

      <div className='lg:col-span-6 relative space-y-5 lg:space-y-14'>
       
        <h1 className='text-2xl lg:text-5xl font-bold' style={{ fontFamily: 'Playfair Display' }}>ASE Benin <br /> Campus </h1>
        <p className='text-base' style={{ fontFamily: 'Inter' }}>
          The African School of Economics Benin Campus offers well tailored economic courses that doesn't just guaranteed your great learning experience but also opens up your creative spark.
        </p>
        <Link href="/campuses/benin" className='flex'>

          <Button text="Learn More"/>

        </Link>
      </div>

    </section>

    <section className='bg-[url(/static/img/bg.png)] text-white lg:py-20 lg:px-16 py-12 px-5 mx-auto'>

      <div className='max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-center'>
        <div className='lg:col-span-6 relative space-y-5 lg:space-y-14'>
          <h1 className='text-2xl lg:text-5xl font-bold' style={{ fontFamily: 'Playfair Display' }}>ASE Cote d'Ivoire<br /> Campus </h1>
          <p className='text-base' style={{ fontFamily: 'Inter' }}>
            The African School of Economics Benin Campus offers well tailored economic courses that doesn't just guaranteed your great learning experience but also opens up your creative spark.
          </p>
          <Link href="/campuses/cote-d-ivoire" className='flex'>

            <Button className="!bg-white !text-app-main" text="Learn More"/>

          </Link>
        </div>
        <div className='lg:col-span-6 relative min-h-[500px] isolate'>
          <div className='shadow-2xl absolute top-0 left-0 w-full h-full  z-10'></div>
          <Image src="https://res.cloudinary.com/duczlqzws/image/upload/v1690987594/cote-transformed_xspv5v.webp" layout='fill' objectFit='cover' className="rounded-md"/>
        </div>
      </div>

    </section>
    
    <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-center'>
      
      <div className='lg:col-span-6 relative min-h-[500px] isolate'>
        <div className='shadow-2xl absolute top-0 left-0 w-full h-full  z-10'></div>
        <Image src="https://res.cloudinary.com/duczlqzws/image/upload/v1690269588/nigeria_rpn4jy.webp" layout='fill' objectFit='cover' className="rounded-md"/>
      </div>

      <div className='lg:col-span-6 relative space-y-5 lg:space-y-14'>
        <h1 className='text-2xl lg:text-5xl font-bold' style={{ fontFamily: 'Playfair Display' }}>ASE Nigeria <br /> Campus </h1>
        <p className='text-base' style={{ fontFamily: 'Inter' }}>
          The African School of Economics Nigeria Campus offers well tailored economic courses that doesn't just guaranteed your great learning experience but also opens up your creative spark.
        </p>
        <Link href="/campuses/nigeria" className='flex'>

          <Button text="Learn More"/>

        </Link>
      </div>

    </section>

    <Support />

    <Footer />
  </>;
}
