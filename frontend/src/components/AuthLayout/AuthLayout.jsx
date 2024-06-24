import { Layout } from '@/components/Layout';
import hero from '@/assets/hero.webp';
import PropTypes from 'prop-types';

export default function AuthLayout({ children }) {
  return (
    <Layout>
      <div className='relative w-full h-96'>
        <img src={hero} alt='Recetas' className='w-full h-full object-cover' />
      </div>
      <div className='bg-white flex flex-col justify-items-center container'>
        <div className='w-1/2 mx-auto -mt-40 mb-10 z-10'>{children}</div>
      </div>
    </Layout>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
};
