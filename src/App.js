import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LandingPage from './pages/LandingPage/LandingPage';
import CollectionPage from './pages/CollectionPage/CollectionPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './components/SignupForm/SignupForm';
import SearchResultPage from './pages/SearchResultPage/SearchResultPage';
import NotFound from './pages/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import PackagePage from './pages/PackagePage/PackagePage';
import { getCollections } from './redux/CollectionListSlice';
import TokenService from './services/token-service';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (TokenService.hasAuthToken()) {
      dispatch(getCollections());
    }
  }, []);

  return (
    <div className="app">
      <NavBar />
      <main className="appMain">
        <Switch>
          <ErrorBoundary>
            <Route exact path="/collection/:id" component={CollectionPage} />
            <Route exact path="/package/:packageName" component={PackagePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/search" component={SearchResultPage} />
            <Route exact path="/" component={LandingPage} />
          </ErrorBoundary>
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}
export default App;
