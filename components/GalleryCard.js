import React from 'react';
import Image from 'next/image';

const GalleryCard = ({ category, showOverlay }) => {
  return (
    <div
      className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md"
      onClick={() => showOverlay(category)}
      style={{ height: '300px', width: '100%' }}
    >
      <div
        className="w-full h-full bg-cover bg-center bg-gray-300 mb-2 flex items-center justify-center"
        style={{ backgroundImage: category.backgroundImage }}
      >
        <h2 className="text-lg font-semibold text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
          {category.title}
        </h2>
      </div>
    </div>
  );
};

export default GalleryCard;
