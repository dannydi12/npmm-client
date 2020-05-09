import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SearchBox(props) {
  const [tempSearch, setTempSearch] = useState('');
  let history = useHistory();

  const setSearch = (input) => {
    setTempSearch(input);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    history.push(`/search?q=${tempSearch}`);
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
        />
      </form>
    </div>
  );
}

export default SearchBox;
