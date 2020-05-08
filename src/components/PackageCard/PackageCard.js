import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import {all the reducers/actions} from './sliceFile.js';
// import styles from './example.css';

// Use absolute imports like this for components!
// import SearchBox from 'components/SearchBox/SearchBox';

//props.package.name
//props.package.description
//props.score.whatever


function PackageCard(props) {
  // const varName = useSelector((state) => state.specific.thing.i.want); // to get stuff from state
  // const dispatch = useDispatch(); // to dispatch actions
//   "detail": {
//     "quality": 0.8997328717888345,
//     "popularity": 0.943287782362179,
//     "maintenance": 0.9732809460371664
// }


  return (
    <div>
      <h1>{props.pack.name}</h1>
      <p>{props.pack.description}</p>
      <p>{props.score.detail.quality}</p>
      <p>{props.score.detail.popularity}</p>
      <p>{props.score.detail.maintenance}</p>
    </div>
  );
}

export default PackageCard;
