import React from 'react';
import PackageCard from '../PackageCard/PackageCard';

function PackageList(props) {
  const packs = props.packs.map((pack) => (
    <li key={pack.package.name}>
      <PackageCard pack={pack} />
    </li>
  ));

  return (
    <>{packs.length > 0 ? <ul>{packs}</ul> : <p>Nothing to see here...</p>}</>
  );
}

export default PackageList;
