import React from 'react';
import { Link } from "react-router-dom";
import { FaRegCircleUser } from 'react-icons/fa6';

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
      <div className='flex items-center'>
        <button className='btn btn-ghost text-primary'>
          <Link to='/login' >
          <FaRegCircleUser className='text-primary text-xl' /> 
          <span>Login</span>
          </Link>
        </button>
      </div>
    </div>
  );
}
