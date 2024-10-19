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

    const institute = research_institutes.filter(r => r.acronym === 'DRL')[0];

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
                          <p><span style="font-weight: 400;">Supported with a grant from the Open Society Initiative for West Africa (OSIWA), the Development Research Lab (DRL) focuses on the use of technology to improve governance and the implementation, measurement, and evaluation of public policies and development processes. The DRL connects computer scientists with governance experts in order to imagine and implement technology-driven improvement of service delivery, particularly in rural areas. A central aspect of the DRL is the focus on electronic governance (E-gov) and financial technology (Fintech) initiatives. In conjunction with its partners, the DRL will offer trainings and certificates in software and computer programming.</span><span style="font-weight: 400;"><br>
                          </span><span style="font-weight: 400;"><br>
                          </span><span style="font-weight: 400;">The DRL will also house a Transportation Research Institute (TRI). The TRI is being created to foster development in Benin and West Africa. TRI research will focus on the effects of transportation infrastructure development on poverty alleviation and agricultural export. TRI research aims to help African policymakers design stronger or more adequate transportation networks, manage the financing and maintenance of road systems, and maximize the impact of these roads via complementary policies, especially in the agricultural sector. Ongoing DRL research is highlighted below. </span></p><div class="imagewrapper lg:float-right" itemprop="image" itemscope="" itemtype="http://schema.org/ImageObject"><picture><source srcset="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/05/DRL_App-e1589492551574.jpg"><img alt="" src="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/05/DRL_App-e1589492551574.jpg"><a class="hidden" itemprop="contentUrl" href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/05/DRL_App-e1589492551574.jpg"></a><div class="hidden" itemprop="description"></div></picture><div itemprop="caption" class="caption">Screenshot of the DRL's application</div></div><p></p>
                          
                          <p><strong>Development of the “Gestion des Finances” Application</strong></p>
                          <p><span style="font-weight: 400;">The DRL developed the “Gestion des Dépenses” (Expense Management) application in 2018. The second version of the application launched on the Play Store in 2019 under a new name, “Gestion des Finances Personnelles” (GFP) (“Personal Finance Management” in English). The app allows users to create budgets, and to track income, expenditures, credit history, savings, and information on available financial services. New features include daily alerts and added security features. Follow-up on the application is in progress, with a database of about 66 users. </span></p>
                          <p><span style="font-weight: 400;">The effectiveness of this application for promoting financial inclusion is currently being evaluated by ASE’s </span><a href="https://benin.africanschoolofeconomics.com/research/ifm/"><span style="font-weight: 400;">Institute for Finance and Management</span></a><span style="font-weight: 400;">.</span></p>
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
