import React from 'react';
import '../css/SearchBar.css';
import Logo from '../img/Logo.jpg' 

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="search-input">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar productos..."
        />
      </div>
    </div>
  );
}

export default SearchBar;

