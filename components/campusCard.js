import React from 'react';
import Link from 'next/link';
import {motion} from "framer-motion"
const CampusCard = ({ imageUrl, title, description, linkUrl }) => {
  return (
    <motion.div 
initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}

    className="col-span-1 relative h-[350px] overflow-hidden bg-cover hover:scale-105 duration-200 wow animate__animated animate__fadeInUp">
      <div className="absolute bottom-0 left-0 w-full before:absolute before:-top-[10px] before:left-0 before:w-full before:h-[20px] before:skew-y-2 before:bg-app-main before:-z-[1] isolate py-6 px-5 bg-app-main group">
        <h1 className="text-white text-center font-bold text-lg" style={{ fontFamily: 'Montserrat' }}>{title}</h1>
        <p className="group-hover:max-h-96 max-h-0 group-hover:pt-3 pt-0 overflow-hidden flex text-center text-base text-white duration-200" style={{ fontFamily: 'Montserrat' }}>
          {description}
        </p>
        <div className="group-hover:max-h-96 max-h-0 group-hover:pt-3 pt-0 overflow-hidden flex justify-center duration-200">
          <Link href={linkUrl} className="inline-flex bg-white font-bold text-base text-app-main p-3 cursor-pointer">
            Learn More
          </Link>
        </div>
      </div>
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </motion.div>
  );
};
export default CampusCard