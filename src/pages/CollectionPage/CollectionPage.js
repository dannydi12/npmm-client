import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import PackageList from '../../components/PackageList/PackageList';
import { fetchCollectionInfo } from '../../redux/CurrentCollectionInfoSlice';
import {
  updateCollection,
  deleteCollection,
} from '../../redux/CollectionListSlice';
import ErrorBoundary from '../../ErrorBoundary';

function CollectionPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const parsed = queryString.parse(location.search);

  const [isEditing, setIsEditing] = useState(!!parsed.edit);
  const [collectionName, setCollectionName] = useState({
    touched: false,
    value: '',
  });

  const collection = useSelector((state) => state.currentCollectionInfo); // to get stuff from state

  useEffect(() => {
    setIsEditing(!!parsed.edit);
  }, [parsed.edit]);

  useEffect(() => {
    dispatch(fetchCollectionInfo(id));
  }, [id]);

  useEffect(() => {
    if (collection.loading === 'idle') {
      setCollectionName({
        touched: false,
        value: collection.name,
      });
    }
  }, [collection.loading]);

  const saveChange = (e) => {
    e.preventDefault();
    setIsEditing(false);
    dispatch(updateCollection({ id, name: e.target.collectionName.value }));
  };

  const handleInput = (e) => {
    setCollectionName({ touched: true, value: e.target.value });
  };

  const handleDelete = () => {
    history.push('/');
    dispatch(deleteCollection(id));
  };

  const validateInput = () => {
    if (collectionName.value.length > 20) {
      return 'That collection name is too long';
    }
    if (collectionName.value.length < 1) {
      return 'That collection name is too short';
    }
    return false;
  };

  return (
    <ErrorBoundary>
      <section>
        {collection && (
          <header>
            {!isEditing && (
              <>
                <h2>{collectionName.value}</h2>
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
                    defaultValue={collectionName.value}
                    onChange={handleInput}
                  />
                  {collectionName.touched && <p>{validateInput()}</p>}
                  <button type="button" onClick={handleDelete}>
                    Delete
                  </button>
                  <button type="submit" disabled={validateInput()}>
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
    </ErrorBoundary>
  );
}

export default CollectionPage;
