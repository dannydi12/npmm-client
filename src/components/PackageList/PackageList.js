import React from 'react';
import PackageCard from '../PackageCard/PackageCard';
import Empty from '../../images/empty-collection.svg';

function PackageList(props) {
  const packs = props.packs.map((pack) => (
    <li key={pack.package.name}>
      <PackageCard pack={pack} />
    </li>
  ));

  return (
    <>
      {packs.length > 0 ? (
        <ul>{packs}</ul>
      ) : (
        <div className="emptyContainer">
          {' '}
          <img
            alt="empty toilet paper roll"
            src={Empty}
            className="emptyImage"
          />
        </div>
      )}
    </>
  );
}

export default PackageList;
