import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

import Heading from '../../components/Heading';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
import Support from '../../components/Support';

import { team, Schoolboard } from '../../data';
import parseSlug from '../../hooks/parseSlug';

export default function Home() {


  return <>
     <SEO
      title="ASE's School Board"
      description="ASE's School Board"
      image="/static/img/bg.png"
    />

    <Navbar />

     <Intro text="School Board" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693755507/banners/School_Board_Banner_xrmqla.png"/>

   <section className='lg:py-20 lg:px-16 py-12 px-5 mx-auto'>
  <div className='text-center mb-8'>
    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 font-[500]" style={{ fontFamily: 'Playfair Display' }}>
      Board of Directors
    </h2>
    <p className="text-lg text-black" style={{ fontFamily: 'Montserrat' }}>
      The Board of Directors is the supervisory body of ASE. It influences the global vision and the strategic direction of ASE, while ensuring that ASE remains true to its mission. Together, its members bring a rich array of experiences in academia, higher education management, fundraising, and African development. Its members are:
    </p>
  </div>
  <div className='flex flex-wrap justify-center -mx-4'>
    {Schoolboard.map(({ name, department, image, slug }, index) => (
      <div
        key={index}
        className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4'
      >
        <div className='bg-[#084a7f] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow'>
          <div className='relative w-full h-64'>
            <img src={image || "/static/img/bg.png"} className='object-cover object-center w-full h-full' alt={`${name}'s Profile`} />
          </div>
          <div className='text-center p-4 text-white' style={{ fontFamily: 'Montserrat' }}>
            <Link href={`/people/${slug}`}>
              <p className='font-bold hover:underline cursor-pointer text-white'>{name}</p>
            </Link>
            <p className='text-sm text-white'>{department || ' - '}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>








    



    

    <Footer />
  </>;
}
