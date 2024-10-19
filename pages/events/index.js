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
import SEO from '../../components/SEO';

const upcoming_events = [
  {
    title: "Skype Conference: Launch of the Pan-African Scientific Research Network",
    body: "On June 6th, African School of Economics, Institut Pasteur of Côte d’Ivoire and collaborating Africa-focused researchers from around the world will converge for the formal",
    location: "Zoom Meeting",
    date: "17 NOV 2022",
    time: "12:00 PM (WAT)"
  },
  {
    title: "Zoom Conference: Launch of the Pan-African Scientific Research Network",
    body: "On June 6th, African School of Economics, Institut Pasteur of Côte d’Ivoire and collaborating Africa-focused researchers from around the world will converge for the formal",
    location: "Zoom Meeting",
    date: "21 NOV 2022",
    time: "12:00 PM (WAT)"
  },
  {
    title: "Skype Conference: Launch of the Pan-African Scientific Research Network",
    body: "On June 6th, African School of Economics, Institut Pasteur of Côte d’Ivoire and collaborating Africa-focused researchers from around the world will converge for the formal",
    location: "Zoom Meeting",
    date: "17 NOV 2022",
    time: "12:00 PM (WAT)"
  },
  {
    title: "Zoom Conference: Launch of the Pan-African Scientific Research Network",
    body: "On June 6th, African School of Economics, Institut Pasteur of Côte d’Ivoire and collaborating Africa-focused researchers from around the world will converge for the formal",
    location: "Zoom Meeting",
    date: "21 NOV 2022",
    time: "12:00 PM (WAT)"
  },
  {
    title: "Skype Conference: Launch of the Pan-African Scientific Research Network",
    body: "On June 6th, African School of Economics, Institut Pasteur of Côte d’Ivoire and collaborating Africa-focused researchers from around the world will converge for the formal",
    location: "Zoom Meeting",
    date: "17 NOV 2022",
    time: "12:00 PM (WAT)"
  },
  {
    title: "Zoom Conference: Launch of the Pan-African Scientific Research Network",
    body: "On June 6th, African School of Economics, Institut Pasteur of Côte d’Ivoire and collaborating Africa-focused researchers from around the world will converge for the formal",
    location: "Zoom Meeting",
    date: "21 NOV 2022",
    time: "12:00 PM (WAT)"
  },
]

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

  return (
    <>
      <SEO
        title="Events"
        description="Events"
        image="/static/img/events.jpg"
      />

      <Navbar />

      <Intro text="Events" bg="/static/img/events.jpg"/>

      <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto space-y-3'>
        <Heading className="!text-left !text-black">Upcoming Events</Heading>

        <p className='text-xl font-bold py-5'>No Upcoming Events</p>
        {/* <div className='grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-0'>
          {upcoming_events.map(({title, body, location, date, time}, index) => (
            <div key={index} className='flex gap-3 lg:gap-6 col-span-6 lg:p-3'>
              <div className='relative'>
                <div className='bg-app-main p-3 text-white'>
                  <h1 className='text-xl lg:text-3xl font-bold'>{moment(date).format("DD")}</h1>
                  <p className='text-xs lg:text-sm uppercase'>{moment(date).format("MMM")}</p>
                  <p className='text-xs lg:text-sm'>{moment(date).format("YYYY")}</p>
                </div>
              </div>
              <div className="space-y-2">
                <Link href="/events/slug">
                  <a className="font-bold hover:underline">{title}</a>
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
        </div> */}
      </section>

      {/* <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto space-y-3'>
        <Heading className="!text-left !text-black">Past Events</Heading>

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
                <Link href="">
                  <a className="font-bold hover:underline">{title}</a>
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
      </section> */}

      <Support />

      <Footer />
    </>
  )
}
