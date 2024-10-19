import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/Button';

import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import Support from '../../components/Support';

import CampusInfo from '../../components/CampusInfo';
import NewsSection from '../../components/NewsSection';

import SEO from '../../components/SEO';



export default function NigeriaCampus() {

  return <>

    <SEO
      title="Nigeria Campus"
      description="Nigeria Campus"
      image="/static/img/cultural-exchange.jpg"
    />

    <Navbar />

    <Intro text="Study at Nigeria" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1694163022/banners/naija_campus_hjtdim.png"/>

    <section className='lg:py-20 lg:px-16 py-12 px-5'>

      <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8 max-w-5xl mx-auto'>

        <div className='lg:col-span-8 space-y-8'>
        
          <p className="text-base">
            The African School of Economics (ASE) offers a novel approach to private tertiary education provision in Nigeria, which consists of operating a network of campuses across the country's geopolitical zones, while delivering a uniform curriculum.
            <br/><br/>
            The choice of Nigeria as the primary country-location is strategic because of the opportunity to, at the different nodes of the multi-campus model, leverage the country's rich and multidimensional socioeconomic, historical and natural assets to enable and advance robust research and learning.
            <br/><br/>
            As such, through research institutes and centres, each campus will specialize in a distinct area of study which aligns with its location.
            <br/><br/>
            Furthermore, each ASE campus is positioned in proximity to a prominent federal university, to facilitate important knowledge exchange, as well as research and academic collaborations.
          </p>

          <Link href="/application-guidelines" target="_blank" className='inline-block'>

            <Button className="!bg-app-dark !text-sm lg:!py-2 lg:!px-5" text="Study at Abuja"></Button>

          </Link>

        </div>

       

      </div>

    </section>

    <CampusInfo  />

    
    <Support />

    <Footer />
  </>;
}




