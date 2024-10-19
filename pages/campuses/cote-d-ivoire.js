import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/Button';

import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import Support from '../../components/Support';

import CampusInfo from '../../components/CampusInfo';
import StudentStories from '../../components/StudentStories';
import NewsSection from '../../components/NewsSection';
import { fetchNews } from '../../hooks/fetchNews';
import SEO from '../../components/SEO';



export default function Campus() {

  return <>
    <SEO
      title="Cote D'Ivoire Campus"
      description="Cote D'Ivoire Campus"
      image="/static/img/slide3.jpg"
    />

    <Navbar />

    <Intro text="Study at Cote d'Ivoire" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1694162931/banners/cote_d_ivoire_campus_pihjhz.png"/>

    <section className='lg:py-20 lg:px-16 py-12 px-5'>

      <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8 max-w-5xl mx-auto'>

        <div className='lg:col-span-8 space-y-8'>
          {/* <Heading className="!text-left !text-app-dark">School for every demography <br /> right here in Abidjan</Heading> */}
          <p className="text-base">
            The African School of Economics is one of the leading graduate institutions in Africa. 
            We offer students a distinctive educational approach that balances theory with professional practice. 
            This balance is reflected in our curriculum, which varies widely among degree programs. 
            ASE educates Africa’s future generation of business and economic leaders by integrating coursework in the social science and the humanities. 
            <br /> <br />
            Our students not only develop analytical skills, but also acquire substantive knowledge in the fields of economics, history and statistics. 
            All ASE courses reflect the multidisciplinary nature of our graduate programs. 
            Renowned scholars and practitioners who have served in leadership positions across four continents present lectures, workshops, academic development seminars, and professional development colloquiums to further enrich our academic community.
          </p>

          <Link href="/application-guidelines" target="_blank" className='inline-block'>

            <Button className="!bg-app-dark !text-base lg:!py-2 lg:!px-5" text="Study at Abidjan"></Button>

          </Link>

        </div>

        {/* <div className='hidden lg:block lg:col-span-5'>
          <div className='relative min-h-[500px] isolate'>
            <div className='shadow-2xl absolute top-0 left-0 w-full h-full  z-10'></div>
            <Image src="/static/img/vector.svg" layout='fill' objectFit='cover' />
          </div>
        </div> */}

      </div>

    </section>


    <CampusInfo city="abidjan" />

    <StudentStories />

    
    <Support />

    <Footer />
  </>;
}



