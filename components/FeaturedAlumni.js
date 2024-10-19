import React from "react";
import Link from 'next/link';
import { motion } from "framer-motion";

function FeaturedAlumni({ imageType, title, buttonText, href }) {
  return (
    <motion.div
      className={`flex relative flex-grow justify-center min-h-[400px] flex-col gap-4 items-center rounded-[20px] bg-cover ${
        imageType === "Mahounan" ? "bg-Mahounan" : "bg-Gaeton"
      }`}
      whileHover={{ scale: 1.05 }}
    >
      <div className="absolute bg-[#171b4180] top-0 left-0 right-0 bottom-0 rounded-[20px]"></div>
      <p className="uppercase font-bold text-white text-[32px] z-10" style={{ fontFamily: 'Inter' }}>{title}</p>
      <Link href={href} className="md:mt-4 flex justify-center w-[230px] h-[50px] hover:opacity-75 z-10 rounded-full   items-center border border-white text-white font-bold${
   
   ">
       {buttonText}
   </Link>
          
    </motion.div>
  );
}

export default FeaturedAlumni;
