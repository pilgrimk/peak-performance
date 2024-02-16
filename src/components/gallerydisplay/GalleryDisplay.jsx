import React, { useState } from 'react';

const GalleryDisplay = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleThumbnailClick = (index) => {
    setSelectedImage(images[index]);
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/4 h-screen overflow-y-auto px-2 flex flex-col items-start">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Thumbnail ${index + 1}`}
            className="w-16 h-16 object-cover cursor-pointer mb-2 rounded-md 
            hover:drop-shadow-lg hover:w-[70px] hover:h-[70px]"
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
      <div className="w-3/4">
        <img
          src={selectedImage}
          alt="Main Image"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default GalleryDisplay;
