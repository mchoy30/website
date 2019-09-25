import React from 'react';
import '../About.css';
import Winnipeg from '../assets/Winnipeg2.png';

export default function(){
  return(
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'#03A9F4', height:'100vh', width:'100vw',margin:0, padding:0}}>
      <div style={{display:'flex',justifyContent:'center', backgroundColor:'#FFEB3B', borderRadius:'50%', height:'200px', width:'200px'}}>
        <h1 className="tracking-in-expand" style={{display:'flex',alignSelf:'center', fontFamily:'Segoe UI', fontSize:'20px', color:'#B3E5FC'}}>Hello! I'm Mackenzie</h1>
      </div>
    </div>
  )
}


