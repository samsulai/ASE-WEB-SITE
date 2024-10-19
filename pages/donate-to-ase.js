import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { GiArchiveResearch, GiCommercialAirplane } from 'react-icons/gi';
import { SiGooglescholar } from 'react-icons/si';

import Button from '../components/Button';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Navbar from '../components/Navbar';
import Support from '../components/Support';
import Intro from '../components/Intro';

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


export default function SupportASE() {

    const [ job, setJob ] = useState(jobs);

    const handleChange = (e) => {
        setJob(jobs.filter(job => job.campus === e.target.value))
    }

  return (
    <>
      <SEO
        title="Donate to ASE"
        description="The African School of Economics (ASE) is based on a sustainable model; our operating expenses are funded by tuition and fees."
        image="/static/img/support-ase.jpg"
      />

      <Navbar />

      <Intro text="Support ASE" bg="/static/img/support-ase.jpg"/>

      <section className='lg:py-20 lg:px-16 py-12 px-5 space-y-8 mx-auto'>

        <div className=''>
            <h1 className='font-bold text-xl lg:text-3xl'>
                <span className="text-app-main">Donate</span><br /> To ASE
            </h1>
        </div>

        <div className='space-y-4'>
            <p className='lg:w-2/3'>
                The African School of Economics (ASE) is based on a sustainable model; our operating expenses are funded by tuition and fees. Thanks to your donation, ASE will continue to grow. Your donation can go towards three different funds:
            </p>
        </div>

      </section>


      <section className='lg:py-20 lg:px-16 py-12 px-5 space-y-8 mx-auto bg-app-main text-white'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white'>
            <div className='space-y-4 p-4'>
                <SiGooglescholar className="text-3xl text-white" />
                <h1 className='font-bold text-2xl'>Scholarships</h1>
                <p className='text-sm'>
                    Outstanding graduate students are essential to a vibrant program. Scholarships provide a critical edge to our ability to attract the best students. Most graduate students require financial support in order to pursue their studies. Individuals and organisations that support students at the school make a vital difference in helping us to attract the very best students regardless of their financial circumstances.
                </p>
            </div>
            <div className='space-y-4 p-4'>
                <GiCommercialAirplane className="text-3xl text-white" />
                <h1 className='font-bold text-2xl'>Faculty Travel Funds</h1>
                <p className='text-sm'>
                    Donations are applied toward grants that fund research trips and conference registration fees for our faculty members. Funds can also cover expenses associated with field research and can facilitate the invitation of high-profile visitors to visit ASE. These intellectual exchanges are of tremendous value to our research and education.
                </p>
            </div>
            <div className='space-y-4 p-4'>
                <GiArchiveResearch className="text-3xl text-white" />
                <h1 className='font-bold text-2xl'>Research Funds</h1>
                <p className='text-sm'>
                    Individuals and organisations that support research activities at ASE contribute to the consolidation of ASE’s research institutes. Research is a key element in our university. Your donation will make it possible to pursue in-depth original study about topics of interest.<br /><br />Donors will receive an annual report with detailed information on how gifts have been used.
                </p>
            </div>
        </div>
      </section>


      <section className='lg:py-20 lg:px-16 py-12 px-5 space-y-8 mx-auto'>
        {/* <h1 className='text-center font-bold text-3xl'>We offer two ways of offering support</h1> */}

        <div className=''>
            <h1 className='font-bold text-xl lg:text-3xl'>
                Corporate Partnerships
            </h1>
        </div>

        <div className='space-y-4'>
            <p className='lg:w-2/3'>
            International partnerships are vital to our mission. These partnerships synergize joint research, facilitate faculty and student exchange, and bring international perspectives into the classroom. Through our partnerships, we aim to give students and researchers opportunities to learn from and contribute to the real world of research and data.
            </p>

            <p className='lg:w-2/3'>
                If you are interested in exploring our corporate partnership opportunities, send an email to <a href='mailto:information@africanschoolofeconomics.com' className="text-app-main font-bold hover:underline">information@africanschoolofeconomics.com</a> (<strong>Subject:</strong> Corporate partnerships).
            </p>
        </div>
      </section>

      {/* <Support /> */}

      <Footer />
    </>
  )
}
