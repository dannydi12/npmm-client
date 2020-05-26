import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LandingPage from './pages/LandingPage/LandingPage';
import CollectionPage from './pages/CollectionPage/CollectionPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import SearchResultPage from './pages/SearchResultPage/SearchResultPage';
import NotFound from './pages/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import PackagePage from './pages/PackagePage/PackagePage';
import Footer from './components/Footer/Footer';
import { getCollections } from './redux/CollectionListSlice';
import TokenService from './services/token-service';
import ErrorBoundary from './ErrorBoundary';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PrivateRoute from './components/Utilities/PrivateRoute';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // if logged in, get user collections on component mount
    if (TokenService.hasAuthToken()) {
      dispatch(getCollections());
    }
  }, []);

  return (
    <div className="app">
      <NavBar />
      <main className="appMain">
        <ErrorBoundary>
          <Switch>
            <PrivateRoute
              exact
              path="/collection/:id"
              component={CollectionPage}
            />
            <Route exact path="/package/:packageName" component={PackagePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/search" component={SearchResultPage} />
            <Route exact path="/" component={LandingPage} />
            <Route component={NotFound} />
          </Switch>
          <ScrollToTop />
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
export default App;
