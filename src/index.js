import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './components/Projects';
import Header from './components/Header';
import Resume from './components/Resume';
import { createBrowserHistory } from "history";
import {Router, Switch, Route, HashRouter} from 'react-router-dom';
import About from './components/About';


ReactDOM.render(
  <HashRouter basename='/' history={createBrowserHistory()}>

    <Switch>
      <Route exact path ='/' render={()=><Header><About /></Header>} />
      <Route path ='/resume' render={()=><Header><Resume /></Header>} />
      <Route path ='/projects' render={()=><Header><Projects /></Header>} />
    </Switch>
  </HashRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
