import Image from "next/image";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Heading from "./Heading";

import 'tiny-slider/dist/tiny-slider.css';
import { useEffect, useState } from "react";


const speak = [
    { 
      thought: "At the end of my training I would like to work in a development institution or organization within the field of governance and political economy. I will continue conducting research while gaining at least two years of professional experience before completing my training with a PhD in Public Policy, focused on political analysis and program evaluation. This will allow me to become more efficient in my work.",
      author: "Nafissatou Lamidi",
      image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2018/06/Nafi-profile.jpg",
    },
    { 
      thought: "I came to ASE seeking to combine serious training in economics with the chance to live in the region of my academic interest. I also look forward to joining IERPE's research agenda in order to acquire more experience in development economics.",
      author: "Julio S. Solís",
      image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2018/05/IMG_3864-2-1.jpg",
    },
    { 
      thought: "My goal is to learn all of the technically practical and theoretical skills in economics that would enhance my professional goals of becoming an excellent researcher. These hands-on skills would prepare me for greater responsibilities in research and I feel the African School of Economics (ASE) is well positioned to enhance my knowledge.",
      author: "Joseph Kamara",
      image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2018/05/Joseph-260x370.jpg",
    },
    { 
      thought: "ASE allows me to gain useful technical skills in economics, statistics and mathematics as well as a series of software, which allows me to be effective and efficient in applied research and professional writing. Most importantly, my skill in English has improved enormously such that I feel confident of pursuing my dream of obtaining a PhD at a top university in the US or the UK.",
      author: "Estelle Kamhoua",
      image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2018/05/Estelle3.jpg",
    },
    { 
      thought: "ASE offers an incredible opportunity to explore and acquire the knowledge necessary for success in each program offered. For example, I enjoyed the improvement English and Mathematics courses offered at the beginning of the first semester. I also greatly appreciate the availability of ASE's professors and administration, who work hard to help students achieve their goals. In particular, the PiAfs (Princeton in Africa Fellows) have helped me remarkably not only with strengthening my English but also with familiarizing myself with North American writing methodologies.",
      author: "Patel Gbedjemaiho",
      image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2018/06/IMG_3851.jpg",
    },
    { 
      thought: "I chose to study at ASE because of the English curriculum, which I hope will prepare me for pursuing a Ph.D. in the United States.",
      author: "Lucie Assonfack",
      image: "https://benin.africanschoolofeconomics.com/wp-content/uploads/2017/12/lucie-assonfack.jpg",
    },
]

function StudentStories(){
    
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
  
  
    useEffect(() => {
  
      const settings = {
        loop: true,
        lazyload: true,
        autoplay: false,
        nav: false,
        mouseDrag: false,
        controls: false,
        items: 1,
        autoplayButton: false,
        autoplayButtonOutput: false,
        speed: 1000,
      }
  
      const TNS = require('tiny-slider/src/tiny-slider');
  
      let slider1 = TNS.tns({...settings, container: '#wordsSlide',});
      let slider2 = TNS.tns({...settings, container: '#imageSlide',});
  
      setSlider1(slider1);
      setSlider2(slider2);
      
    }, []);


    return (
        <section className='lg:py-20 lg:px-16 py-12 px-5 bg-app-light'>

            <h2 className="text-3xl text-black lg:text-4xl font-bold text-center mb-4 font-[500]" style={{ fontFamily: 'Playfair Display' }}>Students Speak</h2>

            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 py-8 lg:py-20 max-w-5xl mx-auto'>

            <div className='space-y-4'>
                <div id='wordsSlide' className='flex justify-center gap-2'>
                {speak.map(({thought, author}, index) => (
                    <div key={index} className='space-y-4'>
                    <p className='text-base italic text-right'>
                        "{thought}"</p>

                    <p className='text-base font-bold text-right'>{author}</p>
                    </div>
                ))}
                </div>

                <div className='flex gap-2 justify-end'>
                <div onClick={() => {slider1.goTo('prev'); slider2.goTo('prev')}} className='border-2 w-20 p-2 grid place-content-center border-app-dark cursor-pointer'><HiArrowLeft className="text-app-dark text-xl x-auto" /></div>
                <div onClick={() => {slider1.goTo('next'); slider2.goTo('next')}} className='border-2 w-20 p-2 grid place-content-center border-app-dark cursor-pointer'><HiArrowRight className="text-app-dark text-xl x-auto" /></div>
                </div>
            </div>

            <div className='lg:w-2/3 lg:translate-y-20 isolate'>
                <div id='imageSlide' className='flex justify-center'>
                {speak.map(({image}, index) => (
                    <div key={index} className='relative w-full min-h-[300px]'>
                      <div className='shadow-2xl absolute top-0 left-0 w-full h-full  z-10'></div>
                      <Image src={image} layout='fill' objectFit='cover' objectPosition="top" />
                    </div>
                ))}
                </div>
            </div>


            </div>

        </section>
    );
}

export default StudentStories;