import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GiArchiveResearch } from 'react-icons/gi';

import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Support from '../../components/Support';

import { research_institutes } from '../../data';

import 'animate.css';
import SEO from '../../components/SEO';
import Image from 'next/image';
import Intro from '../../components/Intro';
export default function Home() {

    const router = useRouter();

    const institute = research_institutes.filter(r => r.acronym === 'PASRC')[0];

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
              <p className='font-bold text-lg lg:text-3xl text-white'>{institute.title} ({institute.acronym})</p>
              <p className='flex space-x-3'>
                  <span className='flex gap-2 items-center text-xs uppercase'>
                  <div className='relative w-64 h-24'>
                      <Image 
                          src="/static/img/PASRC.jpg"
                          layout='fill'
                          objectFit='cover'
                          alt=""
                      />
                  </div>
                      {/* <GiArchiveResearch className="" /> */}
                  </span>
              </p>
          </div>
      </section>

      <section className='bg-neutral-100 lg:py-20 lg:px-16 py-12 px-5 mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto'>
              <div className='lg:col-span-8 mx-auto space-y-8 list'>

                  <div className='bg-white p-4 lg:p-8 text-base space-y-4 clear-both' dangerouslySetInnerHTML={{
                      __html: `
                      
                          <p class="text-base font-bold">About the Pan-African Scientific Research Council</p>
                          <p class="">
                              The Pan-African Scientific Research Council is an association and network that brings together African and/or Africa-focused researchers and professionals, with the goal of promoting research collaboration, career development, and policy & public engagement. The Council’s thematic areas are social sciences; biomedical sciences; agricultural, energy, and environmental sciences; and applied mathematics, computer science, and statistics. The Council has garnered tremendous interest from researchers and professionals, and currently has 500+ confirmed members categorized as Fellows, Junior Fellows, Senior Members, Members and Associate Members. Council members represent 62 countries, out of which 38 are African. In 2021, 2 African Research Associates and 3 African Faculty Fellows were added to the National Bureau of Economic Research (NBER) following advocacy by the PASRC.
                          </p>
                          
                          <div class="flex lg:flex-row flex-col justify-center items-start gap-4">
                              <svg class="" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M149.7 85.6c-1.2 0-2.5 0-3.7.1-33.9.8-75.5 10.7-127.3 33.7v243.4c60.8-28.8 106.7-37.1 144.2-33.1 13.7 1.4 26.3 4.5 37.9 8.6l-45.1-78.8c-8.6 3.5-17.9 5.5-27.7 5.5-40.21 0-73-32.8-73-73s32.79-73 73-73c40.2 0 73 32.8 73 73 0 24-11.7 45.3-29.7 58.7l57.3 100c6.2 3.2 12.1 6.7 17.9 10.2v-243c-23.2-17.7-50.2-30-86-32-3.5-.2-7.1-.3-10.8-.3zm212 0c-3.7 0-7.4.1-10.9.3-35.8 2-62.7 14.3-86 32v243c23.9-14.6 50.1-27.7 83.6-31.2 37.5-4 83.5 4.3 144.2 33.1V119.4c-51.7-23-93.3-32.9-127.2-33.7-1.3 0-2.5-.1-3.7-.1zM128 137c-30.48 0-55 24.5-55 55s24.52 55 55 55c30.5 0 55-24.5 55-55s-24.5-55-55-55zm2.3 13.9h2.8C109 169.1 98.32 193 99.73 221.1c-26.06-38.8 1.27-69.4 30.57-70.2zm13.1 196.5c-32 .3-71.8 9.8-124.7 36v42.5c60.8-28.8 106.7-37.1 144.2-33.1 18.6 2 34.9 6.9 49.8 13.3-4.7 6.1-9.3 13.3-13.9 21.7h53.3l-36-62.7c-16.6-8.3-34.3-14.6-55.1-16.8-5.6-.6-11.5-.9-17.6-.9zm220.9 0c-4.8.1-9.4.4-13.9.9-34 3.6-59.6 18-85.6 34.4v.3c-6.1-1.9-12.3-2.3-18.3-1.2l26.3 46H316c-6-8.2-11.8-15.4-17.7-21.6 15-6.5 31.4-11.4 50.1-13.4 37.5-4 83.5 4.3 144.2 33.1v-42.5c-53.1-26.3-93.1-35.9-125.2-36h-3.1z"></path></svg>
                              <p class="lg:w-11/12">
                                  <span class="font-bold">Research collaboration</span> efforts will be focused on promoting scientific advancement in Africa by encouraging increased productivity among Council members and giving visibility to knowledge produced within the Council. The Council will publish Research Agendas that will reflect the pressing needs that the African continent faces, and cultivate a space for its members to collaborate to generate research on these issues. It will also leverage its website, events and upcoming journal, the Pan-African Scientist, to disseminate and elevate research produced by Council members.
                              </p>
                          </div>
                          
                          <div class="flex lg:flex-row flex-col justify-center items-start gap-4">
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></svg>
                              <p class="lg:w-11/12">
                                  <span class="font-bold">Career development</span> efforts will be aimed at developing the skills of younger Council members. For instance, researchers who are primarily publishing their research in local journals will be empowered to aim for international journals, and those publishing in field-specific journals will be empowered to aim for interdisciplinary journals. The Council also hopes to provide mentorship and career development workshops for young scholars.
                              </p>
                          </div>

                          <div class="flex lg:flex-row flex-col justify-center items-start gap-4">
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 10h2v7H5zM11 10h2v7h-2zM22 6L12 1 2 6v2h20zM2 19v2h12.4c-.21-.64-.32-1.31-.36-2H2zM19 12.26V10h-2v3.26zM20 14l-4 2v2.55c0 2.52 1.71 4.88 4 5.45 2.29-.57 4-2.93 4-5.45V16l-4-2zm-.72 7l-2.03-2.03 1.06-1.06.97.97 2.41-2.38 1.06 1.06L19.28 21z"></path></svg>
                              <p class="lg:w-11/12">
                                  <span class="font-bold">Evidenced based policy and public engagement</span> efforts will be aimed at policymakers, the private sector and youth. The Council will bring its members’ research findings to policymakers in an attempt to influence evidence-based policymaking on the African continent. Similarly, it will bring cutting-edge research to the private sector in Africa in an attempt to bolster businesses and industries. Engagement with youth will focus on promoting scientific pursuits among African youth through activities such as scientific competitions and talks by Council researchers.
                              </p>
                          </div>

                          <p class="">
                              More information: 
                              <a class="text-app-dark font-bold" href="https://pasrc.princeton.edu/about/words-founder">https://pasrc.princeton.edu/about/words-founder</a>
                          </p>
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
