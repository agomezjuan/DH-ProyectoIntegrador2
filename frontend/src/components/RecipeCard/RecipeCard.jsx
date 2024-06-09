import React from 'react';
import {Link} from 'react-router-dom'

export default function RecipeCard({ recipe }) {
 
  return (
    <div className='border rounded-lg overflow-hidden shadow-md bg-white relative'>
      <img
        src={recipe?.urlImg}
        alt={recipe.name}
        className='w-full h-52 object-cover'
      />
      <div className='flex flex-col flex-grow'>
        <div className='flex flex-grow h-full flex-col'>
        <Link to={`/recipe/${recipe.id}`}>  <h3 className='text-lg font-semibold p-4'>{recipe.name}</h3></Link>
          <p className='text-gray-600 p-4'>{recipe.preparationSteps[0]}</p>
        </div>
        <div className='flex items-center justify-between p-4 bg-secondary'>
          <div className='flex items-center '>
            {/* {[...Array(recipe.rating)].map((_, index) => (
              <span key={index} className='text-primary'>
                ★
              </span>
            ))}
            {[...Array(5 - recipe.rating)].map((_, index) => (
              <span key={index} className='text-gray-300'>
                ★
              </span>
            ))} */}
          </div>
          {/* <span className='text-gray-600'>{recipe.time}</span> */}
        </div>
      </div>
    </div>
  );
}
