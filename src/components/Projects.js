import React from 'react';
import Phone from './Phone';
import '../Projects.css';
export default () =>{

  const style={
    marginBottom:'50px',
    color:'#212121',
  }

  return(
      <div style={{backgroundColor:'#03A9F4',position:'relative',height:'100vh', display:'flex', flexDirection:'column',fontFamily:'Segoe UI',}}>

          <div className="slide-in-right"  style={{ top:'0px', zIndex:'2'}}>
            <Phone />
          </div>
          <div className="slide-in-bottom" style={{width:'700px',marginTop:'50px',marginBottom:'80px', zIndex:'3', position:'absolute', left:'180px', top:'20px'}}>
              <div style={style}>
                <h1>Current Project<span style={{color:'#FFEB3B', fontSize:'12'}}> .</span></h1>
                <p>The List is a list app for keeping track of my friend Kat and I have plans that we want to do but together so we would always say we would” Add it to the list!”. This was a project I decided to do to help me learn the React JavaScript framework. Along with helping me learn React I have started to learn about other technologies that I had not used before such as Node.JS with Express and learn how to use MongoDb. The current version of this app is hosted on Heroku with future plans and projects in store!</p>
              </div>

              <div style={style}>
                <h1>Features</h1>
                <p>Designed with using React and material Ui and using React Hooks. This app has functionality for Create Read Update and Delete actions connected to MongoDb through GET, POST, DELETE requests hosted on Heroku to be able to be used on your phone ensuring responsiveness for mobile devices.</p>
              </div>

              <div style={style}>
                <h1>Future Updates</h1>
                <p>There are quite a few features and upgrades I am planning on doing with this project. One of the bigger things I will be adding is user authentication. Unauthorized user will no longer be able to mess with the data (If that does happen hopefully it kick my butt into gear!). I am also looking to implement an UPDATE operation with a nice User Interface. There are also some minor aesthetic design considerations that I am looking to implement such as alternating list item colors using the nth-child and much more to come!  </p>
              </div>
          </div>


      </div>
  )

}