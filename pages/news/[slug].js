import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiClock } from 'react-icons/fi';
import { HiCalendarDays } from 'react-icons/hi2';
import { SiFacebook, SiGmail, SiGooglemaps, SiLinkedin, SiTelegram, SiTwitter, SiWhatsapp } from 'react-icons/si';

import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Support from '../../components/Support';

import 'animate.css';
import sanitize from 'sanitize-html';
import moment from 'moment';
import SEO from '../../components/SEO';

import ReactHtmlParser from "react-html-parser";

export default function SingleNews({ posts, otherPosts }) {

    // return console.log(news);

    const router = useRouter();
    const { slug } = router.query;
    const base = "https://benin.africanschoolofeconomics.com";


  return <>
    <SEO
      title={posts?.title}
      description={posts?.title}
      image={`/static/img/${posts?.image}`}
    />
    
    <Navbar />

      <section style={{ backgroundImage: `url(/static/img/${ posts.image || '/static/img/bg.png'})` }} className={`relative py-12 px-6 lg:p-12 h-[40vh] grid place-content-center bg-cover bg-center items-center isolate`}>
          <div className="absolute top-0 left-0 w-full h-full  -z-10"></div>
      </section>

      <section className='lg:px-20 py-10 px-5 flex gap-8 bg-app-dark !text-white'>
          <div className='space-y-2'>
              <p className='font-bold text-lg lg:text-3xl text-white' >
            {posts.title}
                    </p>
              <p className='flex space-x-3'>
                  <span className='flex gap-2 items-center text-xs uppercase'>
                      <HiCalendarDays className="" />
                      {moment(posts.createdAt).format('Do MMM, YYYY')}
                  </span>
                  <span className='flex gap-2 items-center text-xs uppercase'>
                      <FiClock className="" />
                      {moment(posts.createdAt).format('HH:mm:ss A z')} GMT
                  </span>
              </p>
          </div>
      </section>

      <section  className='bg-neutral-100 lg:py-20 lg:px-16 py-12 px-5 mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto'>
              <div className='lg:col-span-8 space-y-8'>

                  <div className='bg-white p-4 lg:px-8 py-4 flex gap-4 items-center'>
                      <p className='font-bold text-sm'>Share: </p>
                      <Link
                          href={`https://facebook.com/sharer/sharer.php?u=${base+router.asPath}&quote=${'Zoom Meeting'}`}
                          target="_blank"
                          className="">
                          <SiFacebook className="text-app-dark" />
                      </Link>
                      <Link
                          href={`https://twitter.com/intent/tweet?text=${'Zoom meeting'}&hashtags=${'ASE_Event'}&url=${base+router.asPath}`}
                          target="_blank"
                          className="">
                          <SiTwitter className="text-sky-400" />
                      </Link>
                      <Link
                          href={`https://wa.me/?text=${'Zoom meeting'}%20${base+router.asPath}`}
                          target="_blank"
                          className="">
                          <SiWhatsapp className="text-green-600" />
                      </Link>
                      <Link
                          href={`https://t.me/share/url?text=${'Zoom meeting'}&url=${base+router.asPath}`}
                          target="_blank"
                          className="">
                          <SiTelegram className="text-[#3d98b3]" />
                      </Link>
                      <Link
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${base+router.asPath}`}
                          target="_blank"
                          className="">
                          <SiLinkedin className="text-app-main" />
                      </Link>
                      <Link
                          href={`https://mail.google.com/mail/u/0/?view=cm&su=${'Zoom Meeting'}&body=${base+router.asPath}`}
                          target="_blank"
                          className="">
                          <SiGmail className="text-red-500" />
                      </Link>
                  </div>

                   <div className="bg-white p-4 lg:p-8 text-base lg:text-lg space-y-4">


                       <div dangerouslySetInnerHTML={createMarkup(posts.description)} />
                       {/*{ReactHtmlParser(posts.description,{decodeEntities:true})}*/}

                       {/*<div dangerouslySetInnerHTML={{ __html: posts.description }}></div>*/}
                      {/*{posts.description.split('\n').map((paragraph, index) => (*/}
                      {/*  <p key={index} className="mb-4">*/}
                      {/*    {paragraph}*/}
                      {/*  </p>*/}
                      {/*))}*/}
                    </div>

                  
              </div>

              <div className='lg:col-span-4 space-y-12'>

                  <div className='bg-white px-5 py-8 space-y-2'>
                      
                      <p className='font-bold text-app-dark text-2xl'  style={{ fontFamily: 'Playfair Display' }}>News</p>

                      <div className='divide-y divide-neutral-300'>
                          {otherPosts.map(({ _id,  title }) => 
                              <Link
                                  key={_id}
                                  href={`/news/${_id}`}
                                  className='block py-2 text-base  font-semibold hover:underline hover:text-app-dark cursor-pointer'
                                   style={{ fontFamily: 'Inter' }}>

                                  {title}

                              </Link>
                          )}
                      </div>

                  </div>

                  <div className='relative isolate bg-[url(/static/img/brochure.jpg)] bg-cover h-[450px] flex flex-col items-center justify-end px-5 py-8 space-y-2'>
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-app-dark to-transparent -z-10"></div>

                      <p className='w-full font-bold text-center text-white text-2xl'
                       style={{ fontFamily: 'Playfair Display' }}>Need a quick guide into ASE? Get our brochure</p>

                      <Link
                          href="https://benin.africanschoolofeconomics.com/wp-content/uploads/2020/06/New-ASE-CI-Brochure-Final-2020.pdf"
                          target="_blank"
                          className='inline-block'>

                          <Button className="!bg-white !text-app-dark !text-base lg:!py-2 lg:!px-4" text="Download Brochure"></Button>

                      </Link>
                  </div>
                  
              </div>
          </div>

      </section>


    <Support />

    <Footer />
  </>;
}






function createMarkup(value) {
    //<div style="display:inline-flex">  <img src="/static/img/profff.jpg" style="width: 40%"> <img src="/static/img/profff.jpg" style="width: 40%; margin-left: 5%"> </div>
    return {__html: `${value}` };
}




export async function getServerSideProps(context) {
  const { slug } = context.query;

  try {
    const response = await fetch(`https://ase-backend-1.onrender.com/posts/${slug}`);
    const data = await response.json();


     


      if (response.ok) {

         
      return {
        props: {
          posts: data.post,
          otherPosts: data.otherPosts,
        },
      };
    } else {
      console.error(data.message);
      return {
        props: {
          posts: null,
          otherPosts: [],
        },
      };
    }
  } catch (error) {
    console.error(error.message);
    return {
      props: {
        post: null,
        otherPosts: [],
      },
    };
  }
}