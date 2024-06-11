import { FaCalendarAlt, FaClock, FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { PlannerModal } from './PlannerModal';
import { useRef } from 'react';

const MainRecipe = ({ title, time, img }) => {
  const ref = useRef(null);
  return (
    <div
      // style={{ display: 'flex', justifyContent: 'space-between', margin: '0 80px' }}
      className='flex justify-between mx-20 mt-8'>
      <div style={{ width: '45%', maxWidth: '900px' }}>
        <div className='grid gap-4'>
          <div className='overflow-hidden rounded-lg shadow-md bg-white'>
            <img
              className='h-auto max-w-full  scale-110 transition-transform duration-500 hover:scale-105'
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
              className='btn btn-ghost'
              onClick={() =>
                document.getElementById('planner_modal').showModal()
              }>
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
      <PlannerModal ref={ref} />
    </div>
  );
};

MainRecipe.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string,
  img: PropTypes.string
};

export default MainRecipe;
