import Image from "next/image";
import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Heading from "./Heading";


export default function GalleryOverlay({ images, forExhibition }){

    const [currentImage, setCurrentImage] = useState(0);
    const [overlay, setOverlay] = useState(false);

    const showOverlay = (image) => {
        setOverlay(true);
        setCurrentImage(image);
    }

    const switchImage = (type) => {

    let newImageIndex;
    if(type === 'next'){
        newImageIndex = currentImage + 1
    }

    if(type === 'prev'){
        newImageIndex = currentImage - 1
    }
    
    if(newImageIndex < 0){
        newImageIndex = images.length - 1; 
    }
    
    if(newImageIndex >= images.length){
        newImageIndex = 0; 
    }

    setCurrentImage(newImageIndex);
    // document.querySelector('#gallery').src = `/static/img/gallery${images[newImageIndex]}`

    }

    const closeOverlay = (e) => {
        let galleryOverlay = document.querySelector('#gallery-overlay');
        if(e.target == galleryOverlay) return setOverlay(false);
    }

    useEffect(() => {

        let element =  document.querySelector('#gallery-overlay');
        
        if(!overlay){
            document.body.style.overflow = "auto";
            element.style.opacity = 0;
            
            setTimeout(() => {
            element.style.display = 'none';
            },200);
            
            return
        }
        
        
        document.body.style.overflow = "hidden";
        element.style.display = 'flex';
        
        setTimeout(() => {
            element.style.opacity = 100;
        },200);
    
    }, [overlay])

    return (


        <>

        {!forExhibition ? 
            <section className='lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto overflow-hidden text-sm'>

            <Heading className="!text-app-dark !text-center pb-5">ASE Gallery</Heading>

                <div className='grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[repeat(6,200px)] items-center gap-8 max-w-6xl mx-auto'>

                    <div onClick={() => showOverlay(0)} className='relative w-full lg:h-full h-[200px] lg:col-span-7 lg:row-span-2 shadow-2xl'>
                        <Image src="/static/img/gallery/gallery1.jpg" objectFit='cover' layout='fill' />
                    </div>

                    <div onClick={() => showOverlay(1)} className='relative w-full lg:h-full h-[200px] lg:col-span-5 lg:row-span-4 shadow-2xl'>
                        <Image src="/static/img/gallery/gallery.jpg" objectFit='cover' layout='fill' />
                    </div>

                    <div onClick={() => showOverlay(2)} className='relative w-full lg:h-full h-[200px] lg:col-span-7 lg:row-span-2 shadow-2xl'>
                        <Image src="/static/img/gallery/gallery3.jpg" objectFit='cover' layout='fill' />
                    </div>

                    <div onClick={() => showOverlay(3)} className='relative w-full lg:h-full h-[200px] lg:col-span-6 lg:row-span-2 shadow-2xl'>
                        <Image src="/static/img/gallery/gallery2.jpg" objectFit='cover' layout='fill' />
                    </div>

                    <div onClick={() => showOverlay(4)} className='relative w-full lg:h-full h-[200px] lg:col-span-6 lg:row-span-2 shadow-2xl'>
                        <Image src="/static/img/gallery/gallery4.jpg" objectFit='cover' layout='fill' />
                    </div>

                </div>

            </section>
            :
            <section className='mx-auto overflow-auto text-sm'>

            <div className='grid grid-cols-1 lg:grid-cols-7 lg:p-8 p-5 items-center gap-8 mx-auto'>

            {images.map(({image},index) => (
                <div 
                key={index} 
                onClick={() => showOverlay(index)} 
                className={`relative ${(index+1) % 2 === 0 && (index+1)%3 !== 0 ? 'lg:col-span-3' : 'lg:col-span-2'} w-full h-[300px] shadow-2xl`}
                >
                <Image 
                    src={image}
                    objectFit='cover'
                    layout='fill' 
                    alt=''
                />
                </div>
            ))}

            </div>

            </section>
        }
        
        <div onClick={closeOverlay} id="gallery-overlay" className='fixed top-0 left-0 w-full h-full flex opacity-0 justify-center items-center p-8 bg-[rgba(0,0,0,0.8)] z-[9999999] duration-200'>

            <div className='relative flex flex-col justify-center items-center w-full lg:w-1/2 h-full'>
            {/* <img id="gallery" className='relative w-4/5 h-auto lg:w-auto lg:h-[85%] shadow-2xl' src="/static/img/gallery/gallery4.jpg" /> */}

                <div 
                    className="group relative w-5/6 lg:w-full h-5/6 overflow-hidden">
                    <div className='absolute top-0 left-0 w-full h-full blur-sm'>
                        <Image src={images[currentImage].image} objectFit="cover" layout="fill"/>
                    </div>

                    <div className='relative w-full h-full'>
                        <Image src={images[currentImage].image} objectFit="contain" layout="fill"/>
                    </div>

                    <div className="group-hover:bottom-5 group-hover:opacity-100 opacity-0 absolute bottom-0 left-0 translate-x-[50%] bg-[#000000d2] p-4 rounded-lg text-white text-xs w-1/2 mt-2 duration-200">
                        <p className="">
                            <span className="font-bold">{images[currentImage].artist}</span>
                        </p>
                        <p className="">
                            <span className="">{images[currentImage].desc}</span>
                        </p>
                        <p className="">
                            <span className="font-bold">&copy; {images[currentImage].copyright}</span>
                        </p>
                    </div>
                </div>


                <div className='flex justify-center gap-2 pt-5'>
                    {images.map(({image}, index) => (
                    <div key={index} onClick={() => showOverlay(index)} className={`relative w-12 h-12 grayscale ${index === currentImage && 'ring-2 ring-app-main ring-offset-2 scale-110 !grayscale-0 duration-200' }`}>
                        <Image src={image} objectFit='cover' layout='fill' />
                    </div>
                    ))}
                </div>
            </div>

            <div 
                onClick={() => switchImage('prev')} title='Previous'
                className='grid place-content-center w-8 h-8 hover:bg-app-dark absolute left-5 bg-black text-4xl'>
                <BiChevronLeft className="text-lg text-white" />
            </div>

            <div 
                onClick={() => switchImage('next')} title='Next'
                className='grid place-content-center w-8 h-8 hover:bg-app-dark absolute right-5 bg-black text-4xl'>
                <BiChevronRight className="text-lg text-white" />
            </div>

            <div 
                onClick={() => setOverlay(false)} title='Close'
                className='grid place-content-center w-8 h-8 hover:bg-app-dark absolute top-5 right-5 bg-black text-4xl'>
                <MdClose className="text-lg text-white" />
            </div>

        </div>
        </>
    )

}