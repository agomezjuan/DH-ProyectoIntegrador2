import { Layout } from '@/components/Layout';
import hero from '@/assets/hero.webp';
import PropTypes from 'prop-types';

export default function AuthLayout({ children }) {
  return (
    <Layout>
      <div className='relative w-full h-96 container'>
        <img src={hero} alt='Recetas' className='w-full h-full object-cover' />
      </div>
      <div className='bg-white flex flex-col justify-items-center p-6 container'>
        <div className='w-full lg:w-1/2 max-w-[512px] mx-auto -mt-40 mb-10 z-10'>
          {children}
        </div>
      </div>
    </Layout>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
};
