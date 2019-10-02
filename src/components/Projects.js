import React from 'react';
import Phone from './Phone';
import '../Projects.css';
export default () =>{

  const style={
    marginBottom:'50px',
    color:'#212121',
  }

  return(
      <div style={{backgroundColor:'#03A9F4',position:'relative',height:'100vh',display:'flex',fontFamily:'Segoe UI',overflow:'hidden',}}>


          <div className="slide-in-bottom" style={{width:'700px',paddingTop:'50px',marginBottom:'80px',paddingLeft:'200px', zIndex:'3', position:'flex', top:'20px', }}>
              <div style={style}>
                <h1>Current Project<span style={{color:'#FFEB3B', fontSize:'12'}}> .</span></h1>
                <p>"The list” is an app for keeping track of my friend and I’s plans that we want to do but together so we would always say we would ”Add it to the list!”. <br/>
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
            <div className="slide-in-right"  style={{zIndex:'2',disply:'flex',alignContent:'flex-start',  right:'200px',}}>
              <Phone />
            </div>
          </div>
      </div>
  )

}