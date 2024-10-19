import Image from "next/image";
import Link from "next/link";
import sanitize from "sanitize-html";
import Heading from "./Heading";
import moment from "moment";

export default function NewsSection({ news }){

    return <>

        <section className='lg:py-20 lg:px-12 py-8 px-5 overflow-hidden flex flex-col lg:flex-row gap-8 bg-neutral-100'>  

            <div className='space-y-8'>
                <Heading className="!text-black w-full flex-none mx-auto">News from inside ASE</Heading>

                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto'>  
                    {news.map(({date, date_gmt, image, title, excerpt, slug}, index) => (
                        <div key={index} className='cursor-pointer group'>
                            <div className='relative w-full h-40 isolate'>
                                <Image className="group-hover:scale-105 duration-200" alt="" src={image} layout='fill' objectFit='cover' />
                                <div className="absolute top-0 left-0 w-full h-full  opacity-50"></div>
                                <div className='absolute top-2 right-2 p-2 bg-app-dark text-white text-xs font-bold'>{moment(date_gmt).format('Do, MMM YYYY')}</div>
                            </div>
                            <div className='relative flex bg-white p-4'>
                                <div className='space-y-2 py-2'>
                                <Link
                                    href={'/news/'+slug}
                                    className='block font-bold text-base'
                                    dangerouslySetInnerHTML={{
                                        __html: sanitize(title.rendered)
                                    }}>

                                </Link>
                                <div className='text-xs' dangerouslySetInnerHTML={{
                                    __html: sanitize(excerpt.rendered)
                                }}></div>
                                <Link
                                    href={'/news/'+slug}
                                    className='inline-block font-bold text-xs text-app-dark hover:border-b border-app-dark'>
                                    Read More
                                </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>

    </>;

}