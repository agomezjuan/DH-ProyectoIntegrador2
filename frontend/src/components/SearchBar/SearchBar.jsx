import { useEffect, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

export const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const { searchText: searchTextParam } = useParams();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes('/search')) {
      console.log('searchTextParam', searchTextParam);
      setSearchText(searchTextParam || '');
    }
  }, [searchTextParam, pathname]);

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      navigate(`/search/${searchText}`);
    }
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className='relative w-full max-w-2xl'>
      <input
        onKeyUp={handleSearch}
        onChange={handleChange}
        type='text'
        placeholder='Busca una receta, un ingrediente, palabra clave'
        className='w-full px-4 py-2 bg-white bg-opacity-75 rounded-md shadow-md placeholder-primary input'
        value={searchText}
      />
      <FaMagnifyingGlass
        className='absolute right-4 top-4 text-primary cursor-pointer'
        onClick={handleSearch}
      />
    </div>
  );
};
