import React ,{useContext}from 'react';
import ScreenContext from '../Context/ScreenContext';
import {NavLink} from 'react-router-dom';
import Hover from  '../NavLink.css';
const Header = () => {
  const screenSize = useContext(ScreenContext);
  const style = {
    margin:'20px',
    padding:'0px',
    position:'relative',
    bottom:'8px',


  };

  return(
    <div style={{marginBottom:'0px', postition:'fixed'}}>

      <div style={{display:'flex', flexDirection:'row',justifyContent: 'flex-end',backgroundColor: screenSize.medium ? '#0288D1' : '#0288D1'}}>
        <div style={{display:'flex',color:'#fff',justifyContent: 'center', fontFamily:'Satisfy, cursive',width:'50%',position:'relative',right:'166px',}}>
          <h3 style={{fontSize:'30px',}}  > Mackenzie Choy</h3>
        </div>

        <h3 style={style}><NavLink activeStyle={Hover} to='/'>About</NavLink></h3>
        <h3 style={style}><NavLink activeStyle={Hover} to='/projects'>The List</NavLink></h3>
        <h3 style={style}><NavLink activeStyle={Hover} to='/resume'>Resume</NavLink></h3>
      </div>
    </div>
  )

}

export default Header;