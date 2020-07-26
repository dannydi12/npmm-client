import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import ReactGA from 'react-ga';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import {
  addPackage,
  deletePackage,
} from '../../redux/CurrentCollectionInfoSlice';
import './PackageCard.css';
import Modal from '../Modal/Modal';
import threeDot from '../../images/three-dot-black.svg';
import dotMenuX from '../../images/dot-menu-x.svg';
import trashCan from '../../images/trash-white.svg';
import favoriteStarEmpty from '../../images/favorite-empty-white.svg';
import favoriteStarFull from '../../images/favorite-full-white.svg';
import saveButton from '../../images/edit-save-red.svg';
import checkmarkButton from '../../images/edit-checkmark-red.svg';
import npmLogo from '../../images/logo-npm.svg';

function PackageCard(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const isInCollection = useRouteMatch('/collection');

  const [isFavorited, setIsFavorited] = useState(false);
  const [dotMenu, setDotMenu] = useState('Hidden');
  const [showModal, setShowModal] = useState(false);
  const [savedCollection, setSavedCollection] = useState(false);

  const collectionList = useSelector((state) => state.collectionList);

  const collectionOptions = collectionList.collections.map((item) => (
    <option key={item.id} value={item.id}>
      {item.collection_name}
    </option>
  ));

  const addToFavorites = (name) => {
    if (!collectionList.collections.length) {
      // if the user has no collections (not signed in), show the modal
      setShowModal(true);
    } else {
      const favorites = collectionList.collections.find(
        (collection) => collection.collection_name === 'Favorites'
      );
      dispatch(addPackage({ name, collectionId: favorites.id }));
      setIsFavorited(true);
      ReactGA.event({
        category: 'Editing',
        action: `Added ${name} package to favorites`,
      });
    }
  };

  const handleSelectionClick = () => {
    if (!collectionList.collections.length) {
      setShowModal(true);
    }
  };

  const addToCollection = (packageName, collection) => {
    dispatch(addPackage({ name: packageName, collectionId: collection }));
    ReactGA.event({
      category: 'Editing',
      action: `Added ${packageName} package to ${collection} collection`,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!collectionList.collections.length) {
      setShowModal(true);
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
      {showModal && (
        <Modal
          title="Please Login"
          message="You must be logged in to save packages."
          clickHandler={() => history.push('/login')}
          handleExit={() => setShowModal(false)}
          imageClass="modalAlert"
          buttonText="Login"
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
                  onClick={() => dispatch(deletePackage(props.pack.id))}
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
                {!isFavorited ? (
                  <img
                    src={favoriteStarEmpty}
                    alt="favorite star button"
                    className="favoriteStar"
                  />
                ) : (
                  <img
                    src={favoriteStarFull}
                    alt="favorite star button"
                    className="favoriteStar starSpin"
                  />
                )}
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
                aria-label="Pick Collection"
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
            <div className="tooltiptext">
              <h4 className="scoreTitle">npm score</h4>
              <p>
                <span className="defaultMedium">Q: </span>
                {Math.floor(props.pack.score.detail.quality * 100)}
                &nbsp; <span className="defaultMedium">P: </span>
                {Math.floor(props.pack.score.detail.popularity * 100)}
                &nbsp; <span className="defaultMedium">M: </span>
                {Math.floor(props.pack.score.detail.maintenance * 100)}
              </p>
            </div>
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

PackageCard.propTypes = {
  pack: PropTypes.shape({
    id: PropTypes.number,
    package: PropTypes.shape({
      description: PropTypes.string,
      name: PropTypes.string.isRequired,
      version: PropTypes.string.isRequired,
      links: PropTypes.shape({
        npm: PropTypes.string.isRequired,
      }),
    }),
    score: PropTypes.shape({
      final: PropTypes.number.isRequired,
      detail: PropTypes.shape({
        quality: PropTypes.number.isRequired,
        popularity: PropTypes.number.isRequired,
        maintenance: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PackageCard;
