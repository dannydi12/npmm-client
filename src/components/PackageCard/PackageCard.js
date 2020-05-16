import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addPackage } from '../../redux/CurrentCollectionInfoSlice';
// import {all the reducers/actions} from './sliceFile.js';
// import styles from './example.css';

// Use absolute imports like this for components!
// import SearchBox from 'components/SearchBox/SearchBox';

function PackageCard(props) {
  // const varName = useSelector((state) => state.specific.thing.i.want); // to get stuff from state
  const dispatch = useDispatch(); // to dispatch actions

  const collectionList = useSelector(
    (state) => state.collectionList,
    () => true
  );

  const addToFavorites = (name) => {
    const favorites = collectionList.collections.find(
      (collection) => collection.collection_name === 'Favorites'
    );
    dispatch(addPackage({ name, collectionId: favorites.id }));
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
        <button type="button">Three dots</button>
      </header>

      <p>{props.pack.package.description}</p>

      <div className="package-bottom">
        <a href={props.pack.package.links.npm}>NPM logo</a>
        <div className="package-bottom-wrapper">
          <button
            type="button"
            onClick={() => addToFavorites(props.pack.package.name)}
          >
            STAR
          </button>
          <p>{Math.floor(props.pack.score.final * 100)}</p>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
