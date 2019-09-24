import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = ({children}) => {

  const style = {
    display: 'flex',
    position:'flex-row',
    margin:'20px',
    marginBottom:'0px',
    padding:'20px',
    color:'red'
  };

  const linkStyle = {
    textDecoration:'none',
    borderBottom:'3px solid white',
    color: "white",
    fontFamily: 'Segoe UI',
    aHover: 'blue'

  }


  return(
    <div >
      <div style={{display:'flex', flexDirection: 'row',justifyContent: 'flex-end',backgroundColor:'#0080ff', height:'10vh'}}>
        <h3 style={style}><NavLink style={linkStyle} to='/'>Home</NavLink></h3>
        <h3 style={style}><NavLink style={linkStyle} to='/resume'>Resume</NavLink></h3>
        <h3 style={style}><NavLink style={linkStyle} to='/projects'>Projects</NavLink></h3>
      </div>
      {children}
    </div>
  )

}

export default Header;