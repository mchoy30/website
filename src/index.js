import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './components/Projects';
import Header from './components/Header';
import Resume from './components/Resume';
import { createBrowserHistory } from "history";
import {Router, Switch, Route, HashRouter} from 'react-router-dom';
import About from './components/About';
import UseScreeenSize from './Hooks/UseScreenSize';
import {ScreenProvider} from './Context/ScreenContext';
import useScreenSize from './Hooks/UseScreenSize';
import Footer from './components/Footer';
const Website = ()=>{
 const [screenSize] = useScreenSize();
 return(

  <ScreenProvider value={screenSize}>
      <HashRouter basename='/' history={createBrowserHistory()}>


      <Header />
          <div style={{position:'absolute', top:'50px', backgroundColor:'#03A9F4', minHeight:'100vh' }}>

            <Switch>
              <Route exact path ='/' render={()=><About />} />
              <Route path ='/resume' render={()=><Resume />} />
              <Route path ='/projects' render={()=><Projects />} />
            </Switch>
            <Footer />
          </div>

        </HashRouter>

    </ScreenProvider>

 )
}

ReactDOM.render(
   <Website/>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
