import React from 'react';
import {Route, Router} from 'react-router';
import createHistory from 'history/createHashHistory';

import test from '../example/shopping-cart/src/main';
import CommonUtil from './common/utils/common-util';
const history = createHistory();

export default class Routers extends React.Component {

  componentDidMount() {
    CommonUtil.getWindowObj().addEventListener('hashchange', () => {
      // this.props.currentAnimate('normal')
    });
  }

  render() {

    return (
      <Router history={history}>
        <Route render={({location}) => {
          return(
            <Route location={location} exact path="/" component={test} />
          );
        }}/>
      </Router>
    );
  }
}