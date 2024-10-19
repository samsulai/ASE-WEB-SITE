import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BsCheckCircleFill } from 'react-icons/bs';
import Button from '../../components/Button';

import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
import Support from '../../components/Support';

const needs = [
  {
    name: '',
    description: ''
  }
]

export default function Home() {

  return <>
    <Head>
      <title>The African School of Economics</title>
      <meta name="description" content="The African School of Economics" />
    </Head>

    <SEO
      title="Financial Aid"
      description="Apply for ASE's Financial Aid"
      image="/static/img/financial-aid.jpg"
    />

    <Navbar />

    <Intro bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693940045/banners/Financial_Aid_Banner_zofqgm.png">We want you here <br /> irrespective of your background</Intro>

    <section className='max-w-6xl mx-auto overflow-auto text-base'>

      <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8 max-w-6xl mx-auto'>

        <div className='lg:py-20 lg:px-16 lg:pr-5 py-8 px-5 lg:col-span-7 space-y-8'>
        <h2 className="text-4xl font-bold mb-4  text-left text-app-dark" style={{ fontFamily: 'Playfair Display' }}>
     Financial aid for African students
    </h2>

          <p className="text-base" style={{ fontFamily: 'Inter' }}>
            The African School of Economics offers students a number of financial aid awards to help offset the cost of attendance.
            ASE financial aid is provided based on merit and/or demonstrated financial need. Students from all nationalities and backgrounds are welcome to apply.
            <br /><br />
            All applicants are automatically considered for a merit scholarship when they submit their admission application.
          </p>

          <Link
            href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2018/03/ASE_Financial_Aid_Form_2018-Website1.pdf"
            target="_blank"
            className='inline-block'>

            <Button className="!bg-app-dark !text-base lg:!py-2 lg:!px-4" text="Begin Application"></Button>

          </Link>

        </div>

        {/* <div className='hidden lg:block lg:col-span-5'>
          <div className='relative min-h-[500px] isolate'>
            <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
            <Image src="/static/img/vector.svg" layout='fill' objectFit='cover' />
          </div>
        </div> */}

      </div>

    </section>

    <section className='bg-app-dark text-white lg:py-20 lg:px-16 py-12 px-5'>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-14">
        <div className='lg:col-span-6 relative min-h-[200px] lg:min-h-[400px] isolate'>
          <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
          <Image src="/static/img/people/henri.jpg" quality={50} layout='fill' objectFit='cover' />
        </div>

        <div className='lg:col-span-6 relative space-y-5 lg:space-y-8'>
          <h1 className='text-2xl lg:text-4xl font-bold'>Meet Henri Noël Kengne</h1>
          <div className='text-base lg:text-base space-y-4'>
            <p className="italic">
              "coming from a low-income family, the flexibility of the tuition fee payments and the scholarship offered by the school fostered my motivation to study at ASE. In Africa, schools with rigorous curriculum similar to the North American model are reserved for wealthy people. However, despite my modest background, my course work at ASE has equipped me with academic skills that I am proud of."
            </p>
          </div>
        </div>
      </div>

    </section>


    {/* Values */}
    <section id="vision" className='lg:py-20 lg:px-4 py-8 px-5'>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'>    
        <div className='space-y-8 p-4'>
          <Heading className="!text-left !text-app-dark">Guiding Principles</Heading>
          <ul className="text-base list-disc marker:font-bold space-y-8">
            <li>
              The need for financial aid, or a lack of financial resources, are not impediments to your admission.
            </li>

            <li>
              Eligibility is determined in the same manner for all admitted students. Students of every nationality, race, religion or ethnicity have the same access to financial aid awards.
            </li>

            <li>
              In awarding aid packages, we take into consideration your individual circumstances, your family’s capabilities, the demand for aid from all students and university resources.
            </li>
          </ul>
        </div>

        <div className=''>
          <div className='space-y-8 p-4'>
            <Heading className="!text-left !text-app-dark">Assessing Need</Heading>

            <p className='text-base'>
                We determine your financial aid award based on academic merit and demonstrated financial need. Need-based aid takes into consideration many factors, such as your family’s income, assets, size and unusual expenses. Academic merit and potential are also important factors in helping us determine who will best utilize and benefit from a financial aid award.
            </p>

            <div className='space-y-4'>
              <p className='text-base font-bold'>Family Contribution</p>
              <p className='text-base'>
                ASE carefully reviews the information each applicant provided about their family’s financial situation, in addition to any additional circumstances brought to our attention. We hope families discuss the cost of going to graduate school and understand that paying for higher education has considerable long-term benefits. Because of the high volume of students requiring financial assistance, we are unable to provide additional aid for students whose families arbitrarily withdraw financial support. Please be assured, however, that we will work with your family to help find a way to cover the full cost of attendance.
              </p>
            </div>

            <div className='space-y-4'>
              <p className='text-base font-bold'>Student Contribution</p>
              <p className='text-base'>
                We expect students to help cover their costs while attending ASE. We realize that working and studying is time consuming, but we hope that you make every effort to balance your work-life. For students who are not able to save enough money to cover their costs before entering ASE, we offer a Work Study Program and additional student loans when necessary.
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>


    <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto overflow-auto text-base'>

      <div className='gap-8 max-w-5xl mx-auto'>

        <div className='space-y-4 lg:w-2/3 mx-auto text-center'>
          <Heading className="!text-app-dark !text-center">Apply for a financial aid</Heading>
          <div className=''>
            <p className="text-base">
              All applicants are automatically considered for a merit scholarship when they submit their admission application.
            </p>
            <p className="text-base">
              If you have any questions regarding financial aid, please do not hesitate to contact ASE at: <a className="text-app-dark font-bold hover:underline" href="mailto:admissions@africanschoolofeconomics.com">admissions@africanschoolofeconomics.com</a>
            </p>
          </div>

          <Link
            href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2018/03/ASE_Financial_Aid_Form_2018-Website1.pdf"
            target="_blank"
            className='inline-block'>

            <Button className="!bg-app-dark !text-base lg:!py-2 lg:!px-4" text="Begin Application"></Button>

          </Link>

        </div>

        {/* <div className='lg:col-span-5'>
          <div className='relative min-h-[400px] isolate'>
            <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
            <Image src="/static/img/values.jpg" layout='fill' objectFit='cover' />
          </div>
        </div> */}

      </div>

    </section>


    <Support />

    <Footer />
  </>;
}
