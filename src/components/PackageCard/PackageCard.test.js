import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';
import PackageCard from './PackageCard';

const testProp = {
  package: {
    name: 'knex',
    description:
      'A batteries-included SQL query & schema builder for Postgres, MySQL and SQLite3 and the Browser',
    links: {
      npm: 'https://www.npmjs.com/package/knex',
      homepage: 'https://knexjs.org',
      repository: 'https://github.com/knex/knex',
      bugs: 'https://github.com/knex/knex/issues',
    },
  },
  score: {
    final: 0.7165129614793754,
    detail: {
      quality: 0.9143637686792493,
      popularity: 0.5967728501207639,
      maintenance: 0.6666666666666666,
    },
  },
};

test('renders PackageList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <PackageCard pack={testProp} />
      </BrowserRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
