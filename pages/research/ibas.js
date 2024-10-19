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

    const institute = research_institutes.filter(r => r.acronym === 'IBAS')[0];

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
                          <p class="">IBAS focuses on training students and entrepreneurs in advanced techniques and technologies with the overall goal of upscaling agricultural productivity in Africa. The intention of the institution is to scale-up the value added in the agricultural sector and enable production that meets international standards. An Agri-Business Center will provide marketing, finance, and logistics support to the institute.</p>

                          <p class="font-bold">Training</p>
                          <p class="">The Institute will offer a Master’s programme in Agribusiness, as well as training programmes and certificates aimed toward farmers in the region. The curriculum of this programme will be developed in a collaborative effort with government ministries.</p>
                          
                          <p class="font-bold">Research</p>
                          <p class="">Research, training, and production will take place on four hectares of ASE’s land located in Zagnanado (south-central Benin), in collaboration with the Centre de Partenariat et d’Expertise pour le Développement Durable (CePED), EtriLabs, and KulaTech. ASE will research potentially lucrative plant species and efficient growing techniques. EtriLabs and KulaTech will assist in the transformation of products developed and produced by ASE, and to provide technological resources. ASE plans to house a research center in one of its Nigeria satellite campuses.</p>
                          
                          <p class="font-bold">Production and Transformation</p>
                          <p class="">Upon the successful roll-out of the research phase, ASE plans to create an in-house value-adding chain through the construction of a factory.                        </p>
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
