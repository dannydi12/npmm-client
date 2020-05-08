import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import {all the reducers/actions} from './sliceFile.js';
// import styles from './example.css';

// Use absolute imports like this for components!
// import SearchBox from 'components/SearchBox/SearchBox';

function PackageCard(props) {
  // const varName = useSelector((state) => state.specific.thing.i.want); // to get stuff from state
  // const dispatch = useDispatch(); // to dispatch actions

  return (
    <div>
      <header>
        <h2>{props.pack.package.name}</h2>
        <div>
          <p>{props.pack.score.detail.quality}</p>
          <p>{props.pack.score.detail.popularity}</p>
          <p>{props.pack.score.detail.maintenance}</p>
        </div>
      </header>

      <p>{props.pack.package.description}</p>
    </div>
  );
}

export default PackageCard;
