import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { fetchPackageInfo } from '../../redux/PackageInfoSlice';
import ErrorBoundary from '../../ErrorBoundary';
import './PackagePage.css';

function PackagePage() {
  const packageInfo = useSelector((state) => state.packageInfo); // to get stuff from state
  const dispatch = useDispatch();
  const { packageName } = useParams();

  useEffect(() => {
    dispatch(fetchPackageInfo(packageName));
  }, [packageName]);

  return (
    <ErrorBoundary>
      <section>
        {packageInfo.loading === 'pending' && <p>Loading...</p>}
        {packageInfo.loading === 'idle' && (
          <>
            <header>
              <h2>{packageInfo.data.collected.metadata.name}</h2>
              <button type="button">Edit icon</button>
            </header>
            <ReactMarkdown
              source={packageInfo.data.collected.metadata.readme}
            />
          </>
        )}
      </section>
    </ErrorBoundary>
  );
}

export default PackagePage;
