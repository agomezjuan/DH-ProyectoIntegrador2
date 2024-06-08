import React from 'react';


export default function RecipeCard({ recipe }) {
  return (
    <div className='border rounded-lg overflow-hidden shadow-md bg-white relative'>
      <img
        src={recipe.image}
        alt={recipe.title}
        className='w-full h-52 object-cover'
      />
      <div className=''>
        <h3 className='text-lg font-semibold mb-2 p-4'>{recipe.title}</h3>
        <div className='flex items-center justify-between p-4 bg-secondary'>
          <div className='flex items-center '>
            {[...Array(recipe.rating)].map((_, index) => (
              <span key={index} className='text-primary'>

              </span>
            ))}
            {[...Array(5 - recipe.rating)].map((_, index) => (
              <span key={index} className='text-gray-300'>

              </span>
            ))}
          </div>
          <span className='text-gray-600'>{recipe.prepTime}</span>
        </div>
      </div>
    </div>
  );
}
