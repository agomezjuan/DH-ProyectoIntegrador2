import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
  return (
    <div className='border rounded-lg overflow-hidden shadow-md bg-white relative pb-8'>
      <Link to={`/recipe/${recipe.id}`}>
        <img
          src={recipe.urlImg}
          alt={recipe.name}
          className='w-full h-52 object-cover scale-110 transition-transform duration-500 hover:scale-105'
        />
      </Link>
      <div className='flex flex-col flex-grow'>
        <div className='flex flex-grow h-full flex-col'>
          <Link to={`/recipe/${recipe.id}`}>
            <h3 className='text-lg font-semibold p-4 hover:text-primary'>
              {recipe.name}
            </h3>
          </Link>
          <div className='mb-5'>
            <p className='text-gray-600 p-4'>{recipe.description}</p>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 bg-secondary'>
          <div className='flex items-center '></div>
          <span className='text-gray-600'>{recipe.preparationTime}</span>
        </div>
      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired
};
