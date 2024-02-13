import React, { useState } from 'react';

const GalleryDisplay = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleThumbnailClick = (index) => {
    setSelectedImage(images[index]);
  };

  return (
    <div className="flex">
      <div className="w-1/4 overflow-y-auto">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Thumbnail ${index + 1}`}
            className="w-full cursor-pointer mb-5"
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
      <div className="flex-grow">
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
