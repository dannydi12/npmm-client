import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAllowScroll } from '../../redux/MenuScrollSlice';
import showArrow from '../../images/option-arrow.svg';

function NavCollections() {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collectionList.collections);
  const allowScroll = useSelector((state) => state.menuScroll.allowScroll);

  const [showMore, setShowMore] = useState(false);

  const links = collections.map((collection) => (
    <NavLink
      key={collection.collection_name}
      to={`/collection/${collection.id}`}
      className="collectionMenuLink"
    >
      {collection.collection_name}
    </NavLink>
  ));

  return (
    <>
      {links.slice(0, 5)}
      {links.length > 5 && showMore === false ? (
        <button
          type="button"
          className="showMore"
          onClick={() => {
            setShowMore(!showMore);
            dispatch(setAllowScroll(true));
          }}
        >
          Show more
        </button>
      ) : null}
      {showMore && links.slice(5)}
    </>
  );
}

export default NavCollections;
