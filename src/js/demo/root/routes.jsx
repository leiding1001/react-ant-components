import React from 'react';
import {
  Route,
  HashRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import Loadable from 'react-loadable';
import {Provider} from 'react-redux';
import configStore from './config-store.js';
import RootContainer from '../container/root-container.jsx';
import Feedback from '../../components/feedback';

import {OnApiErrorAction} from '../utils/tt-api-util';

const HomeContainer = Loadable({
  loader: () => import('../container/home-container.jsx'),
  loading: () => null
});

const store = configStore();

export default () => (
  <Provider store={store}>
    <Router>
      <RootContainer>
        <Switch>
          <Route path="/home" component={HomeContainer} />
          <Redirect exact path="/" to="/home" />
        </Switch>
        <Feedback onActions={OnApiErrorAction} />
      </RootContainer>
    </Router>
  </Provider>
);
