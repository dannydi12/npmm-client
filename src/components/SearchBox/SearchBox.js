import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchFor } from '../../redux/SearchResultsSlice';
import styles from './SearchBox.module.css';

function SearchBox(props) {
  const [tempSearch, setTempSearch] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const setSearch = (input) => {
    setTempSearch(input);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(searchFor(tempSearch));
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
          className={styles.searchInput}
          aria-label="npm package search"
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <button
          type="submit"
          className={styles.searchButton}
          aria-label="search button"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
