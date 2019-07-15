import React from 'react';

import '../search-box/search-box.css';

export const SearchBox = ({ handleChange }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="Search monsters..."
        onChange={handleChange}
      />
    </div>
  );
};
