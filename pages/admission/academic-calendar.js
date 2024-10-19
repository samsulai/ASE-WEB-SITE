import Head from 'next/head';
import Footer from '../../components/Footer';

import Intro from '../../components/Intro';
import Navbar from '../../components/Navbar';
import SEO from '../../components/SEO';
import Support from '../../components/Support';

export default function Home() {


    const calendar = [
        {
            year: "2022",
            month: "November",
            days: [
                {
                    day: "12th",
                    event: "Something happens in ASE",
                    description: "Since 2015-2016, the African School of Economics has offered a Certificate in Impact Evaluation in Benin as part of its Executive Education portfolio. Beginning in 2020, Executive Education will be offered at ASE’s Abidjan campus. For more information on this program, contact us"
                },
                {
                    day: "16th",
                    event: "Something happens in ASE",
                    description: "Since 2015-2016, the African School of Economics has offered a Certificate in Impact Evaluation in Benin as part of its Executive Education portfolio. Beginning in 2020, Executive Education will be offered at ASE’s Abidjan campus. For more information on this program, contact us"
                },
                {
                    day: "28",
                    event: "Something happens in ASE",
                    description: "Since 2015-2016, the African School of Economics has offered a Certificate in Impact Evaluation in Benin as part of its Executive Education portfolio. Beginning in 2020, Executive Education will be offered at ASE’s Abidjan campus. For more information on this program, contact us"
                },
            ]
        },
        {
            year: "2022",
            month: "December",
            days: [
                {
                    day: "12th",
                    event: "Something happens in ASE",
                    description: "Since 2015-2016, the African School of Economics has offered a Certificate in Impact Evaluation in Benin as part of its Executive Education portfolio. Beginning in 2020, Executive Education will be offered at ASE’s Abidjan campus. For more information on this program, contact us"
                },
                {
                    day: "16th",
                    event: "Something happens in ASE",
                    description: "Since 2015-2016, the African School of Economics has offered a Certificate in Impact Evaluation in Benin as part of its Executive Education portfolio. Beginning in 2020, Executive Education will be offered at ASE’s Abidjan campus. For more information on this program, contact us"
                },
                {
                    day: "28",
                    event: "Something happens in ASE",
                    description: "Since 2015-2016, the African School of Economics has offered a Certificate in Impact Evaluation in Benin as part of its Executive Education portfolio. Beginning in 2020, Executive Education will be offered at ASE’s Abidjan campus. For more information on this program, contact us"
                },
            ]
        },
        {
            year: "2023",
            month: "January",
            days: [
                {
                    day: "3rd",
                    event: "Something happens in ASE",
                    description: "Since 2015-2016, the African School of Economics has offered a Certificate in Impact Evaluation in Benin as part of its Executive Education portfolio. Beginning in 2020, Executive Education will be offered at ASE’s Abidjan campus. For more information on this program, contact us"
                },
            ]
        },
    ]


  return (
    <>
      <SEO
        title="Academic Calendar"
        description="ASE's Vision"
        image="/static/img/bg.png"
      />

      <Navbar />

      <Intro>Academic Calendar</Intro>

      <section className='lg:py-20 lg:px-16 py-12 px-5 mx-auto space-y-8'>

        {calendar.map(({ year, month, days }, index) => (
            <div key={index} className=''>
                <p className='font-bold text-2xl p-4 px-0 lg:px-4 border-b border-black'>{month}, {year}</p>

                <div className='grid grid-col-1 lg:grid-cols-3'>
                    {days.map(({ day, event, description }, index) => (
                        <div key={index} className='lg:p-4'>
                            <p className='text-3xl font-bold text-app-dark  pr-4 py-4 border-b lg:border-r border-black'>{day}</p>

                            <div className='space-y-4 py-4'>
                                <p className='font-bold'>{event}</p>
                                <p className='text-sm text-neutral-700'>{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}

      </section>
      
      <Support />

      <Footer />
    </>
  )
}
