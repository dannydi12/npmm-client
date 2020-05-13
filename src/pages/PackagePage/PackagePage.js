import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PackageList from '../../components/PackageList/PackageList';
// import {all the reducers/actions} from './sliceFile.js';
import './PackagePage.css';

function PackagePage() {
  // const collection = useSelector((state) => state.currentCollectionInfo); // to get stuff from state
  // const dispatch = useDispatch();
  // const { packageName } = useParams();

  // useEffect(() => {
  //   dispatch(fetchCollectionInfo(id));
  // }, [id]);

  return (
    <section>
      <header>
        <h2>Collection Name TBD</h2>
        <button type="button">Edit icon</button>
      </header>
    </section>
  );
}

export default PackagePage;
