import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store';
import Overview from './components/Overview';
import Fable from './components/Fable';

function Root() {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={Overview} />
        <Route path='/fable/(:fableId)' component={Fable} />
      </Router>
    </Provider>
 )
}

export default Root;
