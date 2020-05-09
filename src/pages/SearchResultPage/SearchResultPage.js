import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import PackageList from '../../components/PackageList/PackageList';
// import styles from './example.css';

function SearchResultPage() {
  const [packs, setPacks] = useState([]); // maybe use state slice instead
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  console.log(parsed);

  useEffect(() => {});

  return (
    <section>
      <PackageList packs={packs} />
    </section>
  );
}

export default SearchResultPage;
