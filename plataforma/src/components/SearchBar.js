import React, { useState } from 'react';
import '../css/SearchBar.css';
import Logo from '../img/Logo.jpg';

export const SearchBar = ({ categories, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearchClick = () => {
    onSearch(searchTerm, selectedCategory);
  };
  
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="category-select">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">Todas las Categorías</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="search-button">
        <button onClick={handleSearchClick}>Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;



