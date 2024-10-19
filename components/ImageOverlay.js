import React from 'react';
import Image from 'next/image';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

const ImageOverlay = ({
  currentCategory,
  currentImage,
  switchImage,
  closeOverlay,
}) => {
  const image = currentCategory.images[currentImage];

  return (
    <div
      onClick={closeOverlay}
      id="gallery-overlay"
      className="fixed top-0 left-0 w-full h-full flex opacity-0 justify-center items-center p-8 bg-[rgba(0,0,0,0.8)] z-[9999999] duration-200"
    >
      <div className="relative flex flex-col justify-center items-center w-full lg:w-1/2 h-full">
        <h2 className="text-lg font-semibold mb-4">
          {currentCategory.title}
        </h2>

        <div className="group relative w-5/6 lg:w-full h-5/6 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full blur-sm">
            <Image
              src={image.src}
              objectFit="cover"
              layout="fill"
              loading="lazy"
            />
          </div>

          <div className="relative w-full h-full">
            <Image
              src={image.src}
              objectFit="contain"
              layout="fill"
              loading="lazy"
            />
          </div>

          <div className="group-hover:bottom-5 group-hover:opacity-100 opacity-0 absolute bottom-0 left-0 translate-x-[50%] bg-[#000000d2] p-4 rounded-lg text-white text-xs w-1/2 mt-2 duration-200">
            <p>
              <span className="font-bold">
                {image.artist}
              </span>
            </p>
            <p>
              <span>
                {image.desc}
              </span>
            </p>
            <p>
              <span className="font-bold">
                &copy; {image.copyright}
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 pt-5">
          {currentCategory.images.map((img, index) => (
            <div
              key={img.id}
              onClick={() => switchImage(index)}
              className={`relative w-12 h-12 grayscale ${
                index === currentImage &&
                "ring-2 ring-app-main ring-offset-2 scale-110 !grayscale-0 duration-200"
              }`}
            >
              <Image src={img.src} objectFit="cover" layout="fill" />
            </div>
          ))}
        </div>
      </div>

      <div
        onClick={() => switchImage(currentImage - 1)}
        title="Previous"
        className="grid place-content-center w-8 h-8 hover:bg-app-dark absolute left-5 bg-black text-4xl"
      >
        <BiChevronLeft className="text-lg text-white" />
      </div>

      <div
        onClick={() => switchImage(currentImage + 1)}
        title="Next"
        className="grid place-content-center w-8 h-8 hover:bg-app-dark absolute right-5 bg-black text-4xl"
      >
        <BiChevronRight className="text-lg text-white" />
      </div>

      <div
            onClick={() => closeOverlay}
      id="gallery-overlay"
            className="grid place-content-center w-8 h-8 hover:bg-app-dark absolute top-5 right-5 bg-black text-4xl"
          >
            <MdClose className="text-lg text-white" />
          </div>
    </div>
  );
};

export default ImageOverlay;
