import React, { useState } from 'react';


const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const genres = [
    { id: 28, name: 'Action' }, { id: 35, name: 'Comedy' }, { id: 18, name: 'Drama' }, { id: 27, name: 'Horror' },
    { id: 10749, name: 'Romance' }, { id: 878, name: 'Sci-Fi' },{ id: 14, name: 'Fantasy' },{ id: 53, name: 'Thriller' },
    { id: 99, name: 'Documentary' }, { id: 10751, name: 'Family' }, { id: 12, name: 'Adventure' }
  ];

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(searchTerm, category);
      setSearchTerm('');
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    onSearch(searchTerm, selectedCategory);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm, category);
    setSearchTerm('');
  };

  return (
    <div className="search-container">
      
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSearchClick}
          className="search-button"
        >
          Search
        </button>
        <select
          value={category}
          onChange={handleCategoryChange}
          className="category-dropdown"
        >
          <option value="">Select Category</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))};
        </select>
      </div>
    </div>
  );
};

export default SearchBar;