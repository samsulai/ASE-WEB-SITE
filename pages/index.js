import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

import { endorsement, partners, research_institutes, alumnis } from '../data';

import Button from '../components/Button';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import SlideShow from '../components/SlideShow';
import Navbar from '../components/Navbar';
import Support from '../components/Support';
import CampusCard from '../components/campusCard';
import FeaturedAlumni from '../components/FeaturedAlumni';
import 'animate.css';
import SEO from '../components/SEO';

import moment from 'moment';
import sanitize from 'sanitize-html';
import useTranslation from 'next-translate/useTranslation';
import Map from '../components/Map';
import parseSlug from '../hooks/parseSlug';
import sanitizeHtml from 'sanitize-html';
import {motion} from "framer-motion"
import { useInView } from 'react-intersection-observer';
import ProfileImg from "../components/ase-aid-woman-king.webp"

import CountUp from 'react-countup';
export default function Home({ posts }) {

  
const handleMouseEnter = (e) => {
    const learnMoreText = e.currentTarget.querySelector('.learn-more-text');
    learnMoreText.style.transform = 'translateY(-100%)';
  };

  const handleMouseLeave = (e) => {
    const learnMoreText = e.currentTarget.querySelector('.learn-more-text');
    learnMoreText.style.transform = 'translateY(0)';
  };
 const [video, setVideo] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
  });

  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    require('tiny-slider/src/tiny-slider').tns({
      container: '.partners-slide',
      lazyload: true,
      autoplay: true,
      nav: false,
      mouseDrag: true,
      controls: false,
      items: 1,
      responsive: {
        400: {
          items: 2,
        },
        640: {
          items: 3,
        },
        900: {
          items: 4,
        },
        1024: {
          items: 5,
        }
      },
      autoplayButton: false,
      autoplayButtonOutput: false,
      speed: 1000,
    });

    require('tiny-slider/src/tiny-slider').tns({
      container: '.endorsement',
      lazyload: true,
      autoplay: true,
      nav: false,
      mouseDrag: true,
      controls: false,
      rewind: true,
      items: 1,
      autoplayButton: false,
      autoplayButtonOutput: false,
      speed: 1000,
      autoplayTimeout: 6000,
    });
   
  }, []);


  const { t } = useTranslation('home');



  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };
  

  
  
  const programmes = [
    {
      id: 1,
      title: 'Undergraduate',
      backgroundImage: 'url("/static/img/saa1.webp")',
      link : '/admission/programmes?type=undergraduate'
     
    },
    {
      id: 2,
      title: 'Postgraduate',
      backgroundImage: 'url("static/img/saa2.webp")',
     link : '/admission/programmes?type=postgraduate'
    },
    {
      id: 3,
      title: 'HASPERE-(USA)',
      backgroundImage: 'url("/static/img/saa3.webp")',
     link : '/campuses/hunter-college'
    },
  ];
  const data = [
    {
      title: "Mahounan Yedomiffi",
      buttonText: "Learn More",
      imageType: "Mahounan",
      href : "https://www.linkedin.com/in/mahounan-yedomiffi-phd-2b6808ba/"
    },
    {
      title: "Gaetan Nandong",
      buttonText: "Learn More",
      imageType: "Gaeton",
      href : "https://www.linkedin.com/in/ga%C3%A9tan-tchakounte-nandong-55903899/"
    },
   
  ];
  

  return <>

    <SEO
      title="Home"
      description="The African School of Economics (ASE) is a Pan-African University dedicated to producing cutting-edge economic research, public policy, and world-renowned social scientists and economic leaders on the continent. ASE has three campuses in Benin Republic, Cote d'Ivoire, and Nigeria, and a joint Master's degree program in the United States."
      image="/static/img/cultural-exchange.jpg"
    />

    <Navbar />

    <SlideShow />

    
    {/* About ASE */}
 <motion.section
  className="bg-white py-12"
  initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
>
  <div className="container mx-auto px-4">
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
      variants={itemVariants}
    >
      <div>
        {video && (
          <div
            onClick={(e) => e.target.nodeName === 'DIV' && setVideo(false)}
            className='fixed bg-[#000e] top-0 left-0 w-full h-full grid place-content-center z-[9999999]'
          >
            <video
              poster='/static/img/intro-video-poster.webp'
              className='max-w-[800px] h-auto mx-auto'
              src="https://res.cloudinary.com/duczlqzws/video/upload/v1690579167/Reiterating_pc6kl2.mp4"
              controls
            ></video>
          </div>
        )}

        <div className='lg:col-span-6 relative min-h-[500px] isolate'>
          <div className='shadow-2xl absolute top-0 left-0 w-full h-full  z-10'></div>

          <Image
  src="/static/img/pod1.jpg"
  layout='fill'
  objectFit='cover'
  className=" rounded-lg h-auto lg:h-96 md:h-36 sm:h-32 w-full"
  alt="student at ase"
/>


          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center space-y-3 z-[11]">
            <div className='relative cursor-pointer isolate'>
              <BsFillPlayCircleFill
                onClick={() => setVideo(true)}
                className="text-white text-6xl"
              />
              <div className='absolute top-0 left-0 w-full h-full rounded-full border border-white animate-ping -z-10'></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <motion.h2
          className="text-3xl lg:text-5xl font-bold mb-4  after:block after:mt-2 after:w-1/4 lg:after:w-2/12 after:h-[2px] after:bg-gradient-to-r from-[#4879c8] to-[#6495ED]"
          variants={itemVariants}
          style={{ fontFamily: 'Playfair Display' }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-base text-black mb-6"  
          variants={itemVariants}
          style={{ fontFamily: 'Montserrat', textAlign: 'justify' }}
        >
          The African School of Economics (ASE) is a Pan-African University dedicated to producing cutting-edge research in Economics, Finance, and Public Policy, as well as world-class social scientists and business leaders on the continent.
        </motion.p>
        <motion.p
          className="text-base text-black mb-6"  
          variants={itemVariants}
          style={{ fontFamily: 'Montserrat' , textAlign: 'justify'}}
        >
          Our faculty members are leading experts in their fields, and our interdisciplinary approach to education allows students to explore a wide range of topics and gain a comprehensive understanding of the complexities of Africa's economic and social landscape.
        </motion.p>
        <motion.p
          className="text-base text-black mb-8 tracking-wide"  
          variants={itemVariants}
          style={{ fontFamily: 'Montserrat', textAlign: 'justify' }}
        >
          At ASE, we are committed to fostering a collaborative and inclusive learning environment, where students from diverse backgrounds can engage in meaningful discussions, conduct groundbreaking research, and develop innovative solutions to address the challenges facing the African continent.
        </motion.p>
        <motion.a
          href="/about"
          className="text-lg text-white rounded-full px-8 py-4 transition ease-in-out delay-150 bg-gradient-to-r from-[#4879c8] to-[#6495ED] hover:-translate-y-1 hover:scale-110 duration-300"
          variants={itemVariants}
        >
          Read More
        </motion.a>
      </div>
    </motion.div>
  </div>
</motion.section>



    {/* Latest News*/}
    <section className='lg:py-20 lg:px-16 py-12 px-5 overflow-hidden space-y-8'>
  <div className='flex flex-col lg:flex-row gap-8'>
    <div className="lg:w-full space-y-4">
    <div className='md:flex md:items-center md:justify-between mb-4'>
<div className='max-w-2xl px-4 lg:max-w-4xl lg:px-0 '>

<h2 className="font-bold text-4xl lg:text-[51px]/[64px]  text-center mb-4 tracking-wide" style={{ fontFamily: 'Playfair Display' }}>News and Events</h2>
         
</div>


          <Link
            href="/news"
            className='hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block'>
            VIEW ALL NEWS{' '}
            <span aria-hidden='true'>&rarr;</span>
          </Link>
       
        
</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8 mx-auto">
        {posts.map(({ title, image, description, category, createdAt, _id }, index) => (
          <motion.div
            key={index}
            ref={ref}
            className="cursor-pointer bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
            initial={{
              opacity: 0,
              translateY: -10,
            }}
            animate={{ opacity: inView ? 1 : 0, translateY: inView ? 0 : -10 }}
            transition={{ duration: 0.2, delay: inView ? index * 0.2 : 0 }}
          >
            <div className="relative h-60 overflow-hidden rounded-t-lg">
              <Image
                src={`/static/img/${image}`}
                alt={title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-0 right-0 p-2 bg-gradient-to-r from-[#4879c8] to-[#6495ED] text-white text-xs font-bold rounded-bl-lg" style={{ fontFamily: 'Montserrat' }}>
                {moment(createdAt).format("Do, MMM YYYY")}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg mb-2 text-app-dark lg:line-clamp-3" style={{ fontFamily: 'Montserrat' }}>
                <Link href={`/news/${_id}`} dangerouslySetInnerHTML={{ __html: sanitize(title) }} ></Link>
              </h3>
              <Link href={`/news/${_id}`} className="underline inline-block mt-2 text-sm text-app-dark hover:text-app-dark " style={{ fontFamily: 'Montserrat' }}>
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  
</section>


<section className='mx-3 md:mx-16 pb-32'>
    <div>
    <h2 className="font-bold text-3xl lg:text-[51px]/[64px]  mb-6 text-center tracking-wide" style={{ fontFamily: 'Playfair Display' }}>
      Featured Alumni
    </h2>


  <div className="flex flex-col md:flex-row gap-16 mt-8">
          {data.map((content, index) => (
            <FeaturedAlumni {...content} key={index} />
          ))}
        </div>
    </div>
  </section>
    
  <motion.div 
   
  className="my-8" >
  <h2 className="  text-[51px]/[64px] font-bold text-center mb-4  tracking-wide" style={{ fontFamily: 'Playfair Display' }}>Study at ASE</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {programmes.map((programme) => (
      <Link href={programme.link} key={programme.id}>
        <motion.div 
        initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          className="p-4 cursor-auto relative rounded-lg overflow-hidden"
          style={{
            backgroundImage: programme.backgroundImage,
            height: '300px',
            margin: '10px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            borderRadius: '15px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0px 5px 10px rgba(0, 0, 0, 0.3)';
            e.currentTarget.querySelector('.slide-up-text').style.transform = 'translateY(0)';
            e.currentTarget.querySelector('.slide-up-text').style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0px 1px 3px rgba(0, 0, 0, 0.2)';
            e.currentTarget.querySelector('.slide-up-text').style.transform = 'translateY(100%)';
            e.currentTarget.querySelector('.slide-up-text').style.opacity = '0';
          }}
        >
          {/* Move the program title text to the bottom */}
          <h2
            className="text-2xl font-bold mb-4 text-white"
            style={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            {programme.title}
          </h2>

          {/* Sliding text with black background */}
          <div
            className="absolute bottom-0 left-0 w-full h-full bg-[#084a7f] bg-opacity-70 text-white p-4 transform translate-y-full opacity-0 transition-transform transition-opacity slide-up-text flex items-center justify-center"
            style={{ borderRadius: '15px', transition: 'transform 0.3s ease, opacity 0.3s ease' }}
          >
            <button className=" px-4 py-2 relative rounded-lg font-bold bg-white text-[#084a7f]">
              <a href={programme.link} className="cursor-pointer">Learn More</a>
            </button>
            
           
          </div>
        </motion.div >
      </Link>
    ))}
  </div>
</motion.div>


    
    {/* Campus */}
    <section 
     

    className="py-8 px-5 lg:py-20 lg:px-0 space-y-8 ">
      <div className="space-y-3">
        <h2 className=" text-4xl lg:text-[51px]/[64px] font-bold text-center mb-4  tracking-wide" style={{ fontFamily: 'Playfair Display' }}>
          Our Campuses
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto overflow-hidden" style={{ fontFamily: 'Inter' }}>
        <CampusCard
          imageUrl="/static/img/nigeria.webp"
          title="Nigeria"
          description="ASE offers graduate and undergraduate courses at its campus in Nigeria"
          linkUrl="/campuses/nigeria"
        />

        <CampusCard
          imageUrl="/static/img/cote-d-voire-transformed.webp"
          title="Benin Republic"
          description="ASE offers graduate and undergraduate courses at its campus in Benin"
          linkUrl="/campuses/benin"
        />

        <CampusCard
          imageUrl="https://res.cloudinary.com/duczlqzws/image/upload/v1691071766/cotedvoire_awukxm.jpg"
          title="Cote d'Ivoire"
          description="ASE offers graduate and undergraduate courses at its campus in Cote d'Ivoire"
          linkUrl="/campuses/cote-d-ivoire"
        />

        <CampusCard
          imageUrl="/static/img/haspere-build-transformed.webp"
          title="HASPERE (USA)"
          description="The Hunter African School Program to Expand Representation in Economics (HASPERE) is a collaborative initiative between Hunter College and the African School of Economics to train and mentor talented Black and other underrepresented minority students."
          linkUrl="/campuses/hunter-college"
        />
      </div>
    </section>

    <motion.section 
initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
    className='md:mx-9'>
  <div className='flex justify-center items-center'>
  <Link href="/news/64e35d338628a516a4b6ef16">
    <Image
      src='/static/img/movie.png' // Replace with your image path
      alt='Your Image'
      layout='responsive'
      width={4098} // Adjust the width to your preferred size
      height={2304} // Adjust the height to your preferred size
className="md:rounded-2xl "
    />
    </Link>
  </div>
</motion.section>



    <motion.section  
initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
    className='lg:py-20 lg:px-16 py-12 px-5 space-y-8'>
      <div className='relative grid grid-cols-1 items-center gap-8'>

        <div className=' col-span-1 space-y-8 text-center'>
          <h2 className="font-bold  text-[51px]/[64px] text-center mb-4 font-[500]"
  style={{ fontFamily: 'Playfair Display' }}>Our Vision</h2>
          
          <div className="lg:w-3/5 mx-auto space-y-8 wow animate__animated animate__fadeInUp">
            <p className="text-center text-base lg:text-xl">
            We are creating the next generation of African scholars
            that are capable of producing world-class research. We
            do so through excellence in teaching and research
            informed by African perspectives.
            </p>
          </div>
        </div>

        <div className=''>
          <Map />
        </div>

      </div>
    </motion.section>

    {/* Open Community */}
   <motion.section 
 initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
   className="  mx-4 lg:mx-8 rounded-2xl overflow-hidden ">
  {video && (
    <div
      onClick={(e) => e.target.nodeName === 'DIV' && setVideo(false)}
      className="fixed bg-[#000e] top-0 left-0 w-full h-full grid place-content-center z-50"
    >
      <video
        poster="/static/img/poster2.jpg"
        className="lg:w-2/3 h-auto mx-auto"
        src="https://res.cloudinary.com/duczlqzws/video/upload/v1690579167/Reiterating_pc6kl2.mp4"
        controls
      ></video>
    </div>
  )}

  <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
    <div className="col-span-12 relative h-[300px]  bg-[url('/static/img/poster2.jpg')] lg:h-[500px] bg-center bg-cover isolate">
      <div className="absolute top-0 left-0 w-full h-full  z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center space-y-3">
        <div className='relative cursor-pointer isolate'>
              <BsFillPlayCircleFill
                onClick={() => setVideo(true)}
                className="text-white text-6xl"
              />
              <div className='absolute top-0 left-0 w-full h-full rounded-full border border-white animate-ping -z-10'></div>
            </div>
        <p className="text-white text-center font-bold text-3xl lg:text-[51px]/[64px] tracking-wide"  style={{ fontFamily: 'Playfair Display' }}>From the President: The ASE Vision</p>
      </div>
    </div>
    
  </div>
</motion.section>


    
    {/* Financial Aid */}
    <section 
    
    className="relative lg:py-16 py-8 ">
  <motion.div 
initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
  className='flex justify-center items-center'>
    <Link href="/admission/financial-aid">
     
        <Image
          src='/static/img/aid2.png'
          alt='Your Image'
          layout='responsive'
          width={4098}
          height={2304}
          objectFit="cover"
          className="rounded-3xl w-full "
        />
     
    </Link>
  </motion.div>
</section>








    {/* ASE in Numbers */}
     <section className="lg:py-20 lg:px-16 py-12 px-5 bg-[url(/static/img/aag.webp)] bg-cover bg-center llg:space-y-16 space-y-8">
      <Heading className="!text-white font-bold text-3xl lg:text-[48px]/[64px]"
      style={{ fontFamily: 'Playfair Display' }}>ASE AT A GLANCE</Heading>


      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:gap-20"
style={{ fontFamily: 'Inter' }}
      >
        <div className="col-span-1 space-y-3 wow animate__animated animate__fadeInUp">
          <Heading className="!text-white !text-5xl">2000+</Heading>
          <p className="text-center text-white text-base" style={{ fontFamily: 'Montserrat' }}>
            <strong>Students</strong> and <strong>alumni</strong> across different campuses
          </p>
        </div>
        <div className="col-span-1 space-y-3 wow animate__animated animate__fadeInUp animate__delay-2s">
          <Heading className="!text-white !text-5xl">12+</Heading>
          <p className="text-center text-white text-base" style={{ fontFamily: 'Montserrat' }}>
          <strong>Degree</strong> programs.
          </p>
        </div>
        <div className="col-span-1 space-y-3 wow animate__animated animate__fadeInUp animate__delay-3s">
          <Heading className="!text-white !text-5xl">4</Heading>
          <p className="text-center text-white text-base" style={{ fontFamily: 'Montserrat' }}>
           <strong>Campuses</strong> across 2 continents.
          </p>
        </div>
      </div>
    </section>

    {/* Endorsement */}
    <section className='lg:py-20 lg:px-16 py-12 px-5 overflow-hidden'
    style={{ fontFamily: 'Inter' }}>
      <div className='flex endorsement overflow-hidden wow animate__animated animate__fadeIn'>
        {endorsement.map(({name, image, text, from}, index) => (
          <div key={index} className='px-5'>
            <div className='flex flex-col items-center gap-4 lg:gap-16 lg:w-2/3 mx-auto lg:flex-row'>
              <div className="w-1/4 grid place-content-center">
                <div className="relative overflow-hidden w-56 h-56 rounded-full">
                  <Image src={image} layout="fill" objectFit='cover' />
                </div>
              </div>
              <div className=' space-y-2'>
                <p className='text-center'>
                  <ImQuotesLeft  className="text-app-main inline -mt-2 mr-3" />
                  {text}
                  <ImQuotesRight  className="text-app-main inline -mb-2 ml-3" />
                </p>
                <p className='font-bold text-center text-base'>{name}</p>
                <p className=' text-center text-base'>{from}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <Support />



    {/* Partners */}
    <section className="lg:py-20 lg:px-16 py-12 px-5 bg-zinc-200 space-y-8 overflow-hidden">
      <h2 className="font-bold  text-[51px]/[64px] text-center my-auto "
  style={{ fontFamily: 'Playfair Display' }}>Our Partners</h2>

      <div className="partners-slide flex justify-center items-center">
        {/* <TinySlider setting={settings}> */}
          {partners.map(({image}, index) => (
            <div key={index} className="relative p-4 grid place-content-center">
              <img className="grayscale hover:grayscale-0 w-auto h-16" src={`/static/img/partners/${image}`}/>
            </div>
          ))}
        {/* </TinySlider> */}
      </div>
    </section>

    <Footer />
  </>;
}

const truncateTitle = (title, maxLength = 80) => {
  if (title.length <= maxLength) {
    return title;
  }
  return title.substring(0, maxLength) + '...';
};

export async function getServerSideProps() {
  try {
    const response = await fetch('https://ase-backend-1.onrender.com/posts/feed?category=News&limit=3');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return {
      props: {
        posts: data,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
        error: error.message,
      },
    };
  }
}