import { useRef, useState } from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { CustomAlert } from '../CustomAlert';
import { PlannerModal } from '../PlannerModal/PlannerModal';
import { useAuthStore } from '../../store/authStore';
import { useNavigate, useParams } from 'react-router-dom';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';

const MainRecipe = ({ title, time, img }) => {
  const { isAuth } = useAuthStore();
  const [showAlert, setShowAlert] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleButtonClick = () => {
    if (!isAuth) {
      setShowAlert(true);
    } else {
      document.getElementById('planner_modal').showModal();
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleLogin = () => {
    navigate(`/login`);
  };

  const handleFavorite = () => {
    if (ref.current) {
      ref.current.click();
      console.log('click');
    }
  };

  return (
    <div className='flex flex-col lg:flex-row gap-4 justify-center  mt-12 relative p-6'>
      <div className='mb-10 flex-1'>
        <div className='grid gap-4'>
          <div className='overflow-hidden rounded-lg shadow-md bg-white h-[300px]'>
            <img
              className='h-[300px] max-w-full scale-110 transition-transform duration-500 hover:scale-105 object-cover w-full'
              src={img}
              alt='recipe'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col flex-1 items-center'>
        <h2 className='font-bold text-3xl text-center md:text-left'>{title}</h2>
        <div className='flex gap-4 w-full justify-center '>
          <div className='flex flex-wrap gap-4 mt-10 justify-center '>
            <button className='btn btn-ghost'>
              <div className='flex flex-col justify-center items-center gap-2'>
                <FaClock color='#557824' />
                <p>{time}</p>
              </div>
            </button>
            <button className='btn btn-ghost' onClick={handleButtonClick}>
              <div className='flex flex-col justify-center items-center gap-2'>
                <FaCalendarAlt color='#557824' />
                <p>Planeador</p>
              </div>
            </button>
            <button className='btn btn-ghost' onClick={handleFavorite}>
              <div className='flex flex-col justify-center items-center gap-2'>
                <FavoriteIcon isEnabled={false} recipeId={id} ref={ref} />
                <p>Favoritos</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <PlannerModal />
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
};

MainRecipe.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string,
  img: PropTypes.string
};

export default MainRecipe;
