import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import {
  addPackage,
  deletePackage,
} from '../../redux/CurrentCollectionInfoSlice';
import './PackageCard.css';
import threeDot from '../../images/three-dot-black.svg';
import dotMenuX from '../../images/dot-menu-x.svg';
import trashCan from '../../images/trash-white.svg';
import favoriteStar from '../../images/favorite-empty-white.svg';

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
        <div className="cardTitleContainer">
          <Link
            to={`/package/${encodeURIComponent(props.pack.package.name)}`}
            className="cardTitle"
          >
            {props.pack.package.name}
          </Link>
          <span className="packageVersion">({props.pack.package.version})</span>
        </div>
        <div className="dotMenuClosed">
          {!isMenuOpen && (
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="dotMenuButton"
            >
              <img
                src={threeDot}
                alt="three dot menu closed"
                className="threeDot"
              />
            </button>
          )}
        </div>
        <div
          className={`dotMenuOpen ${
            !isMenuOpen ? 'slideDotsOut' : 'slideDotsIn'
          }`}
        >
          <div className="three-dot-menu">
            <button
              type="button"
              onClick={deletePackage}
              className="trashCanButton"
            >
              <img
                src={trashCan}
                alt="delete button"
                className="trashCanImage"
              />
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="dotMenuButton"
            >
              <img
                src={dotMenuX}
                alt="three dot menu close button"
                className="dotMenuX"
              />
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
        </div>
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
