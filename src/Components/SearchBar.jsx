import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className='flex items-center'>
      <h3 className='mr-2'>Search Products:</h3>
      <input className='border-solid border-2 border-zinc-700 rounded-md'
        type="text"
        placeholder="Search by product name..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
