import { useRouter } from 'next/router';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import Button from '../components/Button';

import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';


export default function Page() {

  const router = useRouter();

  return (
    <>

      <SEO
        title="Oops! Page not Found"
        description="The page you are trying to visit does not exist on this website"
        image="/static/img/404.jpg"
      />

      <Navbar />

      <Intro bg="/static/img/404.jpg">Oops! <br /> Page not Found</Intro>

      <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto overflow-auto text-sm'>

        <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8 max-w-5xl mx-auto'>

          <div className='lg:col-span-7 space-y-8'>
            <Heading className="!text-left !text-app-dark">Issues resolving request</Heading>
            <p className="text-sm">
              The page you are resquesting for from this website was not found. Please do check the resource url and make your request.
              I'm sure its just a typo, do try again, or maybe you might wish to go back to the previous page.
            </p>

            <div onClick={() => router.back()} className='inline-block'>
                <Button className="!bg-app-dark !text-xs lg:!py-2 lg:!px-4 !flex !items-center">
                  <HiOutlineArrowNarrowLeft className="inline-block mr-2 text-xl" />
                  Go Back
                </Button>
            </div>

          </div>

        </div>

      </section>


      <Footer />
    </>
  )
}
