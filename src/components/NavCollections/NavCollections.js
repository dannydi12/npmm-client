import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
// import styles from './example.css';

function NavCollections() {
  const collections = useSelector((state) => state.collectionList.collections);

  const [showMore, setShowMore] = useState({ showMore: false });

  const links = collections.map((collection) => (
    <NavLink
      key={collection.collection_name}
      to={`/collection/${collection.id}`}
    >
      {collection.collection_name}
    </NavLink>
  ));

  function showMoreHandler() {
    setShowMore(true);
  }

  return (
    <>
      {links.slice(0, 5)}
      {links.length > 5 ? (
        <button type="button" onClick={() => showMoreHandler()}>
          Show more
        </button>
      ) : null}
      {showMore && links.slice(4)}
    </>
  );
}

export default NavCollections;
