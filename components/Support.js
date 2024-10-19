import Link from "next/link";
import Button from "./Button";
import Heading from "./Heading";

function Support() {
  return (
    <section className="lg:py-20 lg:px-16 py-12 px-5  lg:h-80 bg-[url(/static/img/atm.webp)] bg-cover bg-center lg:space-y-16 space-y-8">
        <h2 className="!text-white uppercase text-3xl lg:text-4xl font-extrabold text-xl text-center mb-4 font-[600] tracking-wide" style={{ fontFamily: 'Montserrat' }}>Be part of ASE's transformative vision</h2>
        {/* <p className='lg:w-3/5 text-sm lg:text-base text-center mx-auto'>
          Join our efforts to inspire and support research and academics in Africa. Every gift counts! The African School of Economics (ASE) operates sustainably, covering its operating expenses through tuition and fees. Your donation will help the school grow by supporting one of three funds: Scholarships, Faculty Travel Funds, and Research Funds. Thank you for your generosity.
        </p> */}
        <Link href="/support-ase" className='flex justify-center'>
  <Button
    text="Learn More"
    className="bg-[#084a7f] text-white rounded-full px-8 py-4"
    
  />
</Link>
    </section>
  );
}

export default Support;