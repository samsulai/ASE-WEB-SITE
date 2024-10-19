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
import GalleryOverlay from '../components/GalleryOverlay';

export default function Gallery() {

  const images = [
    {image: '/static/img/gallery/gallery1.jpg', artist: 'Salim Abdulrazaq', desc: '', copyright: '2023'},
    {image: '/static/img/gallery/gallery.jpg', artist: 'Salim Abdulrazaq', desc: '', copyright: '2023'},
    {image: '/static/img/gallery/gallery3.jpg', artist: 'Salim Abdulrazaq', desc: '', copyright: '2023'},
    {image: '/static/img/gallery/gallery2.jpg', artist: 'Salim Abdulrazaq', desc: '', copyright: '2023'},
    {image: '/static/img/gallery/gallery4.jpg', artist: 'Salim Abdulrazaq', desc: '', copyright: '2023'},
  ];


  return <>
  
    <SEO
        title="ASE Arts"
        description="View ASE Artworks"
        image="/static/img/gallery/bg.jpg"
    />

    <Navbar />

    <section className='relative lg:py-20 lg:px-16 lg:pr-5 py-8 px-5 before:absolute before:top-0 before:left-0 before:h-1/2 lg:before:h-full before:w-full lg:before:w-1/3 before:bg-gray-200'>
      <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 justify-center items-center'>
        <div className='lg:col-start-2 lg:col-span-5'>

          <div className='relative min-h-[300px] lg:min-h-[500px] isolate'>
            {/* <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div> */}
            <Image src="/static/img/gallery/ase-arts.jpg" layout='fill' objectFit='cover' />
          </div>

        </div>

        <div className='lg:col-span-6 space-y-6'>
          
          <h2 className="!text-left !text-black !text-6xl !uppercase"
  style={{ fontFamily: 'Playfair Display' }}>ASE Arts</h2>
          <p className='text-2xl' style={{ fontFamily: 'Inter' }} >To Discover and Spotlight Africa’s Authentic Culture, History and Art.</p>
        </div>
      </div>
    </section>


    <section className='max-w-6xl mx-auto overflow-auto text-base'>

      <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8 max-w-6xl mx-auto'>

        <div className='lg:py-20 lg:px-16 lg:pr-5 py-8 px-5 lg:col-span-7 space-y-8'>
          
          <h2 className="!text-left !text-app-dark text-4xl"
  style={{ fontFamily: 'Playfair Display' }}>Who We Are</h2>
          <p className="text-base" style={{ fontFamily: 'Inter' }}>
            ASE Arts is a subsidiary of the prolific African School of Economics (ASE) collective, and our focus is on promoting Africa's authentic art, history and culture through scholarly inquiry. This supports African historians and practitioners in African arts and culture, and by showcasing our rich African heritage to a global audience. We are invested in uncovering the more obscure elements of the continent's diverse cultures and vast history, as well as exhibiting the more commonly known ones, and thereby rendering Africa in the most positive light to the rest of the world, and to ourselves.
          </p>

        </div>

        {/* <div className='hidden lg:block lg:col-span-5'>
          <div className='relative min-h-[500px] isolate'>
            <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
            <Image src="/static/img/vector.svg" layout='fill' objectFit='cover' />
          </div>
        </div> */}

      </div>

    </section>


    <section className='bg-app-dark text-white lg:py-20 lg:px-16 py-12 px-5'>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-14">
        <div className='lg:col-span-6 relative min-h-[200px] lg:min-h-[400px] isolate'>
          <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
          <Image src="/static/img/african-history.jpg" layout='fill' objectFit='cover' className="rounded-md"/>
        </div>

        <div className='lg:col-span-6 relative space-y-5 lg:space-y-8'>
          {/* <h1 className='text-2xl lg:text-4xl font-bold'>What We Do</h1> */}
          <div className='text-base lg:text-base space-y-4'>
            <div className='space-y-8 p-4'>
            <h2 className="!text-left !text-white text-4xl"
  style={{ fontFamily: 'Playfair Display' }}>African History</h2>
              
              <p className='text-base text-wihte' style={{ fontFamily: 'Inter' }}>
                Crucially, ASE Arts promotes the presentation of authentic versions of Africa's history to the world. We do this through academic research, helmed by the Institute of African Studies (IAS) at ASE, into uncertain or unknown elements of vital indigenous history.
                <br /> <br />
                For instance, IAS contributed essential research findings to the highly acclaimed Hollywood movie: The Woman King, and similarly, plans to collaborate with film industries across the world to tell the correct versions of our stories.
                <br /> <br />
                We will also produce documentaries around African history, and we will do this in collaboration with African governments, development agencies and donor organizations; and we plan to build the ASE Library of African Art (text, audio recordings, film) at the ASE Abuja campus in 2023/24.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>


    <section className='lg:py-20 lg:px-16 py-12 px-5'>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-14">

        <div className='lg:col-span-6 relative space-y-5 lg:space-y-8'>
          {/* <h1 className='text-2xl lg:text-4xl font-bold'>What We Do</h1> */}
          <div className='text-base lg:text-base space-y-4'>
            <div className='space-y-8 p-4'>
              
              <h2 className="!text-left !text-app-dark text-4xl"
  style={{ fontFamily: 'Playfair Display' }}>African Theater & Film</h2>
              <p className='text-base text-wihte' style={{ fontFamily: 'Inter' }}>
                Having achieved a successful partnership with Hollywood for the movie: The Woman King, we intend to forge an alliance between Hollywood and Nollywood, to promote African stories and history. We have already commenced conversations with frontline representatives of both film industries towards this end, with very promising outcomes.
                <br /><br />

                ASE Arts will support, partake in and lead the production
                of movies in both industries and in collaborations between
                them, that push positive narratives of and for Africa.
                <br /><br />

                We will also produce theater features that will run
                regularly at our different country locations, as well as
                support African theater by funding the practitioners,
                providing them with historical information for their
                content, and publicizing their work.
              </p>
            </div>
          </div>
        </div>

        <div className='lg:col-span-6 relative min-h-[200px] lg:min-h-[400px] isolate'>
          <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
          <Image src="/static/img/ase-arts.jpg" layout='fill' objectFit='cover' className="rounded-md"/>
        </div>

      </div>

    </section>


    <section className='lg:py-20 lg:px-16 py-12 px-5 bg-[url(/static/img/ase-theatre.jpg)] bg-cover bg-center relative isolate mx-auto overflow-auto text-base'>
      <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black to-transparent -z-10`}></div>
      
      <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8 max-w-5xl mx-auto'>

        <div className='lg:col-span-7 space-y-8 p-4'>
          
          <h2 className="!text-left !text-white text-4xl"
  style={{ fontFamily: 'Playfair Display' }}>African Dance, Poetry & Performance Art</h2>
          <p className="text-base text-white" style={{ fontFamily: 'Inter' }}>
            In the coming months, we will host regular gatherings of writers, spoken word poets, and performance artists at our ASE Abuja facility for showcasing craft and networking.
            <br /><br />
            We aim to be an exhibition hub and rendezvous for the highest levels of these art forms across Africa, through our various country locations.
            <br /><br />
            Furthermore, we will support practitioners here with endowments and mentoring access, providing them with authentic historical and cultural details to inspire their work.

          </p>

        </div>

        {/* <div className='hidden lg:block lg:col-span-5'>
          <div className='relative min-h-[500px] isolate'>
            <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
            <Image src="/static/img/vector.svg" layout='fill' objectFit='cover' />
          </div>
        </div> */}

      </div>

    </section>

    <GalleryOverlay images={images} />


    <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto space-y-8 overflow-hidden text-base'>

      {/* <Heading className="!text-app-dark !text-center pb-5"></Heading> */}

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

        {artists.filter(({name}) => name === "Aisha Aliyu-Bima").map(({name, image, description, slug}, index) => (
          <div key={index} className='col-start-2 flex flex-col justify-center items-center gap-5'>
            <div className=''>
              <div className='relative w-[200px] min-h-[200px] isolate rounded-full overflow-hidden'>
                {/* <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div> */}
                <Image src={image ? `/static/img/artists/${image}` : `/static/img/bg.png`} layout='fill' objectFit='cover' />
              </div>
            </div>

            <div className='text-center space-y-4 w-auto overflow-hidden' style={{ fontFamily: 'Inter' }}>
              <p className='font-bold capitalize text-xl text-app-dark' style={{ fontFamily: 'Inter' }}>{name}</p>
              <p className='font-bold text-base capitalize'>Arts Curator</p>
              <p className='text-base'>{description}</p>
            </div>

          </div>
        ))}
      </div>

      <div className='flex justify-center items-center' style={{ fontFamily: 'Inter' }}>
        <Link
          href={`/exhibition`}
          className='group inline-flex gap-2 bg-app-dark text-white text-xs font-bold py-2 px-4 rounded-full overflow-hidden'>

          <span className="">Go to Art Exhibition</span>
          <BsFillBrushFill className="text-white text-base group-hover:animate-pulse"  />

        </Link>
      </div>

    </section>


    <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto overflow-hidden text-base'>
      <div className='space-y-4 lg:w-2/3 mx-auto text-center'>
        
        <h2 className="!text-app-dark !text-center text-4xl"
  style={{ fontFamily: 'Playfair Display' }}>Be a part of African culture and art</h2>
        <div className='' style={{ fontFamily: 'Inter' }}>
          <p className="text-base">
            By donating to organisations that protect and promote African art, you are helping to ensure that this important aspect of the continent's history is not lost.
          </p>
          <p className="text-base">
            You are also supporting the artists who create these works, and ensuring that their talent is recognised and celebrated. African art is vibrant, exciting and full of life - by supporting it, you are helping to keep it alive for future generations.
          </p>
        </div>

        <Link href="/support-ase" target="_blank" className='inline-block'>

          <Button className="!bg-app-dark !text-base lg:!py-2 lg:!px-4" text="Support ASE Arts" style={{ fontFamily: 'Inter' }}></Button>

        </Link>

      </div>
    </section>


    <Footer />
  </>;
}
