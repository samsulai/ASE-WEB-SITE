import Link from 'next/link';
import { MdAlternateEmail, MdLocalPhone } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import Support from '../components/Support';

import { contact } from '../data';

import SEO from '../components/SEO';


export default function Contact() {

  return <>

      <SEO
          title="Contact ASE"
          description="Contact The African School of Economics"
          image="/static/img/vision.jpg"
      />

      <Navbar />

      <Intro text="Reach out to Us" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693940045/banners/contact_us_banner_qh8s0a.png"/>

      <section className='lg:py-20 lg:px-16 py-12 px-5'>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-screen-lg mx-auto text-sm'>
              {contact.map(({ campus, location, mail, tel }, index) => (
                  <div key={index} className='col-span-1 font-[500] space-y-4'>
                  <h2 className="text-4xl font-bold mb-4 !text-black !text-left" style={{ fontFamily: 'Playfair Display' }}>
      {campus}
    </h2>
                      

                      <div className='flex gap-4'>
                          <div className='w-4 flex place-content-center'>
                              <SiGooglemaps className="w-4 h-auto" />
                          </div>
                          <p className='text-base' style={{ fontFamily: 'Inter' }}>
                              {location}
                          </p>
                      </div>

                      <div className='flex gap-4 hover:text-app-main'>
                          <div className='w-4 flex place-content-center'>
                              <MdAlternateEmail className="w-4 h-auto" />
                          </div>
                          <Link href={`mailto:${mail}`} className='w-full break-words text-base' style={{ fontFamily: 'Inter' }}>

                              {mail}

                          </Link>
                      </div>

                      <div className='flex gap-4 hover:text-app-main'>
                          <div className='w-4 flex place-content-center'>
                              <MdLocalPhone className="w-4 h-auto" />
                          </div>
                          {tel.map((t, index) => (
                              (<Link key={index} href={`tel:${t.replace(/\s|\-|\(|\)/g, '')}`} className='text-base' style={{ fontFamily: 'Inter' }}>

                                  {t}

                              </Link>)
                          ))}
                      </div>
                  </div>
              ))}
          </div>

      </section>
      
      <Support />

      <Footer />
  </>;
}
