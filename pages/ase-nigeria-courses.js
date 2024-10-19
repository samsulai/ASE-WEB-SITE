

import Heading from '../components/Heading';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';

import 'animate.css';
import Link from 'next/link';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { TbCertificate } from 'react-icons/tb';
import { GiCommercialAirplane } from 'react-icons/gi';
import Footer from '../components/Footer';

export default function SupportASE() {

  return (
    <>

      <SEO
        title="Academic Courses"
        description=""
        image="/static/img/dual-degree.jpg"
      />

      <Navbar />

      <Intro bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693940046/banners/Dual_Degree_Programes_ovdjyl.png" text="ASE NIGERIA COURSES"/>


      <section className='lg:py-20 lg:px-4 py-8 px-5'>


        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto'>
          
          <div className='lg:col-span-8 space-y-8 p-4 bg-white'>

            <div className=''>
              <div className='space-y-8'>
               <h2 className="text-3xl font-bold mb-4 text-left" style={{ fontFamily: 'Playfair Display' }}>
      Academic Courses
    </h2>
                <p className="text-base" style={{ fontFamily: 'Inter' }}>
                The University begins  with Twenty (20) academic programmes in fourteen (14) Departments and three (3) Faculties
                </p>
              </div>
            </div>
            
            

             

            <div className='space-y-4'>
              
              <h2 className="text-3xl font-bold mb-4 text-left text-app-dark" style={{ fontFamily: 'Playfair Display' }}>
                <span className="pr-3">
                  <TbCertificate className="inline-block text-2xl text-app-dark" />
                </span>
                FACULTY OF ARTS, MANAGEMENT AND SOCIAL SCIENCES (FAMSS)
              </h2>
 
              <ul className="text-base list-disc list-inside marker:font-bold marker:mr-3 space-y-2" style={{ fontFamily: 'Inter' }}>
                <li>
                B. A. English Language and Literature
                </li>
                <li>
                 B. A. History and Diplomatic Studies

                </li>
                <li>
                B. Sc. Economics
                </li>
                <li>
                 B.Sc. Political Science
                </li>
                <li>
                B. Sc. International Relations
                </li>
                <li>
                 B.Sc. Criminology and Security Studies
                </li>
                <li>
               B.Sc. Accounting
                </li>
                <li>
                B.Sc. Business Administration
                </li>
                <li>
                 B.Sc. Entrepreneurship
                </li>
              </ul>

             
            </div>

            <div className='space-y-4'>
              
              <h2 className="text-3xl font-bold mb-4 text-left text-app-dark" style={{ fontFamily: 'Playfair Display' }}>
                <span className="pr-3">
                  <TbCertificate className="inline-block text-2xl text-app-dark" />
                </span>
                FACULTY OF SCIENCE AND COMPUTING (FSC)
              </h2>
 
              <ul className="text-base list-disc list-inside marker:font-bold marker:mr-3 space-y-2" style={{ fontFamily: 'Inter' }}>
                <li>
                B.Sc. Computer Science
                </li>
                <li>
                B.Sc. Software Engineering

                </li>
                <li>
                B.Sc. Cyber Security
                </li>
                <li>
                B.Sc. Mathematics
                </li>
                <li>
                B.Sc. Statistics
                </li>
                <li>
                B.Sc. Microbiology
                </li>
                <li>
                B.Sc. Chemistry
                </li>
                <li>
                B.Sc. Biochemistry
                </li>
                <li>
                B.Sc. Biochemistry
                </li>
                <li>
                B.Sc. Industrial Chemistry
                </li>
              </ul>

             
            </div>


            <div className='space-y-4'>
              
              <h2 className="text-3xl font-bold mb-4 text-left text-app-dark" style={{ fontFamily: 'Playfair Display' }}>
                <span className="pr-3">
                  <TbCertificate className="inline-block text-2xl text-app-dark" />
                </span>
                FACULTY OF AGRICULTURE, ENVIRONMENTAL AND ALLIED HEALTH SCIENCES (FAEAHS)
              </h2>
 
              <ul className="text-base list-disc list-inside marker:font-bold marker:mr-3 space-y-2" style={{ fontFamily: 'Inter' }}>
                <li>
                BMLS Medical Laboratory Science

                </li>
                <li>
                B. Sc. Public Health

                </li>
                
                
                
                
                
                
                
                
              </ul>

             
            </div>
          </div>
            
         
        </div>

      </section>

      <Footer />
    </>
  )
}
