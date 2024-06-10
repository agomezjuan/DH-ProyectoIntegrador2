import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function RecipeCard({ recipe }) {
  return (
    <div className='border rounded-lg overflow-hidden shadow-md bg-white relative'>
      <Link to={`/recipe/${recipe.id}`}>
        <img
          src={recipe?.url_img}
          alt={recipe.name}
          className='w-full h-52 object-cover'
        />
      </Link>
      <div className='flex flex-col flex-grow'>
        <div className='flex flex-grow h-full flex-col'>
          <Link to={`/recipe/${recipe.id}`}>
            <h3 className='text-lg font-semibold p-4 hover:text-primary'>
              {recipe.name}
            </h3>
          </Link>
          <p className='text-gray-600 p-4'>{recipe.description}</p>
        </div>
        <div className='flex items-center justify-between p-4 bg-secondary'>
          <div className='flex items-center '></div>
          <span className='text-gray-600'>{recipe.time}</span>

        </div>
      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired
};
