import React from 'react';
import Iframe from 'react-iframe'
import phone from '../assets/phone.png';
import './Phone.css';
export default ()=>{
  return(

      <div
        style={{display:'inline-block',flexDirection:'column',}}
        onMouseEnter={() => {
          console.log('enter')
        }}

      >
        <img src={phone} alt="phone" style={{zIndex:'1',height:'800px',}}/>
        <div className="holds-the-iframe" style={{zIndex:'2',marginLeft:'45px',position:'absolute', left:'200px',top:'105px',padding:'0px',marginBottom:'0',display:'inline-block',}}>
            <Iframe
              url="https://kat-mac-react.herokuapp.com"
              width="305px"
              height="555px"
              display="initial"
              />
          </div>
      </div>
  )
}