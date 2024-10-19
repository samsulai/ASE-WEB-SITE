import React from 'react';
import { Link } from 'next/link';
import Heading from './Heading';
import Button from './Button';

const FinancialAid = () => {
  return (
    <section className="relative lg:py-20 py-8 lg:px-16 px-5">
      <div className="flex flex-wrap justify-center lg:w-4/6 mx-auto lg:divide-x-4 divide-app-main">
        <div className="lg:w-1/2 lg:px-12 wow animate__animated animate__fadeInUp items-center">
          <p className="text-3xl font-[500]" style={{ fontFamily: 'Inter' }}>
            Over
          </p>

          <p className="text-[112px] leading-none font-bold">500</p>
          <p className="text-center text-lg" style={{ fontFamily: 'Inter' }}>
            students qualified for aid.
          </p>
        </div>

        <div className="lg:w-1/2 lg:px-12 space-y-3 wow animate__animated animate__fadeInUp">
          <Heading className="!text-black lg:!text-left">Financial Aid</Heading>

          <Link href="/admission/financial-aid" className="flex justify-center lg:justify-start">
            <Button text="Apply" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinancialAid;
