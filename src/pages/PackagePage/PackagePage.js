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
  const packageInfo = useSelector((state) => state.packageInfo); // to get stuff from state
  const dispatch = useDispatch();
  const { packageName } = useParams();

  useEffect(() => {
    dispatch(fetchPackageInfo(packageName));
  }, [packageName]);
  const metadata =
    packageInfo.loading === 'idle' ? packageInfo.data.collected.metadata : null;

  const tagList = () =>
    Object.values(metadata.keywords).map((tag) => (
      <Link exact to={`/search?q=${tag}`} className="tagLink" key={tag}>
        {tag}
      </Link>
    ));

  console.log(metadata);
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
                >
                  {metadata.links.homepage}
                </a>
              </p>
              <h4 className="metadataTitle">github Repo:</h4>
              <p className="metadataContent">{metadata.repository.url}</p>
              <h4 className="metadataTitle">License:</h4>
              <p className="metadataContent">{metadata.license}</p>
              <h4 className="metadataTitle">Version:</h4>
              <p className="metadataContent">{metadata.version}</p>
              <h4 className="metadataTitle">Tags:</h4>
              <p className="packageTags">{tagList()}</p>
            </section>
            <h2 className="readmeTitle">{metadata.name}'s Readme:</h2>
            <div className="markdownContainer">
              <ReactMarkdown source={metadata.readme} />
            </div>
          </>
        )}
      </main>
    </ErrorBoundary>
  );
}

export default PackagePage;
