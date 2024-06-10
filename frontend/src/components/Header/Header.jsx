import hero from '@/assets/hero.webp';
import { SearchBar } from '@/components/SearchBar/SearchBar';

const Header = () => {
  return (
    <div className='relative w-full h-96'>
      <img src={hero} alt='Recetas' className='w-full h-full object-cover' />
      <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-25 p-5'>
        <SearchBar />
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
