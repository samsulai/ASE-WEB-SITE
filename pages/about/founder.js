import Head from 'next/head';
import Image from 'next/image';
import Footer from '../../components/Footer';

import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
import Support from '../../components/Support';
import { SiApplepodcasts } from 'react-icons/si';
import { RiArticleFill } from 'react-icons/ri';


export default function Founder() {

  return (
    <>
      <SEO
        title="Professor Leonard Wantchekon"
        description="Leonard Wantchekon is the Founder and President of the African School of Economics."
        image="/static/img/professor-wantchekon-hero.jpg"
      />

      <Navbar />

      <Intro text="Meet Our President" bg="/static/img/professor-wantchekon-hero.jpg"/>

      <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 '>

        <div className='lg:col-span-5  relative min-h-[500px] isolate'>
          
          <div
      className="rounded-md"
      style={{
        backgroundImage: "url('/static/img/people/prof-leonard-wantchekon.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        minHeight: "500px",
      }}
    ></div>
        </div>

        <div className='lg:col-span-7 relative space-y-5 lg:space-y-14'>
          <h1 className='text-3xl font-bold' style={{ fontFamily: 'Playfair Display' }}>Professor Leonard Wantchekon </h1>
          <div className='text-sm space-y-4'>
            <p className="text-base" style={{ fontFamily: 'Inter' }}>Leonard Wantchekon is the Founder and President of the African School of Economics. He is also a Professor of Politics, International Affairs and Economics (affiliated faculty) at Princeton University.  Prior to joining Princeton University, he was on the faculty of New York University (2001-2011), and Yale University (1995-2001). He received his Ph.D. in Economics from Northwestern University (1995) and his M.A. in Economics from Laval University and University of British Columbia (1992).</p>

            <p className="text-base" style={{ fontFamily: 'Inter' }}>His research is broadly focused on Political and Economic Development, particularly in Africa. His specific interests include topics such as democratization, clientelism and redistributive politics, resource curse, and the long-term social impact of historical events.  He is the author of numerous publications in leading academic journals, including “Education and Human Capital Externalities: Evidence from Colonial Benin” (With Natalija Notva and Marko Klansja) in the Quarterly Journal of Economics (2015); “The Slave Trade and the Origins of Mistrust in Africa” (with Nathan Nunn), in The American Economic Review (2011); “The Paradox of ‘Warlord’ Democracy: A Theoretical Investigation,” in the American Political Science Review (2004); “Clientelism and Voting Behavior: A Field Experiment in Benin,” World Politics (2003) as well as “Electoral Competition under the Threat of Political Unrest” (with Matthew Ellman) in the Quarterly Journal of Economics (2000).</p>

            <p className="text-base" style={{ fontFamily: 'Inter' }}>Professor Wantchekon is a member of the American Academy of Arts and Sciences. He served as the Secretary of the American Political Science Association (2008-2009) and on the Ibrahim Index Technical Committee (2009-2013).  He is also a core partner director at the Afrobarometer Network. Most recently, he joined the Executive Committee of the International Economic Association.</p>

            <p className="text-base" style={{ fontFamily: 'Inter' }}>For a full profile of Professor Wantchekon, please visit the IMF website for a Finance & Development article entitled <a className='text-app-dark font-bold' href="http://www.imf.org/external/pubs/ft/fandd/2016/12/people.htm">“Ground Breaker.”</a>
            </p>

            <p className="text-base" style={{ fontFamily: 'Inter' }}>Read Wantchekon’s <a className='text-app-dark font-bold' href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2018/02/Wantchekon-CV-2018.pdf">CV here</a></p>

            <div className='space-y-2'>
              <p className='font-bold text-lg' style={{ fontFamily: 'Playfair Display' }}>Listen to Prof. Watchekon's Podcast:</p>
              <iframe 
                title="Embed Player"
                width="100%"
                height="120px"
                src="https://embed.acast.com/61034f113fc854001a0282f0/62b3e2e7110acf0012fef2ab"
                scrolling="no"
                frameBorder="0"
                style={{border:"none", overflow: "hidden"}}
              ></iframe>
            </div>

            <div className='hidden flex items-center gap-4'>
              <SiApplepodcasts className="text-lg shrink-0" />
              <div className=''>
                <p className='font-bold text-lg' style={{ fontFamily: 'Playfair Display' }}>Listen to Prof. Watchekon's Podcast:</p>
                <a 
                  className='text-xs text-app-dark underline'
                  href='https://shows.acast.com/the-new-bazaar/episodes/the-life-and-work-of-leonard-wantchekon'
                  target='_blank'
                  rel="noreferrer"
                >
                  https://shows.acast.com/the-new-bazaar/episodes/the-life-and-work-of-leonard-wantchekon
                </a>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <RiArticleFill className="text-xl shrink-0" />
              <div className=''>
                <p className='font-bold text-lg' style={{ fontFamily: 'Playfair Display' }}>Read Articles about Prof. Watchekon's:</p>
                <a 
                  className='text-base text-app-dark underline'
                  href='https://www.forbes.com/sites/adriennegibbs/2022/10/28/the-woman-kings-official-historian-leonard-wantchekon-talks-controversy-and-history/?sh=291b52152c46'
                  target='_blank'
                  rel="noreferrer"
                >
                  https://www.forbes.com/sites/adriennegibbs/2022/10/28/the-woman-kings-official-historian-leonard-wantchekon-talks-controversy-and-history/?sh=291b52152c46
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>

      

      <Footer />
    </>
  )
}