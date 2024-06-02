import React, { useState } from "react";
import './index.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/imagenes PI/Broccoli-Meal-Prep-Recipe.jpg",
    "/imagenes PI/Creamy-Parmesan-Green-Beans-Casserole-with-Bacon.jpg",
    "/imagenes PI/Creamy-Turkey-Meatballs-Recipe.jpg",
    "/imagenes PI/Grilled-Lemon-Garlic-Chicken-Skewers-recipe.jpg",
    "/imagenes PI/Broccoli-Meal-Prep-Recipe.jpg",
    "/imagenes PI/Grilled-Lemon-Garlic-Chicken-Skewers-recipe.jpg",
    "/imagenes PI/Grilled-Lemon-Garlic-Chicken-Skewers-recipe.jpg"
  ];

  const handlePrevious = () => {
    const newIndex = (currentIndex === 0) ? images.length - 4 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex === images.length - 4) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel__contenedor relative w-full">
      <button
        aria-label="Anterior"
        className="carousel__anterior btn btn-circle btn-primary absolute top-1/2 transform -translate-y-1/2 left-4 z-10"
        onClick={handlePrevious}
      >
        <FaChevronLeft size={30} />
      </button>

      <div className="carousel flex overflow-hidden">
        {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
          <div key={index} className="carousel-item flex-shrink-0 w-1/4 p-2">
            <img src={image} alt={`Imagen ${index}`} className="w-full h-72 object-cover rounded-lg" />
          </div>
        ))}
      </div>

      <button
        aria-label="Siguiente"
        className="carousel__siguiente btn btn-circle btn-primary absolute top-1/2 transform -translate-y-1/2 right-4 z-10"
        onClick={handleNext}
      >
        <FaChevronRight size={30} />
      </button>
    </div>
  );
};

