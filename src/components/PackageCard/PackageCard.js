import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import {
  addPackage,
  deletePackage,
} from '../../redux/CurrentCollectionInfoSlice';

function PackageCard(props) {
  const dispatch = useDispatch();
  const isInCollection = useRouteMatch('/collection');
  const [isFavorited, setIsFavorited] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const collectionList = useSelector(
    (state) => state.collectionList,
    () => true
  );

  const addToFavorites = (name) => {
    const favorites = collectionList.collections.find(
      (collection) => collection.collection_name === 'Favorites'
    );
    dispatch(addPackage({ name, collectionId: favorites.id }));
    setIsFavorited(true);
  };

  // console.log('rendered');

  return (
    <div>
      <header>
        <div>
          <Link to={`/package/${encodeURIComponent(props.pack.package.name)}`}>
            <h2>{props.pack.package.name}</h2>
          </Link>
          <p>({props.pack.package.version})</p>
        </div>
        <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Three dots
        </button>
        {/* {this is where we conditionally render the threedotmenu component based on isMenuOpen} */}
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
