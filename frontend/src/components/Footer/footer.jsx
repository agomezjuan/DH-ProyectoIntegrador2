import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaXTwitter,
  FaCircleUser,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa6';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer container flex flex-col items-center lg:flex-row p-10 bg-primary'>
      <div className='w-full lg:w-1/3 flex items-center justify-center p-4'>
        <nav className='flex justify-center items-center'>
          <Link
            to='/register'
            aria-label='Registration'
            className='text-neutral-100 hover:text-primary-content flex items-center'>
            <button className='btn btn-ghost flex items-center'>
              <FaCircleUser className='w-6 h-6 mr-2' />
              <span className='text-l text-neutral-100'>Registrate</span>
            </button>
          </Link>
        </nav>
      </div>

      <div className='w-full lg:w-1/3 flex items-center justify-center lg:p-4 border-t-2 lg:border-t-0 border-b-2 lg:border-b-0 lg:border-s-2 lg:border-e-2 py-20'>
        <nav className='text-center'>
          <Link to='/'>
            <span className='block text-center text-4xl text-neutral-100 mb-4'>
              MealMap
            </span>
          </Link>
          <div className='flex items-center gap-3 justify-center'>
            <a
              href='https://www.facebook.com/profile.php?id=61561368355295&mibextid=ZbWKwL'
              aria-label='Facebook'
              target='_blank'
              rel='noopener noreferrer'
              className='text-neutral-100 hover:text-primary-content'>
              <FaFacebook className='w-6 h-6' />
            </a>
            <a
              href='https://x.com/MealMap_'
              aria-label='X'
              target='_blank'
              rel='noopener noreferrer'
              className='text-neutral-100 hover:text-primary-content'>
              <FaXTwitter className='w-6 h-6' />
            </a>
            <a
              href='https://www.instagram.com/mealmap__?igsh=MXVmY3pxOWJkaG5uMQ=='
              aria-label='Instagram'
              target='_blank'
              rel='noopener noreferrer'
              className='text-neutral-100 hover:text-primary-content'>
              <FaInstagram className='w-6 h-6' />
            </a>
            <a
              href='https://www.youtube.com/@MealMap_Planner'
              aria-label='YouTube'
              target='_blank'
              rel='noopener noreferrer'
              className='text-neutral-100 hover:text-primary-content'>
              <FaYoutube className='w-6 h-6' />
            </a>
          </div>

          <div className='text-l text-neutral-100 mt-4'>MealMap ® 2024</div>
        </nav>
      </div>

      <div className='w-full h-full lg:w-1/3 flex items-center justify-center p-4'>
        <ul className=' text-neutral-100'>
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
            <Link
              to='/recipes'
              className='link link-hover text-neutral-100 hover:text-primary-content'>
              Recetas
            </Link>
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
      </div>
    </footer>
  );
};

export default Footer;
