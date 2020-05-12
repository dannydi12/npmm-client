import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
// import styles from './example.css';

function NavCollections() {
  const collections = useSelector((state) => state.collectionList.collections);

  const links = collections.map((collection) => (
    <NavLink
      key={collection.collection_name}
      to={`/collection/${collection.id}`}
    >
      {collection.collection_name}
    </NavLink>
  ));

  return <>{links}</>;
}

export default NavCollections;
