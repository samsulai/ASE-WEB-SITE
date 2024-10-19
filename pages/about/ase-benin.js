import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

import Heading from '../../components/Heading';
import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
import Support from '../../components/Support';

import { team } from '../../data';
import parseSlug from '../../hooks/parseSlug';

const management = [
{
        "name": "Mr. Bassarou Yacoubou",
        "department": "IT Assistant",
        office: "",
        "image": "/static/img/people/bassarou.jpg",
        coverImage: "",
          about: "",
          cv: "",
          publications: [],
          email: "byacoubou@africanschoolofeconomics.com"
    },
    {
        "name": "Mr. Sylvestre Yahouedehou",
        "department": "Associate Director, Information Technology, Library",
        office: "",
        "image": "",
        coverImage: "",
          about: "",
          cv: "",
          publications: [],
          email: ""
    },
    {
        "name": "Mr. Florent Tohionon",
        "department": "Associate Director, Logistics",
        office: "",
        "image": "",
        coverImage: "",
          about: "",
          cv: "",
          publications: [],
          email: ""
    },
    {
        "name": "Mr. Aubin Hounssokou",
        "department": "Director of Finance",
        office: "",
        "image": "/static/img/people/aubin.jpg",
        coverImage: "",
        about: "",
        cv: "",
        publications: [],
        email: ""
    },
    {
        "name": "Mr. Louis Tomavo",
        "department": "Manager of Institues",
        office: "Research Institutes",
        "image": "/static/img/people/tomavo.jpg",
        coverImage: "",
          about: "",
          cv: "",
          publications: [],
          email: ""
    },
    {
        "name": "Mrs. Christiane Onodje",
        "department": "Administrative Secretary in Charge of Human Resources",
        office: "",
        "image": "",
        coverImage: "",
          about: "",
          cv: "",
          publications: [],
          email: ""
    },
    {
        "name": "Mrs. Aïchatou Hougbe",
        "department": "Administrative Affairs Officer",
        office: "",
        "image": "/static/img/people/hougbe.jpg",
        coverImage: "",
          about: "",
          cv: "",
          publications: [],
          email: ""
    },
     {
        "name": "Mr. Christophe Nouhanou",
        "department": "Liaison Officer",
        office: "",
        "image": "",
        coverImage: "",
          about: "",
          cv: "",
          publications: [],
          email: ""
    }
]
export default function Home() {


  return <>
    <SEO
      title="ASE's Benin Team"
      description="ASE's Benin Team"
      image="/static/img/bg.png"
    />

    <Navbar />

    <Intro text="ASE Benin Team" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1694163025/banners/benin_campus_bh02w9.png"/>

   <section className='lg:py-20 lg:px-16 py-12 px-5 mx-auto'>
  <div className='text-center mb-8'>
   
  </div>
  <div className='flex flex-wrap justify-center -mx-4'>
    {management.map(({ name, department, image }, index) => (
      <div
        key={index}
        className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4'
      >
        <div className='bg-[#084a7f] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow'>
          <div className='relative w-full h-64'>
            <img src={image || "/static/img/bg.png"} className='object-cover object-center w-full h-full' alt={`${name}'s Profile`} />
          </div>
          <div className='text-center p-4 text-white'>
            <p className='font-bold hover:underline cursor-pointer text-white'>{name}</p>
            <p className='text-base text-white'>{department || ' - '}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>







    



    

    <Footer />
  </>;
}
