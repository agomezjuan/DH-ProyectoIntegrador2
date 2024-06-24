import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer w-full p-10 bg-primary text-primary-content'>
      <div className='flex items-center justify-center'>
        <nav className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 flex justify-center'>
          <Link
            to='/register' // Usar Link con el atributo to
            aria-label='Registration'
            className='relative h-32 w-32 text-neutral-100 hover:text-primary-content flex items-center'>
            <svg
              className='w-6 h-6 mr-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              viewBox='0 0 24 24'>
              <path
                fillRule='evenodd'
                d='M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z'
                clipRule='evenodd'
              />
            </svg>
            <span className='text-l text-neutral-100'>Registrate</span>
          </Link>
        </nav>
      </div>
      <div id='verticle-line'></div>
      <div className='flex items-center justify-start flex-none w-96'>
        <nav className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
          <Link to='/'>
            <span className='block text center text-4xl text-neutral-100 mb-4'>
              MealMap
            </span>
          </Link>
          <div className='flex items-start gap-3 justify-between'>
            <a
              href='https://www.facebook.com/profile.php?id=61561368355295&mibextid=ZbWKwL'
              aria-label='Facebook'
               target='_blank'
              rel='noopener noreferrer'
              className='text-neutral-100 hover:text-primary-content'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'>
                <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
              </svg>
            </a>
            <a
              href='https://x.com/MealMap_'
              aria-label='X'
               target='_blank'
              rel='noopener noreferrer'
              className='text-neutral-100 hover:text-primary-content'>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='currentColor'
                viewBox='0 0 24 24'>
                <path d='M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z' />
              </svg>
            </a>
            <a
              href='https://www.instagram.com/mealmap__?igsh=MXVmY3pxOWJkaG5uMQ%3D%3D'
              aria-label='Instagram'
               target='_blank'
              rel='noopener noreferrer'
              className='text-neutral-100 hover:text-primary-content'>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  fillRule='evenodd'
                  d='M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
            <a
              href='https://www.youtube.com/@MealMap_Planner'
              aria-label='YouTube'
               target='_blank'
              rel='noopener noreferrer'
              className='text-neutral-100 hover:text-primary-content'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'>
                <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
              </svg>
            </a>
          </div>

          <nav className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
            <span className='text-l text-neutral-100'>DgProyect2® 2024</span>
          </nav>
        </nav>
      </div>
      <div id='verticle-line'></div>

      <ul className='relative h-38 w-46 ml-4 list-disc list-inside text-neutral-100'>
        <li>
          <a
            className='link link-hover text-neutral-100 hover:text-primary-content'
              target='_blank'
              rel='noopener noreferrer'
            href='https://somosgusman.com/meal-prep-y-batch-cooking/'>
            Blog
          </a>
        </li>
        <li>
          <a
            className='link link-hover text-neutral-100 hover:text-primary-content'
           target='_blank'
              rel='noopener noreferrer'
           href='#'>
            Recetas
          </a>
        </li>
        <li>
          <a
            className='link link-hover text-neutral-100 hover:text-primary-content'
            target='_blank'
            rel='noopener noreferrer'
         href='https://www.youtube.com/watch?v=3EO2tWJi2Y8'>

            Tips
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
