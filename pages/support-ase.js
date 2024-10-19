/** @format */

import Image from "next/image";

import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";

import "animate.css";
import SEO from "../components/SEO";
import StudentStories from "../components/StudentStories";

export default function SupportASE() {
  return (
    <>
      <SEO
        title="Support ASE"
        description="With your help, ASE can extend scholarship opportunities to many more deserving young Africans, as well as increase our teaching faculty and facilities to accommodate more students, from every economic background."
        image="/static/img/support-ase.jpg"
      />

      <Navbar />

      <Intro text="Support ASE" bg="/static/img/support-ase.jpg" />

      <section className="lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto overflow-hidden text-base">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-7 space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-left  text-app-dark mb-4 font-[500]"
  style={{ fontFamily: 'Playfair Display' }}>Support ASE’s Transformative <br /> Vision</h2>
            <p className="text-base">
              Since its inception in 2014, the African School of Economics (ASE)
              has had tremendous success in giving young Africans access to the
              highest standards of education. ASE is committed to creating
              equal-opportunity access for indigenous African talent. Our
              graduates go on to top US, Canadian, and European doctoral
              programs, take positions at research organisations, and start
              their own enterprises. ASE’s goal is to prepare its students for
              roles that shape the continent’s future. We do so with frontline
              pedagogical methodologies and with a globally preeminent teaching
              faculty.
            </p>

            <p className="text-base">
              As part of its equal-opportunity vision, ASE also offers academic
              scholarships to African students from the most modest economic
              backgrounds, who conventionally would not have access to this
              quality of schooling.
            </p>

            <p className="text-base">
              With your help, ASE can extend scholarship opportunities to many
              more deserving young Africans, as well as increase our teaching
              faculty and facilities to accommodate more students, from every
              economic background.
            </p>

            {/* <Link href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2018/03/ASE_Financial_Aid_Form_2018-Website1.pdf">
              <a target="_blank" className='inline-block'>
                  <Button className="!bg-app-dark !text-base lg:!py-2 lg:!px-4" text="Begin Application"></Button>
              </a>
            </Link> */}
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <div className="relative min-h-[400px] isolate">
              {/* <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div> */}
              <Image
                src="/static/img/ase-info.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="vision" className="lg:py-20 lg:px-4 py-8 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-8 p-4">
            
            <h2 className="text-3xl lg:text-4xl font-bold text-left  text-app-dark mb-4 font-[500]"
  style={{ fontFamily: 'Playfair Display' }}>With Your Support</h2>
            <p className="font-bold" style={{ fontFamily: 'Playfair Display' }}>ASE can:</p>
            <ul className="text-base list-disc list-inside marker:font-bold marker:mr-3 space-y-8" style={{ fontFamily: 'Inter' }}>
              <li>
                Expand access to a new model of equal-opportunity,
                global-standard education for young Africans across the
                continent
              </li>

              <li>
                Train economic leaders in Africa who will shape the continent’s
                development
              </li>

              <li>
                Grow a vibrant community of world-class scholars who will
                address Africa’s most daunting challenges from an indigenous
                perspective
              </li>

              <li>
                Promote Africa’s cultural heritage through scholarly inquiry
              </li>
            </ul>
          </div>

          <div className="space-y-8 p-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-left  text-app-dark mb-4 font-[500]"
  style={{ fontFamily: 'Playfair Display' }}>Support ASE’s Transformative <br /> Vision</h2>
            <p className="font-bold" style={{ fontFamily: 'Playfair Display' }}>How can you help?</p>

            <div className="space-y-4">
              <p className="text-base font-bold" style={{ fontFamily: 'Inter' }}>Student Scholarships</p>
              <p className="text-base" style={{ fontFamily: 'Inter' }}>
                We can sustain and expand our vision of providing the best
                academic opportunities to young African talents who are
                typically unable to access them.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-base font-bold" style={{ fontFamily: 'Playfair Display' }}>Facilities</p>
              <p className="text-base" style={{ fontFamily: 'Inter' }}>
                We can acquire the resources that are vital for our mission:
              </p>
              <ul className="text-base list-disc list-inside marker:font-bold marker:mr-3 space-y-8" style={{ fontFamily: 'Inter' }}>
                <li>
                  Academic buildings with state of the art equipment at our
                  newest campus in Abuja, Nigeria
                </li>

                <li>
                  IT infrastructure to support connectivity, learning and
                  research across ASE
                </li>

                <li>
                  Dormitory space – we welcome international students from
                  across Africa who will together form a community of shared
                  cultures and ideas in their living environment
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-base font-bold" style={{ fontFamily: 'Playfair Display' }}>Preeminent Faculty</p>
              <p className="text-base" style={{ fontFamily: 'Inter' }}>
                We can give our students instruction and mentorship by scholars
                and researchers trained at top institutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto space-y-3'>
        <Heading className="!text-left !text-black">Student stories</Heading>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-0'>
          {student_stories.map(({name, story, image}, index) => (
            <div key={index} className='flex gap-3 lg:gap-6 col-span-6 lg:p-3'>
              <div className=''>
                <div className='relative w-[100px] h-[100px] isolate'>
                    <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#2E4467] z-10'></div>
                    <Image src={image} layout='fill' objectFit='cover' />
                </div>
              </div>
              <div className="space-y-2">
                <Link href="/events/slug">
                  <a className="font-bold hover:underline">"{story}"</a>
                </Link>
                <p className="text-app-dark text-base">{name}</p>
                <p className='flex flex-col lg:flex-row text-app-main font-bold gap-2 text-base'>
                  Read More
                </p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <StudentStories />

      <Footer />
    </>
  );
}
