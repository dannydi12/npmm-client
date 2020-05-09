import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
// import styles from './example.css';

function SearchResultPage() {
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  console.log(parsed);

  useEffect(() => {});

  return (
    <div>
      <p>stuff</p>
    </div>
  );
}

export default SearchResultPage;
