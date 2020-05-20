import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import {
  addPackage,
  deletePackage,
} from '../../redux/CurrentCollectionInfoSlice';
import './PackageCard.css';
import threeDotBlack from '../../images/three-dot-black.svg';
import threeDotWhite from '../../images/three-dot-white.svg';

function PackageCard(props) {
  const dispatch = useDispatch();
  const isInCollection = useRouteMatch('/collection');
  const [isFavorited, setIsFavorited] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCollections, setShowCollections] = useState(false);

  const collectionList = useSelector(
    (state) => state.collectionList,
    () => true
  );

  const collectionOptions = collectionList.collections.map((item) => (
    <option key={item.id} value={item.id}>
      {item.collection_name}
    </option>
  ));

  const addToFavorites = (name) => {
    const favorites = collectionList.collections.find(
      (collection) => collection.collection_name === 'Favorites'
    );
    dispatch(addPackage({ name, collectionId: favorites.id }));
    setIsFavorited(true);
  };

  const addToCollection = (packageName, collection) => {
    dispatch(addPackage({ name: packageName, collectionId: collection }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addToCollection(
      props.pack.package.name,
      event.target.collectionsList.value
    );
    setShowCollections(false);
  };

  return (
    <div className="cardContainer">
      <header>
        <div>
          <Link to={`/package/${encodeURIComponent(props.pack.package.name)}`}>
            <h2 className="cardTitle">{props.pack.package.name}</h2>
          </Link>
          <p>({props.pack.package.version})</p>
        </div>
        {!isMenuOpen && (
          <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img
              src={threeDotBlack}
              alt="three dot menu closed"
              className="threeDotBlack"
            />
            ;
          </button>
        )}
        {isMenuOpen && (
          <div className="three-dot-menu">
            <button type="button" onClick={deletePackage}>
              Trash
            </button>
            <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img
                src={threeDotWhite}
                alt="three dot menu open"
                className="threeDotWhite"
              />
              ;
            </button>
            <button
              type="button"
              onClick={() => addToFavorites(props.pack.package.name)}
            >
              Add to Favorites
            </button>
            {!showCollections && (
              <button
                type="button"
                onClick={() => setShowCollections(!showCollections)}
              >
                Add to Collection
              </button>
            )}
            {showCollections && (
              <>
                <form onSubmit={handleSubmit}>
                  <select name="collectionsList">{collectionOptions}</select>
                  <button type="submit">Add to Collection</button>
                </form>
              </>
            )}
          </div>
        )}
      </header>

      <p>{props.pack.package.description}</p>

      <div className="package-bottom">
        <a href={props.pack.package.links.npm}>NPM logo</a>
        <div className="package-bottom-wrapper">
          {isInCollection ? (
            <button
              type="button"
              onClick={() => dispatch(deletePackage(props.pack.id))}
            >
              delete
            </button>
          ) : (
            <button
              type="button"
              onClick={() => addToFavorites(props.pack.package.name)}
            >
              {isFavorited ? '★' : '☆'}
            </button>
          )}
          <p>{Math.floor(props.pack.score.final * 100)}</p>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
