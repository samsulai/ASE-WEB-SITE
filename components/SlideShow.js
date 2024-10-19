import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from "./Button";
import useTranslation from 'next-translate/useTranslation';
import Image from "next/image";
import {motion} from "framer-motion"
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useEffect, useState } from 'react';

const config = {
    showStatus: false, 
    showThumbs: false,
    autoPlay: true,
    interval: 4200,
    infiniteLoop: true,
    animationHandler: "fade",
    transitionTime: 500,
    swipeable: false,
  
  };
const customPrevArrow = (onClickHandler, hasPrev, label) => {
  return (
    <button
      type="button"
      onClick={onClickHandler}
      style={{
        position: "absolute",
        zIndex: 2,
        left: 2,
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "72px", // Adjust the font size as needed
        color: "#FFFFFF", // Set the color you want for the previous arrow
        background: "none",
        border: "none",
        cursor: "pointer",
        opacity: 0.9, // Add opacity (0.7 for example)
      }}
    >
      <BiChevronLeft />
    </button>
  );
};

const customNextArrow = (onClickHandler, hasNext, label) => {
  return (
    <button
      type="button"
      onClick={onClickHandler}
      style={{
        position: "absolute",
        zIndex: 2,
        right: 15,
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "72px", // Adjust the font size as needed
        color: "#FFFFFF", // Set the color you want for the next arrow
        background: "none",
        border: "none",
        cursor: "pointer",
        opacity: 0.9, // Add opacity (0.7 for example)
      }}
    >
      <BiChevronRight />
    </button>
  );
};

function SlideShow() {
 const [video, setVideo] = useState(false);
    const { t } = useTranslation();

    return <>
        <Carousel {...config} renderArrowPrev={customPrevArrow}
      renderArrowNext={customNextArrow}>


<div className="relative h-[60vh] lg:h-[130vh] brightness-100 bg-[url('/static/img/rhi-aud-ase.JPG')] p-10 grid grid-cols-1 lg:grid-cols-12 justify-start items-center bg-cover bg-center isolate overflow-hidden">

<div className="absolute w-full h-full inset-0 z-[-1]"></div>

<div className="lg:col-start-1 lg:col-span-6 text-white space-y-8 lg:pl-10 wow animate__animated animate__fadeInLeft">
    <h1 className="text-left text-2xl lg:text-4xl font-bold pb-3">
    
    ASE Nigeria's Pioneer Cohort: Scholarship Empowers 200 Students
    </h1>

    
    <Link href="/news/66add855b369a953a0ca24c9" className="flex justify-start">
<Button
text="Learn More"
className="rounded-md !text-lg !px-8 !py-2 transition ease-in-out delay-150 bg-gradient-to-r from-blue-500 to-blue-600 hover:-translate-y-1 hover:scale-110 duration-300"
style={{ fontFamily: 'Playfair Display' }}
/>
</Link>
</div>
</div>

       
       <div className="relative h-[60vh] lg:h-[130vh] brightness-100 bg-[url('/static/img/SummerReads.webp')] p-10 grid grid-cols-1 lg:grid-cols-12 justify-start items-center bg-cover bg-center isolate overflow-hidden">

<div className="absolute w-full h-full inset-0 z-[-1]"></div>

<div className="lg:col-start-1 lg:col-span-6 text-white space-y-8 lg:pl-10 wow animate__animated animate__fadeInLeft">
    <h1 className="text-left text-2xl lg:text-4xl font-bold pb-3">
    
    Summer Reads: Professor Leonard Shares His Collection
    </h1>

    
    <Link href="/news/6689ae6dfa6bffde3137ba9b" className="flex justify-start">
<Button
text="Learn More"
className="rounded-md !text-lg !px-8 !py-2 transition ease-in-out delay-150 bg-gradient-to-r from-blue-500 to-blue-600 hover:-translate-y-1 hover:scale-110 duration-300"
style={{ fontFamily: 'Playfair Display' }}
/>
</Link>
</div>
</div>    

 


       





         <div className="relative h-[60vh] lg:h-[130vh] brightness-100 bg-[url('/static/img/leo.png')] p-10 grid grid-cols-1 lg:grid-cols-12 justify-start items-center bg-cover bg-center isolate overflow-hidden">

<div className="absolute w-full h-full inset-0 z-[-1]"></div>

<div className="lg:col-start-1 lg:col-span-6 text-white space-y-8 lg:pl-10 wow animate__animated animate__fadeInLeft">
    <h1 className="text-left text-2xl lg:text-4xl font-bold pb-3">
    
Stellenbosch University awards honorary doctorate to Professor Leonard Wantchekon
    </h1>

    
    <Link href="/news/6606c7a5b930d60178569453" className="flex justify-start">
<Button
text="Learn More"
className="rounded-md !text-lg !px-8 !py-2 transition ease-in-out delay-150 bg-gradient-to-r from-blue-500 to-blue-600 hover:-translate-y-1 hover:scale-110 duration-300"
style={{ fontFamily: 'Playfair Display' }}
/>
</Link>
</div>
</div>
       <div className="relative h-[60vh] lg:h-[130vh] brightness-100 bg-[url('/static/img/nuc.webp')] p-10 grid grid-cols-1 lg:grid-cols-12 justify-start items-center bg-cover bg-center isolate overflow-hidden">

<div className="absolute w-full h-full inset-0 z-[-1]"></div>

<div className="lg:col-start-1 lg:col-span-6 text-white space-y-8 lg:pl-10 wow animate__animated animate__fadeInLeft">
    <h1 className="text-left text-2xl lg:text-4xl font-bold pb-3">
    ASE obtains license from NUC as a private university in Nigeria
    </h1>

    
    <Link href="/news/65e180037d3929a79cdfe2bb" className="flex justify-start">
<Button
text="Learn More"
className="rounded-md !text-lg !px-8 !py-2 transition ease-in-out delay-150 bg-gradient-to-r from-blue-500 to-blue-600 hover:-translate-y-1 hover:scale-110 duration-300"
style={{ fontFamily: 'Playfair Display' }}
/>
</Link>
</div>
</div>
        
       
<div className="relative h-[60vh] lg:h-[130vh] brightness-100 bg-[url('/static/img/xo.jpeg')] p-10 grid grid-cols-1 lg:grid-cols-12 justify-start items-center bg-cover bg-center isolate overflow-hidden">

<div className="absolute w-full h-full inset-0  z-[-1]"></div>

<div className="lg:col-start-1 lg:col-span-6 text-white space-y-8 lg:pl-10 wow animate__animated animate__fadeInLeft">
    <h1
      
     className="text-left text-2xl lg:text-4xl font-bold pb-3" >
        
        Charter Cities Institute and ASE Expand Partnership as ASE Expands to Zanzibar
    </h1>


    <Link href="https://chartercitiesinstitute.org/press-releases/charter-cities-institute-and-the-african-school-of-economics-expand-partnership-as-ase-expands-to-zanzibar/" target="_blank" className="flex justify-start">
<Button
text="Read More"
className="rounded-md !text-lg !px-8 !py-2 transition ease-in-out delay-150 bg-gradient-to-r from-blue-500 to-blue-600 hover:-translate-y-1 hover:scale-110 duration-300"
style={{ fontFamily: 'Playfair Display' }}
/>
</Link>
</div>
</div>  

          

           
    
            <div className=" relative h-[60vh] lg:h-[130vh] brightness-100 bg-[url('https://res.cloudinary.com/duczlqzws/image/upload/v1689954398/slide1_nigazq.webp')] p-10 grid grid-cols-1 lg:grid-cols-12 justify-start items-center bg-cover bg-center isolate overflow-hidden">

                <div className="absolute w-full h-full inset-0  z-[-1]"></div>

                <div className="lg:col-start-1 lg:col-span-6 text-white space-y-8 lg:pl-10 wow animate__animated animate__fadeInLeft">
                    <motion.h1
                      initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
                     className="text-left text-2xl lg:text-4xl font-bold pb-3" >
                        
                        ASE Founder and President, Prof. Leonard Wantchekon wins the Global Economy Prize 2023
                    </motion.h1>

                    <Link href="/news/64a6dbb70326690a8a06083c" className="flex justify-start">
  <Button
    text="Read More"
    className=" rounded-md !text-lg !px-8 !py-2 transition ease-in-out delay-150 bg-gradient-to-r from-blue-500 to-blue-600 hover:-translate-y-1 hover:scale-110 duration-300"
    style={{ fontFamily: 'Playfair Display' }}
  />
</Link>
                </div>


            </div>
       
            <div className="relative h-[60vh] lg:h-[130vh] brightness-100 bg-[url('/static/img/slide6.jpeg')] p-10 grid grid-cols-1 lg:grid-cols-12 justify-start items-center bg-cover bg-center isolate overflow-hidden">

                <div className="absolute w-full h-full inset-0  z-[-1]"></div>

                <div className="lg:col-start-1 lg:col-span-6 text-white space-y-8 lg:pl-10 wow animate__animated animate__fadeInLeft">
                    <h1
                      
                     className="text-left text-2xl lg:text-4xl font-bold pb-3" >
                        
     ASE and AUDA-NEPAD discuss partnership with Nigeria's First Lady on Entrepreneurship scholarships
                    </h1>


                    <Link href="https://youtu.be/FW_mhk-Bot4?si=8c2xzkWPAdiZy3Au" target="_blank" className="flex justify-start">
  <Button
    text="Learn More"
    className="rounded-md !text-lg !px-8 !py-2 transition ease-in-out delay-150 bg-gradient-to-r from-blue-500 to-blue-600 hover:-translate-y-1 hover:scale-110 duration-300"
    style={{ fontFamily: 'Playfair Display' }}
  />
</Link>
                </div>
            </div>
           
            
            <div className="relative h-[60vh] lg:h-[130vh] brightness-100 bg-[url('/static/img/int.webp')] p-10 grid grid-cols-1 lg:grid-cols-12 justify-start items-center bg-cover bg-center isolate overflow-hidden">

                <div className="absolute w-full h-full inset-0  z-[-1]"></div>

                <div className="lg:col-start-1 lg:col-span-6 text-white space-y-8 lg:pl-10 wow animate__animated animate__fadeInLeft">
                    <h1 className="text-left text-2xl lg:text-4xl font-bold pb-3">
                         {/* Become a World-Class Economist */}
                        {t('home:slide1')}
                    </h1>

                    
                    <Link href="/admission/programmes" className="flex justify-start">
  <Button
    text="Apply Now"
    className="rounded-md !text-lg !px-8 !py-2 transition ease-in-out delay-150 bg-gradient-to-r from-blue-500 to-blue-600 hover:-translate-y-1 hover:scale-110 duration-300"
    style={{ fontFamily: 'Playfair Display' }}
  />
</Link>
                </div>
            </div>
<div className="relative h-[60vh] lg:h-[130vh] brightness-100 bg-[url('/static/img/res.webp')] p-10 grid grid-cols-1 lg:grid-cols-12 justify-start items-center bg-cover bg-center isolate overflow-hidden">

                <div className="absolute w-full h-full inset-0 z-[-1]"></div>

                <div className="lg:col-start-1 lg:col-span-6 text-white space-y-8 lg:pl-10 wow animate__animated animate__fadeInLeft">
                    <h1 className="text-left text-2xl lg:text-4xl font-bold pb-3">
                        Be Part of Cutting-Edge Research in Diverse Areas
                    </h1>

                    
                    <Link href="/research" className="flex justify-start">
  <Button
    text="Learn More"
    className="rounded-md !text-lg !px-8 !py-2 transition ease-in-out delay-150 bg-gradient-to-r from-blue-500 to-blue-600 hover:-translate-y-1 hover:scale-110 duration-300"
    style={{ fontFamily: 'Playfair Display' }}
  />
</Link>
                </div>
            </div>
            <div className="relative h-[60vh] lg:h-[130vh] brightness-100 bg-[url('/static/img/cult.webp')] p-10 grid grid-cols-1 lg:grid-cols-12 justify-start items-center bg-cover bg-center isolate overflow-hidden">

                <div className="absolute w-full h-full inset-0 z-[-1]"></div>

                <div className="lg:col-start-1 lg:col-span-6 text-white space-y-8 lg:pl-10 wow animate__animated animate__fadeInLeft">
                    <h1 className="text-left text-2xl lg:text-4xl font-bold pb-3">
                        Explore Africa's Authentic History and Culture
                    </h1>

                    
                    <Link href="/ase-art" className="flex justify-start">
  <Button
    text="Learn More"
    className="rounded-md !text-lg !px-8 !py-2 transition ease-in-out delay-150 bg-gradient-to-r from-blue-500 to-blue-600 hover:-translate-y-1 hover:scale-110 duration-300"
    style={{ fontFamily: 'Playfair Display' }}
  />
</Link>
                </div>
            </div>
            
    
        </Carousel>

    </>;

}

export default SlideShow;