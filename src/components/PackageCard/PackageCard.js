import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import {
  addPackage,
  deletePackage,
} from '../../redux/CurrentCollectionInfoSlice';
import './PackageCard.css';
import Modal from '../Modal/Modal';
import threeDot from '../../images/three-dot-black.svg';
import dotMenuX from '../../images/dot-menu-x.svg';
import trashCan from '../../images/trash-white.svg';
import favoriteStar from '../../images/favorite-empty-white.svg';
import optionArrow from '../../images/option-arrow.svg';

function PackageCard(props) {
  const dispatch = useDispatch();
  const isInCollection = useRouteMatch('/collection');
  const [isFavorited, setIsFavorited] = useState(false);
  const [dotMenu, setDotMenu] = useState('Hidden');
  const [showCollections, setShowCollections] = useState(false);
  const [isSignedIn, setIsSigned] = useState(true);

  const collectionList = useSelector((state) => state.collectionList);

  const collectionOptions = collectionList.collections.map((item) => (
    <option key={item.id} value={item.id}>
      {item.collection_name}
    </option>
  ));

  const addToFavorites = (name) => {
    if (!collectionList.collections.length) {
      setIsSigned(false);
    } else {
      const favorites = collectionList.collections.find(
        (collection) => collection.collection_name === 'Favorites'
      );
      dispatch(addPackage({ name, collectionId: favorites.id }));
      setIsFavorited(true);
    }
  };

  const addToCollection = (packageName, collection) => {
    dispatch(addPackage({ name: packageName, collectionId: collection }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!collectionList.collections.length) {
      setIsSigned(false);
    } else {
      addToCollection(
        props.pack.package.name,
        event.target.collectionsList.value
      );
      setShowCollections(false);
    }
  };

  return (
    <div className="cardContainer">
      {!isSignedIn && (
        <Modal
          title="Sign Up"
          message="Only losers don't sign up"
          clickHandler={() => {}}
          buttonText="Do it"
        />
      )}
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
          {(dotMenu === 'Closed' || dotMenu === 'Hidden') && (
            <button
              type="button"
              onClick={() => setDotMenu('Open')}
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
        <div className={`dotMenuOpen dotAnimation${dotMenu}`}>
          <div className="three-dot-menu">
            {isInCollection && (
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
            )}
            <button
              type="button"
              onClick={() => setDotMenu('Closed')}
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
              disabled={isFavorited}
              className="favoriteButton"
            >
              <img
                src={favoriteStar}
                alt="favorite star button"
                className={`favoriteStar ${isFavorited ? 'starSpin' : ''}`}
              />
              Add to Favorites
            </button>
            {!showCollections && (
              <button
                type="button"
                onClick={() => setShowCollections(!showCollections)}
                className="addCollectionButton"
              >
                <img
                  src={optionArrow}
                  alt="optionOpen"
                  className="optionArrow"
                />
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
