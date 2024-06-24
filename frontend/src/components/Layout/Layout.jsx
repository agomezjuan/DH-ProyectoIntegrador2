import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div className='min-h-screen flex flex-col bg-base-300'>
      <div className='flex-grow bg-base-300'>
        <main className='flex flex-col items-center max-w-7xl mx-auto px-4 py-8'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};
