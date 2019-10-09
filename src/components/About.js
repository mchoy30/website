import React , {useState, useEffect, useContext} from 'react';

import '../About.css';
import Titles from './Titles';
import Button from '@material-ui/core/Button';
import Showcase from './Showcase';

export default function(){

  const [showBio, setShowBio] = useState(false);
  const [option, setOption] = useState('more');

  const useScreenSize = useContext()
  useEffect(()=>{
    // setOption('more');
    if(showBio) setOption('less');
  },[showBio]);

  return(
    <div style={{display:'flex',justifyContent:'center', margin:0, padding:0,fontFamily:'Segoe UI',height:'100%', overflow:'auto'}}>
        <div style={{display:'flex',flexDirection:'column',}}>
            <h1
                className="tracking-in-expand"
                style={{ fontFamily:'Segoe UI', fontSize:'3.5vw', color:'#fff', position:'relative'}}
            >
                Hello!
            </h1>

            <div style={{marginBottom:'100px',position:'relative',left:'5px', }}>
                <Titles />
            </div>

        <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{position:'relative', display:'flex',alignSelf:'flex-start',width:'50vw',borderLeft:'3px solid #FFEB3B', paddingLeft:'40px', flexWrap:'wrap', justifyContent:'flex-start', }}>
                    <h1>Experience</h1>
                    <p>
                        I have experience in several languages through Red river and their coding projects such as a C# banking application that used a MVC framwork as well as learning design patterns such as singleton and the observer pattern. <br/>
                        Experience with PHP scripting for login authentication ensuring properly encrypted passwords and sanitization to mitigate SQL injection attacks. <br/>
                        Experience with Ruby on Rails web framework building a full stack E-commerce website using PostgresSQL<br/>
                        I believe some of the best ways to learn is by doing. I haved decided to teach myself React and the more I learn the more I discover. Every time I learn discover more tools and ideas to use!
                    </p>

                  <div style={{paddingTop:'40px'}}>
                      <h1>About me!</h1>
                      {showBio ? <p>
                        I am a 24 year old BIT graduate born I have tons of hobbies that I love! One of my biggest interests would have to be music. I have always been someone who will try to learn something by themselves through trial and error. At the age of 15 I started to learn how to play guitar to get girls . . . well that didn’t work but I still play guitar to this day and have been recently learning more about musical theory to understand why the things I play work. I am always up to the challenge of learning new things
                      </p> : <p>I am a 24 year old BIT graduate born I have tons of hobbies that I love! One of my biggest interests would have to be music.</p>}
                      <Button style={{display:'flex', alignItems:'center', color:"#FFEB3B",width:'100%'}}
                          onClick={()=>{setShowBio(!showBio)}}
                          className="Primary"
                      >
                          Show {option}
                      </Button>
                  </div>

            </div>
            <div style={{display:'flex',flexDirection:'column', alignItems:'center', paddingLeft:'40px'}}>
                    <h1 style={{fontSize:'38px', color:'#fff'}}>Courses I've completed!</h1>
                    <Showcase/><br/>

            </div>
         </div>

      </div>
    </div>
  )
}


