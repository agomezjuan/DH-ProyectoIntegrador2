import React from 'react';
import { Link } from "react-router-dom";
import { FaRegCircleUser, FaHeart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-none'>
        <button className='btn btn-square btn-ghost text-primary'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-5 h-5 stroke-current'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
      </div>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl text-primary'>MealMap</a>
      </div>
      <div className='flex items-center gap-4'>
        <Link to='/mis-recetas' className='btn btn-ghost text-primary'>
          <span>Mis Recetas</span>
        </Link>
        <Link to='/favoritos' className='btn btn-ghost text-primary flex items-center'>
          <FaHeart className='mr-2' />
          <span>Favoritos</span>
        </Link>
        <Link to='/perfil' className='btn btn-ghost text-primary flex items-center'>
          <FaRegCircleUser className='text-primary text-xl' />
          <span>Perfil</span>
        </Link>
      </div>
    </div>
  );
}
