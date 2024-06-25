import { useEffect, useState } from 'react';
import { deleteFavoriteByUser, saveFavorite } from '../../api/favorites.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useAuthStore } from '../../store/authStore.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export default function FavoriteIcon({ isEnabled, recipeId }) {
  const [enabled, setEnabled] = useState(isEnabled);
  const { token, profile } = useAuthStore();

  useEffect(() => {}, [enabled]);

  const setFavorite = () => {
    if (profile && token) {
      saveFavorite(token, profile.email, recipeId).then((response) => {
        console.log(response);
        setEnabled(true);
      });
    } /*else {
      toast.warn('Inicia sesión para guardar favoritos!');
    }*/
  };

  const unsetFavorite = () => {
    if (profile && token) {
      deleteFavoriteByUser(token, profile.email, recipeId).then((response) => {
        console.log(response);
        setEnabled(false);
      });
    }
  };

  return (
    <div>
      {enabled ? (
        <FontAwesomeIcon
          icon={solidHeart}
          onClick={unsetFavorite}
          className='cursor-pointer text-red-700 hover:text-red-500 hover:scale-105'
        />
      ) : (
        <FontAwesomeIcon
          icon={faHeart}
          onClick={setFavorite}
          className='cursor-pointer text-primary hover:text-red-700 hover:scale-105'
        />
      )}
      <ToastContainer />
    </div>
  );
}

FavoriteIcon.propTypes = {
  isEnabled: PropTypes.bool,
  recipeId: PropTypes.string
};
