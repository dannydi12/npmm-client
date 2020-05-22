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
import saveButton from '../../images/edit-save-red.svg';
import checkmarkButton from '../../images/edit-checkmark-red.svg';
import npmLogo from '../../images/logo-npm.svg';

function PackageCard(props) {
  const dispatch = useDispatch();
  const isInCollection = useRouteMatch('/collection');
  const [isFavorited, setIsFavorited] = useState(false);
  const [dotMenu, setDotMenu] = useState('Hidden');
  const [isSignedIn, setIsSigned] = useState(true);
  const [savedCollection, setSavedCollection] = useState(false);

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

  const handleSelectionClick = () => {
    if (!collectionList.collections.length) {
      setIsSigned(false);
    }
  };

  // const handleSaveClick = () => {
  //   if (!collectionList.collections.length) {
  //     setIsSigned(false);
  //   } else {

  //   }
  // };

  const addToCollection = (packageName, collection) => {
    dispatch(addPackage({ name: packageName, collectionId: collection }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!collectionList.collections.length) {
      setIsSigned(false);
    } else {
      setSavedCollection(true);
      addToCollection(
        props.pack.package.name,
        event.target.collectionsList.value
      );
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
            <div className="trashCanContainer">
              {isInCollection && (
                <button
                  type="button"
                  onClick={deletePackage}
                  className="dotMenuItem"
                >
                  <div className="buttonImageContainer">
                    <img
                      src={trashCan}
                      alt="delete button"
                      className="trashCanImage"
                    />
                  </div>
                  <span className="dotMenuTitle">Delete</span>
                </button>
              )}
            </div>
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
              className="dotMenuItem"
            >
              <div className="buttonImageContainer">
                <img
                  src={favoriteStar}
                  alt="favorite star button"
                  className={`favoriteStar ${isFavorited ? 'starSpin' : ''}`}
                />
              </div>
              <span className="dotMenuTitle">Add to Favorites</span>
            </button>
            <form onSubmit={handleSubmit} className="dotMenuForm">
              <select
                name="collectionsList"
                className="collectionOption"
                onChange={() => setSavedCollection(false)}
                defaultValue="default"
                onClick={handleSelectionClick}
              >
                <option value="default" disabled>
                  Add to collection
                </option>
                {collectionOptions}
              </select>
              {!savedCollection ? (
                <button type="submit" className="dotSaveContainer">
                  <img
                    src={saveButton}
                    alt="save to collection button"
                    className="dotSave"
                  />
                </button>
              ) : (
                <div className="dotCheckmarkContainer">
                  <img
                    src={checkmarkButton}
                    alt="saved to collection"
                    className="dotSave"
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      </header>

      <p className="packageDescription">{props.pack.package.description}</p>
      <div className="packageBottom">
        <a
          href={props.pack.package.links.npm}
          className="npmContainer tooltipRightContainer"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={npmLogo} alt="npm logo" className="npmLinkLogo" />
          <div className="npmTooltipRight tooltipRight">
            <span className="tooltiptext">View package on npm</span>
          </div>
        </a>
        <div className="tooltipLeftContainer">
          <div className="npmTooltipLeft tooltipLeft">
            <span className="tooltiptext">npm score</span>
          </div>
        </div>
        <div className="scoreContainer">
          <p className="packageScore">
            {Math.floor(props.pack.score.final * 100)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
