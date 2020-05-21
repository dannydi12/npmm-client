import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Spinner from 'react-spinkit';
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
      <main className="packageDetails">
        {packageInfo.loading === 'pending' && (
          <Spinner
            className="spinner"
            fadeIn="none"
            name="folding-cube"
            color="#c74848"
          />
        )}
        {packageInfo.loading === 'idle' && (
          <>
            <header>
              <h2>{metadata.name}'s README</h2>
            </header>
            <ReactMarkdown source={metadata.readme} />
            <section className="metadata">
              <p>
                Homepage @
                <br />
                <a href={metadata.links.homepage} target="_blank">
                  {metadata.links.homepage}
                </a>
              </p>
              <p>
                Repo @
                <br />
                {metadata.repository.url}
              </p>
              <p>License {metadata.license}</p>
              <p>Version {metadata.version}</p>
            </section>
          </>
        )}
      </main>
    </ErrorBoundary>
  );
}

export default PackagePage;
