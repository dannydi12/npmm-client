import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-spinkit';
import InfiniteScroll from 'react-infinite-scroller';
import PackageList from '../../components/PackageList/PackageList';
import ErrorBoundary from '../../ErrorBoundary';
import { getPackages } from '../../redux/SearchResultsSlice';
import Empty from '../../images/empty-search.svg';
import './SearchResultPage.css';

function SearchResultPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const parsed = queryString.parse(location.search);

  const searchResults = useSelector((state) => state.searchResults);

  useEffect(() => {
    // run a search API fetch every time the search term changes
    dispatch(getPackages({ searchTerm: parsed.q }));
  }, [searchResults.searchTerm]);

  const loadMore = () => {
    // if the redux thunk resolved AND we have more than 0 packages, get more packages
    if (searchResults.packs.length && searchResults.loading === 'idle') {
      dispatch(
        getPackages({
          searchTerm: parsed.q,
          offset: searchResults.packs.length,
        })
      );
    }
  };

  return (
    <ErrorBoundary>
      <div className="searchContainer">
        <h2 className="searchTitle pageTitle">Search Results</h2>
        {(searchResults.loading === 'idle' ||
          searchResults.packs.length > 0) && (
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={!searchResults.noMoreResults}
            threshold={1000}
          >
            {searchResults.packs.length > 0 && (
              <>
                <p className="pageInstructions searchInstructions">
                  Click a package's name to view details.
                </p>
                <PackageList packs={searchResults.packs} />
              </>
            )}
          </InfiniteScroll>
        )}
        {searchResults.packs.length === 0 && searchResults.loading === 'idle' && (
          <div className="emptyContainer">
            <img
              alt="empty toilet paper roll"
              src={Empty}
              className="emptyImage"
            />
          </div>
        )}
        {searchResults.loading === 'pending' && (
          <Spinner className="spinner" name="folding-cube" color="#C4504B" />
        )}
      </div>
    </ErrorBoundary>
  );
}

export default SearchResultPage;
