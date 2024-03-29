import React , {useContext} from 'react';
import Phone from './Phone';
import ScreenContext from '../Context/ScreenContext';


import '../styles/Projects.css';

export default () =>{
 const screenSize = useContext(ScreenContext);

  const style={
    marginBottom:'50px',
    color:'#212121',
  }



  return(
      <div style={{display:'flex',fontFamily:'Segoe UI',overflow:'hidden', }}>

      <div style={{ display:'flex',flexDirection: screenSize.large ? 'column' : 'row'}}>
          <div className="slide-in-bottom" style={{paddingTop:'70px',marginBottom:'80px',paddingLeft:screenSize.large ?  '100px': '200px', width:'80%', position:'flex', top:'20px', }}>
              <div style={style}>
                <h1>Current Project<span style={{color:'#FFEB3B', fontSize:'12'}}> .</span></h1>
                <p>"The list” is an app for keeping track of my friend and I’s plans that we want to do together. We would always say we would ”Add it to the list!”. <br/><br/>
                    I decided to use this as a learning opportunity for the React JavaScript framework. Along with helping me learn React, I have started to learn about other technologies such as Node.JS, Express and MongoDb. The current version of this app is hosted on Heroku with future plans and projects in store!
                </p>
              </div>

              <div style={style}>
                <h1>Features</h1>
                <p>Designed with using React and material Ui and using React Hooks. This app has functionality for Create Read and Delete actions connected to MongoDb using an Express server. GET, POST, DELETE requests through axios. Hosted on Heroku.<br/>

                </p>
              </div>

              <div style={style}>
                <h1>Future Updates</h1>
                <p>There are quite a few features and upgrades I am planning on doing with this project. One of the bigger things I will be adding is user authentication. Unauthorized user will no longer be able to mess with the data (If that does happen hopefully it kick my butt into gear!). I am also looking to implement an UPDATE operation with a nice User Interface. There are also some styling issues that I am looking to fix.  </p>
              </div>
          </div>

          <div style={{display:'flex', width:'40%'}}>
            <div className="slide-in-right"  style={{disply:'flex',alignContent:'flex-end',  right:'200px',}}>
              <Phone />
            </div>
          </div>
      </div>

      </div>
  )

}