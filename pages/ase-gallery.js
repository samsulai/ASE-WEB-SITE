import React, { useEffect, useState } from 'react';
import GalleryCard from '../components/GalleryCard';
import ImageOverlay from '../components/ImageOverlay';
import 'animate.css';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';
import categories from '../components/categoriesData'
export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const showOverlay = (category) => {
    setOverlay(true);
    setCurrentImage(0);
    setCurrentCategory(category);
  };

  const switchImage = (index) => {
    if (index < 0) {
      index = currentCategory.images.length - 1;
    }

    if (index >= currentCategory.images.length) {
      index = 0;
    }

    setCurrentImage(index);
  };

  const closeOverlay = (e) => {
    let galleryOverlay = document.querySelector("#gallery-overlay");
    if (e.target === galleryOverlay) return setOverlay(false);
  };

  // Your useEffect for overlay management
useEffect(() => {
  let element = document.querySelector("#gallery-overlay");

  if (!overlay) {
    document.body.style.overflow = "auto";
    element?.style?.setProperty("opacity", "0"); // Use optional chaining here

    setTimeout(() => {
      element?.style?.setProperty("display", "none"); // Use optional chaining here
    }, 200);

    return;
  }

  document.body.style.overflow = "hidden";
  element?.style?.setProperty("display", "flex"); // Use optional chaining here

  setTimeout(() => {
    element?.style?.setProperty("opacity", "100"); // Use optional chaining here
  }, 200);
}, [overlay]);
 


  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <>
      <SEO
        title="ASE's Gallery"
        description="View ASE's Gallery"
        image="/static/img/gallery/bg.jpg"
      />

      <Navbar />

   <Intro text="Gallery" bg="https://res.cloudinary.com/duczlqzws/image/upload/v1693939523/banners/gallery_banner_goyscr.png"/>
    <div className="my-8">
      <h2 className="text-3xl lg:text-4xl  text-center mb-4 font-[500]"
  style={{ fontFamily: 'Playfair Display' }}>Learn More About Us.</h2>
      {/* Gallery card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <GalleryCard
            key={category.id}
            category={category}
            showOverlay={showOverlay}
          />
        ))}
      </div>
</div>
      {/* Overlay */}
      {currentCategory && (
        <ImageOverlay
          currentCategory={currentCategory}
          currentImage={currentImage}
          switchImage={switchImage}
          closeOverlay={closeOverlay}
        />
      )}

      <Footer />
    </>
  );
}
