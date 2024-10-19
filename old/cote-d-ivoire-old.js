import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { MdAlternateEmail, MdLocalPhone } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
import Button from '../../components/Button';

import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import Support from '../../components/Support';

import parseSlug from '../../hooks/parseSlug';

const courses = [
  {
    title: 'Bachelor of Business Administration',
    description: 'The bilingual Bachelor of Business Administration (BBA) prepares students to thrive in Francophone and Anglophone business contexts. A track in Finance allows students to have top insights in the field. BBA students also benefit from ASE\'s rigorous methodological and interdisciplinary training by taking core titles in Microeconomics, Macroeconomics, Econometrics, Mathematics, Applied Statistics, Software, and African Economic History.'
  },
  {
    title: 'Bachelor of Science in Mathematics, Economics & Statistics',
    description: 'The undergraduate program in Mathematics, Economics and Statistics is structured to provide students an interdisciplinary education. This bilingual degree incorporates a wide variety of topics to ensure students are equipped with theoretical and practical tools necessary in the real world. Key subject areas include Mathematics, Macroeconomics, Microeconomics, Statistics, Computer Science, and other related fields.'
  },
  {
    title: 'Bachelor of Science in Statistics & Computer Science',
    description: 'The bilingual Statistics and Computer Science undergraduate program prepares students for high-level data analysis and work in tech. Students master the theoretical and practical tools that are necessary for today’s digital economy. Key subject areas include Computer Science, Statistics, Mathematics, Macroeconomics, Microeconomics, and other related fields.'
  },
  {
    title: 'Master in Business Administration (MBA)',
    description: 'The advantage of ASE’s MBA program lies in its emphasis on quantitative and analytical methods and its broad range of partnerships with universities and corporations worldwide. These partnerships will provide students of the program unique exposure to the international business environment and the opportunity to work with some of its major players. The program offers two sub-fields: Finance and Marketing & Management.'
  },
  {
    title: 'Master in Mathematics, Economics and Statistics (MMES)',
    description: 'The structure of our MMES program is nearly identical to that of the first two years of a North American doctoral program in Economics. This is a research oriented program designed for students and mid-careers professionals with a bachelor degree in Mathematics, Statistics or Econometrics. This program offers three sub-fields: Econometric Theory, Econometrics and Applied Economics.'
  }
]

const { campus, location, mail, tel } = {
  campus: "ASE - Cote d'Ivoire",
  location: "Abidjan, Cocody Attoban Between 30e Arrondissement and Eglise Saint Bernard",
  mail: "information@africanschoolofeconomics.com",
  tel: ["+(225) 51 32 82 11"],
}


export default function Home() {

  return <>
    <Head>
      <title>The African School of Economics</title>
      <meta name="description" content="The African School of Economics" />
    </Head>

    <Navbar />

    {/* <Intro text="Cote d'Ivoire Campus" bg="/static/img/campus/cote-d-ivoire.jpeg"/> */}

    {/* <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-center'>
      <div className='lg:col-span-5 relative min-h-[400px] isolate'>
        <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
        <Image src="/static/img/campus/cote-d-ivoire.png" layout='fill' objectFit='cover' />
      </div>
      <div className='lg:col-span-7 relative'>
        <p className='text-sm'>
          The African School of Economics is one of the leading graduate institutions in Africa. We offer students a distinctive educational approach that balances theory with professional practice. This balance is reflected in our curriculum, which varies widely among degree programs. ASE educates Africa’s future generation of business and economic leaders by integrating coursework in the social science and the humanities. Our students not only develop analytical skills, but also acquire substantive knowledge in the fields of economics, history and statistics. All ASE courses reflect the multidisciplinary nature of our graduate programs. Renowned scholars and practitioners who have served in leadership positions across four continents present lectures, workshops, academic development seminars, and professional development colloquiums to further enrich our academic community. ASE offers graduate and undergraduate courses at its campuses in Benin and Côte d’Ivoire.
        </p>
      </div>

    </section> */}

    <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-center'>
      <div className='lg:col-span-6 relative space-y-5 lg:space-y-14'>
        <h1 className='text-5xl font-bold'>ASE Abidjan <br /> Degree Course </h1>
        <p className='text-sm'>
          The African School of Economics Cote d'Ivoire Campus offers well tailored economic courses that doesn't just guarantee your great learning experience but also opens up your creative spark.
        </p>
      </div>
      <div className='lg:col-span-6 relative min-h-[500px] isolate'>
        <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
        <Image src="/static/img/slide3.jpg" layout='fill' objectFit='cover' />
      </div>

    </section>

    <section className='lg:py-20 lg:px-16 py-12 px-5 mx-auto bg-[#2E4467] text-white'>
      <div className='max-w-4xl mx-auto'>
        {courses.map(({title, description}, index) => (
          <div key={index} className='max-w-5xl mx-auto space-y-4 border-b border-neutral-400 py-12 last:border-none'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <div className='col-span-7 relative space-y-5 lg:space-y-14'>
              <p className='text-sm'>
                {description}
              </p>
            </div>
            <Link href={`/courses/${parseSlug(title)}`} className="inline-block">

              <Button text="Course Details" className="!px-5 !py-2 !text-sm !bg-white !text-[#2E4467]"/>

            </Link>
          </div>
        ))}

        <div className='max-w-5xl mx-auto space-y-4 border-b border-neutral-400 py-12 text-center last:border-none'>
          <h1 className='text-3xl font-bold'>The Hunter College and ASE Masters in Economics</h1>
          <div className='col-span-7 relative space-y-5 lg:space-y-14'>
            <p className='text-sm'>
              The Hunter and African School Program to Expand Representation in Economics (HASPERE) is a collaborative effort to train and mentor talented Black and other minority students. The program is designed prepare them for acceptance and success in America’s prestigious PhD programs in Economics and Public Policy. The formal coursework will culminate in Masters degrees from <a className='font-bold underline' href="https://hunter.cuny.edu/">Hunter College</a>, CUNY and from the African School in Economics (ASE). In addition, participants will be provided mentoring, workshops and research opportunities, including at partner institutions. Recognizing that some talented students may prefer careers after terminal masters degrees, the program will provide the flexibility to compete for positions at prestigious firms and organizations. Learn more on our partner's <a className='font-bold underline' href="http://econ.hunter.cuny.edu/economics-program/ma-in-economics/haspere/">HASPERE</a> page.
            </p>
          </div>
          <div className='flex justify-center'>
            <Link href="/courses/haspere" className="inline-block">

              <Button text="Course Details" className="!px-5 !py-2 !text-sm !bg-white !text-[#2E4467]"/>

            </Link>
          </div>
        </div>
      </div>

    </section>

    <section className="lg:py-20 lg:px-16 py-12 px-5 bg-[url('/static/img/people/joseph.jpg')] bg-cover bg-right">

      <div className="bg-white p-8 lg:w-2/5 space-y-4">
        <p className='italic text-center'>
          <span className="font-bold text-app-main">"</span>My goal is to learn all of the technically practical and theoretical skills in economics that would enhance my professional goals of becoming an excellent researcher. These hands-on skills would prepare me for greater responsibilities in research and I feel the African School of Economics (ASE) is well positioned to enhance my knowledge.<span className="font-bold text-app-main">"</span>
        </p>
        <div className='text-right space-y-1'>
          <p className='font-bold'>Joseph Kamara</p>
          <p className='text-xs'>B.Sc Student of Statistics & Computer Science</p>
          <p className='font-bold text-xs'>ASE Abidjan, Cote d'Ivoire Campus </p>
        </div>
      </div>
        
    </section>

    <section className='lg:py-20 lg:px-16 py-12 px-5 mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center max-w-4xl mx-auto'>
        <div className='col-span-1'>
          <iframe className='border-0 mx-auto w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.308984954431!2d-3.9826710855525898!3d5.369759736988655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eca59c7d95e1%3A0x72bb841f48f1eb9!2sParoisse%20St%20Bernard%20D&#39;Attoban!5e0!3m2!1sen!2sng!4v1667029246403!5m2!1sen!2sng" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className='col-span-1'>
          <div className='col-span-1 font-[500] space-y-8'>
            <Heading className="!text-black !text-left">{campus}</Heading>

            <div className='flex gap-4'>
                <div className='w-4 flex place-content-center'>
                    <SiGooglemaps className="w-4 h-auto" />
                </div>
                <p className=''>
                    {location}
                </p>
            </div>

            <div className='flex gap-4 hover:text-app-main'>
                <div className='w-4 flex place-content-center'>
                    <MdAlternateEmail className="w-4 h-auto" />
                </div>
                <Link href={`mailto:${mail}`} className='w-full break-words'>

                  {mail}

                </Link>
            </div>

            <div className='flex gap-4 hover:text-app-main'>
                <div className='w-4 flex place-content-center'>
                    <MdLocalPhone className="w-4 h-auto" />
                </div>
                {tel.map((t, index) => (
                    (<Link key={index} href={`tel:${t.replace(/\s|\-|\(|\)/g, '')}`} className=''>

                      {t}

                    </Link>)
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <Support />

    <Footer />
  </>;
}
