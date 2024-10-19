import React, { useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react';
//import video from '/static/video/Reiterating.mp4';

const PresidentSpeech = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.addEventListener('loadedmetadata', () => {
      // Slide in the video from the right on page load
      videoRef.current.style.transform = 'translateX(0)';
    });
  }, []);

  return (
    <div className="relative bg-gray-900">
      <div className="relative h-64 md:h-96 overflow-hidden">
        <Transition
          show={true}
          enter="transition-all duration-1000 ease-in-out"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
        >
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src='/static/video/Reiterating.mp4'
              autoPlay
              loop
              muted
            />
          </div>
        </Transition>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-6 bg-white bg-opacity-75 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            President's Speech
          </h2>
          <p className="text-lg md:text-xl text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien gravida,
            aliquam justo et, tristique ante.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PresidentSpeech;
