import React, { useEffect, useState } from "react";

function ImageSlideshow({ images, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className={`
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-opacity
            duration-1000
            ease-in-out
            ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />
      ))}
    </div>
  );
}

export default ImageSlideshow;