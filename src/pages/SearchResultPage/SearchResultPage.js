import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PackageList from '../../components/PackageList/PackageList';
import { Link } from 'react-router-dom';
import fixture from './Fixture';
// import {all the reducers/actions} from './sliceFile.js';
// import styles from './example.css';

// Use absolute imports like this for components!
// import SearchBox from 'components/SearchBox/SearchBox';

function SearchResultPage() {
  // const varName = useSelector((state) => state.specific.thing.i.want); // to get stuff from state
  // const dispatch = useDispatch(); // to dispatch actions

  return (
    <section>
      <PackageList packs={fixture} />
    </section>
  );
}

export default SearchResultPage;
