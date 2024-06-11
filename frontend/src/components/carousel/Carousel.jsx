import { useState, useEffect } from 'react';
import './index.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useCategoriesStore } from '@/store/categoryStore'

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { categories, load, fetchCategories } = useCategoriesStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const images = [
    { src: '/categories/Broccoli-Meal-Prep-Recipe.jpg', title: '30 minutos' },
    {
      src: '/categories/Creamy-Parmesan-Green-Beans-Casserole-with-Bacon.jpg',
      title: 'Aperitivos'
    },
    { src: '/categories/postres.jpg', title: 'Postres' },
    {
      src: '/categories/Grilled-Lemon-Garlic-Chicken-Skewers-recipe.jpg',
      title: 'Plato Fuerte'
    }
  ];

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % categories.length;
    setCurrentIndex(newIndex);
  };


  const displayImages = [];
  for (let i = 0; i < 4; i++) {
    !load && categories.length > 0 && displayImages.push(categories[(currentIndex + i) % categories.length]);
  }

  return (
    <div className='carousel__contenedor relative w-full my-14'>
      <button
        aria-label='Anterior'
        className='carousel__anterior btn-link bg-none absolute top-1/2 transform -translate-y-1/2 -left-7 z-10'
        onClick={handlePrevious}>
        <FaChevronLeft size={60} />
      </button>

      <div className='carousel flex overflow-hidden justify-center'>
        {displayImages.map((allCategories, index) => (
          <div
            key={index}
            className='carousel-item flex flex-col items-center p-2 text-center'>
            <div className='w-60 h-60 overflow-hidden rounded-full mx-auto shadow-lg'>
              <img
                src={allCategories.category.urlImg?allCategories.category.urlImg:null}
                alt={`Imagen ${index}`}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='text-xl font-semibold text-primary text-center'>
              {allCategories.category.name?allCategories.category.name:null}
            </div>
          </div>
        ))}
      </div>

      <button
        aria-label='Siguiente'
        className='carousel__siguiente btn-link bg-none absolute top-1/2 transform -translate-y-1/2 -right-7 z-10'
        onClick={handleNext}>
        <FaChevronRight size={60} />
      </button>
    </div>
  );
};
