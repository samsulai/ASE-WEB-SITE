import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GiArchiveResearch } from 'react-icons/gi';

import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Support from '../../components/Support';
import Intro from '../../components/Intro';
import { research_institutes } from '../../data';

import 'animate.css';
import SEO from '../../components/SEO';

export default function Home() {

    const router = useRouter();
    const { slug } = router.query;
    const base = "https://benin.africanschoolofeconomics.com";

    const institute = research_institutes.filter(r => r.acronym === 'IAS')[0];

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

                  <div className='bg-white p-4 lg:p-8 text-base space-y-4 clear-both' dangerouslySetInnerHTML={{
                      __html: `
                          <p>IAS offers qualitative research in African history, anthropology, and sociology. The institute promotes African culture by teaching African languages, performing arts, and hosting literary events. IAS plays a key role in the academic program as African history is core to the ASE curriculum.</p>
                          <p>IAS projects include:</p>
                          <h4 class="font-bold">On the Trails of the Amazons of the Dahomey Kingdom</h4>
                          <div class="lg:float-left lg:w-48 w-full h-auto mr-3 mb-3 group overflow-hidden"><img class="group-hover:scale-110 duration-200"" src="/static/img/ase-aid-woman-king.jpg"></div>
                          <p>IAS is conducting a study focused on the history of the Amazons of the Dahomey Kingdom, a unique institution in global military history</p>
                          <p>The brave exploits of these warrior women were celebrated in the box-office hit film “Black Panther” and “The Woman King”. But where do they really come from? How were they trained? How were they organized? Better yet, what is their social history? How have they impacted the status of women in the communities where they lived during their military service?</p>
                          <p>With a team of historians from ASE, Professor Léonard Wantchékon retraced the steps of one of their warriors who served the kinds Guézo (1818-1858), Glèlè (1858-1889) et Béhanzin (1889-1894), in the documentary ON THE TRAILS OF THE AMAZONS OF THE DAHOMEY KINGDOM (Youtube).</p>
                          <p><div class="video-container mx-auto"><iframe loading="lazy" title="Sur les Traces des Amazones de Danxomè" width="100%" height="300" src="https://www.youtube.com/embed/Ug_FWSkDYYo?feature=oembed&amp;amp;wmode=transparent" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></p>
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
