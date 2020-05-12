import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
// import styles from './example.css';

function NavCollections() {
  const collections = useSelector((state) => state.collections.packs);

  console.log('col', collections);

  const links = collections.map((collection) => (
    <NavLink key={collection.package.name} to="/">
      {collection.package.name}
    </NavLink>
  ));

  return <>{links}</>;
}

export default NavCollections;
