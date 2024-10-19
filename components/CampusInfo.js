import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Heading from "./Heading";
import { BsArrowRightShort } from 'react-icons/bs';

export default function CampusInfo({ city }){

    return <>
        <section className='lg:py-20 lg:px-16 py-12 px-5' style={{ fontFamily: 'Inter' }}>
  <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
    {/* Undergraduate Courses Card */}
    <div className='col-span-1 space-y-5 group border rounded-lg overflow-hidden shadow-md'>
      <div className='relative w-full min-h-[250px] isolate group-hover:-translate-y-5 duration-200'>
        <div className='shadow-2xl absolute top-0 left-0 w-full h-full  z-10'></div>
        <p className='absolute z-10 left-5 right-5 bottom-5 font-bold text-xl text-white'>Undergraduate Courses</p>
        <Image src="/static/img/ug3-transformed.webp" layout='fill' objectFit='cover' objectPosition="top" />
      </div>

      <div className='space-y-3 p-4'>
        <p className='text-base'>
          The undergraduate program at The African School of Economics Campus will challenge you in ways you never thought possible and give you the tools to succeed in life. We offer a variety of courses, including: <strong>Bachelor of Marketing & Management</strong>, <strong>Bachelor of Science in Economics & Statistics</strong>
        </p>
        <Link 
  href={city ? `/courses/undergraduate/${city}` : "/ase-nigeria-courses"} 
  className="!bg-app-dark inline-flex items-center group pr-2"
  
>
  <Button className="!bg-app-dark !text-xs lg:!py-2 lg:!pl-4 !pr-0" text="Course List"></Button>
  <BsArrowRightShort className="text-white text-base ml-0 opacity-0 duration-200 group-hover:opacity-100 group-hover:ml-2" />
</Link>
      </div>
    </div>

    {/* Postgraduate Courses Card */}
    <div className='col-span-1 space-y-5 group border rounded-lg overflow-hidden shadow-md'>
      <div className='relative w-full min-h-[250px] isolate group-hover:-translate-y-5 duration-200'>
        <div className='shadow-2xl absolute top-0 left-0 w-full h-full  z-10'></div>
        <p className='absolute z-10 left-5 right-5 bottom-5 font-bold text-xl text-white'>Postgraduate Courses</p>
        <Image src="/static/img/pg1.webp" layout='fill' objectFit='cover' objectPosition="top" />
      </div>

      <div className='space-y-3 p-4'>
        <p className='text-base'>
          The postgraduate program is designed to help students develop the skills and knowledge required to succeed in their chosen career. The program provides an opportunity for students to complete a research project or thesis under the supervision of an experienced academic staff member.
        </p>
        <Link href={`/courses/postgraduate/${city}`} className="!bg-app-dark inline-flex items-center group pr-2">
          <Button className="!bg-app-dark !text-xs lg:!py-2 lg:!pl-4 !pr-0" text="Course List"></Button>
          <BsArrowRightShort className="text-white text-base ml-0 opacity-0 duration-200 group-hover:opacity-100 group-hover:ml-2" />
        </Link>
      </div>
    </div>

    {/* Executive Education Card */}
    <div className='col-span-1 space-y-5 group border rounded-lg overflow-hidden shadow-md'>
      <div className='relative w-full min-h-[250px] isolate group-hover:-translate-y-5 duration-200'>
        <div className='shadow-2xl absolute top-0 left-0 w-full h-full  z-10'></div>
        <p className='absolute z-10 left-5 right-5 bottom-5 font-bold text-xl text-white'>Executive Education</p>
        <Image src="/static/img/ug3-transformed.webp" layout='fill' objectFit='cover' objectPosition="top" />
      </div>

      <div className='space-y-3 p-4'>
        <p className='text-base'>
          The postgraduate program is designed to help students develop the skills and knowledge required to succeed in their chosen career. The program provides an opportunity for students to complete a research project or thesis under the supervision of an experienced academic staff member.
        </p>
        <Link href="/courses/executive-education" className="!bg-app-dark inline-flex items-center group pr-2">
          <Button className="!bg-app-dark !text-xs lg:!py-2 lg:!pl-4 !pr-0" text="Learn More"></Button>
          <BsArrowRightShort className="text-white text-base ml-0 opacity-0 duration-200 group-hover:opacity-100 group-hover:ml-2" />
        </Link>
      </div>
    </div>
  </div>
</section>


        <section className='lg:py-20 lg:px-16 py-12 px-5 bg-app-dark bg-[url(/static/img/bg.png)] text-white'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8 max-w-6xl mx-auto overflow-auto text-base'>
            <div className='relative w-full min-h-[400px] isolate'>
                <div className='shadow-2xl absolute top-0 left-0 w-full h-full  z-10'></div>
                <Image src="/static/img/financial-aid.jpg" layout='fill' objectFit='cover' objectPosition="top" className="rounded-sm"/>
            </div>

            <div className='space-y-3 text-center'>
                <p className='font-bold text-3xl text-white' style={{ fontFamily: 'Playfair Display' }}>Ready to become a part of the ASE community</p>
                <p className='text-base' style={{ fontFamily: 'Inter' }}>
                We're looking for people who are ready to take their lives in their own hands and make them better than they were before. We want to help you discover who you are, what your passions are, and how you can use those passions to make the world around you a better place.
                </p>
                <div className='flex place-content-center gap-4'>
                    <Link href="/application-guidelines" className='inline-block'>

                        <Button className="!bg-white border-2 border-white !text-app-dark !text-xs lg:!py-2 lg:!px-4 hover:!bg-transparent hover:!text-white" text="Begin Application"></Button>

                    </Link>

                    <Link href="/admission/academic-calendar" className='inline-block'>

                        <Button className="!bg-white border-2 border-white !text-app-dark !text-xs lg:!py-2 lg:!px-4 hover:!bg-transparent hover:!text-white" text="Academic Calendar"></Button>

                    </Link>
                </div>
            </div>
            </div>

        </section>


        <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto overflow-auto text-base'>

            <div className='gap-8 max-w-5xl mx-auto'>

            <div className='space-y-4 lg:w-2/3 mx-auto text-center'>
                <h2 className="text-3xl lg:text-4xl font-bold text-app-dark text-center mb-4 "style={{ fontFamily: 'Playfair Display' }}>Apply for a financial aid</h2>
                <div className=''>
                <p className="text-base" style={{ fontFamily: 'Inter' }}>
                    All applicants are automatically considered for a merit scholarship when they submit their admission application.
                </p>
                <p className="text-base" style={{ fontFamily: 'Inter' }}>
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

            </div>

        </section>
    </>;

}