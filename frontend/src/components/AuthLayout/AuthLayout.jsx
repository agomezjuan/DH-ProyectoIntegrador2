import React from 'react';
import { Layout } from '@/components/Layout';
import hero from '@/assets/hero.png';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function AuthLayout({children}) {
    return (
      <Layout>
        <div className='relative w-full h-96'>
          <img
            src={hero}
            alt='Recetas'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-25 p-5'>
            <div className='relative w-full max-w-2xl'>
              <input
                type='text'
                placeholder='Busca una receta, un ingrediente, palabra clave'
                className='w-full px-4 py-2 bg-white bg-opacity-75 rounded-md shadow-md placeholder-primary input'
              />
              <FaMagnifyingGlass className='absolute right-4 top-4 text-primary' />
            </div>
          </div>
        </div>
        <div className='bg-white flex flex-col justify-items-center'>
          <div className='w-1/2 mx-auto -mt-20 z-10'>
            {children}
          </div>
        </div>
      </Layout>
    );
}