import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GiArchiveResearch } from 'react-icons/gi';

import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Support from '../../components/Support';

import { research_institutes } from '../../data';
import Intro from '../../components/Intro';
import 'animate.css';
import SEO from '../../components/SEO';

export default function Home() {

    const router = useRouter();
    const { slug } = router.query;
    const base = "https://benin.africanschoolofeconomics.com";

    const institute = research_institutes.filter(r => r.acronym === 'IFM')[0];

  return <>
    <SEO
      title={institute.acronym}
      description={institute.title}
      image={ institute.image || '/static/img/bg.png'}
    />
    
    <Navbar />

    <Intro text="ASE Research" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693755507/banners/Research_Banner_ziskzk.png"/>

      <section className='lg:px-20 py-10 px-5 flex gap-8 bg-app-dark !text-white'>
          <div className='space-y-2'>
              <p className='font-bold text-lg lg:text-3xl text-white'>{institute.title}</p>
              <p className='flex space-x-3'>
                  <span className='flex gap-2 items-center text-xs uppercase'>
                      <GiArchiveResearch className="" />
                      {institute.acronym}
                  </span>
              </p>
          </div>
      </section>

      <section className='bg-neutral-100 lg:py-20 lg:px-16 py-12 px-5 mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto'>
              <div className='lg:col-span-8 space-y-8'>

                  {/* <div className='bg-white p-4 lg:px-8 py-4 flex gap-4 items-center'>
                      <p className='font-bold text-base'>Share: </p>
                      <Link href={`https://facebook.com/sharer/sharer.php?u=${base+router.asPath}&quote=${'Zoom Meeting'}`}>
                          <a target="_blank" className=""><SiFacebook className="text-app-dark" /></a>
                      </Link>
                      <Link href={`https://twitter.com/intent/tweet?text=${'Zoom meeting'}&hashtags=${'ASE_Event'}&url=${base+router.asPath}`}>
                          <a target="_blank" className=""><SiTwitter className="text-sky-400" /></a>
                      </Link>
                      <Link href={`https://wa.me/?text=${'Zoom meeting'}%20${base+router.asPath}`}>
                          <a target="_blank" className=""><SiWhatsapp className="text-green-600" /></a>
                      </Link>
                      <Link href={`https://t.me/share/url?text=${'Zoom meeting'}&url=${base+router.asPath}`}>
                          <a target="_blank" className=""><SiTelegram className="text-[#3d98b3]" /></a>
                      </Link>
                      <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${base+router.asPath}`}>
                          <a target="_blank" className=""><SiLinkedin className="text-app-main" /></a>
                      </Link>
                      <Link href={`https://mail.google.com/mail/u/0/?view=cm&su=${'Zoom Meeting'}&body=${base+router.asPath}`}>
                          <a target="_blank" className=""><SiGmail className="text-red-500" /></a>
                      </Link>
                  </div> */}

                  <div className='bg-white p-4 lg:p-8 text-base space-y-4 clear-both' dangerouslySetInnerHTML={{
                      __html: `
                          <p><span style="font-weight: 400;">The Institute of Finance and Management (IFM) provides financial and technical consulting services to local and international corporations on market research, marketing strategies, and human resources management. The institute also conducts original research on finance and management, and connects students to regional and international businesses, working to improve entrepreneurship and private sector development in Africa.</span></p>
                          <p><span style="font-weight: 400;">IFM also holds numerous workshops and events aimed toward private sector development, including a technical workshop for financial management, and “Coffee Chats” with cutting-edge leaders on the continent. Current IFM research is discussed below.</span></p>
                          
                          <h5><b>Digital Economy Kit: Toward a digital strategy for inclusive economic growth in the Republic of Benin </b><span style="font-weight: 400;">(2019-2020)</span></h5>
                          <p><span style="font-weight: 400;">African School of Economics is the lead partner for implementation of the Digital Economy Kit in the Republic of Benin. This project is organized by the Pathways for Prosperity Commission, which is hosted and managed by the Blavatnik School of Government at Oxford University. The Digital Economy project is being carried out in partnership with the Digital Advisor to the President and the Ministry of the Digital Economy of Benin. It will support the President Talon’s ongoing Benin Révélé (‘Benin Revealed’)&nbsp; initiative to promote governance, development, and growth. The project will proceed in three phases: 1) A digital readiness evaluation of the current digital landscape, 2) Primary data collection on citizens’ behavior, analysis of administrative data, and identify multiple stakeholders for engagement in dialogues, and 3) Creation of a strategic document on the promotion of digitalization and inclusive growth in Benin. This project will inform public policy in Benin. </span><i><span style="font-weight: 400;">Supported by the Embassy of the Netherlands.</span></i></p>
                          <h4><b>Personal Finance Management and Financial Inclusion in Benin</b></h4>
                          <p><span style="font-weight: 400;">IFM is currently carrying out a Randomized Controlled Trial (RCT) to measure the effectiveness of financial training combined with access to a mobile application developed by ASE’s </span><span style="font-weight: 400;"><a href="https://benin.africanschoolofeconomics.com/research/drl/">Development Research Lab</a> </span><span style="font-weight: 400;">(DRL). This “Gestion des Finances Personnelles” (“Personal Finance Management” in English) app allows users to track their financial activities. An objective is that users will build a credit history, allowing for greater access to financial institutions. A pilot phase has been carried out with 80 adults in the socio-professional category (including civil servants and students), 40 each in treatment and control. </span><i><span style="font-weight: 400;">Financed by SOAS University of London.</span></i></p>
                      `
                  }}>
                  </div>
                  
              </div>

              <div className='lg:col-span-4 space-y-12'>

                  <div className='bg-white px-5 py-8 space-y-2'>
                      
                      <p className='font-bold text-app-dark'>Research Institute</p>

                      <div className='divide-y divide-neutral-300'>
                          {research_institutes.map(({title, acronym}, index) => (
                              (<Link
                                  key={index}
                                  href={`/research/${acronym.replace(/\s/ig,'-').toLowerCase()}`}
                                  className='py-3 block text-base font-bold hover:underline hover:text-app-dark cursor-pointer'>

                                  {title}

                              </Link>)
                          ))}
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
