import React from 'react';

const SearchBar = () => {
  return (
    <div style={{ backgroundColor: 'rgb(130, 170, 51)', height: '200px', margin: '0 80px' }} className="flex items-center justify-center p-8 text-center">
      <input
        type="text"
        placeholder="Busca una receta, un ingrediente, palabra clave"
        className="w-full p-4 rounded"
        style={{ margin: '0 50px' }}
      />
    </div>
  );
}

export default SearchBar;
