import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
// import styles from './example.css';

function NavCollections() {
  const collections = useSelector((state) => state.collectionList.collections);

  const [showMore, setShowMore] = useState(false);

  const links = collections.map((collection) => (
    <NavLink
      key={collection.collection_name}
      to={`/collection/${collection.id}`}
    >
      {collection.collection_name}
    </NavLink>
  ));

  return (
    <>
      {links.slice(0, 5)}
      {links.length > 5 && showMore === false ? (
        <button type="button" onClick={() => setShowMore(!showMore)}>
          Show more
        </button>
      ) : null}
      {showMore && links.slice(5)}
    </>
  );
}

export default NavCollections;
