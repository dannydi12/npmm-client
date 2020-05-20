import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
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
  const metadata =
    packageInfo.loading === 'idle' ? packageInfo.data.collected.metadata : null;
  return (
    <ErrorBoundary>
      <section>
        {packageInfo.loading === 'pending' && <p>Loading...</p>}
        {packageInfo.loading === 'idle' && (
          <>
            <header>
              <h2>{metadata.name}</h2>
              <button type="button">Edit icon</button>
            </header>
            <ReactMarkdown source={metadata.readme} />
            <aside>
              <div>
                Homepage @
                <a href={metadata.links.homepage} target="_blank">
                  {metadata.links.homepage}
                </a>
              </div>
              <div>Repo @ {metadata.repository.url}</div>
              <div>License {metadata.license}</div>
              <div>Version {metadata.version}</div>
            </aside>
          </>
        )}
      </section>
    </ErrorBoundary>
  );
}

export default PackagePage;
