/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchFor } from '../../redux/SearchResultsSlice';
import './SearchBox.css';

function SearchBox(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [tempSearch, setTempSearch] = useState('');
  const [animationClass, setAnimationClass] = useState(
    props.searchInputClass === 'navSearchInput' ? 'searchSlideOut' : ''
  );

  const hideSearch = () => {
    if (props.searchInputClass === 'navSearchInput') {
      setTimeout(() => {
        setAnimationClass('searchSlideIn');
      }, 100);
      setTimeout(() => {
        props.unmountSearch();
      }, 1000);
    }
  };

  const setSearch = (input) => {
    setTempSearch(input);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(searchFor(tempSearch));
    history.push(`/search?q=${tempSearch}`);
  };

  return (
    <div className={`${props.classProps} ${animationClass}`}>
      <form
        className={props.searchFormClass}
        onSubmit={handleSubmit}
        aria-label="npm package search"
        autoComplete="off"
        onBlur={hideSearch}
        id="searchBox"
      >
        <input
          placeholder="Search packages"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          type="text"
          name="packageSearch"
          id="packageSearch"
          className={props.searchInputClass}
          aria-label="npm package search"
          onChange={(ev) => setSearch(ev.target.value)}
          maxLength="214"
          minLength="1"
          required
        />
        {props.searchInputClass === 'navSearchInput' && (
          <div className="searchDivider" />
        )}
        <button
          type="submit"
          className={props.searchButtonClass}
          aria-label="search button"
        >
          {props.searchButton}
        </button>
      </form>
    </div>
  );
}
export default SearchBox;
