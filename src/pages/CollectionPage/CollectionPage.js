import { Textfit } from 'react-textfit';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import Spinner from 'react-spinkit';
import queryString from 'query-string';
import PackageList from '../../components/PackageList/PackageList';
import Modal from '../../components/Modal/Modal';
import { fetchCollectionInfo } from '../../redux/CurrentCollectionInfoSlice';
import {
  updateCollection,
  deleteCollection,
} from '../../redux/CollectionListSlice';
import ErrorBoundary from '../../ErrorBoundary';
import EditPencil from '../../images/edit-pencil.svg';
import SaveButton from '../../images/edit-save-white.svg';
import TrashCan from '../../images/trash-black.svg';
import Empty from '../../images/empty-collection.svg';
import './CollectionPage.css';

function CollectionPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const parsed = queryString.parse(location.search);

  const collection = useSelector((state) => state.currentCollectionInfo); // to get stuff from state
  const collectionList = useSelector(
    (state) => state.collectionList.collections
  );

  const [isEditing, setIsEditing] = useState(!!parsed.edit);
  const [showModal, setShowModal] = useState(false);
  const [collectionName, setCollectionName] = useState({
    touched: false,
    value: collection.name || '',
  });

  useEffect(() => {
    setIsEditing(!!parsed.edit);
  }, [parsed.edit]);

  useEffect(() => {
    setIsEditing(false || !!parsed.edit);
    dispatch(fetchCollectionInfo({ id }));
  }, [id]);

  useEffect(() => {
    if (collection.loading === 'idle') {
      setCollectionName({
        touched: false,
        value: collection.name,
      });
    }
  }, [collection.loading]);

  const loadMore = () => {
    if (collection.loading === 'idle' && collection.packages.length) {
      dispatch(
        fetchCollectionInfo({
          id,
          offset: collection.packages.length,
        })
      );
    }
  };

  const saveChange = (e) => {
    e.preventDefault();
    setIsEditing(false);
    dispatch(updateCollection({ id, name: e.target.collectionName.value }));
  };

  const handleInput = (e) => {
    setCollectionName({ touched: true, value: e.target.value });
  };

  const validateInput = () => {
    const foundCollection = collectionList.find((collectionElement) => {
      return collectionElement.collection_name === collectionName.value;
    });

    if (collectionName.value.length > 30) {
      return 'That collection name is too long';
    }
    if (collectionName.value.length < 1) {
      return 'That collection name is too short';
    }
    if (foundCollection && foundCollection.id !== Number(id)) {
      return 'Collection names must be unique';
    }

    return false;
  };

  return (
    <ErrorBoundary>
      <section className="collectionPageContainer">
        {collection && (
          <header>
            <div className="collectionTitleContainer">
              {!isEditing && (
                <>
                  <h2 className="collectionTitle">
                    <Textfit
                      mode="single"
                      forceSingleModeWidth={false}
                      min={14}
                      max={28}
                    >
                      {collectionName.value}
                    </Textfit>
                  </h2>
                  {collectionName.value !== 'Favorites' && (
                    <button
                      className="collectionEditButton"
                      type="button"
                      onClick={() => setIsEditing(true)}
                    >
                      <img
                        alt="edit pencil"
                        src={EditPencil}
                        className="editPencil"
                      />
                    </button>
                  )}
                </>
              )}
              {isEditing && (
                <>
                  {showModal && (
                    <Modal
                      title="Delete Collection"
                      message="Are you sure you want to delete this collection?"
                      buttonText="Confirm"
                      imageClass="modalToilet"
                      clickHandler={() => {
                        history.push('/');
                        dispatch(deleteCollection(id));
                      }}
                      handleExit={() => setShowModal(false)}
                    />
                  )}
                  <form onSubmit={(e) => saveChange(e)} className="editCollect">
                    <input
                      name="collectionName"
                      type="text"
                      value={collectionName.value}
                      onChange={handleInput}
                      className="collectionTitle"
                      // eslint-disable-next-line jsx-a11y/no-autofocus
                      autoFocus
                    />
                    {collectionName.touched && <p>{validateInput()}</p>}
                    <button
                      className="collectionEditButton"
                      type="submit"
                      onClick={() => setIsEditing(true)}
                      disabled={validateInput()}
                    >
                      <img
                        alt="edit save"
                        src={SaveButton}
                        className="collectionTitleSave"
                      />
                    </button>
                  </form>
                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="collectionDelete"
                  >
                    <img
                      alt="delete button"
                      src={TrashCan}
                      className="collectionTrash"
                    />
                    Delete Collection
                  </button>
                </>
              )}
              <div className="collectionTitleBackground" />
            </div>
          </header>
        )}

        {(collection.loading === 'idle' || collection.packages.length > 0) && (
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={!collection.noMoreResults}
            threshold={1000}
          >
            <PackageList packs={collection.packages} />
          </InfiniteScroll>
        )}
        {collection.loading === 'idle' && collection.packages.length === 0 && (
          <div className="emptyContainer">
            <img
              alt="empty toilet paper roll"
              src={Empty}
              className="emptyImage"
            />
          </div>
        )}
        {collection.loading === 'pending' && (
          <Spinner
            className="spinner"
            fadeIn="none"
            name="folding-cube"
            color="#C4504B"
          />
        )}
      </section>
    </ErrorBoundary>
  );
}

export default CollectionPage;
