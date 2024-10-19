import moment from 'moment';
import Head from 'next/head';
import Link from 'next/link';
import { FiClock } from 'react-icons/fi';
import { SiGooglemaps } from 'react-icons/si';

import Footer from '../components/Footer.js';

import Heading from '../components/Heading.js';
import Intro from '../components/Intro.js';
import Navbar from '../components/Navbar.js';
import Support from '../components/Support';
import 'animate.css';
import Image from 'next/image';
import { useState } from 'react';
import SEO from '../components/SEO';
import Pagination from '../components/pagination.js';
import { useRouter } from 'next/router';
const newsData = [
    {
      _id: '1',
      title: 'ASE and AUDA-NEPAD discuss partnership with Nigeria First Lady on Entrepreneurship scholarships',
      image: 'https://res.cloudinary.com/duczlqzws/image/upload/v1706600805/ase-in-th-news/slide6_pfxpnu.jpg',
     
      url : "https://www.vanguardngr.com/2023/09/200-students-to-benefit-from-african-school-of-economics/",
      
    },
    {
      _id: '3',
      title: 'ASE hosts launch of 5G Mokki Tech Spaces',
      image: 'https://res.cloudinary.com/duczlqzws/image/upload/v1706601087/ase-in-th-news/technology-particle-dots-5g-digital-corporate-background_1_b2tgdm.jpg',
      
      url : "https://freshangleng.com/28284/african-school-of-economics-launches-5g-mobile-technology-spaces-for-distributed-learning-and-remote-work",
      
    },
    {
      _id: '5',
      title: 'ASE discusses sports partnerships with Rivers state government.',
      image: 'https://res.cloudinary.com/duczlqzws/image/upload/v1706601135/ase-in-th-news/sports_mf0do6.jpg',
      url : "https://www.thisdaylive.com/index.php/2023/09/13/institute-partners-rivers-govt-on-sports-education",
      
    },
    {
      _id: '2',
      title: 'ASE expands to Zanzibar',
      image: 'https://res.cloudinary.com/duczlqzws/image/upload/v1706602649/ase-in-th-news/map-tanzania-polygonal-mesh-line-map-flag-map_1_cd5utn.webp',
     
      url : "https://tribuneonlineng.com/the-african-school-of-economics-expands-to-zanzibar/",
      
    },
    
    
    {
      _id: '4',
      title: 'ASE launches in Zanzibar',
      image: 'https://res.cloudinary.com/duczlqzws/image/upload/v1706600724/ase-in-th-news/zanzibar_uvlbxj.webp',
      url : "https://www.thecitizen.co.tz/tanzania/zanzibar/african-school-of-economics-expands-to-zanzibar-4441924",
      
    },
   
    // Add more news items as needed
  ];
  
export default function Home() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newsData.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = async (page) => {
    // Simulating asynchronous page change
    setCurrentPage(page);
  };

  return (
    <>
      <SEO
        title="ASE In The News"
        description="News"
        image="/static/img/events.jpg"
      />

      <Navbar />

      <Intro text="News" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693939588/banners/news_banner_ivqmzc.png"/>

      {/* Latest News */}
      <section className='lg:py-20 lg:px-16 py-12 px-5 overflow-hidden flex flex-col lg:flex-row gap-8 bg-[rgb(71,120,200,.05)]'>
        
        <div className='space-y-8 max-w-6xl mx-auto'>
          
          <h2 className="text-3xl lg:text-4xl  text-left mb-4 font-[500]" style={{ fontFamily: 'Playfair Display' }}>ASE In The News</h2>
          
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12 mx-auto'>
            {currentPosts.map(({ title, image, description, category, url, _id }, index) => (
              <div key={index} className='cursor-pointer rounded-lg overflow-hidden shadow-lg bg-white'>
                <div className='relative w-full h-48'>
                  <Image src={image} layout='fill' objectFit='cover' alt={title} />
                  
                </div>
                <div className='relative bg-white p-4'>
                  <div className='space-y-4 py-2'>
                    <Link target="_blank" href={url} className="block font-bold text-lg text-app-dark hover:underline" style={{ fontFamily: 'Inter' }}>
                      {title}
                    </Link>
                    <div className='text-sm text-gray-700 ' style={{ fontFamily: 'Inter' }}>
                      {description}
                    </div>
                    <Link href={url} target="_blank" className="inline-block font-bold text-sm text-app-dark hover:border-b border-app-dark">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Render the pagination component */}
          <Pagination
            totalPages={Math.ceil(newsData.length / postsPerPage)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
          
        </div>
      </section>

      <Support />
      <Footer />
    </>
  );
}
