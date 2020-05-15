import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PackageList from '../../components/PackageList/PackageList';
import { fetchCollectionInfo } from '../../redux/CurrentCollectionInfoSlice';
// import {all the reducers/actions} from './sliceFile.js';
// import styles from './example.css';

// Use absolute imports like this for components!
// import SearchBox from 'components/SearchBox/SearchBox';

function CollectionPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const collection = useSelector((state) => state.currentCollectionInfo); // to get stuff from state
  const collectionInfo = useSelector((state) =>
    state.collectionList.collections.find((item) => item.id === Number(id))
  );

  const [isEditing, setIsEditing] = useState(false);
  const [collectionName, setCollectionName] = useState(
    collectionInfo.collection_name
  );

  console.log(collection, collectionInfo);

  useEffect(() => {
    dispatch(fetchCollectionInfo(id));
  }, [id]);

  return (
    <section>
      <header>
        <h2>{collectionInfo && collectionInfo.collection_name}</h2>
        {!isEditing && (
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        {isEditing && (
          <button type="button" onClick={() => setIsEditing(false)}>
            Done
          </button>
        )}
      </header>
      {collection.loading === 'idle' && (
        <PackageList packs={collection.packages} />
      )}
      {collection.loading === 'pending' && <p>Loading...</p>}
    </section>
  );
}

export default CollectionPage;
