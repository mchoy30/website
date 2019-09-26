import React from 'react';
import {NavLink} from 'react-router-dom';
import Hover from  '../NavLink.css';
const Header = ({children}) => {

  const style = {
    margin:'20px',
    padding:'0px',
  };

  return(
    <div style={{position:'', height:'10px', width:'100vw', marginBottom:'20px',maxWidth:'100%'}}>
      <div style={{display:'flex', flexDirection:'row',justifyContent: 'flex-end',backgroundColor:'#0288D1'}}>
        <h3 style={style}><NavLink activeStyle={Hover} to='/'>About</NavLink></h3>
        <h3 style={style}><NavLink style={Hover} to='/resume'>Resume</NavLink></h3>
        <h3 style={style}><NavLink style={Hover} to='/projects'>Projects</NavLink></h3>
      </div>
      {children}
    </div>
  )

}

export default Header;