import moment from 'moment';
import Head from 'next/head';
import Link from 'next/link';
import { FiClock } from 'react-icons/fi';
import { SiGooglemaps } from 'react-icons/si';

import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import Support from '../../components/Support';

import 'animate.css';
import Image from 'next/image';
import { news } from '../../data';
import sanitize from 'sanitize-html';
import { fetchNews } from '../../hooks/fetchNews';
import { useState } from 'react';
import SEO from '../../components/SEO';
import Pagination from '../../components/pagination.js';
import { useRouter } from 'next/router';


export default function Home({ posts, totalPages, currentPage }) {
  const router = useRouter();
const handlePageChange = async (page) => {
    // Use the "router.query" object to access the current query parameters
    const query = { ...router.query, page: page.toString() };

    // Use "router.push" to navigate to the same page with updated query parameters
    await router.push({
      pathname: '/news',
      query,
    });
  };

  // ...

 

  
  return <>
    <SEO
      title="News"
      description="News"
      image="/static/img/events.jpg"
    />

    <Navbar />

    <Intro text="News" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693939588/banners/news_banner_ivqmzc.png"/>

    {/* Latest News */}
    <section className='lg:py-20 lg:px-16 py-12 px-5 overflow-hidden flex flex-col lg:flex-row gap-8 bg-[rgb(71,120,200,.05)]'>
      
      <div className='space-y-8 max-w-6xl mx-auto'>
        
<h2 className="text-3xl lg:text-4xl  text-left mb-4 font-[500]"
  style={{ fontFamily: 'Playfair Display' }}>Updates</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12 mx-auto'>
      {posts.map(({ title, image, description, category, createdAt, _id }, index) => (
        <div key={index} className='cursor-pointer rounded-lg overflow-hidden shadow-lg'>
          <div className='relative w-full h-48'>
            <Image src={`/static/img/${image}`} layout='fill' objectFit='cover' alt={title} />
            <div className="absolute top-0 left-0 w-full h-full "></div>
            <div className="absolute top-0 right-0 p-2 bg-[#4879c8] bg-gradient-to-r from-[#4879c8] to-[#6495ED] text-white text-base font-bold rounded-bl-lg">
            {moment(createdAt).format("Do, MMM YYYY")}
          </div>
          </div>
          <div className='relative bg-white p-4'>
            <div className='space-y-4 py-2'>
              <Link href={`/news/${_id}`} className="block font-bold text-lg text-app-dark hover:underline" style={{ fontFamily: 'Inter' }}>
                {title}
              </Link>
              <div className='text-sm text-gray-700 ' dangerouslySetInnerHTML={{ __html: sanitize(truncateTitle(description)) }} style={{ fontFamily: 'Inter' }}></div>
              <Link href={`/news/${_id}`} className="inline-block font-bold text-sm text-app-dark hover:border-b border-app-dark">
                
                  Read More
               
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
{/* Render the pagination component */}
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        
      </div>
    </section>

    

    <Support />

    <Footer />
  </>;
}

const truncateTitle = (title, maxLength = 80) => {
  if (title.length <= maxLength) {
    return title;
  }
  return title.substring(0, maxLength) + '...';
};
export async function getServerSideProps(context) {
  const { category, limit, page } = context.query;
  const defaultCategory = 'News';
  const defaultLimit = 6;
  const defaultPage = 1;

  const dynamicCategory = category || defaultCategory;
  const dynamicLimit = parseInt(limit) || defaultLimit;
  const dynamicPage = parseInt(page) || defaultPage;

  try {
    const apiEndpoint = `https://ase-backend-1.onrender.com/posts/news?category=${dynamicCategory}&limit=${dynamicLimit}&page=${dynamicPage}`;
    const response = await fetch(apiEndpoint);
    const data = await response.json();

    return {
      props: {
        posts: data.posts,
        totalPages: data.totalPages,
        currentPage: dynamicPage,
      },
    };
  } catch (err) {
    return {
      props: {
        posts: [],
        totalPages: 0,
        currentPage: dynamicPage,
      },
    };
  }
}
