import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import sanitize from 'sanitize-html';
import { FiClock } from 'react-icons/fi';
import { HiCalendarDays } from 'react-icons/hi2';
import { SiFacebook, SiGmail, SiGooglemaps, SiLinkedin, SiTelegram, SiTwitter, SiWhatsapp } from 'react-icons/si';

import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Support from '../../components/Support';

import 'animate.css';
import SEO from '../../components/SEO';

export default function Home() {

    const router = useRouter();
    const { slug } = router.query;
    const base = "https://benin.africanschoolofeconomics.com";

  return <>
    <SEO
      title="An Events"
      description="An Events"
      image="/static/img/events.jpg"
    />
    
    <Navbar />

      <section style={{ backgroundImage: `url(${'/static/img/events.jpg' || '/static/img/bg.png'})` }} className={`relative py-12 px-6 lg:p-12 h-[40vh] grid place-content-center bg-cover bg-center items-center isolate`}>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-app-dark to-transparent -z-10"></div>
      </section>

      <section className='lg:px-20 py-10 px-5 flex gap-8 bg-app-dark !text-white'>
          <div className='space-y-2'>
              <p className='font-bold text-lg lg:text-3xl text-white'>Skype Conference: Launch of the Pan-African Scientific Research Network</p>
              <p className='flex space-x-3'>
                  <span className='flex gap-2 items-center text-xs uppercase'>
                      <SiGooglemaps className="" />
                      Zoom Meeting
                  </span>
                  <span className='flex gap-2 items-center text-xs uppercase'>
                      <HiCalendarDays className="" />
                      06 June, 2022
                  </span>
                  <span className='flex gap-2 items-center text-xs uppercase'>
                      <FiClock className="" />
                      13:00:00 PM WAT
                  </span>
              </p>
          </div>
      </section>

      <section className='bg-neutral-100 lg:py-20 lg:px-16 py-12 px-5 mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto'>
              <div className='lg:col-span-8 space-y-8'>

                  <div className='bg-white p-4 lg:px-8 py-4 flex gap-4 items-center'>
                      <p className='font-bold text-sm'>Share: </p>
                      <Link
                          href={`https://facebook.com/sharer/sharer.php?u=${base+router.asPath}&quote=${'Zoom Meeting'}`}
                          target="_blank"
                          className="">
                          <SiFacebook className="text-app-dark" />
                      </Link>
                      <Link
                          href={`https://twitter.com/intent/tweet?text=${'Zoom meeting'}&hashtags=${'ASE_Event'}&url=${base+router.asPath}`}
                          target="_blank"
                          className="">
                          <SiTwitter className="text-sky-400" />
                      </Link>
                      <Link
                          href={`https://wa.me/?text=${'Zoom meeting'}%20${base+router.asPath}`}
                          target="_blank"
                          className="">
                          <SiWhatsapp className="text-green-600" />
                      </Link>
                      <Link
                          href={`https://t.me/share/url?text=${'Zoom meeting'}&url=${base+router.asPath}`}
                          target="_blank"
                          className="">
                          <SiTelegram className="text-[#3d98b3]" />
                      </Link>
                      <Link
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${base+router.asPath}`}
                          target="_blank"
                          className="">
                          <SiLinkedin className="text-app-main" />
                      </Link>
                      <Link
                          href={`https://mail.google.com/mail/u/0/?view=cm&su=${'Zoom Meeting'}&body=${base+router.asPath}`}
                          target="_blank"
                          className="">
                          <SiGmail className="text-red-500" />
                      </Link>
                  </div>

                  <div className='bg-white p-4 lg:p-8 text-sm space-y-4' dangerouslySetInnerHTML={{
                      __html: sanitize(`
                          <p>On June 6<sup>th</sup>, African School of Economics, Institut Pasteur of Côte d’Ivoire and collaborating Africa-focused researchers from around the world will converge for the formal launch of the Pan-African Scientific Research Council (PASRC).</p>
                          <p>The PASRC addresses the acute need for African institutions of higher education that can efficiently generate knowledge in times of crisis. By uniting scientists and social scientists from Africa and the Diaspora, the PASRC will provide a framework for cutting-edge research addressing both the ongoing COVID-19 crisis and future crises.</p>
                          <p>The launch meeting itself will take place on <strong>June 6<sup>th</sup> from</strong> <strong>9:00-1:00 PM (EDT) / 2:00 PM – 6:00 PM (West Africa Time)</strong>, with an intermission in the middle. The goal of the meeting is to formalize the structure and network of the Pan-African Scientific Research Council and to set up a provisional leadership team.</p>

                          <h4>Meeting Agenda</h4>
                          <p><em>All times are in Eastern Daylight Time (UTC -4). Updated June 5th.</em></p>
                          <p><iframe loading="lazy" style="border: 1px solid #CCC; border-width: 1px; margin-bottom: 5px; max-width: 100%;" src="//www.slideshare.net/slideshow/embed_code/key/89HWA7wwmSluwb" width="668" height="714" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="allowfullscreen"> </iframe></p>
                          <p><em>For more details on the PASRC and an event registration link, please visit <a href="https://benin.africanschoolofeconomics.com/covid-19/establishment-of-pasrc/">this page</a>. Questions can be directed to <a href="mailto:pasrc.africa@gmail.com">pasrc.africa@gmail.com</a>.</em></p>
                      `)
                  }}>
                  </div>
                  
              </div>

              <div className='lg:col-span-4 space-y-12'>

                  <div className='bg-white px-5 py-8 space-y-2'>
                      
                      <p className='font-bold text-app-dark'>Events</p>

                      <div className='space-y-3'>
                          <p className='text-sm font-bold hover:underline hover:text-app-dark cursor-pointer'>
                              Zoom Conference: Launch of the Pan-African Scientific Research Network

                              <span className='flex gap-2'>
                                  <span className='flex gap-2 items-center text-sm font-normal'>
                                      <SiGooglemaps className="" />
                                      Zoom Meeting
                                  </span>

                                  <span className='flex gap-2 items-center text-sm font-normal'>
                                      <HiCalendarDays className="" />
                                      06 June, 2022
                                  </span>
                              </span>
                          </p>
                          <p className='text-sm font-bold hover:underline hover:text-app-dark cursor-pointer'>
                              PEGNet Conference 2018: Improving the quality of education and learning outcomes in developing countries

                              <span className='flex gap-2'>
                                  <span className='flex gap-2 items-center text-sm font-normal'>
                                      <SiGooglemaps className="" />
                                      Zoom Meeting
                                  </span>

                                  <span className='flex gap-2 items-center text-sm font-normal'>
                                      <HiCalendarDays className="" />
                                      06 June, 2022
                                  </span>
                              </span>
                          </p>
                          <p className='text-sm font-bold hover:underline hover:text-app-dark cursor-pointer'>
                              ASE hosts the 2018 Africa Meeting of the Econometric Society

                              <span className='flex gap-2'>
                                  <span className='flex gap-2 items-center text-sm font-normal'>
                                      <SiGooglemaps className="" />
                                      Zoom Meeting
                                  </span>

                                  <span className='flex gap-2 items-center text-sm font-normal'>
                                      <HiCalendarDays className="" />
                                      06 June, 2022
                                  </span>
                              </span>
                          </p>
                          <p className='text-sm font-bold hover:underline hover:text-app-dark cursor-pointer'>
                              2018 Summer Institute of the Econometric Society

                              <span className='flex gap-2'>
                                  <span className='flex gap-2 items-center text-sm font-normal'>
                                      <SiGooglemaps className="" />
                                      Zoom Meeting
                                  </span>

                                  <span className='flex gap-2 items-center text-sm font-normal'>
                                      <HiCalendarDays className="" />
                                      06 June, 2022
                                  </span>
                              </span>
                          </p>
                          <p className='text-sm font-bold hover:underline hover:text-app-dark cursor-pointer'>
                              SIER 2017

                              <span className='flex gap-2'>
                                  <span className='flex gap-2 items-center text-sm font-normal'>
                                      <SiGooglemaps className="" />
                                      Zoom Meeting
                                  </span>

                                  <span className='flex gap-2 items-center text-sm font-normal'>
                                      <HiCalendarDays className="" />
                                      06 June, 2022
                                  </span>
                              </span>
                          </p>
                      </div>

                  </div>

                  <div className='relative isolate bg-[url(/static/img/brochure.jpg)] bg-cover h-[450px] flex flex-col items-center justify-end px-5 py-8 space-y-2'>
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-app-dark to-transparent -z-10"></div>

                      <p className='w-full font-bold text-center text-white text-2xl'>Need a quick guide into ASE? Get our brochure</p>

                      <Link
                          href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/06/New-ASE-CI-Brochure-Final-2020.pdf"
                          target="_blank"
                          className='inline-block'>

                          <Button className="!bg-white !text-app-dark !text-xs lg:!py-2 lg:!px-4" text="Download Brochure"></Button>

                      </Link>
                  </div>
                  
              </div>
          </div>

      </section>


    <Support />

    <Footer />
  </>;
}
