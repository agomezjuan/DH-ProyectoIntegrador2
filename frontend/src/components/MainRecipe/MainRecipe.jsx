import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { CustomAlert } from '../CustomAlert';
import { PlannerModal } from '../PlannerModal/PlannerModal';
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from 'react-router-dom';

const MainRecipe = ({ title, time, img }) => {
  const { isAuth } = useAuthStore();
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();


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

  return (
    <div className='flex justify-between mx-20 mt-12 relative'>
      <div
        style={{ width: '45%', maxWidth: '900px' }}
        className='sticky top-0 z-10'>
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
      <div style={{ width: '45%', maxWidth: '900px' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '30px' }}>{title}</h2>
        <div className='grid gap-4'>
          <div className='flex gap-10 mt-10'>
            <button className='btn btn-ghost'>
              <div className='flex flex-col justify-center items-center gap-2'>
                <FaClock />
                <p>{time}</p>
              </div>
            </button>
            <button
              className='btn btn-ghost' onClick={handleButtonClick}>
              <div className='flex flex-col justify-center items-center gap-2'>
                <FaCalendarAlt />
                <p>Planeador</p>
              </div>
            </button>
            <button className='btn btn-ghost'>
              <div className='flex flex-col justify-center items-center gap-2'>
                <FaHeart />
                <p>Favoritos</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <PlannerModal />
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <CustomAlert
            onClose={handleCloseAlert}
            handleAction={handleLogin}
            message="Para crear tu plan semanal inicia sesión."
            option="Iniciar Sesión"
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
