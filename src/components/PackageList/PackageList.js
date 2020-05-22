import React from 'react';
import PropTypes from 'prop-types';
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

PackageList.propTypes = {
  packs: PropTypes.arrayOf(
    PropTypes.shape({
      pack: PropTypes.shape({
        id: PropTypes.number,
        package: PropTypes.shape({
          description: PropTypes.string,
          name: PropTypes.string.isRequired,
          version: PropTypes.string.isRequired,
          links: PropTypes.shape({
            npm: PropTypes.string.isRequired,
          }),
        }),
        score: PropTypes.shape({
          final: PropTypes.number.isRequired,
        }).isRequired,
      }),
    })
  ).isRequired,
};

export default PackageList;
