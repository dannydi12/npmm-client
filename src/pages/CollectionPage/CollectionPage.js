import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PackageList from '../../components/PackageList/PackageList';
// import {all the reducers/actions} from './sliceFile.js';
// import styles from './example.css';

// Use absolute imports like this for components!
// import SearchBox from 'components/SearchBox/SearchBox';

function CollectionPage() {
  const packs = useSelector((state) => state.collections.packs); // to get stuff from state
  // const dispatch = useDispatch(); // to dispatch actions

  return (
    <section>
      <header>
        <h2>Collections</h2>
        <button type="button">Edit icon</button>
      </header>
      <PackageList packs={packs} />
    </section>
  );
}

export default CollectionPage;
