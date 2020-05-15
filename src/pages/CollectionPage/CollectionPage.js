import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PackageList from '../../components/PackageList/PackageList';
import { fetchCollectionInfo } from '../../redux/CurrentCollectionInfoSlice';
import ErrorBoundary from '../../ErrorBoundary';
// import {all the reducers/actions} from './sliceFile.js';
// import styles from './example.css';

// Use absolute imports like this for components!
// import SearchBox from 'components/SearchBox/SearchBox';

function CollectionPage() {
  const collection = useSelector((state) => state.currentCollectionInfo); // to get stuff from state
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCollectionInfo(id));
  }, [id]);

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default CollectionPage;
