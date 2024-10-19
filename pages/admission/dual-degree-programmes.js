
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';

import 'animate.css';
import Link from 'next/link';
import Button from '../../components/Button';
import SEO from '../../components/SEO';
import { TbCertificate } from 'react-icons/tb';
import { GiCommercialAirplane } from 'react-icons/gi';

export default function SupportASE() {

  return (
    <>

      <SEO
        title="Dual Degree Programmes"
        description=""
        image="/static/img/dual-degree.jpg"
      />

      <Navbar />

      <Intro bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693940046/banners/Dual_Degree_Programes_ovdjyl.png" text="Dual Degree"/>


      <section className='lg:py-20 lg:px-4 py-8 px-5'>


        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto'>
          
          <div className='lg:col-span-8 space-y-8 p-4 bg-white'>

            <div className=''>
              <div className='space-y-8'>
               <h2 className="text-3xl font-bold mb-4 text-left" style={{ fontFamily: 'Playfair Display' }}>
      About The Programme
    </h2>
                <p className="text-base" style={{ fontFamily: 'Inter' }}>
                  The African School of Economics offer Dual Degree programmes and study abroad options. 
                  This is an exciting opportunity for students who want to get the most out of their education. 
                  With a Dual Degree, students can earn two degrees from two different countries. 
                  This gives them a unique perspective on the world and their chosen field of study. 
                  Additionally, ASE also have partnerships with other institutions around the globe. 
                  This allows students to study abroad for a semester or even a year. 
                  These experiences can be life-changing, and provide students with an unforgettable education.
                </p>
              </div>
            </div>
            
            <p className='text-base' style={{ fontFamily: 'Inter' }}>Below are the partnership universities for Dual Degree programmes and study aboard options: </p>

            <div className='space-y-4'>
          
              <h2 className="text-3xl font-bold mb-4 text-left" text-app-dark-app style={{ fontFamily: 'Playfair Display' }}>
                <span className="pr-3">
                  <TbCertificate className="inline-block text-2xl text-app-dark" />
                </span>
                Dual Degree
              </h2>
 
              <ul className="text-base list-disc list-inside marker:font-bold marker:mr-3 space-y-2" style={{ fontFamily: 'Inter' }}>
                <li>University of Ottawa, Canada</li>
                <li>
                  Universidade Federal da Bahia, Brazil
                </li>
                <li>
                  Stellenbosh University, South Africa
                </li>
                <li>
                  University of New York City, Hunter College, USA
                </li>
              </ul>
            </div>

            <div className='space-y-4'>
              
              <h2 className="text-4xl font-bold mb-4 text-left text-app-dark" style={{ fontFamily: 'Playfair Display' }}>
                <span className="pr-3">
                  <GiCommercialAirplane className="inline-block text-2xl text-app-dark" />
                </span>
                Exchange Partners
              </h2>
 
              <ul className="text-base list-disc list-inside marker:font-bold marker:mr-3 space-y-2" style={{ fontFamily: 'Inter' }}>
                <li>
                  Université Laval
                </li>
                <li>
                  Skema Business School
                </li>
                <li>
                  Barcelona Graduate School of Economics
                </li>
                <li>
                  Universidad del Desarrollo- Bachelor and Masters
                </li>
                <li>
                  Centre Africain d’Études Supérieures en Gestion (CESAG)
                </li>
                <li>
                  New Economics School
                </li>
                <li>
                  Purchase College, SUNY
                </li>
                <li>
                  Mohamed VI Polytechnic University College
                </li>
                <li>
                  University of Pittsburg
                </li>
              </ul>

              <Link
                href="https://benin.africanschoolofeconomics.com/the-african-school-of-economics-aims-to-promote-cutting-edge-economic-research/international-students-application-form/"
                target="_blank"
                className='inline-block'>

                <Button className="!bg-app-dark !text-sm lg:!py-2 lg:!px-4" text="Apply for the exchange program"></Button>

              </Link>
            </div>
          </div>
            
          <div className='lg:col-span-4 w-full space-y-12'>

              
          </div>

        </div>

      </section>

      <Footer />
    </>
  )
}
