import React from 'react';
import Iframe from 'react-iframe'
import phone from '../assets/phone.png';
import './Phone.css';
export default ()=>{
  return(

      <div style={{display:'inline-block',flexDirection:'column',}}>
        <img src={phone} alt="phone" style={{zIndex:'1', width:'auto', height:'800px',}}/>
        <div className="holds-the-iframe" style={{zIndex:'2',marginLeft:'45px',position:'absolute', left:'200px',top:'105px',padding:'0px',marginBottom:'0',display:'inline-block',}}>
            <Iframe
              url="https://kat-mac-react.herokuapp.com"
              width="305px"
              height="555px"
              display="initial"
              loading={()=>{return(<div style={{position:'absolute',color:'red', display:'flex', top:'90px', right:'100px'}}><h2>Loading</h2></div>)}}
              />
          </div>
      </div>
  )
}