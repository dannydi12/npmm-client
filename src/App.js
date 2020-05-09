import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import CollectionPage from './pages/CollectionPage/CollectionPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SearchResultPage from './pages/SearchResultPage/SearchResultPage';
import './App.css';
import SideBar from 'components/SideBar/SideBar';

function App() {
  return (
    <div>
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
    </div>
  );
}
export default App;
