import React from 'react';
import {NavLink} from 'react-router-dom';
import Hover from  '../NavLink.css';
const Header = ({children}) => {

  const style = {
    display: 'flex',
    position:'flex-row',
    margin:'20px',
    marginBottom:'20px',
    padding:'10px',
  };

  return(
    <div style={{ height:'20px', width:'100vw'}}>
      <div style={{display:'flex', flexDirection: 'row',justifyContent: 'flex-end',backgroundColor:'#0288D1'}}>
        <h3 style={style}><NavLink activeStyle={Hover} to='/'>About</NavLink></h3>
        <h3 style={style}><NavLink style={Hover} to='/resume'>Resume</NavLink></h3>
        <h3 style={style}><NavLink style={Hover} to='/projects'>Projects</NavLink></h3>
      </div>
      {children}
    </div>
  )

}

export default Header;