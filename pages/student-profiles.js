import moment from 'moment';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FiClock } from 'react-icons/fi';
import { GiGraduateCap } from 'react-icons/gi';
import { SiGooglemaps } from 'react-icons/si';

import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import Support from '../components/Support';

import SEO from '../components/SEO';

import 'animate.css';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import parseSlug from '../hooks/parseSlug';
import { useState } from 'react';

import { studentProfiles } from '../data';


const past_events = [
  {
    title: "Skype Conference: Launch of the Pan-African Scientific Research Network",
    body: "On June 6th, African School of Economics, Institut Pasteur of Côte d’Ivoire and collaborating Africa-focused researchers from around the world will converge for the formal",
    location: "Zoom Meeting",
    date: "17 OCT 2022",
    time: "12:00 PM (WAT)"
  },
  {
    title: "Zoom Conference: Launch of the Pan-African Scientific Research Network",
    body: "On June 6th, African School of Economics, Institut Pasteur of Côte d’Ivoire and collaborating Africa-focused researchers from around the world will converge for the formal",
    location: "Zoom Meeting",
    date: "21 OCT 2022",
    time: "12:00 PM (WAT)"
  },
]


export default function Home() {

  return <>

    <SEO
      title="Student Profiles"
      description="ASE aims to produce pioneers in the economic and research space and here are some of our great minds, our studentProfiles"
      image="/static/img/vision.jpg"
    />

    <Navbar />

    {/* <Intro text="Alumni" bg="https://benin.africanschoolofeconomics.com/wp-content/uploads/2018/02/ase-1920x1442-1920x522-1920x496.jpg"/> */}
    <Intro text="Student Profiles" bg="/static/img/students-together.jpg"/>

    <section className='lg:py-20 lg:px-16 py-12 px-5 mx-auto'>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6'>
        {studentProfiles.map(({quote, name, course, image, grad_year}, index) => (
          <div key={index} className='shadow-2xl'>
            <div className=''>
              <div className='relative isolate w-full h-72 overflow-hidden mx-auto'>
                <Image src={image || '/static/img/bg.png'} layout="fill" objectFit="cover" />
                <div className='shadow-2xl absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent z-10'></div>
              </div>
            </div>
            <div className="space-y-2 bg-white p-4 min-h-[180px]">
              <Link
                href={`/people/${parseSlug(name)}`}
                className='flex text-black font-bold gap-3 text-xs lg:text-base hover:underline'>

                <span className='space-x-2 items-center'>
                  <GiGraduateCap className='inline-block text-sm' />
                  <span className=''>
                    {name}
                  </span>
                </span>

              </Link>
              <p className='text-black gap-3 text-xs'>
                <span className='space-x-2 items-center'>
                  {course} (Grad. {grad_year})
                </span>
              </p>

              <p className="text-black text-xs italic">
                <ImQuotesLeft className="text-black inline -mt-2 mr-2" />
                {quote}
                <ImQuotesRight className="text-black inline -mb-2 ml-2" />
              </p>
              {/* <Link href="">
              </Link> */}
            </div>
          </div>
        ))}
      </div>

    </section>

    <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto space-y-3'>
      <Heading className="!text-left !text-black">Events</Heading>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-0'>
        {past_events.map(({title, body, location, date, time}, index) => (
          <div key={index} className='flex gap-3 lg:gap-6 col-span-6 lg:p-3'>
            <div className='relative'>
              <div className='bg-app-main p-3 text-white'>
                <h1 className='text-xl lg:text-3xl font-bold'>{moment(date).format("DD")}</h1>
                <p className='text-xs lg:text-sm uppercase'>{moment(date).format("MMM")}</p>
                <p className='text-xs lg:text-sm'>{moment(date).format("YYYY")}</p>
              </div>
            </div>
            <div className="space-y-2">
              <Link href="" className="font-bold hover:underline">
                {title}
              </Link>
              <p className="text-xs">{body}</p>
              <p className='flex flex-col lg:flex-row text-app-main font-bold gap-2 text-xs'>
                <span className='flex gap-2 items-center'>
                  <SiGooglemaps className='text-xs' />
                  {location}
                </span>
                <span className='flex gap-2 items-center'>
                  <FiClock className='text-xs' />
                  {time}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <Support />

    <Footer />
  </>;
}
