import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { FavoriteIcon } from '../FavoriteIcon/index.js';
import { useEffect, useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { useAuthStore } from '../../store/authStore.js';
import CustomAlert from '../CustomAlert/CustomAlert.jsx';
import { useRecipesStore } from '../../store/recipesStore.js';
import decodeHTML from '../../utils/decodeHTML.js';

export default function RecipeCard({ recipe }) {
  const { isAuth } = useAuthStore();
  const { fetchRecipeById } = useRecipesStore();
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {}, [recipe]);

  const handleButtonClick = async () => {
    if (!isAuth) {
      setShowAlert(true);
    } else {
      fetchRecipeById(recipe.id).then(() => {
        document.getElementById('planner_modal').showModal();
      });
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleLogin = () => {
    navigate(`/login`);
  };

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
              {decodeHTML(recipe.name)}
            </h3>
          </Link>
          <div className='mb-5'>
            <p className='text-gray-600 p-4'>{recipe.description}</p>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 bg-secondary'>
          <div
            className='flex items-center hover:cursor-pointer text-primary hover:text-[#2d450c]'
            onClick={handleButtonClick}>
            <FaCalendarAlt />
          </div>
          <span className='text-gray-600'>{recipe.preparationTime}</span>
          <FavoriteIcon isEnabled={recipe.favorite} recipeId={recipe.id} />
        </div>
      </div>
      {showAlert && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20'>
          <CustomAlert
            onClose={handleCloseAlert}
            handleAction={handleLogin}
            message='Para crear tu plan semanal inicia sesión.'
            option='Iniciar Sesión'
          />
        </div>
      )}
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired
};
