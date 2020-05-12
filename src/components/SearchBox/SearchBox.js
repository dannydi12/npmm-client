import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function SearchBox(props) {
  const [tempSearch, setTempSearch] = useState('');
  let history = useHistory();
  let locationHook = useLocation();

  const setSearch = (input) => {
    setTempSearch(input);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (locationHook === '/') {
      history.push(`/search?q=${tempSearch}`);
      window.location.reload();
    } else {
      history.push(`/search?q=${tempSearch}`);
    }
  };

  return (
    <div className={props.classProps}>
      <form
        className="searchForm"
        onSubmit={handleSubmit}
        aria-label="npm package search"
      >
        <input
          placeholder="Search for an NPM package..."
          type="text"
          name="packageSearch"
          id="packageSearch"
          className="searchInput"
          aria-label="npm package search"
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <button
          type="submit"
          className="searchButton"
          aria-label="search button"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
