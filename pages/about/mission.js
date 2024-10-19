import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillPlusCircle } from 'react-icons/ai';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';

import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import PopupLink from '../../components/PopupLink';
import SEO from '../../components/SEO';
import Support from '../../components/Support';

const values = [
  {
    name: 'Excellence in teaching',
    description: 'We deliver a state-of-the-art curriculum to our students, equipping them with the foundations to be competitive and succeed at the international level.',
    highlight: "ASE partners with the Wheeler Institute for the ‘African History through the lens of Economics’ lecture series.",
    highlight_image: "/static/img/404.jpg",
  },
  {
    name: 'Excellence in research',
    description: 'Cutting-edge applied research is our hallmark. We demonstrate excellence in publishing in top-tier journals, and in disseminating our findings at global conferences.',
    highlight: "Alum Gaetan Nandong teaches and conducts research at New York University.",
    highlight_image: "/static/img/404.jpg",
  },
  {
    name: "Pan-African & International Connections",
    description: 'Faculty, staff, and students come from all over Africa and include members of the global African diaspora. The ASE community is committed to developing a strong pan-African identity by embracing international connections',
    highlight: "HASPERE student Tiffany Fermin is working at the Federal Reserve of New York.",
    highlight_image: "/static/img/404.jpg",
  },
  {
    name: "Entrepreneurship",
    description: 'We foster socially conscious, innovative entrepreneurs who contribute to African prosperity by taking an active role in it.',
    highlight: "Alumni Joseph Kamara and G. Dackermue Dolo are co-founders of Liberan survey firm Y.",
    highlight_image: "/static/img/404.jpg",
  },
  {
    name: "Service to Society",
    description: 'ASE faculty, students, and alumni wish to give back to African societies by engaging in policy debate and policy making.',
    highlight: "Alum X works on global macrofinancial policy at the International Monetary Fund",
    highlight_image: "/static/img/404.jpg",
  },
]


export default function Vision() {

  const handleShowValues = (e) => {
    let parent = e.target;
    if(e.target.nodeName !== "DIV") parent = e.target.parentElement;
    if(e.target.nodeName == "path") parent = e.target.parentElement.parentElement;

    if(parent.nextElementSibling.style.maxHeight === "300px"){
      return parent.nextElementSibling.style.maxHeight = '0px';
    }

    return parent.nextElementSibling.style.maxHeight = "300px"; 
  }

  const { t } = useTranslation('vision');


  return (
    <>
      <SEO
        title="ASE's Vision"
        description="ASE's Vision"
        image="/static/img/bg.png"
      />

      <Navbar />
<Intro text="Mission & Values" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693755507/banners/mission_values_banner_nxnot5.png"/>
      {/* <Intro bg="/static/img/study-at-ase.jpg">
        The ASE vision<br />
        we share...
      </Intro> */}

      

      {/* Vision */}
      {/* <section id="vision" className='bg-white lg:py-20 lg:px-16 py-12 px-5'>

          <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8 max-w-5xl mx-auto'>

            <div className='lg:col-span-5'>
              <div className='relative min-h-[400px] isolate'>
                <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
                <Image src="/static/img/students-together.jpg" layout='fill' objectFit='cover' />
              </div>
            </div>

            <div className='lg:col-span-7 space-y-8'>
              <h2 className="text-3xl lg:text-4xl font-bold text-left text-black mb-4 font-[500]"
  style={{ fontFamily: 'Playfair Display' }}>Mission</h2>
              <p className="text-base" style={{ fontFamily: 'Inter' }}>Economic development results, at least in part, from the development of innovative economic ideas. The process of generating these ideas is invariably endogenous, and mostly homegrown. Africa is no different. Debates over the soundness of economic policy, the role of institutions, and the impact of development interventions need to incorporate more highly trained African researchers. To this end, the African School of Economics strives to provide young researchers with not only rigorous methodological training, but also with the opportunity to actively apply this training to current social problems via close collaborations with government agencies, international organizations, and businesses. The university’s multi-disciplinary curricula, intertwining modern economic thought with African history, enables students to gain a dynamic understanding of the processes and events that shape and continue to shape development across the continent. We hope that the combination of this training, paired with ASE’s open, collaborative research environment, will leave students with the necessary skills and strong commitment to join a community of scholars actively contributing to the exchange of knowledge regarding African development.</p>
            </div>

          </div>

      </section> */}


      {/* <section className='lg:py-20 lg:px-16 lg:pr-5 py-8 px-5 mx-auto overflow-auto text-sm'>

        <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8 max-w-5xl mx-auto'>

          <div className='lg:col-span-7 space-y-8'>
            <Heading className="!text-left !text-app-dark">Mission Statement</Heading>
            <p className="text-sm">
              The African School of Economics (ASE) is a Pan-African University dedicated to producing cutting-edge  research in Economics, Finance and Public Policy as well as world class  social scientists and business leaders on the continent. 
              <br /><br />
              ASE has three campuses in Benin Republic, Côte d'Ivoire, and Nigeria, and a joint Master's degree program in the United States. We have  established a reputation in producing some of most promising African economists and policy analysts prepared to tackle the continent's pressing challenges 
            </p>

          </div>

        </div>


      </section> */}


        <section className=' text-black lg:py-20 lg:px-16 py-12 px-5'>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-14">
            <div className='lg:col-span-7 relative min-h-[200px] lg:min-h-[400px] isolate'>
              {/* <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div> */}
              <Image className="rounded-md" src="https://res.cloudinary.com/duczlqzws/image/upload/v1690302876/miv-transformed_ihikmo.webp" quality={75} layout='fill' objectFit='cover' />
            </div>

            <div className='lg:col-span-5 relative space-y-5 lg:space-y-8'>
              <h1 className='text-2xl lg:text-4xl font-bold' style={{ fontFamily: 'Playfair Display' }}>Mission</h1>
              <div className='text-base lg:text-base space-y-4'>
                <p className="text-lg " style={{ fontFamily: 'Inter' }}>
                  Our aim is to be at the frontier of research in political economy, economic history, development economics, finance, and education,  We are creating the next generation of African scholars and development practitioners, through excellence in teaching and research, informed by African perspectives.
                </p>
              </div>
            </div>
          </div>

        </section>

      {/* Values */}
      <section id="vision" className='lg:py-20 lg:px-4 py-8 px-5'>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          
          <div className='space-y-8 p-4'>
            <h2 className="text-3xl lg:text-4xl font-bold text-left text-black mb-4 font-[500]"
  style={{ fontFamily: 'Playfair Display' }}>Our Core Goals</h2>
            <ol className="text-base list-decimal list-inside marker:font-bold space-y-8" style={{ fontFamily: 'Inter' }}>
              <li>
                At all international gatherings and discourses on African
                development. ASE is a prominent presence. ASE scholars are
                producing cutting edge economic research and giving voice to the
                African perspective on pressing global development issues,
              </li>

              <li>
                ASE will be recognized globally as the academic leader on
                economic development issues such as Microeconometries applied
                to historical events, educational inequality, and social mobility.
              </li>

              <li>
                ASE Will have a Significant presence at major development
                organizations globally, as well as in government and the private
                sector,
              </li>

              <li>
                Through innovative entrepreneurial ventures and applied research,
                ASE graduates will have created scores Of businesses that are
                solving real problems across the continent and generating massive
                employment opportunities for African youth,
              </li>

              <li>
                ASE will have embraced the young African diaspora (example,
                from the U.S., Brazil, Latin America and the Caribbean),
                positioning them globally to become renowned scholars and
                leaders in government and the private sector,
              </li>
            </ol>
          </div>

          <div className=''>
            <div className='space-y-8 p-4'>
              <h2 className="text-3xl lg:text-4xl font-bold text-left text-black mb-4 font-[500]"
  style={{ fontFamily: 'Playfair Display' }}>Our Values</h2>

              {values.map(({name, description, highlight, highlight_image, highlight_link}, index) => (
                <div key={index} className='space-y-2'>
                  <div className='flex gap-4 items-center'>
                    {/* <AiFillPlusCircle className='text-white text-lg' /> */}
                    <p className='font-bold text-lg' style={{ fontFamily: 'Inter' }}>{name}</p>
                  </div>
                  <div className='duration-200 space-y-2'>
                    <p className='text-base' style={{ fontFamily: 'Inter' }}>
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>

    

      <Footer />
    </>
  )
}
