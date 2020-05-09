import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LandingPage from './pages/LandingPage/LandingPage';
import CollectionPage from './pages/CollectionPage/CollectionPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SearchResultPage from './pages/SearchResultPage/SearchResultPage';
import { fetchPackages } from './pages/CollectionPage/CollectionPageSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPackages('moment')); // will eventually be fetching collections
  }, []);

  return (
    <main className="appMain">
      <Switch>
        <Route exact path="/collection/:collectionId">
          <CollectionPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/search">
          <SearchResultPage />
        </Route>

        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </main>
  );
}
export default App;
