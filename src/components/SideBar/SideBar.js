import React from 'react';
import { useSelector } from 'react-redux';
import NavCollections from '../NavCollections/NavCollections';

function SideBar() {
  const loading = useSelector((state) => state.collectionList.loading);
  return <aside>{loading === 'idle' && <NavCollections />}</aside>;
}

export default SideBar;
