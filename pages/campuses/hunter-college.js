import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillPlusCircle } from 'react-icons/ai';
import { MdAlternateEmail, MdLocalPhone } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
import Button from '../../components/Button';

import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
import Support from '../../components/Support';


const values = [
    {
        "name": "What makes the Hunter and ASE Masters in Economics different?\n",
        "description": "The Hunter and African School Program to Expand Representation in Economics (HASPERE) is not your standard pre-doctoral program. It is a master’s degree with a cohort environment and opportunities for mentorship and research. Faculty participation is broad, with scholars coming from top institutions around the country. Moreover, this program is flexible enough to offer an intensive two-year option and to accommodate those who prefer a year-long terminal master’s degree.\n"
    },
    {
        "name": "How do I apply?\n",
        "description": "Please visit the Hunter College Graduate Admissions page to learn about the Hunter College admissions process and to submit your application. Applicants should mention in their statement of purpose that they are interested in the Hunter and African School Program. Applicants should also apply to African School of Economics by sending the same materials to African School of Economics through an email to haspere@africanschoolofeconomics.com.\n"
    },
    {
        "name": "What is the deadline to apply? \n",
        "description": "Applications are being accepted now, with a deadline of April 1, 2021 for both domestic and international students. Admissions decisions will be made on a rolling basis."
    },
    {
        "name": "When would I begin my studies?\n",
        "description": "The first cohort of students will begin their studies in the Fall 2021 semester. Immediately prior to the start of school, incoming students will complete a two-week Math Camp."
    },
    {
        "name": "Do I need to be Black or a member of a U.S. minority group to apply?\n",
        "description": "While the program is targeted toward underrepresented minorities and toward Black students in particular, students of all demographic backgrounds and nationalities may enroll in the Hunter and African School program. "
    },
    {
        "name": "How long is the program?\n",
        "description": "This program builds on  Hunter College’s one-year M.A. in Economics. The Hunter and African School of Economics degree program features an enriched curriculum in the first year, with additional courses, camps and workshops. Though students on Hunter’s regular track may earn a master’s in one year, those who remain in the HASPERE program will complete a second year of study. In the second year, students will write a thesis, may study abroad at one of African School of Economics’ campuses in Africa, and will receive mentoring and coaching on the Ph.D. application process."
    },
    {
        "name": "Where will I complete my studies?\n",
        "description": "The majority of the Hunter and African School program will take place on the Hunter College campus in New York City. Students will be eligible for exchanges to African School of Economics’ campuses in Benin or Côte d’Ivoire. These exchanges could take place during the academic year or the summer between the first and second years of study."
    },
    {
        "name": "What is the tuition structure?\n",
        "description": "For New York State residents, first year costs $15,000 and second year costs $7,500. For out-of-state residents, the first year costs $22,875 and second year costs $8,625."
    },
    {
        "name": "What sorts of financial aid is available?\n",
        "description": "In addition to the standard Graduate School Financial Aid offerings at Hunter College, there will be a limited number stipends offered specifically for African Americans and possibly for other qualifying individuals."
    },
    {
        "name": "Which institution will grant my degree?\n",
        "description": "Graduates of the Hunter and African School Program will receive a Master in Economics degree from Hunter College, and a Master in Economics from African School of Economics."
    },
    {
        "name": "Why is HASPERE important?\n",
        "description": "Currently, only 3% of the Economics faculty in top public universities is Black. HASPERE aims to change this by building a robust pipeline for the next generation of diverse academic leaders. HASPERE also allows flexibility for enrolled students, allowing students to opt instead into a one-year terminal masters."
    }
]



export default function Home() {

  const handleShowValues = (e) => {
    let parent = e.target;
    if(e.target.nodeName !== "DIV") parent = e.target.parentElement;
    if(e.target.nodeName == "path") parent = e.target.parentElement.parentElement;

    if(parent.nextElementSibling.style.maxHeight === "300px"){
      return parent.nextElementSibling.style.maxHeight = '0px';
    }

    return parent.nextElementSibling.style.maxHeight = "300px"; 
  }


  return <>
    <Head>
      <title>The African School of Economics</title>
      <meta name="description" content="The African School of Economics" />
    </Head>

    <SEO
      title="Hunter College"
      description="Hunter College"
      image="/static/img/research-institute.jpg"
    />

    <Navbar />

    <Intro bg="https://res.cloudinary.com/duczlqzws/image/upload/v1694162924/banners/haspere_j9s2tj.png" cover="#5f259f">
      Hunter College<br />Degree
    </Intro>

    <section className='lg:py-20 lg:px-16 py-12 px-5'>
      <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-center'>

        <div className='relative col-span-5'>
          <div className='relative w-full h-44'>
            <Image src="/static/img/campus/hunter-logo.png" layout="fill" objectFit="contain"/>
          </div>
        </div>
        <div className='col-span-7 space-y-4 text-base'>
          {/* <p className=""><a href="https://hunter.cuny.edu/news/a-crowning-achievement-for-hunter/?news-feed=spotlight&source=/news/" className="font-bold text-[#5f259f] hover:underline">Hunter College</a> and the <a href="https://benin.africanschoolofeconomics.com" className="font-bold text-[#5f259f] hover:underline">African School of Economics</a> invite applications for admission to their Masters in Economics for the {new Date().getFullYear() -1}/{new Date().getFullYear()} academic year.</p> */}
          <p className="">This Masters is part of the <strong>Hunter African School Program to Expand Representation in Economics (HASPERE)</strong>, a collaborative initiative between to the two schools that aims at training and mentoring talented Black and other minority students. The program is designed to prepare them for acceptance and success in America’s prestigious PhD programs in Economics and Public Policy. Recognizing that some talented students may prefer careers after terminal master’s degrees, the program will provide the flexibility to compete for positions at prestigious firms and organizations.</p>

          <p className='italic'>
            A bold initiative to boost diversity and inclusion in graduate education <br/>

          </p>
          <Link
            href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/06/New-ASE-CI-Brochure-Final-2020.pdf"
            className='inline-block'>

            <Button className="!bg-[#5f259f] border-2 border-[#5f259f] !text-white !text-xs lg:!py-2 lg:!px-4 hover:!bg-transparent hover:!text-[#5f259f]" text="Download Program Flyer"></Button>

          </Link>
        </div>

      </div>
    </section>

    <section className='lg:py-20 lg:pl-16 lg:pr-0 py-8 px-5'>
      <div className=' mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-center'>


        <div className='relative lg:col-span-6 lg:order-2'>
          <div className='relative w-full h-96 shadow-2xl'>
            <Image src="https://s29068.pcdn.co/wp-content/uploads/accepted-students-1600.jpg" layout="fill" objectFit="cover"/>
          </div>
        </div>
        <div className='lg:col-span-6 space-y-4 text-base lg:pl-12'>
          <p className="">For nearly 150 years, Hunter has opened doors of opportunity for students from all walks of life and racial / ethnic backgrounds, providing an outstanding education in a diverse environment. The African School of Economics, while considerably younger, has already a solid reputation for excellence in training and research in economics, and  has achieved  great success in placing talented African students in top Ph.D. programs. Students in the HASPERE program, anchored by faculty at Hunter and ASE, will also be taught and mentored by leading scholars from Columbia, Harvard, Johns Hopkins, Michigan, Princeton and Yale (see the list below). The formal coursework will culminate in Masters degrees from Hunter College, CUNY and from the African School in Economics (ASE). In addition, participants will receive workshops and research opportunities, including at partner institutions. The curriculum can be completed in 2 years – see the course map below.</p>
          <p className="">To apply, follow instructions on the <a href="http://www.hunter.cuny.edu/graduateadmissions" className="font-bold text-[#5f259f] hover:underline">Hunter College Graduate Admissions</a> page to apply for the Masters in Economics and mention HASPERE in your essay. In addition, send a copy of your full application to <a href="mailto:haspere@africanschoolofeconomics.com" className="font-bold text-[#5f259f] hover:underline">haspere@africanschoolofeconomics.com</a>.</p>
        </div>

      </div>
    </section>


    <section className='lg:py-20 lg:px-16 py-12 px-5 space-y-4'>


      <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-start'>
        <Heading className="lg:col-span-12 !text-left !text-[#5f259f] after:block after:mt-4 after:w-1/3 lg:after:w-1/12 after:h-[2px] after:bg-[#5f259f]">Participating Faculty</Heading>

        <div className='col-span-4 text-base space-y-4'>

          <p className=''>Temisan Agbeyegbe (Hunter)</p>
          <p className="">Mark Aguiar (Princeton)</p>
          <p className="">Natalie Bachas (Princeton)</p>
          <p className="">Karna Basu (Hunter)</p>
          <p className="">Dirk Bergmann (Yale)</p>
          <p className="">Renee Bowen (UCSD)</p>
          <p className="">Alessandra Cassela (Columbia)</p>
          <p className="">Mattias Cattaneo (Princeton)</p>
          <p className="">Ying Chen (Johns Hopkins)</p>
          <p className="">Jonathan Conning (Hunter)</p>

        </div>
        <div className='col-span-4 text-base space-y-4'>

          <p className="">Janet Currie (Princeton)</p>
          <p className="">Partha Deb (Hunter)</p>
          <p className="">Monica Deza (Hunter)</p>
          <p className="">Ian Heffernan (ASE)</p>
          <p className="">Bo Honoré (Princeton)</p>
          <p className="">Atif Mian (Princeton)</p>
          <p className="">Karim Nchare (ASE)</p>
          <p className="">Gábor Nyéki (ASE)</p>
          <p className="">Nathan Nunn (Harvard)</p>

        </div>
        <div className='col-span-4 text-base space-y-4'>

          <p className="">Jessica Van Parys (Hunter)</p>
          <p className="">Sangeeta Pratap (Hunter)</p>
          <p className="">Bernard Salanie (Columbia)</p>
          <p className="">Mahlet Tadesse (Georgetown)</p>
          <p className="">Lucienne Talba (ASE)</p>
          <p className="">Rocio Titiunik (Princeton)</p>
          <p className="">Leonard Wantchekon (Princeton)</p>
          <p className="">Ebonya Washington (Yale)</p>
          <p className="">Dean Yang (Michigan)</p>

        </div>

      </div>
    </section>


    <section className='lg:py-20 lg:px-16 py-12 px-5 space-y-4'>

      <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-center'>
        <Heading className="lg:col-span-12 !text-left !text-[#5f259f] after:block after:mt-4 after:w-1/3 lg:after:w-1/12 after:h-[2px] after:bg-[#5f259f]">Course Plan</Heading>

        <div className='lg:col-span-8 text-base space-y-8'>
          <p className=''>
            The Hunter College and ASE Masters in Economics program is designed to prepare students for acceptance and success in America’s prestigious PhD programs in Economics and Public Policy. The program will provide the flexibility to compete for positions at prestigious firms and organizations. Students in the HASPERE program, anchored by faculty at Hunter and ASE, will also be taught and mentored by leading scholars from Columbia, Harvard, Johns Hopkins, Michigan, Princeton and Yale. The formal coursework will culminate in Masters degrees from Hunter College, CUNY and from the African School in Economics (ASE). In addition, participants will receive workshops and research opportunities, including at partner institutions.
          </p>
          <Link href="/courses/haspere" className='inline-block'>

            <Button className="!bg-[#5f259f] border-2 border-[#5f259f] !text-white !text-xs lg:!py-2 lg:!px-4 hover:!bg-transparent hover:!text-[#5f259f]" text="View HASPERE Course"></Button>

          </Link>
        </div>
        
        <div className='lg:col-span-4'>
          <div className='relative w-full h-96 shadow-2xl'>
            <Image src="https://s29068.pcdn.co/wp-content/uploads/online-learning1-768x432.jpg" layout="fill" objectFit="cover"/>
          </div>
        </div>

      </div>
    </section>


    <section className='lg:py-20 lg:px-16 py-12 px-5 space-y-4'>


      <div className='max-w-5xl mx-auto space-y-8'>
        <Heading className="lg:col-span-12 !text-left !text-[#5f259f] after:block after:mt-4 after:w-1/3 lg:after:w-1/12 after:h-[2px] after:bg-[#5f259f]">Frequently Asked Questions</Heading>

        <div className='space-y-8'>
          {values.map(({name, description}, index) => (
            <div key={index} className=''>
              <div className='flex gap-4 items-center' onClick={handleShowValues}>
                <p className='font-bold'>{name}</p>
                <AiFillPlusCircle className='ml-auto text-lg' />
              </div>
              <div className='max-h-[0px] overflow-hidden duration-200'>
                <p className='text-base p-4'>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>

    <Footer />
  </>;
}
