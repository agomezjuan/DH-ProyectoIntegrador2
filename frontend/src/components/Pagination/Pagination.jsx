import React from 'react';
import { useRecipesStore } from '@/store/recipesStore';

const Pagination = () => {
  const { currentPage, fetchRecipesPaginated } = useRecipesStore();
  const totalPages = 5; // Replace with actual total pages if available

  const handlePageChange = (page) => {
    fetchRecipesPaginated(page);
  };

  return (
    <div className='flex justify-center mb-6'>
    <div className="join">
      <button 
        className="join-item btn" 
        disabled={currentPage === 0}
        onClick={() => handlePageChange(currentPage - 1)}>«</button>
      {[...Array(totalPages)].map((_, index) => (
        <button 
          key={index} 
          className={`join-item btn ${currentPage === index ? 'btn-active' : ''}`}
          onClick={() => handlePageChange(index)}>
          {index + 1}
        </button>
      ))}
      <button 
        className="join-item btn" 
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}>»</button>
    </div>
    </div>
  );
};

export default Pagination;
