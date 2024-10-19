import Link from 'next/link';

import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';

import 'animate.css';
import { useState } from 'react';
import SEO from '../components/SEO';


const jobs = [
    {
        campus: "ASE Benin",
        openings: [
            { 
                position: "Enrollment Manager",
                team: "Recruitment & Marketing",
                location: "On Site",
                link: "#"
            },
            { 
                position: "Advertising Manager",
                team: "Recruitment & Marketing",
                location: "Remote",
                link: "#"
            }
        ]
    },
    {
        campus: "ASE Cote d'Ivoire",
        openings: [
            { 
                position: "Enrollment Manager",
                team: "Recruitment & Marketing",
                location: "On Site",
                link: "#"
            },
            { 
                position: "Advertising Manager",
                team: "Recruitment & Marketing",
                location: "Remote",
                link: "#"
            }
        ]
    },
    {
        campus: "ASE Nigeria",
        openings: [
            { 
                position: "Enrollment Manager",
                team: "Recruitment & Marketing",
                location: "On Site",
                link: "#"
            },
            { 
                position: "Advertising Manager",
                team: "Recruitment & Marketing",
                location: "Remote",
                link: "#"
            }
        ]
    },
];


export default function JobOpenings() {

    const [ job, setJob ] = useState(jobs);

    const handleChange = (e) => {
        setJob(jobs.filter(job => job.campus === e.target.value))
    }

  return <>

  <SEO
      title="Available Job Openings at ASE"
      description="Available Job Openings at ASE"
      image="/static/img/work-at-ase.jpg"
  />

    <Navbar />

    <Intro text="Job Openings" bg="/static/img/work-at-ase.jpg"/>

    <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-6xl space-y-8 mx-auto'>

      <div className=''>
          <h1 className='font-bold text-xl lg:text-3xl'>
              <span className="text-app-main">Available</span><br /> Openings
          </h1>
      </div>

      {(job.length === 0) ? 
      <div className='space-y-4'>
          <p className='lg:w-2/3'>
              No openings at the moment but we encourage you to check our site regularly for future openings. Please note that only those individuals whose qualifications match the current needs of the organization will be considered as applicants.
          </p>
      </div> :
      <p className='lg:w-2/3'>
          Here are some job offerings available at ASE
      </p>
      }

      <div className='space-y-16 py-8'>

      <select className='border border-black px-2 py-1 w-2/3 lg:w-auto' onChange={handleChange}>
          <option value="">Choose Campus</option>
          <option value="ASE Benin">ASE Benin</option>
          <option value="ASE Cote d'Ivoire">ASE Cote d'Ivoire</option>
          <option value="ASE Nigeria">ASE Nigeria</option>
      </select>

      {(job.length > 0) && job.map(({campus, openings}, index) => (
          <div key={index} className="space-y-4">
              <div className=''>
                  <h1 className='font-bold text-xl lg:text-3xl'>{campus}</h1>
              </div>

              {openings.map(({position, team, location, link}, index) => (
                  <div key={index} className='pl-8'>
                      <Link
                          href={link}
                          className='block font-bold text-base lg:text-xl hover:underline'>
                          {position}
                      </Link>
                      <p className='font-bold text-xs text-app-main'>{team}</p>
                      <p className='text-xs text-neutral-400'>{location}</p>
                  </div>
              ))}
          </div>
      ))}
      </div>

    </section>

    {/* <Support /> */}

    <Footer />
  </>;
}
