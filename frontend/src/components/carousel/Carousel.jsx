import { useState, useEffect } from 'react';
import './index.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useCategoriesStore } from '../../store/categoryStore';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { categories, selectedCategory, load, fetchCategories, setSelectedCategory } = useCategoriesStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handlePrevious = () => {
    const newIndex =
      currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % categories.length;
    setCurrentIndex(newIndex);
  };

  const displayImages = [];
  for (let i = 0; i < 4; i++) {
    displayImages.push(categories[(currentIndex + i) % categories.length]);
  }

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
  };

  const handleResetCategory = () => {
    setSelectedCategory(null);
  };

  if (load) {
    return (
      <div className='flex flex-col justify-center items-center h-36'>
        <span className='loading loading-ring loading-md'></span>
        <span className='text-primary mt-4'>Cargando...</span>
      </div>
    );
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
                src={category?.url_img}
                alt={`Imagen ${index}`}
                className='w-full h-full object-cover'
                onClick={() => handleCategoryClick(category)}
              />
            </div>
            <div className='text-xl font-semibold text-primary text-center'>
              {category?.name}
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

      {selectedCategory && (
        <div className='recipes__contenedor'>
          <h2>Recetas de {selectedCategory ? selectedCategory.name : 'No hay categoría seleccionada'}</h2>
          <button
            className='btn-reset'
            onClick={handleResetCategory}>
            Resetear categoría
          </button>
        </div>
      )}
    </div>
  );
};
