import Head from 'next/head';
import Image from 'next/image';
import Footer from '../../components/Footer';

import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
import Support from '../../components/Support';

const history = [
  {
    year: "2021",
    story: [
      {
        image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2017/11/2014.jpg",
        text: "ASE launched a joint Master’s degree program (HASPERE) with New York City University in 2021",
      },
      {
        image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2017/11/2014.jpg",
        text: "The ASE Abuja Campus was set up 2021",
      },
    ]
  },
  {
    year: "2020",
    story: [
      {
        image: "/static/img/PASRC.jpg",
        text: "The COVID-19 pandemic has demonstrated that scientific research is a vital human survival strategy leading to the foundation of the Pan-African Scientific Research Council (PASRC) in 2020. The PASRC’s mission is to bring together a network of African and Africa-focused scientists, economists and professionals who will lead the way in producing world-class research and influencing evidence-based policymaking on the African continent.",
      },
      {
        image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2017/11/2014.jpg",
        text: "ASE launched the second campus in Abidjan, Cote d’lvorie in 2020",
      },
    ]
  },
  {
    year: "2018",
    story: [
      {
        image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2018/07/ES-logo.jpg",
        text: "ASE hosts the Africa Meeting of the Econometric Society in Cotonou from July 12-14, featuring 2007 Nobel Laureate Roger Myerson",
      }
    ]
  },
  {
    year: "2017",
    story: [
      {
        image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2017/11/2014.jpg",
        text: "ASE promotes high school mathematics by inviting Animath to host a summer school and supporting the launch of the Benimath-Lica Club",
      },
      {
        image: "",
        text: "ASE holds its annual Opening Ceremony at the newly-constructed campus in Abomey-Calavi",
      },
      {
        image: "",
        text: "ASE announces launch of the Institute for Finance and Management (IFM)",
      },
    ]
  },
  {
    year: "2016",
    story: [
      {
        image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2017/11/2015-new.jpg",
        text: "The Second Summer Institute for Economic Research (SIER)",
      },
      {
        image: "",
        text: "ASE launches its new Institute for African Studies",
      },
      {
        image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2017/11/2016-new.jpg",
        text: "ASE partners with Princeton University’s Julis-Rabinowitz Center for Public Policy and Finance (JRCPPF)",
      },
    ]
  },
  {
    year: "2015",
    story: [
      {
        image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2017/11/2015-2016.jpg",
        text: "ASE introduces a Certificate Program in Impact Evaluation",
      },
      {
        image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2017/11/2005.jpg",
        text: "Afrobarometer Summer School",
      },
      {
        image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2017/11/2005.jpg",
        text: "First Summer Institute for Economic Research (SIER), sponsored by the Open Society Initiative for West Africa (OSIWA)",
      },
      {
        image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2017/11/2015.jpg",
        text: "ASE and the Centre de Recherche en Économie du Développement (CRED) organise a joint workshop on Development Economics",
      },
    ]
  },
  {
    year: "2014",
    story: [
      {
        image: "",
        text: "The first cohort of students enrolls at the African School of Economics",
      }
    ]
  },
  {
    year: "2013",
    story: [
      {
        image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2017/11/2013-new.jpg",
        text: "First summer school for the Empirical Political Economy Network (EPEN) is hosted by IREEP, with a focus on “Democracy and Governance”",
      }
    ]
  },
  {
    year: "2006 - 2009",
    story: [
      {
        image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2017/11/2006-to-2009.jpg",
        text: "74 students graduate from IERPE’s Masters of Public Economics and Applied Statistics (MEPSA) program",
      }
    ]
  },
  {
    year: "2005",
    story: [
      {
        image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2017/11/2005.jpg",
        text: "IERPE becomes the Core Partner of Afrobarometer in Francophone Africa",
      }
    ]
  },
  {
    year: "2004",
    story: [
      {
        image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2017/11/20041.jpg",
        text: "Leonard Wantchekon founds the Institute of Empirical Research in Political Economy (IERPE)",
      }
    ]
  },
]


export default function History() {

  return (
    <>

      <SEO
        title="ASE's History"
        description="ASE's Journey"
        image="/static/img/bg.png"
      />

      <Navbar />

      <Intro text="Our Journey" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693755513/banners/History_Banner_ch1soz.png"/>

      {/* Vision */}
      <section id="vision" className=''>

        {history.map(({year, story}, index) => {

          return ((index+1) % 2 !== 0) ?
            <div key={index} className='lg:flex block lg:divide-x-2 divide-app-main'>
              <div className="lg:w-1/2"></div>
              <div className='lg:w-1/2 space-y-8 py-8'>
                <h1 className='line-left' style={{ fontFamily: 'Inter' }}>{year}</h1>

                {story.map(({image,text}, index) => (
                  <div key={index} className='max-w-[17rem] mx-auto'>
                    {image && <div className='relative overflow-hidden w-full max-w-12 h-12 mx-auto'>
                      <Image src={image} layout='fill' objectFit='contain' />
                    </div>}
                    <div className=''>
                      <p className='text-center text-base py-2' style={{ fontFamily: 'Inter' }}>
                        {text}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div> 
            : 
            <div key={index} className='lg:flex block lg:divide-x-2 divide-app-main'>
              <div className='lg:w-1/2 space-y-8 py-8'>
                <h1 className='line-right' style={{ fontFamily: 'Inter' }}>{year}</h1>

                {story.map(({image,text}, index) => (
                  <div key={index} className='max-w-[17rem] mx-auto'>
                    {image && <div className='relative overflow-hidden w-full max-w-12 h-12 mx-auto'>
                      <Image src={image} layout='fill' objectFit='contain' />
                    </div>}
                    <div className=''>
                      <p className='text-center text-base py-2' style={{ fontFamily: 'Inter' }}>
                        {text}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
              <div className="lg:block hidden lg:w-1/2"></div>
            </div>
          
        })}


        
        {/* <div className='lg:flex block lg:divide-x-2 divide-app-main'>
          <div className="lg:block hidden lg:w-1/2"></div>
          <div className='lg:w-1/2 space-y-8 py-8'>
            <h1 className='line-left'>2016</h1>

            <div className='max-w-[17rem] mx-auto'>
              <div className='relative w-full h-36 mx-auto'>
                <Image src="/static/img/ase-hall.jpg" layout='fill' objectFit='cover' />
              </div>
              <div className=''>
                <p className='text-center text-sm py-2'>
                  The Second Summer Institute for Economic Research (SIER)
                </p>
              </div>
            </div>
          </div>
        </div> */}

      </section>

     

      <Footer />
    </>
  )
}
