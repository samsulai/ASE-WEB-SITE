import { BsInfoCircleFill } from 'react-icons/bs';
import { GiGraduateCap } from 'react-icons/gi';
import { HiUserCircle } from 'react-icons/hi';
import { ImBooks, ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { MdOutlineDateRange, MdVerified, MdWork } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import sanitize from 'sanitize-html';

import 'animate.css';

import { artists } from '../../data';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
import Support from '../../components/Support';

export default function Home({ artist }) {

  return (
    <>
      <SEO
          title={artist?.name}
          description={`${artist?.name}`}
          image={artist?.image || "/static/img/bg.png"}
      />
      
      <Navbar />
        <section style={{ backgroundImage: `url(${artist?.coverImage || '/static/img/bg.png'})` }} className={`relative py-12 px-6 lg:p-12 h-[40vh] grid place-content-center ${artist?.coverImage ? "bg-cover bg-center" :"bg-black"} grid items-center isolate`}>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-app-dark to-transparent -z-10"></div>
            
            <div className='lg:absolute lg:top-[78%] lg:left-16 border-8 border-white relative w-[170px] h-[170px] rounded-full overflow-hidden'>
                {artist?.image ? 
                    <Image src={`/static/img/artists/${artist?.image}`} objectFit='cover' layout='fill' /> :
                    <HiUserCircle className="absolute inset-0 w-full h-full text-2xl text-white" />
                }
            </div>
        </section>
        <section className='lg:px-20 py-10 px-5 flex gap-8 bg-app-dark !text-white'>
            <div className='lg:pl-[180px] space-y-2'>
                <p className='font-bold text-lg text-white'>{artist?.name}</p>
                {/* <p className='flex flex-col lg:flex-row gap-3'>
                    {artist?.department && <span className='flex gap-2 items-center text-xs uppercase'>
                        <span className=''>
                            <MdWork className="" />
                        </span>
                        {artist?.department}
                    </span>}
                    {artist?.office && <span className='flex gap-2 items-center text-xs uppercase'>
                        <span className=''>
                            <ImOffice className="" />
                        </span>
                        {artist?.office}
                    </span>}
                    {artist?.course && <span className='flex gap-2 items-center text-xs uppercase'>
                        <span className=''>
                            <GiGraduateCap className="text-sm" />
                        </span>
                        {artist?.course}
                    </span>}
                </p> */}
            </div>
        </section>

        <section className='bg-neutral-100 lg:py-20 lg:px-16 py-12 px-5 mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 max-w-5xl mx-auto'>
                <div className='lg:col-span-8 space-y-8'>

                    {artist?.about && <div className='bg-white p-4 lg:p-8 space-y-3'>
                        <p className='font-bold flex items-center'>
                            <BsInfoCircleFill className="text-app-dark mr-3" />
                            About
                        </p>
                        <div className='text-sm space-y-3' dangerouslySetInnerHTML={{
                            __html: sanitize(artist?.about)
                        }}>
                        </div>
                    </div>}

                    
                </div>

                {/* <div className='lg:col-span-4 space-y-8'>

                    <div className='bg-white p-4 lg:p-8 text-center space-y-2'>

                        <div className='border-8 border-white relative w-[150px] h-[150px] mx-auto rounded-full overflow-hidden'>
                        {user?.image ? 
                            <Image src={user?.image} objectFit='cover' layout='fill' /> :
                            <HiUserCircle className="absolute inset-0 w-full h-full text-2xl text-neutral-300" />
                        }
                        </div>

                        <p className='font-bold'>{user?.name}</p>
                        <p className='uppercase text-xs'>{user?.department} <span className='inline-block w-2 h-2 rounded-full mx-2 bg-black'></span> {user?.office}</p>
                        {user?.campus && <p className='font-bold text-xs'>ASE {user?.campus}</p>}
                        <a href={`mailto:${user?.email}`} className='inline-block font-bold text-app-dark text-xs w-full break-words hover:underline'>{user?.email}</a>

                        {user?.quote && <p className="text-xs italic">
                            <ImQuotesLeft className="inline -mt-2 mr-2" />
                            {user?.quote}
                            <ImQuotesRight className="inline -mb-2 ml-2" />
                        </p>}

                    </div>

                    <div className='bg-white px-5 py-8 space-y-2'>
                        
                        <p className='font-bold text-app-dark'>Quick Links</p>

                        <div className='divide-y divide-neutral-100'>
                            <Link href="/alumni">
                                <a className='py-2 block text-sm font-bold hover:underline hover:text-app-dark cursor-pointer'>
                                    Aluimni
                                </a>
                            </Link>
                            <Link href="/student-profiles">
                                <a className='py-2 block text-sm font-bold hover:underline hover:text-app-dark cursor-pointer'>
                                    Student Profiles
                                </a>
                            </Link>
                            <Link href="/about">
                                <a className='py-2 block text-sm font-bold hover:underline hover:text-app-dark cursor-pointer'>
                                    About ASE
                                </a>
                            </Link>
                            <Link href="/admission/programmes">
                                <a className='py-2 block text-sm font-bold hover:underline hover:text-app-dark cursor-pointer'>
                                    Courses
                                </a>
                            </Link>
                            <Link href="/events">
                                <a className='py-2 block text-sm font-bold hover:underline hover:text-app-dark cursor-pointer'>
                                    Events
                                </a>
                            </Link>
                            <Link href="/news">
                                <a className='py-2 block text-sm font-bold hover:underline hover:text-app-dark cursor-pointer'>
                                    News
                                </a>
                            </Link>
                        </div>

                    </div>

                    <div className='bg-white px-5 py-8 space-y-2'>
                        
                        <p className='font-bold text-app-dark'>Campuses</p>

                        <div className='divide-y divide-neutral-100'>
                            <Link href="/campuses/benin">
                                <a className='py-2 block text-sm font-bold hover:underline hover:text-app-dark cursor-pointer'>
                                    ASE Benin
                                </a>
                            </Link>
                            <Link href="/campuses/cote-d-ivoire">
                                <a className='py-2 block text-sm font-bold hover:underline hover:text-app-dark cursor-pointer'>
                                    ASE Cote d'Ivoire
                                </a>
                            </Link>
                            <Link href="/campuses/nigeria">
                                <a className='py-2 block text-sm font-bold hover:underline hover:text-app-dark cursor-pointer'>
                                    ASE Nigeria
                                </a>
                            </Link>
                        </div>

                    </div>
                    
                </div> */}
            </div>

        </section>


      <Support />

      <Footer />
    </>
  )
}



export async function getStaticPaths() {
    return {
        paths: ['/artist/*'],
        fallback: 'blocking'
    }
}


export async function getStaticProps({ params: { slug } }) {

    const artist = artists.find( a => a.slug === slug );
    
    if(!artist){
        return {
            notFound: true
        }
    }

    return { 
      props: { 
        artist
      }
    };

}