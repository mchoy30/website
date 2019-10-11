import React , {useState, useEffect, useContext} from 'react';
import ScreenContext from '../Context/ScreenContext';
import '../About.css';
import Titles from './Titles';
import Button from '@material-ui/core/Button';
import Showcase from './Showcase';

export default function(){

  const [showBio, setShowBio] = useState(false);
  const [option, setOption] = useState('more');

  const screenSize = useContext(ScreenContext);
  useEffect(()=>{
     showBio ? setOption('less'):setOption('more');
  },[showBio]);

  return(
    <div style={{display:'flex',justifyContent:'center', margin:0, padding:0,fontFamily:'Segoe UI',height:'100%', overflow:'auto', paddingBottom:'150px'}}>
        <div style={{display:'flex',flexDirection:'column'}}>
            <h1
                className="tracking-in-expand"
                style={{ fontFamily:'Segoe UI', fontSize:'3.5vw', color:'#fff', position:'relative', textAlign: screenSize.large ? 'center' : ''}}
            >
                Hello!
            </h1>

            <div style={{marginBottom:'100px',position:'relative',left:'5px', textAlign: screenSize.large ? 'center' : ''}}>
                <Titles />
            </div>

        <div style={{display:'flex', flexDirection:screenSize.large ? 'column' : 'row', }}>
            <div style={{position:'relative', display:'flex',alignSelf:screenSize.large ?'center' : 'flex-start',width:'50vw',borderLeft:'3px solid #FFEB3B', paddingLeft:'40px', flexWrap:'wrap', justifyContent:'flex-start', }}>
                    <h1 style={{color:'#fff'}}>Experience</h1>
                    <p>
                    I have experience in several languages through Red river and their coding projects such as a C# banking application that used a MVC framework as well as learning design patterns such as singleton and the observer pattern.<br/><br/>
                    Experience with PHP scripting for login authentication ensuring properly encrypted passwords and sanitization to mitigate SQL injection attacks. <br/><br/>
                    Experience with Ruby on Rails web framework building a full stack E-commerce website using PostgresSQL<br/><br/>
                    I believe some of the best ways to learn is by doing. I have decided to teach myself React and the more I learn the more I discover. Every time I learn discover more tools and ideas to use! <br/><br/>
                    Currently I am doing most of my learning through Udemy.com. I have Completed several courses through their website and have gained invaluable knowledge through their courses. I am working on completing my <a href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/" >next course</a> “Node.js, Express, MongoDB & More: The Complete Bootcamp 2019”.
                    </p>

                  <div style={{paddingTop:'40px',}}>
                      <h1 style={{color:'#fff'}}>About me!</h1>
                      {showBio ? <p>
                        I am a 24 year old Red River college graduate born and raised in Winnipeg Manitoba. I have tons of hobbies that I am passionate about. One of my biggest interests would have to be music. I have always been someone who will try to learn something by themselves through trial and error. At the age of 15 I started to learn how to play guitar to get girls . . . well that didn’t work but I still play guitar to this day! I have been recently learning more about musical theory to understand why the things I play work. I believe understanding why and how things work are essential to becoming great anything you want to pursue. Of course, music isn’t my only hobby. I am a huge fan of cooking and trying to make anything I cook taste amazing. One of my favorite books on the topic of cooking is “Salt, Fat, Acid, Heat” Written by Samin Nosrat. Samin teaches you how to cook with these four elements to transform any dish from okay to delicious! I have explored new foods and recipes because of this book which I am very grateful for as I love to try new things. A new thing I tried last year was try joining a Salsa dance team. I was lucky enough to be taught by the world champion bachata dancers Harold Rancano and Regan Hirose. After training for months our team ended up doing a live dance performance for a crowd of over 300 people! This was a huge accomplishment for me considering two years prior I didn’t know how to dance at all. This helped me realize that anything is possible with enough determination, effort, and practice. I try to remember this whenever I learn anything new. I’ve also come to realize through in life that failures along the way are not anything to be ashamed of but rather things to learn from. In the future I am going to discover more passions, learn new thing, and fail along the way. I hope some of you reading this will join me for the ride!
                      </p> : <p>I am a 24 year old Red River college graduate born and raised in Winnipeg Manitoba. I have tons of hobbies that I am passionate about. One of my biggest interests would have to be music. I have always been someone who will try to learn something by themselves through trial and error. At the age of 15 I started to learn how to play guitar to get girls . . .</p>}
                      <Button style={{display:'flex', alignItems:'center', color:"#FFEB3B",width:'100%', }}
                          onClick={()=>{setShowBio(!showBio)}}
                          className="Primary"
                      >
                          Show {option}
                      </Button>
                  </div>

            </div>
            <div style={{display:'flex',flexDirection:'column', alignItems:'center', paddingLeft:'40px',paddingTop: screenSize.large ? '40px' :''}}>
                    <h1 style={{fontSize:'38px', color:'#fff'}}>Courses I've completed!</h1>
                    <Showcase/><br/>

            </div>
         </div>

      </div>
    </div>
  )
}


