
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';

import 'animate.css';
import Link from 'next/link';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function SupportASE() {

  return <>

    <SEO
      title="Application Guidelines"
      description="Read our helpful guide on how to get started on your application process on joining ASE"
      image="/static/img/bg.png"
    />

    <Navbar />

    <Intro text="Admission Process"/>


    {/* Values */}
    <section id="vision" className='lg:py-20 lg:px-4 py-8 px-5'>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto'>

        <div className='lg:col-span-8 space-y-8 p-4 bg-white'>

          <div className='space-y-4'>
            <Heading className="!text-left !text-xl !text-app-dark">Application Requirements</Heading>
            <ul className="text-sm list-disc list-inside marker:font-bold marker:mr-3 space-y-4">
              <li>
                Complete the 
                <Link href="" className='text-app-dark font-bold'> online application</Link> or download the 
                <Link href="" className='text-app-dark font-bold'> print version for application</Link>.
              </li>

              <li>
                Gather all supporting documents.
              </li>

              <li>
                Review and finalize your application.
              </li>

              <li>
                Submit the non-refundable 30,000 FCFA for Bachelor’s students and 60,000 FCFA for Master's Students application fee.
              </li>

              <li>
                Email your application and supporting documents to:   
                <Link href="" className='text-app-dark font-bold'> registration@africanschoolofeconomics.com</Link>.
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <Heading className="!text-left !text-xl !text-app-dark">Statement of Motivation</Heading>
            {/* <p className='font-bold'>With your support we can provide:</p> */}

            <div className='space-y-4'>
                {/* <p className='text-sm font-bold'>Student Scholarships</p> */}
                <p className='text-sm'>
                  In no more than 500 words (one page), please describe your reasons for applying to the program of your choice, drawing on relevant research or professional experience, as well as your career objectives.
                </p>
            </div>

          </div>

          <div className='space-y-4'>
            <Heading className="!text-left !text-xl !text-app-dark">CV or Résumé</Heading>
            {/* <p className='font-bold'>With your support we can provide:</p> */}

            <div className='space-y-4'>
                {/* <p className='text-sm font-bold'>Student Scholarships</p> */}
                <p className='text-sm'>
                  Provide a CV or résumé that outlines your experiences and interests including: university education; employment history; community and/or extracurricular activities; recognitions or achievements; special skills; language abilities.
                </p>
            </div>

          </div>

          <div className='space-y-4'>
            <Heading className="!text-left !text-xl !text-app-dark">Two Letters of Recommendation (optional)</Heading>
            {/* <p className='font-bold'>With your support we can provide:</p> */}

            <div className='space-y-4'>
                {/* <p className='text-sm font-bold'>Student Scholarships</p> */}
                <p className='text-sm'>
                    We ask that you provide two letters of recommendation, including at least one from an university professor with whom you have worked or taken classes, and who can tell us more about you and your academic potential. Letters of recommendation must be sent directly to ASE by the reference. Letters must also be on typed on official letterhead and signed.
                </p>
            </div>

          </div>

          <div className='space-y-4'>
            <Heading className="!text-left !text-xl !text-app-dark">Official Transcripts</Heading>
            {/* <p className='font-bold'>With your support we can provide:</p> */}

            <div className='space-y-4'>
                {/* <p className='text-sm font-bold'>Student Scholarships</p> */}
                <p className='text-sm'>
                  We ask for official transcripts covering all previous university coursework, including confirmation of an earned bachelor’s degree or equivalent. A minimum 3.0 cumulative grade point average (or equivalent) is recommended. All official documents must be submitted in English or French. If you are admitted to ASE, you will need to submit official final transcripts and examination results before you are allowed to enroll.
                </p>
            </div>

          </div>

          <div className='space-y-4'>
            <Heading className="!text-left !text-xl !text-app-dark">English Language Test</Heading>
            {/* <p className='font-bold'>With your support we can provide:</p> */}

            <div className='space-y-4'>
                {/* <p className='text-sm font-bold'>Student Scholarships</p> */}
                <p className='text-sm'>
                  Entering students must demonstrate sufficient fluency in English. If English is not your first language, we recommend that you submit the results of an official English language exam of your choice. The most common language exams are the TOEFL, TOEIC, and IELTS.
                </p>
            </div>

          </div>

          <div className='space-y-4'>
            <Heading className="!text-left !text-xl !text-app-dark">Standardized Tests</Heading>
            {/* <p className='font-bold'>With your support we can provide:</p> */}

            <div className='space-y-4'>
                {/* <p className='text-sm font-bold'>Student Scholarships</p> */}
                <p className='text-sm'>
                  Standardized tests, such as the GRE or GMAT, are highly encouraged but not required for admission.
                </p>
            </div>

          </div>

          <div className='space-y-4'>
            <Heading className="!text-left !text-xl !text-app-dark">Application Fee</Heading>
            {/* <p className='font-bold'>With your support we can provide:</p> */}

            <div className='space-y-4'>
                {/* <p className='text-sm font-bold'>Student Scholarships</p> */}
                <p className='text-sm'>
                  Your application will be reviewed upon receipt of the application fee.
                </p>
            </div>

          </div>

          <div className='space-y-4'>
            <Heading className="!text-left !text-xl !text-app-dark">Optional: Application for Financial Aid</Heading>
            {/* <p className='font-bold'>With your support we can provide:</p> */}

            <div className='space-y-4'>
                {/* <p className='text-sm font-bold'>Student Scholarships</p> */}
                <p className='text-sm'>
                  All applicants are automatically considered for a Merit Scholarship. Applicants who require financial aid must complete and submit a separate financial aid application: <Link
                  href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2018/03/ASE_Financial_Aid_Form_2018-Website1.pdf"
                  className="font-bold text-app-dark">Click here</Link>.
                </p>
            </div>

          </div>

          <div className='space-y-4'>
            <Link href="/start-application" target="_blank" className='inline-block'>

              <Button className="!bg-app-dark !text-sm lg:!py-2 lg:!px-4" text="Start Your Application Process"></Button>

            </Link>
          </div>

        </div>
          
        <div className='lg:col-span-4 w-full space-y-12'>

            <div className='bg-white px-5 py-8 space-y-2'>
                
                <p className='font-bold text-app-dark'>Campuses</p>

                <div className='divide-y divide-neutral-300'>
                    <Link
                      href="/campuses/benin"
                      className='block py-2 text-xs font-bold hover:underline hover:text-app-dark cursor-pointer'>
                      
                          ASE Benin
                      
                    </Link>
                    <Link
                      href="/campuses/cote-d-ivoire"
                      className='block py-2 text-xs font-bold hover:underline hover:text-app-dark cursor-pointer'>
                    
                        ASE Cote d'Ivoire
                    
                    </Link>
                    <Link
                      href="/campuses/nigeria"
                      className='block py-2 text-xs font-bold hover:underline hover:text-app-dark cursor-pointer'>
                    
                        ASE Nigeria
                    
                    </Link>
                </div>

            </div>

            <div className='bg-white px-5 py-8 space-y-2'>
                
                <p className='font-bold text-app-dark'>News</p>

                <div className='divide-y divide-neutral-300'>
                    <p className='py-2 text-xs font-bold hover:underline hover:text-app-dark cursor-pointer'>
                        Successful launch meeting of the PASRC
                    </p>
                    <p className='py-2 text-xs font-bold hover:underline hover:text-app-dark cursor-pointer'>
                        Covid-19: Léonard Wantchékon and ASE launch “Questions to the Experts”
                    </p>
                    <p className='py-2 text-xs font-bold hover:underline hover:text-app-dark cursor-pointer'>
                        Questions for the Experts: Professor Adoukonou on Covid-19 Misinformation
                    </p>
                    <p className='py-2 text-xs font-bold hover:underline hover:text-app-dark cursor-pointer'>
                        7th Lindau Meeting on Economic Sciences: ASE Professor Karim Nchare Selected
                    </p>
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

    <Footer />
  </>;
}
