import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PackageList from '../../components/PackageList/PackageList';
// import {all the reducers/actions} from './sliceFile.js';
// import styles from './example.css';

// Use absolute imports like this for components!
// import SearchBox from 'components/SearchBox/SearchBox';

function CollectionPage() {
  const collection = useSelector((state) => state.currentCollection); // to get stuff from state
  // const dispatch = useDispatch(); // to dispatch actions

  return (
    <section>
      <header>
        <h2>Collection Name TBD</h2>
        <button type="button">Edit icon</button>
      </header>
      {collection.loading === 'idle' && (
        <PackageList packs={collection.packages} />
      )}
      {collection.loading === 'pending' && <p>Loading...</p>}
    </section>
  );
}

export default CollectionPage;
