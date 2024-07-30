import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [search, setSearch] = React.useState(searchParams.get('q') || '');

  // Function to handle search funtion
  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value) {
      searchParams.set('q', e.target.value);
    } else {
      searchParams.delete('q');
    }
    navigate(`?${searchParams.toString()}`);
  };

  // Function to handle reset search bar
  const handleReset = () => {
    setSearch('');
    searchParams.delete('q');
    navigate(`?${searchParams.toString()}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search tasks"
        value={search}
        onChange={handleSearch}
      />
       <button className='resetbtn' onClick={handleReset}>Reset</button>
    </div>
  );
};

export default SearchBar;
