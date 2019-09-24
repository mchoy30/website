import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import createBrowserHistory from 'history/createBrowserHistory';
import {Router, Switch, Route} from 'react-router-dom';




ReactDOM.render(
  <Router history={createBrowserHistory()}>

    <Switch>
      <Route exact path ='/' render={()=><Header><App /></Header>} />
    </Switch>
  </Router>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
