import React from 'react';
import { useRecipesStore } from '@/store/recipesStore';

const Pagination = () => {
  const { currentPage, fetchRecipesPaginated } = useRecipesStore();
  
  const handlePageChange = (page) => {
    fetchRecipesPaginated(page);
  };

  return (
    <div className="join">
    <button 
    className="join-item btn" 
    disabled={currentPage === 0}
    onClick={() => handlePageChange(currentPage - 1)}>«</button>
    <button className="join-item btn">1</button>
    <button className="join-item btn btn-active">2</button>
    <button className="join-item btn">3</button>
    <button className="join-item btn">4</button>
    <button className="join-item btn" onClick={() => handlePageChange(currentPage + 1)}>»</button>
    </div>
  );
};

export default Pagination;
