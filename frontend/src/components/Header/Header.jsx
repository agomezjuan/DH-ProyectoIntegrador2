import React from 'react';
import hero from '@/assets/hero.png';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const Header = () => {
  return (
    <div className='relative w-full h-96'>
      <img src={hero} alt='Recetas' className='w-full h-full object-cover' />
      <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-25 p-5'>
        <div className='relative w-full max-w-2xl'>
          <input
            type='text'
            placeholder='Busca una receta, un ingrediente, palabra clave'
            className='w-full px-4 py-2 bg-white bg-opacity-75 rounded-md shadow-md placeholder-primary input'
          />
          <FaMagnifyingGlass className='absolute right-4 top-4 text-primary' />
        </div>
        <div className='mt-8 bg-gray-200 p-6 rounded-md shadow-md text-center absolute bottom-[-70px] h-40'>
          <p className='text-primary font-semibold mb-2'>Nueva Receta</p>
          <h1 className='text-3xl font-bold text-gray-900 max-w-lg'>
            Receta de Pizza integral con levadura seca
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
