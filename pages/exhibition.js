import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { BsFillBrushFill } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';

import 'animate.css';

import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

import Button from '../components/Button';
import { artists } from '../data';
import Intro from '../components/Intro';
import GalleryOverlay from '../components/GalleryOverlay';

export default function Gallery() {

  const images = [
    {image: '/static/img/gallery/gallery1.jpg', artist: 'Salim Abdulrazaq', desc: '', copyright: '2023'},
    {image: '/static/img/gallery/gallery.jpg', artist: 'Salim Abdulrazaq', desc: '', copyright: '2023'},
    {image: '/static/img/gallery/gallery3.jpg', artist: 'Salim Abdulrazaq', desc: '', copyright: '2023'},
    {image: '/static/img/gallery/gallery2.jpg', artist: 'Salim Abdulrazaq', desc: '', copyright: '2023'},
    {image: '/static/img/gallery/gallery4.jpg', artist: 'Salim Abdulrazaq', desc: '', copyright: '2023'},
    {image: '/static/img/gallery/gallery5.jpg', artist: 'Kaycee Chibuzor Uyanwa', desc: '', copyright: '2023'},
    {image: '/static/img/gallery/gallery6.jpg', artist: 'Kaycee Chibuzor Uyanwa', desc: '', copyright: '2023'},
    {image: '/static/img/gallery/gallery7.jpg', artist: 'Kaycee Chibuzor Uyanwa', desc: '', copyright: '2023'},
  ];

  return <>
  
    <SEO
        title="Art Exhibition"
        description="View ASE Artworks"
        image="/static/img/gallery/bg.jpg"
    />

    <Navbar />

    <Intro>Exhibition</Intro>


    <GalleryOverlay images={images} forExhibition/>

    <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto overflow-hidden text-sm'>

      <Heading className="!text-app-dark !text-center pb-5">Meet The Artist</Heading>

      <div className='flex flex-wrap lgrid grid-cols-1 lg:grid-cols-3 gap-10'>
        {artists.filter(({name}) => name !== "Aisha Aliyu-Bima").map(({name, image, description, slug}, index) => (
          <div key={index} className='w-full lg:w-1/3 flex flex-col justify-center items-center gap-5'>
            <div className=''>
              <div className='relative w-[200px] min-h-[200px] isolate rounded-full overflow-hidden'>
                {/* <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div> */}
                <Image src={image ? `/static/img/artists/${image}` : `/static/img/bg.png`} layout='fill' objectFit='cover' />
              </div>
            </div>

            <div className='text-center space-y-4 w-auto overflow-hidden'>
              <p className='font-bold capitalize text-xl text-app-dark'>{name}</p>
              <p className='text-sm'>{description}</p>

              <Link
                href={`/artist/${slug}`}
                className='group inline-flex gap-2 bg-app-dark text-white text-xs font-bold py-2 px-4 rounded-full overflow-hidden'>

                <span className="">About Artist</span>
                <BsFillBrushFill className="text-white text-sm group-hover:animate-pulse"  />

              </Link>
            </div>

          </div>
        ))}

      </div>

    </section>

    <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto overflow-hidden text-sm'>
      <div className='space-y-4 lg:w-2/3 mx-auto text-center'>
        <Heading className="!text-app-dark !text-center">Be a part of African culture and art</Heading>
        <div className=''>
          <p className="text-sm">
            By donating to organisations that protect and promote African art, you are helping to ensure that this important aspect of the continent's history is not lost.
          </p>
          <p className="text-sm">
            You are also supporting the artists who create these works, and ensuring that their talent is recognised and celebrated. African art is vibrant, exciting and full of life - by supporting it, you are helping to keep it alive for future generations.
          </p>
        </div>

        <Link href="/support-ase" target="_blank" className='inline-block'>

          <Button className="!bg-app-dark !text-sm lg:!py-2 lg:!px-4" text="Support ASE Arts"></Button>

        </Link>

      </div>
    </section>


    <Footer />
  </>;
}
