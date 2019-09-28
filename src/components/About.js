import React , {useState, useEffect} from 'react';
import '../About.css';
import Titles from './Titles';
import Button from '@material-ui/core/Button';
export default function(){

  const [showBio, setShowBio] = useState(false);
  const [option, setOption] = useState('more');

  useEffect(()=>{
    setOption('more');
    if(showBio) setOption('less');
  });

  return(
    <div style={{overflow:'auto',display:'flex',justifyContent:'center',backgroundColor:'#03A9F4', height:'100vh', width:'100vw',maxWidth:'100%',minHeight:'100%', margin:0, padding:0,fontFamily:'Segoe UI'}}>
        <div style={{display:'flex',flexDirection:'column',}}>
              <h1 className="tracking-in-expand" style={{ fontFamily:'Segoe UI', fontSize:'3.5vw', color:'#fff',alignSelf:'center'}}>Hello! I'm Mackenzie,</h1>


        <div style={{ alignItems:'flex-start',marginBottom:'100px',}}>
            <Titles />
        </div>


        <div style={{
                        position:'relative',
                        display:'flex',
                        alignSelf:'flex-end',
                        width:'30vw',
                        borderLeft:'3px solid #FFEB3B',
                        paddingLeft:'40px',
                        flexWrap:'wrap',
                        justifyContent:'flex-start',
                        right:'80px',

                      }}>
                <h1>Experience</h1>
                <p>
                I have experience in several languages through Red river and their coding projects such as a C# banking application that focused on learning design patterns such as singleton and the observer pattern. <br/>
                Experience with PHP scripting for login authentication ensuring properly encrypted passwords and sanitization to mitigate SQL injection attacks.
                Experience with Ruby on Rails web framework building a full stack E-commerce website using PostgresSQL<br/>
                I believe some of the best ways to learn is by doing. I haved decided to teach myself React and the more I learn the more I discover. Every time I learn discover more tools and ideas to use!
                </p>
        </div>
            <div style={{
                        display:'flex',
                        position:'relative',
                        flexDirection:'column',
                        alignItems:'flex-start',
                        width:'25vw',
                        left:'70px',
                        top:'100px'
                        }}>
              <h1>About me!</h1>
              <p>
                  {showBio ? <div style={{}}>
                    I am a 24 year old BIT graduate born I have tons of hobbies that I love! One of my biggest interests would have to be music. I have always been someone who will try to learn something by themselves through trial and error. At the age of 15 I started to learn how to play guitar to get girls . . . well that didn’t work but I still play guitar to this day and have been recently learning more about musical theory to understand why the things I play work. Another one of my big passions is cooking. I
                  </div> : <div>I am a 24 year old BIT graduate born I have tons of hobbies that I love! One of my biggest interests would have to be music.</div>}
              </p>
              <Button style={{display:'flex', alignItems:'center', color:"#FFEB3B"}} onClick={()=>{setShowBio(!showBio)}} className="Primary"> Show {option} </Button>
          </div>
    </div>
    </div>
  )
}


