import { forwardRef, useEffect, useState } from 'react';
import { deleteFavoriteByUser, saveFavorite } from '../../api/favorites.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useAuthStore } from '../../store/authStore.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const FavoriteIcon = forwardRef((props, ref) => {
  const { isEnabled, recipeId } = props;
  const [enabled, setEnabled] = useState(isEnabled);
  const { token, profile } = useAuthStore();

  useEffect(() => {}, [enabled]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    if (!profile || !token) {
      toast.warn('Inicia sesión para guardar favoritos!');
      return;
    }
    if (enabled) {
      deleteFavoriteByUser(token, profile.email, recipeId).then((response) => {
        console.log(response);
        setEnabled(false);
      });
    } else {
      saveFavorite(token, profile.email, recipeId).then((response) => {
        console.log(response);
        setEnabled(true);
      });
    }
  };

  return (
    <div
      ref={ref}
      onClick={toggleFavorite}
      role='button'
      aria-label='Toggle Favorite'
      className='cursor-pointer'>
      <FontAwesomeIcon
        icon={enabled ? solidHeart : faHeart}
        className={`${enabled ? 'text-red-700' : 'text-primary'} hover:text-red-500 hover:scale-105`}
      />
    </div>
  );
});

FavoriteIcon.propTypes = {
  isEnabled: PropTypes.bool,
  recipeId: PropTypes.string
};

FavoriteIcon.displayName = 'FavoriteIcon';

export default FavoriteIcon;
