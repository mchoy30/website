import React from 'react';
import Iframe from 'react-iframe'
import phone from '../assets/phone.png'



export default ()=>{
  return(
    <div style={{display:'flex',flexDirection:'column' }}>
      <img src={phone} alt="phone" style={{position:'absolute',zIndex:'1',justifyContent:'flex-end', right:'5px', height:'850px',width:'auto'}}/>
      <div style={{zIndex:'2',margin:'0px',padding:'0px',display:'flex', position:'relative', top:'132px',right:'270px', justifyContent:'flex-end',flexDirection:'row' }}>
          <Iframe
            url="https://kat-mac-react.herokuapp.com"
            width="320px"
            height="565px"
            display="initial"
            overflow="hidden"
            frameborder="0"
            styles={{borderStyle:'1px solid red',}}
            />
        </div>
    </div>
  )
}