import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LandingPage from './pages/LandingPage/LandingPage';
import CollectionPage from './pages/CollectionPage/CollectionPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SearchResultPage from './pages/SearchResultPage/SearchResultPage';
import NotFound from './pages/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import { fetchPackages } from './pages/CollectionPage/CollectionPageSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPackages('moment')); // will eventually be fetching collections
  }, []);

  return (
    <div className="app">
      <Route path="/" component={NavBar} />
      <main className="appMain">
        <Switch>
          <Route
            exact
            path="/collection/:collectionId"
            component={CollectionPage}
          />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/search" component={SearchResultPage} />
          <Route exact path="/" component={LandingPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}
export default App;
