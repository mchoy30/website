import React, {useState, useEffect} from 'react';
import Iframe from 'react-iframe'
import phone from '../assets/phone.png';
import '../styles/Phone.css';
import '../styles/Icons.css'
import {DiReact, DiNodejsSmall, DiMongodb, DiHeroku } from "react-icons/di";
export default ()=>{

  const [text, setText] = useState('none');
  const [hidden, setHidden] = useState('false');
  useEffect(()=>{

    hidden ? setText('none') : setText('block');

  },[hidden])

  const style ={
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
    margin:'10px'
  }


  const AnimateIcons = () => {
    return(
        <div style={{position:'relative', width:'300px', bottom:'250px', display:`${text}`}}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', fontSize:'90px',position:'relative',height:'0px' }}>
              <div
                   className="wobble-hor-top"
                   style={style}
              >
                  <DiReact style={{color:'yellow'}} />
              </div>
              <div
                  style={style}
                  className="wobble-hor-bottom"
              >
                  <DiHeroku style={{color:'purple'}}/>
              </div>
              <div
                  style={style}
                  className="wobble-hor-bottom"
              >
                  <DiMongodb style={{color:'green'}}/>
              </div>
              <div
                  style={style}
                  className="wobble-hor-bottom"
              >
                  <DiNodejsSmall style={{color:'silver'}}/>
              </div>
            </div>
        </div>
      )
  }


  return(

      <div

        style={{display:'inline-block',flexDirection:'column'}}


      >
        <img src={phone} alt="phone" style={{zIndex:'1',height:'800px',}}/>
        <div
            onMouseEnter={() => {setHidden(false)}}
            className="holds-the-iframe"
            style={{zIndex:'2',marginLeft:'45px',position:'absolute', left:'200px',top:'105px',padding:'0px',marginBottom:'0',display:'inline-block'}}>
            <Iframe
              url="https://kat-mac-react.herokuapp.com"
              width="305px"
              height="555px"
              display="initial"
            />
        </div>
           {/* <AnimateIcons /> */}
      </div>
  )
}
