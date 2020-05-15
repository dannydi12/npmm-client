import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PackageList from '../../components/PackageList/PackageList';
import { fetchCollectionInfo } from '../../redux/CurrentCollectionInfoSlice';
import { updateCollection } from '../../redux/CollectionListSlice';
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

  const isLoaded = collection && collectionInfo;

  const [isEditing, setIsEditing] = useState(false);
  const [collectionName, setCollectionName] = useState({
    touched: false,
    value: '',
  });

  console.log(collection, collectionInfo);

  useEffect(() => {
    dispatch(fetchCollectionInfo(id));
  }, [id]);

  const saveChange = (e) => {
    e.preventDefault();
    setIsEditing(false);
    dispatch(updateCollection({ id, name: e.target.collectionName.value }));
  };

  const handleInput = (e) => {
    setCollectionName({ touched: true, value: e.target.value });
  };

  const validateInput = () => {
    if (collectionName.value.length > 20) {
      return 'That collection name is too long';
    }
    if (collectionName.value.length < 1) {
      return 'That collection name is too short';
    }
    return true;
  };

  return (
    <section>
      {isLoaded && (
        <header>
          {!isEditing && (
            <>
              <h2>{collectionInfo.collection_name}</h2>
              <button type="button" onClick={() => setIsEditing(true)}>
                Edit
              </button>
            </>
          )}
          {isEditing && (
            <>
              <form onSubmit={(e) => saveChange(e)}>
                <input
                  name="collectionName"
                  type="text"
                  defaultValue={collectionInfo.collection_name}
                  onChange={handleInput}
                />
                {collectionName.touched && <p>{validateInput()}</p>}
                <button type="submit" disabled={!validateInput}>
                  Done
                </button>
              </form>
            </>
          )}
        </header>
      )}

      {collection.loading === 'idle' && (
        <PackageList packs={collection.packages} />
      )}
      {collection.loading === 'pending' && <p>Loading...</p>}
    </section>
  );
}

export default CollectionPage;
