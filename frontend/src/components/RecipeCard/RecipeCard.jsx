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
<svg class="h-8 w-8 text-primary"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 6 12 12 16 14" /></svg>
              </span>
            ))}
            {[...Array(5 - recipe.rating)].map((_, index) => (
              <span key={index} className='text-gray-300'>

              </span>
            ))}
          </div>
          <svg class="h-8 w-8 text-primary"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg>
        </div>
      </div>
    </div>
  );
}
