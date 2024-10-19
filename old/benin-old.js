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
    title: 'Bachelor of Marketing & Management',
    description: 'The bilingual undergraduate degree in Marketing and Management gives students the keys to promote products and to lead projects and organizations. Subjects include Financial Mathematics, General Accounting, Financial Analysis, Management Accounting, Marketing Software, Market Research, and Introduction to Entrepreneurship.'
  },
  {
    title: 'Bachelor of Science in Economics & Statistics',
    description: 'The undergraduate program in Mathematics, Economics and Statistics is structured to provide students with an interdisciplinary education. This bilingual degree equips students with theoretical and practical tools necessary in the real world. Key subject areas include Mathematics, Macroeconomics, Microeconomics, Statistics, Computer Science, and other related fields..'
  },
  {
    title: 'Bachelor of Science in Finance & Accounting',
    description: 'The Finance & Accounting undergraduate program is a technical major. Students learn quantitative and analytical methods that can be applied in a professional setting. Key subject areas include Accounting, Finance, Management, Marketing, and related fields.'
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
    title: 'Master in Development Studies (MDS)',
    description: 'The Master in Development Studies is not accepting applications at this time. This 2-year program offers academic training in two sub-fields: (1) Economic History, (2) Sociology and Political Science. It is offered only to full time students and provides foundational economics training to students with bachelor degrees in History, Anthropology, Sociology, Philosophy, and Legal Studies.'
  },
  {
    title: 'Master in Mathematics, Economics and Statistics (MMES)',
    description: 'The structure of our MMES program is nearly identical to that of the first two years of a North American doctoral program in Economics. This is a research oriented program designed for students and mid-careers professionals with a bachelor degree in Mathematics, Statistics or Econometrics. This program offers three sub-fields: Econometric Theory, Econometrics and Applied Economics.'
  },
  {
    title: 'Master in Public Administration (MPA)',
    description: 'The Master in Public Administration is not accepting applications at this time. ASE’s MPA curriculum features rigorous training in Statistics and Economics as well as tight connections with government and international agencies. The two subfields are Public Management, and International Relations.'
  },
  {
    title: 'PhD Programs',
    description: `The PhD program offered by the African School of Economics provides a North American type of doctoral training for students who have successfully completed their MMES, MBA or MPA degrees. The program also accepts candidates who already hold a Master’s Degree from another institution.`
  }
]

const { campus, location, mail, tel } = {
  campus: "ASE - Benin",
  location: "Abomey-Calavi, Arconville Route de l’hôpital de zone 02 BP 372 Cotonou, Benin",
  mail: "information@africanschoolofeconomics.com",
  tel: ["+(229) 945 50 706","+(229) 970 00 552"],
}


export default function Home() {

  return <>
    <Head>
      <title>The African School of Economics</title>
      <meta name="description" content="The African School of Economics" />
    </Head>

    <Navbar />

    {/* <Intro text="Benin Campus" bg="/static/img/campus/cotonou.jpg"/> */}

    {/* <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-center'>
      <div className='lg:col-span-5 relative min-h-[400px] isolate'>
        <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
        <Image src="/static/img/ase.jpg" layout='fill' objectFit='cover' />
      </div>
      <div className='lg:col-span-7 relative'>
        <p className='text-sm'>
          The African School of Economics is one of the leading graduate institutions in Africa. We offer students a distinctive educational approach that balances theory with professional practice. This balance is reflected in our curriculum, which varies widely among degree programs. ASE educates Africa’s future generation of business and economic leaders by integrating coursework in the social science and the humanities. Our students not only develop analytical skills, but also acquire substantive knowledge in the fields of economics, history and statistics. All ASE courses reflect the multidisciplinary nature of our graduate programs. Renowned scholars and practitioners who have served in leadership positions across four continents present lectures, workshops, academic development seminars, and professional development colloquiums to further enrich our academic community. ASE offers graduate and undergraduate courses at its campuses in Benin and Côte d’Ivoire.
        </p>
      </div>

    </section> */}

    <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-center'>
      <div className='lg:col-span-6 relative space-y-5 lg:space-y-14'>
        <h1 className='text-5xl font-bold'>ASE Cotonou <br /> Degree Course </h1>
        <p className='text-sm'>
          The African School of Economics Benin Campus offers well tailored economic courses that doesn't just guarantee your great learning experience but also opens up your creative spark.
        </p>
      </div>
      {/* <div className='lg:col-span-6 relative min-h-[500px] lg:translate-y-20 isolate'> */}
      <div className='lg:col-span-6 relative min-h-[500px] isolate'>
        <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
        <Image src="/static/img/fees-and-financial-aid.jpg" layout='fill' objectFit='cover' />
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

    <section className="lg:py-20 lg:px-16 py-12 px-5 bg-[url('https://benin.africanschoolofeconomics.com/wp-content/uploads/2018/06/IMG_3851.jpg')] bg-cover bg-right">

      <div className="bg-white p-8 ml-auto lg:w-2/5 space-y-4">
        <p className='italic text-center'>
          <span className="font-bold text-app-main">"</span>After obtaining my degree in Business Management and acquiring various professional experiences, I decided to enroll in the MBA program at ASE in 2017 to diversify my skills and further my knowledge, particularly in empirical research methods.<span className="font-bold text-app-main">"</span>
        </p>
        <div className='text-right space-y-1'>
          <p className='font-bold'>Patel Gbedjemaiho</p>
          <p className='text-xs'>B.Sc Student of Business Management</p>
          <p className='font-bold text-xs'>ASE Cotonou, Benin Campus </p>
        </div>
      </div>
        
    </section>

    <section className='lg:py-20 lg:px-16 py-12 px-5 mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center max-w-4xl mx-auto'>
        <div className='col-span-1'>
          <iframe className='border-0 mx-auto w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4062582.8214103826!2d2.6738173031030072!3d6.081282862132333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a903fff7353b%3A0xa1365a6e55f92ad8!2sAfrican%20School%20of%20Economics!5e0!3m2!1sen!2sng!4v1667020056445!5m2!1sen!2sng" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
