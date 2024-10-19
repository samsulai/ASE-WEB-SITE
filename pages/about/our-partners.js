import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';

import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
import Support from '../../components/Support';

import { partners } from '../../data';


export default function Partners() {

  return <>

    <SEO
        title="Our Partners"
        description="ASE is truly an international caliber institution. In addition to attracting international degree candidates in the normal recruiting and admissions process, ASE is developing robust exchange programmes with leading Universities in Canada, Europe, the United States, Latin America and Asia."
        image="/static/img/bg.png"
    />

    <Navbar />

    <Intro text="Our Partners" bg="/static/img/atm.webp"/>

    <section className='max-w-6xl mx-auto overflow-auto text-sm'>

      <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8 max-w-6xl mx-auto'>

        <div className='lg:py-20 lg:px-16 lg:pr-5 py-8 px-5 lg:col-span-7 space-y-8'>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 "
  style={{ fontFamily: 'Playfair Display' }}>Our Partners</h2>
          <p className="text-lg">
            African School of Economics welcomes a diverse body of students that come from various cultural backgrounds. As a university that prioritizes training the next generation of African economists, ASE promotes cutting-edge economic research, innovative public policy and contributes to the emergence of world-class social scientists and business in Africa. With alum of many nationalities, international students continue to provide ASE with distinctive perspectives and contribute to the existing global community.
            <br /><br />
            African School of Economics offers multiple opportunities to exchange in the global community outside of the classroom. Such opportunities include Dual Degree programmes with rigorous universities and study abroad options for students.
          </p>

          <p className='text-base' style={{ fontFamily: 'Inter' }}>
            The African School of Economics also offers dual degree programmes and study abroad options for its students <Link
            href="/admission/dual-degree-programmes"
            className='font-bold text-app-dark'>Learn More</Link>
          </p>

          <p className='text-base' style={{ fontFamily: 'Inter' }}>
            The African School of Economics has four types of partners: <br />
                - Academic Partners<br />
                - Policy Partners<br />
                - Research Partners<br />
                - Project Partners
          </p>

        </div>


      </div>


    </section>

    {/* Vision */}
    <section id="vision" className='lg:py-20 lg:px-16 py-12 px-5 space-y-8'>

      {/* <div className='lg:w-2/3 mx-auto space-y-8 text-sm'>
        <p className="">ASE is truly an international caliber institution. In addition to attracting international degree candidates in the normal recruiting and admissions process, ASE is developing robust exchange programmes with leading Universities in Canada, Europe, the United States, Latin America and Asia.</p>
      </div> */}

      <div className='grid lg:grid-cols-4 gap-12 mx-auto py-5 max-w-5xl'>
        {partners.map(({title, image, url}, index) => (
          <Link key={index} href={url} legacyBehavior>
            <div className="relative cursor-pointer">
              <div className='w-full h-24 relative'>
                <Image src={`/static/img/partners/${image}`} layout='fill' objectFit='contain'/>
              </div>
              <div className='py-2'>
                <p className="font-bold text-center text-sm">{title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>

    <Support />

    <Footer />
  </>;
}
