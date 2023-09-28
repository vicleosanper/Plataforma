import React from 'react';
import '../css/SearchBar.css';

export const SearchBar = () => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar productos..."
      />
    </div>
  );
}

export default SearchBar;
