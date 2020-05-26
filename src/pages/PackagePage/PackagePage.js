import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Spinner from 'react-spinkit';
import { fetchPackageInfo } from '../../redux/PackageInfoSlice';
import ErrorBoundary from '../../ErrorBoundary';
import './PackagePage.css';
import npmLogo from '../../images/logo-npm.svg';

function PackagePage() {
  const packageInfo = useSelector((state) => state.packageInfo);
  const dispatch = useDispatch();
  const { packageName } = useParams();

  useEffect(() => {
    // get the package data everytime the package name changes
    dispatch(fetchPackageInfo(packageName));
  }, [packageName]);

  const metadata =
    packageInfo.loading === 'idle' ? packageInfo.data.collected.metadata : null;

  const tagList = () =>
    Object.values(metadata.keywords).map((tag) => (
      <Link to={`/search?q=${tag}`} className="tagLink" key={tag}>
        {tag}
      </Link>
    ));

  return (
    <ErrorBoundary>
      <main className="packageDetails">
        {packageInfo.loading === 'pending' && (
          <Spinner
            className="spinner"
            fadeIn="none"
            name="folding-cube"
            color="#C4504B"
          />
        )}
        {packageInfo.loading === 'idle' && (
          <>
            <section className="metadataHeader">
              <h2 className="detailsTitle">{metadata.name}</h2>
              <a
                href={metadata.links.npm}
                className="npmPackageLink tooltipLeftContainer"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={npmLogo} alt="npm logo" className="npmLinkLogo" />
                <div className="detailsTooltipLeft tooltipLeft">
                  <span className="tooltiptext">View package on npm</span>
                </div>
              </a>
              <div className="detailsScoreContainer">
                <div className="tooltipLeftContainer">
                  <div className="npmTooltipLeft tooltipLeft">
                    <span className="tooltiptext">npm score</span>
                  </div>
                </div>
                <div className="scoreNumberContainer">
                  <p className="detailsScore">
                    {Math.floor(packageInfo.data.score.final * 100)}
                  </p>
                </div>
              </div>
              <p className="packageDescription">{metadata.description}</p>
              <h4 className="metadataTitle">Homepage:</h4>
              <p className="metadataContent">
                <a
                  href={metadata.links.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detailsLink"
                >
                  {metadata.links.homepage}
                </a>
              </p>
              <h4 className="metadataTitle">Github Repository:</h4>
              <p className="metadataContent">
                <a
                  href={metadata.repository.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detailsLink"
                >
                  {metadata.repository.url}
                </a>
              </p>
              <h4 className="metadataTitle">License:</h4>
              <p className="metadataContent">{metadata.license}</p>
              <h4 className="metadataTitle">Version:</h4>
              <p className="metadataContent">{metadata.version}</p>
              <h4 className="metadataTitle">Tags:</h4>
              <p className="packageTags">
                {metadata.keywords ? tagList() : null}
              </p>
            </section>
            {metadata.readme ? (
              <>
                <h2 className="readmeTitle">{metadata.name}'s Readme:</h2>
                <div className="markdownContainer">
                  <ReactMarkdown source={metadata.readme} />
                </div>
              </>
            ) : (
              <>
                <h4 className="metadataTitle">NOTE: No Readme available</h4>
                <p className="metadataContent">
                  For additional information, please{' '}
                  <a
                    href={metadata.links.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detailsLink"
                  >
                    click here
                  </a>{' '}
                  to be directed to the npm page.
                </p>
              </>
            )}
          </>
        )}
      </main>
    </ErrorBoundary>
  );
}

export default PackagePage;
